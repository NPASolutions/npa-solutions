import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQs = () => {
  const faqs = [{
    question: "What is the SARFAESI Act and how does it affect borrowers?",
    answer: "The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI) empowers banks and financial institutions to recover their non-performing assets without court intervention. However, borrowers have specific rights including proper notice, representation opportunities, and the right to appeal within 45 days."
  }, {
    question: "What immediate steps should I take after receiving a SARFAESI notice?",
    answer: "Upon receiving a SARFAESI notice, immediately: 1) Verify the notice authenticity and timeline, 2) Gather all loan documentation, 3) Assess your legal position, 4) Consider filing a representation or appeal to DRT within 45 days, 5) Consult with legal experts for strategic guidance."
  }, {
    question: "Can promoters submit resolution plans under IBC proceedings?",
    answer: "Yes, under certain conditions promoters can submit resolution plans, but they must meet specific eligibility criteria under Section 29A of the IBC. The plan must demonstrate viability, adequate funding, and compliance with regulatory requirements."
  }, {
    question: "What's the difference between CIRP and liquidation processes?",
    answer: "CIRP (Corporate Insolvency Resolution Process) aims to revive the company through resolution plans within 180-270 days, while liquidation involves selling assets to pay creditors when revival is not possible. CIRP focuses on business continuity; liquidation on asset realization."
  }, {
    question: "Where and when can I file a challenge to SARFAESI proceedings?",
    answer: "SARFAESI challenges must be filed at the Debt Recovery Tribunal (DRT) having jurisdiction over the area where the security interest is enforced, strictly within 45 days of receiving the enforcement notice. Late filing requires strong grounds for condonation of delay."
  }, {
    question: "What are my options for legal loan restructuring?",
    answer: "Legal loan restructuring options include: OTS negotiations under RBI guidelines, CDR (Corporate Debt Restructuring) schemes, strategic debt restructuring, and asset reconstruction through ARCs, all requiring proper legal documentation and lender approval."
  }];

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
              <Link to="/faqs" className="text-blue-600 font-medium relative group">
                FAQs
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></span>
              </Link>
              <Link to="/contact" className="text-slate-600 hover:text-slate-900 transition-all duration-300 font-medium relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
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

      {/* FAQs Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Frequently Asked
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl text-slate-600">
              Get expert answers to common questions about financial distress legal matters
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border border-slate-200 rounded-2xl px-8 py-2 shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
                >
                  <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline text-lg py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQs;