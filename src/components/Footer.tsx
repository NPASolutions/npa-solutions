import { Mail, Phone, MapPin, Clock, Linkedin, Instagram, Youtube, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-20 relative z-10 overflow-hidden" style={{ backgroundColor: 'rgb(15, 23, 42)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2 lg:col-span-2">
            <div className="font-bold text-2xl md:text-3xl mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              NPA Solutions
            </div>
            <p className="text-slate-300 leading-relaxed mb-6 text-base md:text-lg max-w-lg">
              India's premier legal consultancy specializing in financial distress resolution. We provide strategic legal support for MSMEs, borrowers & entrepreneurs navigating complex financial situations.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <a href="https://linkedin.com/company/npa-solutions" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 cursor-pointer group transform hover:scale-110 shadow-lg hover:shadow-xl">
                <Linkedin size={18} className="text-slate-300 group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="https://instagram.com/npasolutions" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl flex items-center justify-center hover:from-pink-500 hover:to-purple-600 transition-all duration-300 cursor-pointer group transform hover:scale-110 shadow-lg hover:shadow-xl">
                <Instagram size={18} className="text-slate-300 group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="https://youtube.com/@npasolutions" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl flex items-center justify-center hover:from-red-500 hover:to-red-600 transition-all duration-300 cursor-pointer group transform hover:scale-110 shadow-lg hover:shadow-xl">
                <Youtube size={18} className="text-slate-300 group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="https://facebook.com/npasolutions" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl flex items-center justify-center hover:from-blue-600 hover:to-blue-800 transition-all duration-300 cursor-pointer group transform hover:scale-110 shadow-lg hover:shadow-xl">
                <Facebook size={18} className="text-slate-300 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>
          
          <div className="min-w-0">
            <h4 className="font-bold text-lg md:text-xl mb-6 md:mb-8">Quick Links</h4>
            <div className="space-y-3 md:space-y-4">
              {[
                { name: 'Services', href: '/services' },
                { name: 'Expert Help', href: '/expert-help' },
                { name: 'Contact', href: '/contact' }
              ].map(link => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="block text-slate-300 hover:text-white transition-colors hover:translate-x-2 transform duration-300 text-sm md:text-base"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="min-w-0">
            <h4 className="font-bold text-lg md:text-xl mb-6 md:mb-8">Contact Info</h4>
            <div className="space-y-3 md:space-y-4 text-slate-300">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400 flex-shrink-0" />
                <p className="text-sm md:text-base break-words">support@npasolutions.in</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400 flex-shrink-0" />
                <p className="text-sm md:text-base">+91 9666993228</p>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-blue-400 flex-shrink-0" />
                <p className="text-sm md:text-base">Andhra Pradesh</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-blue-400 flex-shrink-0" />
                <p className="text-sm md:text-base">09:00 AM - 05:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-12 md:mt-16 pt-6 md:pt-8 text-center">
          <p className="text-slate-400 text-sm md:text-base px-2">
            &copy; 2024 NPA Solutions. All rights reserved. | 
            <span className="text-slate-300"> Protecting your business interests with expert legal guidance.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;