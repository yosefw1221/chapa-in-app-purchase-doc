export const head = [
  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: `/icons/favicon.png`,
    },
  ],
  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: `/icons/favicon.png`,
    },
  ],
  ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
  ["meta", { name: "application-name", content: "Chapa-In-App-Purchase" }],
  [
    "meta",
    { name: "apple-mobile-web-app-title", content: "Chapa-In-App-Purchase" },
  ],
  ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
  ["link", { rel: "apple-touch-icon", href: `/icons/favicon.png` }],
  [
    "link",
    {
      rel: "mask-icon",
      href: "/icons/favicon.png",
      color: "#3eaf7c",
    },
  ],
  ["meta", { name: "msapplication-TileColor", content: "#3eaf7c" }],
  ["meta", { name: "theme-color", content: "#3eaf7c" }],
];
