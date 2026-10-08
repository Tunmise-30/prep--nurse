import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Prep Nurse — ND/HND Learning Companion",
    short_name: "Prep Nurse",
    description:
      "Learn, apply, practise and track progress for ND/HND nursing. Nigerian-focused, internationally informed.",
    start_url: "/",
    scope: "/",
    id: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#ffffff",
    theme_color: "#2f7a9a",
    categories: ["education", "medical"],
    lang: "en",
    dir: "ltr",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-192x192-maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-512x512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Practise questions",
        short_name: "Practise",
        url: "/practice",
        description: "Answer questions with full explanations",
      },
      {
        name: "Take a diagnostic",
        short_name: "Diagnostic",
        url: "/diagnostic",
        description: "Find your starting point",
      },
      {
        name: "Study plan",
        short_name: "Plan",
        url: "/plans",
        description: "Your day-by-day exam schedule",
      },
    ],
  };
}