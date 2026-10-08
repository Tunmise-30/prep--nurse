"use client";

import {
  readLocalJSON,
  useLocalJSON,
  writeLocalJSON,
} from "./local-store";

interface TodayStat {
  date: string;
  answered: number;
}

const NO_TODAY: TodayStat = { date: "", answered: 0 };

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

export function bumpToday(n: number): TodayStat {
  const current = readLocalJSON<TodayStat>("pn-today", NO_TODAY);
  const key = todayKey();
  const next =
    current.date === key
      ? { date: key, answered: current.answered + n }
      : { date: key, answered: n };
  writeLocalJSON("pn-today", next);
  return next;
}

export function useToday(): TodayStat {
  const today = useLocalJSON<TodayStat>("pn-today", NO_TODAY);
  return today.date === todayKey()
    ? today
    : { date: todayKey(), answered: 0 };
}
