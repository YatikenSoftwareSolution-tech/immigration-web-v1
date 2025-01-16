import AppFooter from "@/components/AppFooter";
import AppNavigation from "@/components/AppNavigation";

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
          
        </body>
      </html>
    );
  }
  