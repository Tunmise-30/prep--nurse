import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.prepnurse.app",
  appName: "Prep Nurse",
  webDir: "public",
  // The app is served from the live Netlify deployment so the whole
  // product (including the server-side Paystack routes) behaves exactly
  // like the web/PWA version. The deployed service worker keeps the core
  // lessons and practice pages readable offline after the first visit.
  server: {
    androidScheme: "https",
    url: "https://ubiquitous-starlight-594033.netlify.app",
    cleartext: false,
  },
  android: {
    allowMixedContent: false,
  },
};

export default config;