import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navigation from "@/components/Navigation";
import MobileEnhancements from "@/components/MobileEnhancements";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import { Toaster } from "sonner";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <MobileEnhancements>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navigation />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Toaster 
              position="bottom-center" 
              richColors 
              closeButton 
              duration={3000}
            />
          </div>
        </MobileEnhancements>
      </Router>
    </ThemeProvider>
  );
}
