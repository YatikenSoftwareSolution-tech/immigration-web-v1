import AppFooter from "@/components/custom/AppFooter";
import AppNavigation from "@/components/custom/AppNavigation";

export const metadata = {
    title: "Contact Us",
    description: "Get in touch with us.",
  };
  
  export default function Layout({ children }) {
    return (
      <html lang="en">
        <head>
          {/* Meta tags, title, and other head elements */}
        </head>
        <body className="font-sans bg-gray-50">
        <header className="bg-blue-600 text-white p-4">
          <AppNavigation/>
        </header>
          {/* Main Content */}
          <main className="flex-grow p-4">{children}</main>
          <footer className="bg-gray-800 text-white p-4 text-center">
          <AppFooter/>
            </footer>
        </body>
      </html>
    );
  }
  