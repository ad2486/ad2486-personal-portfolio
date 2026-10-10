import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

// Plex: an engineering-document voice that fits backend/infra work, instead of the create-next-app default.
export const fontSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const fontMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});
