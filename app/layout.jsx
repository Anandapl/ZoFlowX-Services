import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Zoho Analytics Dashboard Customization | ZoFlowX – Certified Zoho Partner",
  description:
    "ZoFlowX is an Authorized Zoho Partner specializing in Zoho Analytics dashboard customization. We build clear, beautiful dashboards your team will actually use.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
