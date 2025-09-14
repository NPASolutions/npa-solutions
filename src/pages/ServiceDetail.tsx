import { useParams, Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { ArrowLeft, Phone, Mail, CheckCircle, Shield, Scale, FileText, Building, TrendingUp, Users, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { LoginButton } from "@/components/auth/LoginButton";
const ServiceDetail = () => {
  const {
    serviceId
  } = useParams();

  // Scroll to top when component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  // Function to get service-specific FAQs
  const getServiceFAQs = (serviceId: string) => {
    const serviceFAQs: {
      [key: string]: Array<{
        question: string;
        answer: string;
      }>;
    } = {
      "npa-resolution-sarfaesi-compliance": [{
        question: "What is the SARFAESI Act and how does it affect borrowers?",
        answer: "The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI) empowers banks and financial institutions to recover their non-performing assets without court intervention. However, borrowers have specific rights including proper notice, representation opportunities, and the right to appeal within 45 days."
      }, {
        question: "What immediate steps should I take after receiving a SARFAESI notice?",
        answer: "Upon receiving a SARFAESI notice, immediately: 1) Verify the notice authenticity and timeline, 2) Gather all loan documentation, 3) Assess your legal position, 4) Consider filing a representation or appeal to DRT within 45 days, 5) Consult with legal experts for strategic guidance."
      }, {
        question: "Can banks declare my account as NPA without proper process?",
        answer: "No, banks must follow RBI guidelines before declaring any account as NPA. The account becomes NPA only after 90 days of overdue payments. Banks must also provide proper notice and opportunity for regularization before taking enforcement action."
      }],
      "drt-sarfaesi-litigation": [{
        question: "Where and when can I file a challenge to SARFAESI proceedings?",
        answer: "SARFAESI challenges must be filed at the Debt Recovery Tribunal (DRT) having jurisdiction over the area where the security interest is enforced, strictly within 45 days of receiving the enforcement notice. Late filing requires strong grounds for condonation of delay."
      }, {
        question: "What's the difference between OA and SA in DRT proceedings?",
        answer: "Original Application (OA) is filed by banks to recover dues under RDDB Act, while Securitisation Application (SA) is filed by borrowers under Section 17 of SARFAESI Act to challenge enforcement actions. Both can run simultaneously and require different strategies."
      }, {
        question: "Can I file a counter-claim in DRT proceedings?",
        answer: "Yes, borrowers can file counter-claims in OA proceedings if they have suffered damages due to illegal recovery measures, procedural violations, or documentation gaps by the bank. This can be an effective defense strategy."
      }],
      "ots-support-negotiation": [{
        question: "What are my options for legal loan restructuring?",
        answer: "Legal loan restructuring options include: OTS negotiations under RBI guidelines, CDR (Corporate Debt Restructuring) schemes, strategic debt restructuring, and asset reconstruction through ARCs, all requiring proper legal documentation and lender approval."
      }, {
        question: "When is the right time to consider OTS?",
        answer: "OTS should be considered when you have proper leverage - either through procedural violations by the bank, strong legal positions, or when restructuring options have been exhausted. Never rush into OTS under pressure without proper assessment."
      }, {
        question: "Will OTS affect my credit score permanently?",
        answer: "OTS will be reported to credit bureaus and may impact your credit score. However, it's generally better than continued defaults or legal recovery. The impact duration and severity depend on various factors including the settlement terms and your overall credit history."
      }],
      "nclt-ibc-litigation-corporate-insolvency": [{
        question: "Can promoters submit resolution plans under IBC proceedings?",
        answer: "Yes, under certain conditions promoters can submit resolution plans, but they must meet specific eligibility criteria under Section 29A of the IBC. The plan must demonstrate viability, adequate funding, and compliance with regulatory requirements."
      }, {
        question: "What's the difference between CIRP and liquidation processes?",
        answer: "CIRP (Corporate Insolvency Resolution Process) aims to revive the company through resolution plans within 180-270 days, while liquidation involves selling assets to pay creditors when revival is not possible. CIRP focuses on business continuity; liquidation on asset realization."
      }, {
        question: "What happens to employees during IBC proceedings?",
        answer: "During CIRP, the resolution professional takes control and existing management is suspended. Employee dues have priority in liquidation waterfall. Successful resolution plans typically retain employees, while liquidation may result in job losses."
      }],
      "debt-restructuring-msme-revival": [{
        question: "What special benefits do MSME borrowers have under RBI guidelines?",
        answer: "MSMEs have special restructuring frameworks under RBI guidelines, including the MSME Restructuring Framework 2023, which allows restructuring without classifying accounts as NPA, provided certain conditions are met and the account is viable."
      }, {
        question: "How do I prove my MSME status for restructuring benefits?",
        answer: "You need valid Udyam/Udyog Aadhaar registration effective on the date of default. The registration should be current and the business should meet MSME criteria as defined under MSMED Act for investment and turnover limits."
      }, {
        question: "Can I get restructuring after my account becomes NPA?",
        answer: "Yes, restructuring is possible even after NPA classification, but the terms and approval process may be different. Banks have specific guidelines for NPA restructuring, and expert legal guidance is crucial for successful negotiation."
      }],
      "advocates-partnership-support": [{
        question: "What kind of drafting support do you provide to advocates?",
        answer: "We provide comprehensive drafting support including Securitisation Applications (SA) under SARFAESI Act 2002, Counterclaims, Written Statements in Original Applications (OA), Written Arguments, and all other documentation required for DRT & NCLT proceedings."
      }, {
        question: "How does the back-end support work?",
        answer: "We work behind the scenes, providing you with legally sound drafts and strategy support while you remain the front-facing advocate with your clients. Alternatively, we can co-counsel or directly appear alongside you if preferred."
      }, {
        question: "What are your areas of expertise for partnership support?",
        answer: "Our technical expertise covers SARFAESI Act 2002, RDDBFI Act, Insolvency Bankruptcy Code (IBC) matters, DRT procedures, and NCLT compliance requirements - all specialized areas that require specific knowledge and experience."
      }]
    };
    return serviceFAQs[serviceId] || [{
      question: "How can I get expert legal help for my financial distress?",
      answer: "Contact NPA Solutions for a consultation. We provide comprehensive legal support for all types of financial distress situations, from early intervention to complex litigation matters."
    }];
  };
  const services = {
    "npa-resolution-sarfaesi-compliance": {
      title: "NPA Resolution & SARFAESI Compliance",
      subtitle: "Early Legal Intervention for NPA Stress & SARFAESI Notices",
      icon: Shield,
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
      iconColor: "text-blue-600",
      gradient: "from-blue-600 to-blue-700",
      buttonGradient: "from-blue-500 to-blue-600",
      features: ["Early Intervention", "Compliance Audit", "Strategic Defense", "RBI Guidelines Review"],
      fullDescription: `When financial strain sets in, borrowers—whether MSMEs, companies, or individuals—often find themselves racing against time. Under the RBI's Prudential Norms, a loan account is classified as a Non-Performing Asset (NPA) when repayments are overdue for more than 90 days. Once this classification is made, banks may initiate recovery actions under the SARFAESI Act 2002, starting with the issuance of a demand notice under Section 13(2).

From that point, the process may escalate swiftly—leading to symbolic possession under Section 13(4), and in many cases, auction of the secured asset—all without approaching the court. Unfortunately, many borrowers remain unaware that they still have rights at every stage, and that the SARFAESI process must comply with specific procedures laid down in law and governed by regulatory bodies.

The key lies in timing. If the borrower takes steps early—ideally before NPA classification, or soon after receiving the SARFAESI Notice—the matter can often be resolved without litigation. Even if the case has reached possession or auction stages, options still exist, though the strategy and urgency differ.`,
      whyChooseUs: `At NPA Solutions, we understand the practical challenges borrowers face when dealing with default and bank recovery action. Over the years, we've worked closely with MSMEs, companies, LLPs, and individual borrowers, and we've seen one consistent issue: borrowers are blamed without examining whether the bank followed its own obligations under law.

There is a common myth that borrowers are entirely at fault once they default—but banks too are bound by compliance responsibilities under RBI guidelines, SARFAESI procedures, and government-mandated policies. We bring this balance into focus and examine:
• Whether proper process was followed before declaring the account as NPA
• Whether the SARFAESI Notice complies with legal requirements
• Whether any procedural violations or regulatory gaps exist in the bank's action

By intervening at the right time, we help borrowers explore effective alternatives—often without needing to rush to court.`,
      approach: `Our approach is never one-size-fits-all. Each borrower—whether an MSME, individual, or company—comes with unique challenges and strengths. We assess these factors in detail before recommending any strategy.

Wherever possible, we aim to resolve the matter through structured legal correspondence, rather than pushing the borrower into litigation. However, if the borrower comes to us at a later stage—such as after possession notice or before auction—we are fully prepared to defend the case through DRT proceedings, if necessary.

All our strategies are built on:
• RBI compliance checks
• SARFAESI Act procedural scrutiny
• Relevant government policies and circulars
• A borrower-centric, practical, and time-sensitive approach`,
      callToAction: "If your loan account is under stress, or you've received a SARFAESI Notice or fear enforcement action—don't delay. Call us today, or Book a virtual or face-to-face consultation to understand your legal position and possible remedies.",
      conclusion: `Being in default doesn't mean being without options. The SARFAESI Act gives banks power—but that power must be exercised within the boundaries of law, procedure, and policy. At NPA Solutions, we help borrowers identify gaps in bank compliance, protect their rights, and work toward resolution—not just defence.

If you're struggling with a Non-Performing Asset, our team is here to help you move forward with confidence, clarity, and legal strength.`
    },
    "drt-sarfaesi-litigation": {
      title: "DRT & SARFAESI Litigation",
      subtitle: "Legal Defence & Strategy in DRT & SARFAESI Proceedings",
      icon: Scale,
      color: "bg-gradient-to-br from-purple-50 to-purple-100",
      iconColor: "text-purple-600",
      gradient: "from-purple-600 to-purple-700",
      buttonGradient: "from-purple-500 to-purple-600",
      features: ["Expert Litigation", "Dual Protection", "Court Representation", "Strategic Defense"],
      fullDescription: `When borrowers face legal action from banks, they are often drawn into proceedings before the Debt Recovery Tribunal (DRT). Under the SARFAESI Act 2002, banks can bypass the courts and directly enforce recovery through SARFAESI proceedings, such as taking physical possession and initiating auction of secured assets. Borrowers, however, have the right to defend themselves by filing a Securitisation Application (SA) before the DRT under Section 17 of the Act.

Simultaneously, banks also initiate Original Applications (OA) under the RDDB Act, 1993 to recover dues through a judicial process. These parallel proceedings require careful strategy, especially when banks overstep legal procedures or when borrower assets are at risk. Timely intervention and legal scrutiny play a critical role in safeguarding borrower rights.`,
      litigationAreas: {
        title: "Our comprehensive litigation support covers three critical areas:",
        areas: [
          {
            title: "OA - Original Applications",
            description: "Defense against bank recovery suits under RDDB Act"
          },
          {
            title: "SA - Securitisation Applications", 
            description: "Challenging SARFAESI enforcement actions"
          },
          {
            title: "Counter Claims",
            description: "Filing damages claims for procedural violations"
          }
        ]
      },
      whyChooseUs: `At NPA Solutions, we specialize in handling complex DRT and SARFAESI matters. Our clients—be they individuals, MSMEs, or corporate entities—often approach us at a stage when banks have either taken possession of assets or initiated legal proceedings. We excel in identifying procedural violations, statutory non-compliance under SARFAESI, and opportunities to file Counter Claims in OA proceedings.

Our team ensures that borrowers are not left vulnerable due to lack of awareness or delay. With deep insight into the SARFAESI Act, RDDB Act, RBI norms, and DRT practices, we bring a proactive, rights-based legal approach to every case.`,
      approach: `At NPA Solutions, we recognize that borrowers often face dual pressure: recovery suits (Original Applications) under the RDDB Act and enforcement actions under the SARFAESI Act. Our first step is to carefully assess the stage and legality of SARFAESI proceedings. If a 13(4) Possession Notice has been issued without proper compliance, we help borrowers file a Securitisation Application (SA) before the DRT under Section 17 — to challenge the action and protect their assets.

In parallel, if the bank has filed an OA in DRT, we examine whether there are grounds for a Counter Claim based on damages, illegal recovery measures, or documentation gaps. We guide borrowers—whether individuals, MSMEs, or companies—through each step, ensuring their side is put forward effectively with supporting records and procedural scrutiny.

Our strategic intent is twofold: to stall or reverse flawed SARFAESI actions and to neutralize the OA with a strong defence or justified counterclaim, wherever applicable. Every case is fact-driven, and we tailor our approach to ensure the borrower's rights are protected under law while opening avenues for meaningful resolution.`,
      callToAction: "If you're facing SARFAESI enforcement or DRT proceedings, don't wait for the situation to escalate. Reach out to NPA Solutions for timely legal support, strategy, and compliance assistance.",
      conclusion: `Navigating DRT and SARFAESI actions demands a strong legal understanding, procedural vigilance, and borrower-specific strategy. At NPA Solutions, we stand by borrowers every step of the way—ensuring their voice is heard, their rights are upheld, and their financial future is protected.`
    },
    "ots-support-negotiation": {
      title: "OTS Support & Negotiation",
      subtitle: "Strategic Guidance for Fair & Legally Sound One-Time Settlements",
      icon: FileText,
      color: "bg-gradient-to-br from-sky-50 to-sky-100",
      iconColor: "text-sky-600",
      gradient: "from-sky-600 to-sky-700",
      buttonGradient: "from-sky-500 to-sky-600",
      features: ["Strategic OTS Guidance", "Legal Review", "Negotiation Leverage", "Fair Settlement Terms"],
      fullDescription: `A One Time Settlement (OTS) is not something a bank readily offers—it's something you earn the right to negotiate. For borrowers under financial distress, especially those facing SARFAESI enforcement or legal notices, the idea of "settling the loan" may seem like a relief. But in reality, OTS is a legal and strategic outcome, not a shortcut.

At NPA Solutions, we help borrowers understand when, why, and how an OTS becomes a real option—and how to avoid rushing into one under pressure without proper leverage.`,
      whyChooseUs: `Most borrowers approach us when restructuring was denied, the loan is declared NPA, or the bank is threatening possession or auction. We understand the urgency—but more importantly, we know how to turn that urgency into opportunity.

Our strength lies in helping you:
• Decide if OTS is suitable for your profile (MSME, individual, or company).
• Understand if the bank has prematurely denied revival or violated process.
• Use the right tools to build legal and negotiation advantage.

Unlike agents who simply "submit" OTS letters, we work to create the conditions where banks are compelled to consider a reasonable settlement—without compromising your future.`,
      approach: `Every borrower's case is different. That's why we never treat OTS as the default option.

We begin with a legal and financial review—whether you're still at the SARFAESI notice stage, facing DRT recovery proceedings, or have received an IBC-related threat. We identify if your case has technical violations, RBI non-compliance, or procedural irregularities—and whether these can be used to open up OTS discussions on better terms.

When the timing is right, we assist in:
• Strategically initiating OTS representations.
• Responding to pressure tactics with well-supported legal positions.
• Avoiding settlements that might weaken your legal standing or future eligibility.

OTS is not always advisable—but when it is, we ensure you enter with clarity, confidence, and control.`,
      callToAction: "Facing pressure to settle? Don't go in blind. Book a face-to-face or virtual consultation with our legal team to assess if an OTS is right for you—factually, financially, and legally. We help you understand your real position and whether better alternatives exist before taking any irreversible step.",
      conclusion: `A One Time Settlement is not about desperation—it's about timing, facts, and leverage. Whether you're dealing with a harsh bank stance or are considering an OTS as a last resort, we'll help you make an informed, strategic move.

At NPA Solutions, we stand with borrowers—not just to close a loan, but to close it right.`
    },
    "nclt-ibc-litigation-corporate-insolvency": {
      title: "NCLT / IBC Litigation & Corporate Insolvency",
      subtitle: "NCLT Proceedings and Resolution Planning",
      icon: Building,
      color: "bg-gradient-to-br from-slate-50 to-slate-100",
      iconColor: "text-slate-600",
      gradient: "from-slate-600 to-slate-700",
      buttonGradient: "from-slate-500 to-slate-600",
      features: ["NCLT Representation", "Resolution Planning", "Asset Protection", "CIRP Support"],
      fullDescription: `IBC Proceedings Before NCLT: Legal Remedies for Distressed Corporates

The Insolvency and Bankruptcy Code (IBC) is India's primary law for resolving corporate financial distress. Proceedings under IBC are adjudicated by the National Company Law Tribunal (NCLT), a quasi-judicial body dedicated to corporate law and insolvency matters. IBC allows initiation of insolvency proceedings by financial creditors, operational creditors, or even the company itself—provided the default amount exceeds ₹1 crore. This threshold applies across Section 7 (financial creditors), Section 9 (operational creditors), and Section 10 (corporate applicants).

Often, companies approach us when they've received a demand notice from a creditor, or when a petition has already been filed before the NCLT. Timely legal action at this stage can make a significant difference to the outcome.

Understanding IBC Proceedings

IBC proceedings are initiated before the National Company Law Tribunal (NCLT) when a corporate debtor defaults on dues exceeding ₹1 crore. The process involves:
• Admission of application and moratorium declaration
• Appointment of Interim/Resolution Professional
• Committee of Creditors formation
• Resolution plan submission and approval
• Liquidation (if resolution fails)

Our IBC Expertise

We represent clients across the entire spectrum of IBC proceedings:
• Financial Creditors: Section 7 applications and recovery strategies
• Operational Creditors: Section 9 proceedings and claim substantiation
• Corporate Debtors: Section 10 voluntary proceedings and defense strategies
• Resolution Professionals: Procedural compliance and stakeholder management

Strategic Approach

Our methodology combines legal expertise with business acumen:
• Pre-litigation assessment and risk analysis
• Compliance with statutory timelines and requirements
• Coordination with resolution professionals and creditors
• Protection of stakeholder interests throughout the process`,
      whyChooseUs: `We understand the complexities of insolvency—not just in legal terms, but also in how they affect your operations, stakeholders, and business continuity. Our team has experience representing both corporate applicants and creditors across varied industries. With a sensitive and solution-oriented approach, we assist clients in protecting their rights, avoiding procedural pitfalls, and exploring resolution options within the IBC framework.`,
      approach: `At NPA Solutions, we believe that a thoughtful and technically sound strategy is key to insolvency litigation. We focus on legal accuracy, adherence to statutory requirements, and an understanding of relevant RBI guidelines and policy frameworks. Rather than rushing into adversarial processes, we assess the situation in full—considering viability, resolution possibilities, and long-term impact—before acting.`,
      callToAction: "📞 If your company is under financial stress, has received a legal notice under IBC, or anticipates NCLT proceedings—don't delay. Call us today, or book a virtual or face-to-face consultation to understand your legal position and explore the most effective course of action.",
      conclusion: `Insolvency need not mean the end of the road. Whether you're trying to recover your dues or protect your company's future, a structured legal response can change the outcome. At NPA Solutions, we stand by businesses navigating IBC proceedings with clarity, confidence, and a calm legal hand. Let's work together to find a way forward.`
    },
    "debt-restructuring-msme-revival": {
      title: "Debt Restructuring & MSME Revival",
      subtitle: "Revival-Focused Legal Support for MSMEs & Distressed Borrowers",
      icon: TrendingUp,
      color: "bg-gradient-to-br from-teal-50 to-teal-100",
      iconColor: "text-teal-600",
      gradient: "from-teal-600 to-teal-700",
      buttonGradient: "from-teal-500 to-teal-600",
      features: ["MSME Revival Support", "RBI Framework Compliance", "Strategic Restructuring", "Legal Advocacy"],
      fullDescription: `Financial stress in a business doesn't always mean failure—it often just means timely restructuring is needed. For MSMEs in particular, the Reserve Bank of India (RBI) has issued several guidelines that allow for restructuring of viable accounts without waiting for the account to become an NPA.

Unfortunately, many borrowers either don't know about these schemes, or approach too late—after receiving legal notices or facing recovery proceedings. At NPA Solutions, we help you act before it's too late, with a clear strategy toward revival and compliance-based restructuring.`,
      whyChooseUs: `Unlike general consultants or bank recovery agents, we represent your legal and financial interests as a distressed borrower.

Here's how we're different:
• We assess whether your account was illegally pushed into NPA without offering a proper restructuring route.
• We understand the differences between individual, company, and MSME borrowers—and the benefits each one may claim.
• We act before litigation, using RBI guidelines, policy norms, and compliance leverage to request restructuring or revival.
• We recommend restructuring or OTS only when it's in your long-term interest—not because the bank wants a quick closure.

Whether you're a standard account under pressure, or already facing a SARFAESI demand notice, we help you assess your position and move strategically.`,
      approach: `Every case begins with one critical question: Was restructuring ever considered before marking the loan as NPA?

If not, and if you're a viable MSME borrower, we act immediately to:
• Verify MSME registration (Udyam/Udyog Aadhaar) and status on the date of default.
• Evaluate your loan under the RBI Framework for Resolution of MSME Stress (2023).
• Draft and submit a bank-compliant restructuring proposal supported by legal rights, RBI circulars, and documentation.
• Escalate to higher authorities if banks violate restructuring norms or fail to respond.

If you're already classified as NPA or SARFAESI proceedings have begun, we examine whether restructuring should still have been considered—and use that failure to legally push back and explore revival options or stronger negotiation points.

We also guide you through the choice between debt restructuring and OTS, depending on your repayment ability, asset situation, and overall legal exposure.`,
      callToAction: "Are you under financial stress or facing the risk of being declared NPA? Don't wait for legal notices or recovery agents. You may be entitled to restructuring support—especially if you're an MSME. Book a virtual or in-person consultation today to understand your rights, assess your bank's actions, and explore your options for revival.",
      conclusion: `MSMEs are the backbone of our economy—but in many cases, banks skip over mandatory revival opportunities and rush to enforce recovery.

At NPA Solutions, we ensure your business gets the fair chance it deserves. We stand by your side from early-stage advisory to policy-based legal action—ensuring you don't just respond to recovery, but proactively reclaim control of your financial future.

Let's work together to rebuild—strategically, lawfully, and on your terms.`
    },
    "advocates-partnership-support": {
      title: "Advocates Partnership Support",
      subtitle: "Partnering with Advocates for DRT & NCLT Litigation",
      icon: Handshake,
      color: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      iconColor: "text-indigo-600",
      gradient: "from-indigo-600 to-indigo-700",
      buttonGradient: "from-indigo-500 to-indigo-600",
      features: ["Tailored Drafting Support", "Procedural Expertise", "Flexible Engagement", "Focus on Your Strength"],
      fullDescription: `At NPA Solutions, we understand that many advocates, especially those practicing in local civil courts, may not always be able to allocate time or resources for highly technical litigation before the Debt Recovery Tribunal (DRT) or the National Company Law Tribunal (NCLT). These forums demand specialized drafting, statutory knowledge, and compliance with strict procedural timelines.

That is where we step in.

We offer back-end litigation and drafting support to fellow advocates who want to represent their clients effectively in financial recovery and insolvency disputes. Whether you require assistance with preparing a Securitisation Application (SA) under the SARFAESI Act 2002, drafting a Counterclaim or Written Statement in an Original Application (OA), or finalizing Written Arguments, our team can provide precise, legally sound drafts tailored to the facts of the case.

For advocates who prefer to remain front-facing with their clients, we remain in the background, ensuring you get strong documentation and strategy support. Alternatively, if you would like us to co-counsel or directly appear along with you in DRT & NCLT litigation, we are flexible to work in collaboration.

Our aim is simple: To empower advocates with the right tools, knowledge, and case support to succeed in specialized forums. With our technical expertise in SARFAESI, RDDB Acts, and Insolvency Bankruptcy Code matters, you can continue to serve your clients without worrying about time, bandwidth, or lack of exposure to tribunal practice.`,
      whyChooseUs: `At NPA Solutions, we believe in collaboration over competition. Together, we can ensure that clients get the best representation across the DRT and NCLT Forums.

Why partner with us?
✅ Tailored Drafting Support: Securitisation Applications, Counterclaims, Written Statements, and Arguments prepared case-by-case, based on unique facts and strategy
✅ Procedural Expertise: Ensure filings comply with SARFAESI Act 2002, RDDBFI Act, and IBC
✅ Flexible Engagement: Back-end support or joint litigation handling
✅ Focus on Your Strength: Continue your core civil practice while we handle tribunal intricacies

Our technical expertise spans SARFAESI proceedings, RDDB Act applications, and Insolvency Bankruptcy Code matters - areas that require specialized knowledge and experience that many general practice advocates may not have immediate access to.`,
      approach: `Our partnership model is designed to be flexible and supportive of your existing practice:

**Back-End Support Model:**
• We prepare all technical documents while you remain the primary counsel
• Complete drafting of applications, written statements, and arguments
• Strategic guidance on procedural compliance and timelines
• You maintain direct client relationship and court appearances

**Collaborative Model:**
• Joint counsel arrangements for complex matters
• Shared court appearances and client meetings
• Combined expertise for stronger representation
• Coordinated strategy development

**Knowledge Transfer:**
• Insights into DRT and NCLT procedural requirements
• Updates on latest judgments and regulatory changes
• Technical training support for your team
• Long-term capacity building for specialized practice

Every engagement is tailored to your specific needs and comfort level, ensuring that your practice benefits while your clients receive expert representation in specialized forums.`,
      callToAction: "Ready to strengthen your practice with specialized DRT & NCLT support? Contact NPA Solutions today to explore partnership opportunities that benefit both your practice and your clients. Let's collaborate to deliver exceptional results in financial recovery litigation.",
      conclusion: `Partnership over competition is our philosophy. Whether you need complete back-end support or collaborative representation, we're here to ensure your clients receive the best possible advocacy in specialized financial recovery forums.

At NPA Solutions, we understand that the legal profession grows stronger through collaboration. By working together, we can ensure that no client is left without expert representation simply because their advocate lacks exposure to specialized tribunal practice.

Let's build a partnership that empowers your practice and delivers justice for your clients.`
    }
  };
  const service = services[serviceId as keyof typeof services];
  if (!service) {
    return <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Service Not Found</h1>
          <p className="text-slate-600 mb-8">The requested service could not be found.</p>
          <Link to="/">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <ArrowLeft className="mr-2" size={16} />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>;
  }
  const ServiceIcon = service.icon;
  return <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-xl shadow-lg border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="font-bold text-2xl bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              NPA Solutions
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'Contact', href: '/contact' },
                { name: 'Expert Help', href: '/expert-help' }
              ].map((item) => (
                <Link 
                  key={item.name}
                  to={item.href} 
                  className="text-slate-600 hover:text-slate-900 transition-all duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            <div className="hidden md:flex">
              <LoginButton />
            </div>

            {/* Mobile Navigation */}
            <div className="flex items-center space-x-2 md:hidden">
              <LoginButton />
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900 px-2">
                  <ArrowLeft className="mr-1" size={14} />
                  <span className="text-xs">Back</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center">
            <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-3xl ${service.color} flex items-center justify-center mb-6 sm:mb-8 mx-auto`}>
              <ServiceIcon size={32} className={`${service.iconColor} sm:w-10 sm:h-10`} />
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 leading-tight">
              {service.title}
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <Link to="/expert-help">
                <Button size="lg" className={`bg-gradient-to-r ${service.gradient} text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold shadow-lg w-full sm:w-auto`}>
                  <Phone className="mr-2" size={18} />
                  Schedule Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold w-full sm:w-auto">
                  <Mail className="mr-2" size={18} />
                  Send Query
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16">
            {/* Litigation Areas - DRT & SARFAESI only */}
            {serviceId === "drt-sarfaesi-litigation" && 'litigationAreas' in service && (
              <motion.div initial={{
                opacity: 0,
                y: 30
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.8,
                delay: 0.1
              }} className="text-center">
                <h2 className="text-xl sm:text-2xl text-slate-600 mb-8 sm:mb-12">
                  {service.litigationAreas.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {service.litigationAreas.areas.map((area, index) => (
                    <div key={index} className="bg-slate-100 rounded-2xl px-6 py-4 border border-slate-200">
                      <h3 className="text-lg font-bold text-slate-900">
                        {area.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Features */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              <div className="text-center mb-8 sm:mb-12">
                <div className="flex flex-wrap justify-center gap-4">
                  
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8 text-center">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {service.features.map((feature, index) => <Card key={index} className="text-center p-4 sm:p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <CheckCircle className={`${service.iconColor} mx-auto mb-3`} size={20} />
                      <p className="text-xs sm:text-sm font-medium text-slate-700 leading-tight">{feature}</p>
                    </CardContent>
                  </Card>)}
              </div>
            </motion.div>

            {/* Full Description */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.3
          }} className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6 text-center sm:text-left">{service.subtitle}
            </h2>
              <div className="text-slate-600 leading-relaxed whitespace-pre-line text-base sm:text-lg text-justify">
                {service.fullDescription}
              </div>
            </motion.div>


            {/* Why Choose Us */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6 text-center sm:text-left">Why Choose <span className="bg-theme-gradient bg-clip-text text-transparent">NPA Solutions</span></h2>
              <div className="text-slate-600 leading-relaxed text-base sm:text-lg text-justify">
                {service.whyChooseUs.split('NPA Solutions').map((part, index, array) => (
                  <span key={index}>
                    {part}
                    {index < array.length - 1 && (
                      <span className="bg-theme-gradient bg-clip-text text-transparent font-semibold">NPA Solutions</span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Our Approach */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.5
          }}>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6 text-center sm:text-left">Our Approach</h2>
              <div className="text-slate-600 leading-relaxed whitespace-pre-line text-base sm:text-lg text-justify">
                {service.approach}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }} className={`bg-gradient-to-r ${service.buttonGradient} rounded-2xl p-6 sm:p-8 text-white text-center`}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Take Action Now</h2>
              <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 opacity-90 text-justify sm:text-center">{service.callToAction}</p>
              <Link to="/contact">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold w-full sm:w-auto">
                  <Phone className="mr-2" size={18} />
                  Contact Us
                </Button>
              </Link>
            </motion.div>

            {/* Conclusion */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.7
          }} className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Moving Forward</h2>
              <div className="text-slate-600 leading-relaxed whitespace-pre-line text-base sm:text-lg mb-6 sm:mb-8 text-justify">
                {service.conclusion}
              </div>
              <Link to="/services">
                <Button variant="outline" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-3 text-sm sm:text-base">
                  <ArrowLeft className="mr-2" size={16} />
                  View All Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.8
        }} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Frequently Asked
              <span className="block bg-theme-gradient bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">
              Common questions about {service.title.toLowerCase()}
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.9
        }}>
            <Accordion type="single" collapsible className="w-full space-y-4 sm:space-y-6">
              {getServiceFAQs(serviceId as string).map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-2xl px-4 sm:px-8 py-2 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline text-base sm:text-lg py-4 sm:py-6 leading-tight">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-4 sm:pb-6 text-sm sm:text-base text-justify">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default ServiceDetail;