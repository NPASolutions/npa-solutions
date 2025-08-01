import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [borrowerType, setBorrowerType] = useState("");
  const [otherBorrowerType, setOtherBorrowerType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const templateParams = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      borrowerType: borrowerType === 'other' ? otherBorrowerType : borrowerType,
      enterpriseName: formData.get('enterpriseName') || 'N/A',
      loanValue: formData.get('loanValue'),
      service: formData.get('service'),
      query: formData.get('query'),
      to_email: 'npasolutions.in@gmail.com'
    };

    try {
      // You'll need to set up EmailJS with your service ID, template ID, and public key
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      toast({
        title: "Query Submitted Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      // Reset form
      e.currentTarget.reset();
      setBorrowerType("");
      setOtherBorrowerType("");
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your query. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-xl shadow-lg border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="font-bold text-2xl bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              NPA Solutions
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-slate-600 hover:text-slate-900 transition-all duration-300 font-medium relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/services" className="text-slate-600 hover:text-slate-900 transition-all duration-300 font-medium relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/contact" className="text-blue-600 font-medium relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></span>
              </Link>
            </div>

            <div className="hidden md:flex">
              <Link to="/expert-help">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Expert Help
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Get in
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Touch</span>
            </h1>
            <p className="text-xl text-slate-600">
              Ready to discuss your legal requirements? Contact our experts today for personalized guidance.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-3">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        name="fullName"
                        required 
                        className="w-full px-6 py-4 border-2 border-cyan-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition-all duration-300 text-lg bg-gradient-to-r from-cyan-50 to-blue-50" 
                        placeholder="Enter your full name" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-3">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        required 
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="Please enter a valid email address"
                        className="w-full px-6 py-4 border-2 border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-400 transition-all duration-300 text-lg bg-gradient-to-r from-orange-50 to-yellow-50" 
                        placeholder="your.email@company.com" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">
                      Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      pattern="[+]?[0-9\s\-]+"
                      className="w-full px-6 py-4 border-2 border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-400 transition-all duration-300 text-lg bg-gradient-to-r from-green-50 to-emerald-50" 
                      placeholder="+91 98765 43210" 
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-3">
                        Borrower Type *
                      </label>
                      <select 
                        name="borrowerType"
                        value={borrowerType}
                        onChange={(e) => setBorrowerType(e.target.value)}
                        required
                        className={`w-full px-6 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all duration-300 text-lg bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 ${borrowerType ? 'text-slate-900 bg-gradient-to-r from-blue-100 to-indigo-100 border-blue-300' : 'text-slate-500'}`}
                      >
                        <option value="">Select borrower type</option>
                        <option value="individual">Individual</option>
                        <option value="msme">MSME</option>
                        <option value="company">Company</option>
                        <option value="llp">LLP</option>
                        <option value="guarantor">Guarantor</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-3">
                        Value of Loan *
                      </label>
                      <input 
                        type="text" 
                        name="loanValue"
                        required
                        onKeyPress={(e) => {
                          if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
                            e.preventDefault();
                          }
                        }}
                        onInput={(e) => {
                          let value = e.currentTarget.value.replace(/[^0-9]/g, '');
                          if (value) {
                            e.currentTarget.value = new Intl.NumberFormat('en-IN').format(parseInt(value));
                          } else {
                            e.currentTarget.value = '';
                          }
                        }}
                        className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg" 
                        placeholder="Enter loan amount (₹)" 
                      />
                    </div>
                  </div>
                  
                  {/* Conditional fields */}
                  {borrowerType === "other" && (
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-3">
                        Specify Borrower Type *
                      </label>
                      <input 
                        type="text" 
                        name="otherBorrowerType"
                        value={otherBorrowerType}
                        onChange={(e) => setOtherBorrowerType(e.target.value)}
                        required
                        className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg" 
                        placeholder="Please specify borrower type" 
                      />
                    </div>
                  )}
                  
                  {(borrowerType === "msme" || borrowerType === "company" || borrowerType === "llp") && (
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-3">
                        Name of the Enterprise *
                      </label>
                      <input 
                        type="text" 
                        name="enterpriseName"
                        required
                        className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg" 
                        placeholder="Enter enterprise name" 
                      />
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">
                      Choose the Service *
                    </label>
                    <select 
                      name="service"
                      required
                      onChange={(e) => e.target.classList.toggle('text-slate-900', !!e.target.value)}
                      className="w-full px-6 py-4 border-2 border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all duration-300 text-lg bg-gradient-to-r from-purple-50 to-pink-50 text-slate-500 [&:has(option:checked:not(:first-child))]:text-slate-900 [&:has(option:checked:not(:first-child))]:bg-gradient-to-r [&:has(option:checked:not(:first-child))]:from-purple-100 [&:has(option:checked:not(:first-child))]:to-pink-100 [&:has(option:checked:not(:first-child))]:border-purple-300"
                    >
                      <option value="">Select a service</option>
                      <option value="360-analysis">360° Analysis</option>
                      <option value="npa-sarfaesi">NPA Resolution & SARFAESI Compliance</option>
                      <option value="drt-litigation">DRT & SARFAESI Litigation</option>
                      <option value="debt-restructuring">Debt Restructuring & MSME Revival</option>
                      <option value="nclt-ibc">NCLT / IBC Litigation & Corporate Insolvency</option>
                      <option value="ots-support">OTS Support & Negotiation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">
                      Describe your Legal Query / Requirements *
                    </label>
                    <textarea 
                      name="query"
                      required 
                      rows={6} 
                      className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg resize-none" 
                      placeholder="Please provide detailed information about your legal query, situation, timeline, and specific requirements"
                    ></textarea>
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Your Legal Query"}
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;