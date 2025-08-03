import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  borrowerType: string;
  enterpriseName?: string;
  loanValue: string;
  service: string;
  query: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Processing contact form submission...");
    
    const apiKey = Deno.env.get("RESEND_API_KEY");
    if (!apiKey) {
      throw new Error("RESEND_API_KEY environment variable is not set");
    }
    console.log("API key exists:", apiKey.substring(0, 10) + "...");
    
    const formData: ContactFormData = await req.json();
    console.log("Form data received:", { ...formData, email: "***@***" });

    // Create HTML email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #2563eb, #7c3aed); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">NPA Solutions</p>
        </div>
        
        <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0;">
          <h2 style="color: #1e293b; margin-top: 0;">Contact Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 12px 0; font-weight: bold; color: #475569; width: 40%;">Full Name:</td>
              <td style="padding: 12px 0; color: #1e293b;">${formData.fullName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 12px 0; font-weight: bold; color: #475569;">Email:</td>
              <td style="padding: 12px 0; color: #1e293b;">${formData.email}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 12px 0; font-weight: bold; color: #475569;">Phone:</td>
              <td style="padding: 12px 0; color: #1e293b;">${formData.phone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 12px 0; font-weight: bold; color: #475569;">Borrower Type:</td>
              <td style="padding: 12px 0; color: #1e293b;">${formData.borrowerType}</td>
            </tr>
            ${formData.enterpriseName ? `
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 12px 0; font-weight: bold; color: #475569;">Enterprise Name:</td>
              <td style="padding: 12px 0; color: #1e293b;">${formData.enterpriseName}</td>
            </tr>
            ` : ''}
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 12px 0; font-weight: bold; color: #475569;">Loan Value:</td>
              <td style="padding: 12px 0; color: #1e293b;">₹${formData.loanValue}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 12px 0; font-weight: bold; color: #475569;">Service:</td>
              <td style="padding: 12px 0; color: #1e293b;">${formData.service}</td>
            </tr>
          </table>
          
          <h3 style="color: #1e293b; margin: 25px 0 15px 0;">Legal Query/Requirements:</h3>
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb;">
            <p style="margin: 0; color: #1e293b; line-height: 1.6;">${formData.query}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
            <p style="color: #64748b; font-size: 14px; margin: 0;">
              This email was sent from the NPA Solutions contact form.<br>
              Submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            </p>
          </div>
        </div>
      </div>
    `;

    const emailResult = await resend.emails.send({
      from: "NPA Solutions Contact <noreply@resend.dev>",
      to: ["npasolutions.in@gmail.com"], // Your verified email address
      subject: `New Contact Form Submission - ${formData.service}`,
      html: htmlContent,
    });

    console.log("Email result from Resend:", JSON.stringify(emailResult, null, 2));

    if (emailResult.error) {
      console.error("Resend API error:", JSON.stringify(emailResult.error, null, 2));
      throw new Error(`Resend API error: ${JSON.stringify(emailResult.error)}`);
    }

    if (!emailResult.data) {
      console.error("No data returned from Resend:", emailResult);
      throw new Error("Email sending failed - no response data from Resend");
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Email sent successfully",
        emailId: emailResult.data?.id 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Failed to send email" 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);