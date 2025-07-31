import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="font-bold text-3xl mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              NPA Solutions
            </div>
            <p className="text-slate-300 leading-relaxed mb-6 text-lg">
              India's premier legal consultancy specializing in financial distress resolution. We provide strategic legal support for MSMEs, borrowers & entrepreneurs navigating complex financial situations.
            </p>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                <Mail size={20} />
              </div>
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                <Phone size={20} />
              </div>
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                <MapPin size={20} />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-xl mb-8">Quick Links</h4>
            <div className="space-y-4">
              {[
                { name: 'Services', href: '/services' },
                { name: 'Expert Help', href: '/expert-help' },
                { name: 'Contact', href: '/contact' }
              ].map(link => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="block text-slate-300 hover:text-white transition-colors hover:translate-x-2 transform duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-xl mb-8">Contact Info</h4>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400" />
                <p>support@npasolutions.in</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400" />
                <p>+91 9666993228</p>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-blue-400" />
                <p>Andhra Pradesh</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-blue-400" />
                <p>09:00 AM - 05:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-16 pt-8 text-center">
          <p className="text-slate-400">
            &copy; 2024 NPA Solutions. All rights reserved. | 
            <span className="text-slate-300"> Protecting your business interests with expert legal guidance.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;