import AppNavigation from "@/components/custom/AppNavigation";
import AppFooter from "@/components/custom/AppFooter";
import "./globals.css";
import { AppProvider } from "@/contexts/AppContext";
import Sidenav from "@/components/custom/Sidenav";

export const metadata = {
  title: "Immigration Company ",
  description: "Professional immigration consulting services since 2010, Developer info- Ram Chandel.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/ImmigrationCompanyLogo.png" />
      </head>
      <body className="font-sans flex flex-col min-h-screen">
        <AppProvider>
          <header className="p-4">
            <AppNavigation />
            <Sidenav />
          </header>

          {/* Main Content */}
          <main className="flex-grow bg-white">{children}</main>

          {/* Footer */}
          <footer className="bg-dark text-white p-4 text-center">
            <AppFooter />
          </footer>
        </AppProvider>
      </body>
    </html>
  );
}
