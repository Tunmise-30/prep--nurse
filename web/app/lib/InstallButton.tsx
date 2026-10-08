"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

let deferredPrompt: BeforeInstallPromptEvent | null = null;

// Browser-only facts, read without an effect so the server and client
// markup match, then hydrated by React.
const noop = () => () => {};

function isStandalone() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    (window.navigator as Navigator & { standalone?: boolean })
      .standalone === true
  );
}

function isIOSDevice() {
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) &&
    !("MSStream" in window)
  );
}

export default function InstallButton() {
  const [canInstall, setCanInstall] = useState(false);
  const installed = useSyncExternalStore(noop, isStandalone, () => false);
  const isIOS = useSyncExternalStore(noop, isIOSDevice, () => false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        /* offline support unavailable */
      });
    }

    const onPrompt = (e: Event) => {
      e.preventDefault();
      deferredPrompt = e as BeforeInstallPromptEvent;
      setCanInstall(true);
    };
    const onInstalled = () => {
      setCanInstall(false);
    };

    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  async function install() {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    setCanInstall(false);
  }

  if (installed) {
    return (
      <p className="text-xs opacity-60">
        Prep Nurse is installed on this device.
      </p>
    );
  }

  if (canInstall) {
    return (
      <button
        onClick={install}
        className="rounded-xl px-5 py-2.5 text-white"
        style={{ background: "var(--pn-coral)" }}
      >
        Install Prep Nurse
      </button>
    );
  }

  if (isIOS) {
    return (
      <p className="text-sm opacity-80">
        Install Prep Nurse: tap the{" "}
        <span role="img" aria-label="share icon">
          ⬆︎
        </span>{" "}
        Share button, then{" "}
        <strong>Add to Home Screen</strong>.
      </p>
    );
  }

  return null;
}