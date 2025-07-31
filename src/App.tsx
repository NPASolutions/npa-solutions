import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import ExpertHelp from "./pages/ExpertHelp";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/expert-help" element={<ExpertHelp />} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 group"
        >
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border border-white/20 animate-pulse">
            <MessageCircle className="w-6 h-6 text-white fill-white" />
          </div>
          <div className="absolute -top-12 right-0 bg-slate-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Hey, Connect with us
          </div>
        </a>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
