import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vivida",
    short_name: "Vivida",
    description:
      "An application to help users improve self efficacy using subconscious-mind reprogramming techniques",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4f46e5",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: "/vivida-screenshot-desktop.png",
        sizes: "3016x1596",
        type: "image/png",
        form_factor: "wide",
        label: "Vivida Desktop",
      },
      {
        src: "/vivida-screenshot-mobile.png",
        sizes: "1012x1532",
        type: "image/png",
        label: "Vivida Mobile",
      },
    ],
  };
}
