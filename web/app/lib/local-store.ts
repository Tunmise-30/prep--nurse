"use client";

import { useCallback, useSyncExternalStore } from "react";

type CacheEntry = { raw: string; value: unknown };
const cache = new Map<string, CacheEntry>();
const listeners = new Set<() => void>();

function parseRaw(raw: string): unknown {
  try {
    return JSON.parse(raw);
  } catch {
    return undefined;
  }
}

function getSnapshotValue<T>(key: string, fallback: T): T {
  let raw: string | null = null;
  try {
    raw = localStorage.getItem(key);
  } catch {
    return fallback;
  }
  if (raw == null) return fallback;
  const entry = cache.get(key);
  if (entry && entry.raw === raw) return entry.value as T;
  const parsed = parseRaw(raw);
  const next = { raw, value: parsed === undefined ? fallback : parsed };
  cache.set(key, next);
  return next.value as T;
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function emitChange() {
  listeners.forEach((cb) => cb());
}

export function readLocalJSON<T>(key: string, fallback: T): T {
  return getSnapshotValue(key, fallback);
}

export function writeLocalJSON(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    emitChange();
  } catch {
    /* private mode — ignore */
  }
}

export function useLocalJSON<T>(key: string, fallback: T): T {
  const getSnapshot = useCallback(() => getSnapshotValue(key, fallback), [
    key,
    fallback,
  ]);
  const getServerSnapshot = useCallback(() => fallback, [fallback]);
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
