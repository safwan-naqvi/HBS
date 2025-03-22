import localFont from "next/font/local";

// Merged Gilroy font with all weights
export const gilroy = localFont({
  src: [
    // Thin (100)
    {
      path: "../../public/fonts/Gilroy-Thin.woff2",
      weight: "100",
    },
    {
      path: "../../public/fonts/Gilroy-Thin.woff",
      weight: "100",
    },

    // Light (300)
    {
      path: "../../public/fonts/Gilroy-Light.woff2",
      weight: "300",
    },
    {
      path: "../../public/fonts/Gilroy-Light.woff",
      weight: "300",
    },

    // Regular (400)
    {
      path: "../../public/fonts/Gilroy-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/Gilroy-Regular.woff",
      weight: "400",
    },

    // Medium (500)
    {
      path: "../../public/fonts/Gilroy-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/Gilroy-Medium.woff",
      weight: "500",
    },

    // Semibold (600)
    {
      path: "../../public/fonts/Gilroy-Semibold.woff2",
      weight: "600",
    },
    {
      path: "../../public/fonts/Gilroy-Semibold.woff",
      weight: "600",
    },

    // Bold (700)
    {
      path: "../../public/fonts/Gilroy-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../public/fonts/Gilroy-Bold.woff",
      weight: "700",
    },

    // Extrabold (800)
    {
      path: "../../public/fonts/Gilroy-Extrabold.woff2",
      weight: "800",
    },
    {
      path: "../../public/fonts/Gilroy-Extrabold.woff",
      weight: "800",
    },

    // Black (900)
    {
      path: "../../public/fonts/Gilroy-Black.woff2",
      weight: "900",
    },
    {
      path: "../../public/fonts/Gilroy-Black.woff",
      weight: "900",
    },
  ],
  display: "swap",
  variable: "--font-gilroy",
});

// Other fonts remain the same
export const neueRegular = localFont({
  src: [
    {
      path: "../../public/fonts/Neue-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Neue-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-neue",
});

export const gellery = localFont({
  src: [
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--tp-ff-gallery",
});
