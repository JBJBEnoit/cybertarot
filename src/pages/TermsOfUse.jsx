import "../terms-of-use.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function TermsOfUse(){

  return(
    <main>
      <div id="termsWrap">
    <Link to="/">
      <img id="termsLogo" src="assets/logo.gif" alt="CyberTarot logo" />
            <h1>CyberTarot</h1>
              </Link>
      <h2>Terms of Use</h2>

      <h3>Last Updated: December 10, 2023</h3>

      <p>Please carefully read the following Terms of Use (&quot;Terms&quot;) as they outline the rules and regulations for the use of CyberTarot (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) and your rights and responsibilities. By accessing or using CyberTarot, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our website.</p>

<h3>1. Acceptance of Terms</h3>
<p>By using CyberTarot, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, you may not use the website.</p>

<h3>2. Tarot Readings and AI-Generated Content</h3>
<p>CyberTarot provides tarot readings generated by artificial intelligence (AI), specifically utilizing ChatGPT-3.5 Turbo for text content and DALLE-3 for images. The content produced by ChatGPT-3.5 Turbo is for entertainment purposes only and should not be considered as professional advice. CyberTarot is not responsible for any decisions made based on the tarot readings provided.</p>

<h3>3. User Conduct</h3>
<p>You agree not to use CyberTarot for any unlawful purpose or in any way that could damage, disable, overburden, or impair the website. You also agree not to use the website to engage in any unauthorized or illegal activities, or to use any site content, including tarot readings, graphics, logos, and text, to create a malicious or slanderous misrepresentation of CyberTarot or its affiliates, or their respective officers, directors, employees, or agents. Attempting to access the CyberTarot API except through the website&apos;s frontend is considered an unauthorized activity.</p>

<h3>4. No Professional Advice</h3>
<p>CyberTarot is not a substitute for professional advice, including but not limited to medical, financial, or legal advice. Users are encouraged to seek professional advice for their specific circumstances.</p>

<h3>5. Intellectual Property</h3>
<p>All AI-generated site content, including tarot readings, graphics, logos, and text, is made available in the public domain. You may reproduce, distribute, modify, or create derivative works from any AI-generated content on the website without our prior written consent. The CyberTarot website as a whole, however, is the property of CyberTarot and is protected by copyright laws. You may not reproduce, distribute, or modify the CyberTarot website as a whole without prior written consent.</p>

<h3>6. Limitation of Liability</h3>
<p>CyberTarot is provided &quot;as is&quot; and makes no representations or warranties, express or implied, regarding the accuracy or reliability of the tarot readings or the website. We shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our website.</p>

<h3>7. Indemnification</h3>
<p>You agree to indemnify and hold CyberTarot, its affiliates, and their respective officers, directors, employees, and agents harmless from any and all claims, liabilities, damages, costs, and expenses, including legal fees, arising from your use of the website or your violation of these Terms.</p>

<h3>8. Changes to Terms</h3>
<p>CyberTarot reserves the right to modify or revise these Terms at any time. Your continued use of the website after any changes to these Terms constitutes acceptance of those changes.</p>

<h3>9. Governing Law</h3>
<p>These Terms shall be governed by and construed in accordance with the laws of Ontario, Canada. Any legal action or proceeding arising out of or relating to these Terms shall be brought exclusively in the courts located within Ontario, Canada.</p>

<p>By using CyberTarot, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you have any questions or concerns, please contact me at <a href="mailto:jsn.benoit@gmail.com">jsn.benoit@gmail.com</a></p>

<p>Thank you for using CyberTarot!</p>
<p id="returnLink"><Link to="/">Back to Home</Link></p>
</div>
<Footer />
  </main>
  )
}

export default TermsOfUse;
