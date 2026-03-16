import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Mon Portfolio — Dev",
  description: "Développeur web passionné par les interfaces modernes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}