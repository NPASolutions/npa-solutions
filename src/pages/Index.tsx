
import { useState, useEffect } from "react";
import { ChevronDown, Shield, Scale, FileText, Building, TrendingUp, Users, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "SARFAESI Resolution & Compliance",
      description: "Defend your rights under SARFAESI Act 2002 with early-stage legal strategy.",
      icon: Shield,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "DRT & SARFAESI Litigation",
      description: "We help you fight unfair bank action under RDDB Act and SARFAESI simultaneously.",
      icon: Scale,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "OTS Support & Negotiation",
      description: "Settle strategically. Get expert-backed One-Time Settlement guidance for better terms.",
      icon: FileText,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "IBC Litigation & Corporate Insolvency",
      description: "Navigate CIRP, liquidation, or resolution with precision before NCLT.",
      icon: Building,
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Debt Restructuring & MSME Revival",
      description: "We help you revive, restructure & reposition your business for survival.",
      icon: TrendingUp,
      color: "bg-teal-50 text-teal-600"
    },
    {
      title: "ARC & Asset Sale Advisory",
      description: "Seamless support for direct asset sales and ARC-based recovery routes.",
      icon: Users,
      color: "bg-indigo-50 text-indigo-600"
    }
  ];

  const faqs = [
    {
      question: "What is the SARFAESI Act?",
      answer: "The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI) empowers banks and financial institutions to recover their non-performing assets without court intervention."
    },
    {
      question: "What rights does a borrower have under SARFAESI?",
      answer: "Borrowers have the right to receive proper notice, represent their case, appeal to DRT within 45 days, and seek stay on possession if proper procedures are not followed."
    },
    {
      question: "Can promoters submit resolution plan in IBC?",
      answer: "Yes, under certain conditions promoters can submit resolution plans, but they must meet specific eligibility criteria and follow prescribed procedures under the Insolvency and Bankruptcy Code."
    },
    {
      question: "What is CIRP vs Liquidation?",
      answer: "CIRP (Corporate Insolvency Resolution Process) aims to revive the company through resolution plans, while liquidation involves selling assets to pay creditors when revival is not possible."
    },
    {
      question: "Where can I file a SARFAESI challenge?",
      answer: "SARFAESI challenges can be filed at the Debt Recovery Tribunal (DRT) having jurisdiction over the area where the security interest is enforced, within 45 days of receiving the notice."
    },
    {
      question: "How can I restructure my loan legally?",
      answer: "Loan restructuring can be done through various mechanisms including OTS negotiations, CDR schemes, and under RBI guidelines for stressed assets, with proper legal documentation."
    }
  ];

  const testimonials = [
    {
      text: "NPA Solutions helped us navigate a complex SARFAESI notice with strategic precision. Their early intervention saved our business.",
      author: "Rajesh Kumar",
      role: "Manufacturing Company Owner"
    },
    {
      text: "Expert guidance through IBC proceedings. Professional, knowledgeable, and result-oriented approach.",
      author: "Priya Sharma",
      role: "Corporate Director"
    },
    {
      text: "Excellent OTS negotiation support. They helped us achieve a favorable settlement with our lenders.",
      author: "Anil Gupta",
      role: "MSME Entrepreneur"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-800">NPA Solutions</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-600 hover:text-slate-900 transition-colors">Home</a>
              <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">Services</a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
              <a href="#resources" className="text-slate-600 hover:text-slate-900 transition-colors">Resources</a>
              <a href="#faqs" className="text-slate-600 hover:text-slate-900 transition-colors">FAQs</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
            </div>

            <Button className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl">
              Get Expert Help
            </Button>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-slate-600">Home</a>
              <a href="#services" className="block px-3 py-2 text-slate-600">Services</a>
              <a href="#about" className="block px-3 py-2 text-slate-600">About</a>
              <a href="#resources" className="block px-3 py-2 text-slate-600">Resources</a>
              <a href="#faqs" className="block px-3 py-2 text-slate-600">FAQs</a>
              <a href="#contact" className="block px-3 py-2 text-slate-600">Contact</a>
              <Button className="mx-3 my-2 bg-blue-600 hover:bg-blue-700 text-white w-full">
                Get Expert Help
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Navigating Financial Distress with{" "}
              <span className="text-blue-600">Strategic Clarity</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Helping MSMEs, borrowers & entrepreneurs find smart legal and compliance solutions under SARFAESI, DRT, IBC & more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg">
                Schedule a Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-xl text-lg">
                Explore Our Services
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-slate-400" size={32} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Legal & Compliance Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive legal solutions tailored to your specific financial distress situation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-6`}>
                      <service.icon size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                      Learn More <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Why Choose NPA Solutions?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Deep Legal Insight</h4>
                    <p className="text-slate-600">Comprehensive expertise across SARFAESI, DRT, IBC regulations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Strategic Early-Stage Intervention</h4>
                    <p className="text-slate-600">Proactive legal strategies that prevent escalation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Tailored Defenses & Counterclaims</h4>
                    <p className="text-slate-600">Customized legal approaches for your specific situation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Documentation & Compliance Support</h4>
                    <p className="text-slate-600">Complete documentation assistance and regulatory compliance</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h4 className="text-2xl font-semibold text-slate-900 mb-8">Client Testimonials</h4>
              <div className="space-y-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-6">
                    <p className="text-slate-600 italic mb-4">"{testimonial.text}"</p>
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.author}</p>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Get answers to common questions about financial distress legal matters
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-slate-200 rounded-xl px-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Act Proactively?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Don't wait until it's too late. Get expert legal guidance for your financial distress situation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-xl text-lg">
                Talk to an Expert
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl text-lg">
                Submit a Query
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-slate-600">
              Ready to discuss your legal requirements? Contact our experts today.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Query Type
                      </label>
                      <select className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="">Select query type</option>
                        <option value="sarfaesi">SARFAESI</option>
                        <option value="ots">OTS</option>
                        <option value="drt">DRT</option>
                        <option value="ibc">IBC</option>
                        <option value="restructuring">Restructuring</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Please describe your legal requirements in detail (minimum 30 characters)"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg"
                  >
                    Submit Your Query
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="font-bold text-2xl mb-4">NPA Solutions</div>
              <p className="text-slate-300 leading-relaxed">
                Strategic Legal Support for MSMEs & Borrowers navigating financial distress with expert guidance.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
              <div className="space-y-3">
                <a href="#services" className="block text-slate-300 hover:text-white transition-colors">Services</a>
                <a href="#about" className="block text-slate-300 hover:text-white transition-colors">About</a>
                <a href="#faqs" className="block text-slate-300 hover:text-white transition-colors">FAQs</a>
                <a href="#contact" className="block text-slate-300 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-6">Contact Info</h4>
              <div className="space-y-3 text-slate-300">
                <p>Email: support@npasolutions.in</p>
                <p>Phone: +91 98765 43210</p>
                <div className="flex space-x-4 mt-6">
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">LinkedIn</a>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">Twitter</a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 NPA Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
