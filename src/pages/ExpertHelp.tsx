import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle, Scale, Users, BookOpen, ArrowRight, Phone, Mail, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LoginButton } from "@/components/auth/LoginButton";
import { AuthDialog } from "@/components/auth/AuthDialog";
import { useAuth } from "@/contexts/AuthContext";
import { useBooking } from "@/hooks/useBooking";
import { useToast } from "@/hooks/use-toast";

const ExpertHelp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [selectedService, setSelectedService] = useState<{title: string, price: string} | null>(null);
  const { user } = useAuth();
  const { createBooking, loading } = useBooking();
  const { toast } = useToast();

  const handleBookNow = async (service: {title: string, price: string}) => {
    if (!user) {
      setSelectedService(service);
      setShowAuthDialog(true);
      return;
    }

    try {
      await createBooking({
        serviceName: service.title,
        servicePrice: service.price
      });
    } catch (error) {
      console.error('Booking failed:', error);
    }
  };

  const handleAuthSuccess = async () => {
    setShowAuthDialog(false);
    if (selectedService && user) {
      try {
        await createBooking({
          serviceName: selectedService.title,
          servicePrice: selectedService.price
        });
        setSelectedService(null);
      } catch (error) {
        console.error('Booking failed:', error);
      }
    }
  };

  const services = [
    {
      title: "Review of Legal Position",
      price: "₹1,000/-",
      description: "Comprehensive analysis of your current legal standing in NPA/SARFAESI proceedings",
      features: [
        "Document review and verification",
        "Compliance audit of bank proceedings", 
        "Assessment of legal remedies available",
        "Written legal opinion report",
        "Strategic recommendations"
      ],
      icon: Scale,
      color: "bg-gradient-to-br from-slate-50 to-slate-100",
      iconColor: "text-slate-600",
      gradient: "from-slate-600 to-slate-700"
    },
    {
      title: "Virtual Consultation",
      price: "₹5,000/-",
      description: "One-on-one expert consultation with personalized legal strategy and guidance",
      features: [
        "60-minute consultation session",
        "Case-specific strategic planning",
        "Expert legal advice on proceedings",
        "Q&A session for your concerns",
        "Follow-up action plan",
        "Document templates provided"
      ],
      icon: Users,
      color: "bg-gradient-to-br from-blue-50 to-blue-100", 
      iconColor: "text-blue-600",
      gradient: "from-blue-600 to-blue-700",
      popular: true
    },
    {
      title: "Workshop for Entrepreneurs",
      price: "₹500/-",
      description: "Educational workshop on recovery laws and safe business practices",
      features: [
        "Understanding SARFAESI & IBC laws",
        "Risk mitigation strategies",
        "Best practices for loan agreements",
        "Early warning signs identification",
        "Compliance guidelines for MSMEs",
        "Interactive Q&A session"
      ],
      icon: BookOpen,
      color: "bg-gradient-to-br from-purple-50 to-purple-100",
      iconColor: "text-purple-600", 
      gradient: "from-purple-600 to-purple-700"
    }
  ];

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
              <Link to="/contact" className="text-slate-600 hover:text-slate-900 transition-all duration-300 font-medium relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/expert-help" className="text-blue-600 font-medium relative group">
                Expert Help
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <LoginButton />
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Phone className="mr-2" size={16} />
                Contact Us
              </Button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              <Link to="/" className="block px-3 py-2 text-slate-600 hover:text-slate-900 transition-colors">
                Home
              </Link>
              <Link to="/services" className="block px-3 py-2 text-slate-600 hover:text-slate-900 transition-colors">
                Services
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-slate-600 hover:text-slate-900 transition-colors">
                Contact
              </Link>
              <Link to="/expert-help" className="block px-3 py-2 text-blue-600 font-medium">
                Expert Help
              </Link>
              <div className="mx-3 my-2">
                <LoginButton />
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Get <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expert Help</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Choose the right service package for your specific needs. From quick legal reviews to comprehensive consultation and educational workshops.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="h-full"
              >
                <Card className={`h-full relative overflow-hidden border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-xl group ${service.popular ? 'border-blue-300 shadow-lg' : 'border-slate-200'}`}>
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`${service.iconColor} h-8 w-8`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <div className="flex items-baseline mb-4">
                      <span className={`text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                        {service.price}
                      </span>
                    </div>
                    
                    <p className="text-slate-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300`}
                      onClick={() => handleBookNow(service)}
                      disabled={loading}
                    >
                      {loading ? 'Processing...' : 'Book Now'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidance Note */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Need Help Choosing the Right Consultation?
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                If you need any clarification or guidance to choose the type of consultation that best fits your needs, submit a query or reach us on WhatsApp for instant assistance.
              </p>
              <a 
                href="https://wa.me/919666993228"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us for personalized packages tailored to your specific legal requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-blue-600 border-white hover:bg-blue-50">
                <Phone className="mr-2" size={20} />
                Call Us Now
              </Button>
              <a 
                href="https://wa.me/919666993228"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="bg-green-500 text-white border-green-500 hover:bg-green-600">
                  <MessageCircle className="mr-2" size={20} />
                  WhatsApp
                </Button>
              </a>
              <Button size="lg" variant="outline" className="bg-white text-blue-600 border-white hover:bg-blue-50">
                <Mail className="mr-2" size={20} />
                Email Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      <AuthDialog
        open={showAuthDialog}
        onOpenChange={setShowAuthDialog}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
};

export default ExpertHelp;