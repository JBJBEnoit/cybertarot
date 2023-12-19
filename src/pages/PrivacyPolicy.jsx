import "../terms-of-use.css";
import { Link } from "react-router-dom";

function PrivacyPolicy(){

  return(
    <main>
      <div id="termsWrap">
    <Link to="/">
      <img id="termsLogo" src="assets/logo.gif" alt="CyberTarot logo" />
            <h1>CyberTarot</h1>
              </Link>
      <h2>Privacy Policy</h2>

      <h3>Last Updated: December 12, 2023</h3>

      <p>Thank you for visiting CyberTarot (the &quot;Website&quot;). Your privacy is important to us, and we are committed to protecting it. This Privacy Policy is designed to help you understand how we collect, use, and safeguard your information when you visit our Website.</p>
    <p>By using our Website, you agree to the terms of this Privacy Policy. If you do not agree with these terms, please do not use our Website.</p>
<h3>Information We Do Not Collect</h3>
<p>We do not collect any personal information from our users. Personal information includes, but is not limited to, names, addresses, email addresses, or any other information that could be used to identify you.</p>

<h3>Cookies and Tracking Technologies</h3>
<p>We do not use cookies or any tracking technologies to collect personal information about you. Our Website may use session cookies for the sole purpose of enhancing your user experience, but these cookies are not used to collect any personal information and are deleted when you close your browser.</p>

<h3>Google AdSense</h3>
<p>While we do use Google AdSense on our Website to display advertisements, please note that Google AdSense may use cookies and web beacons to collect information about your activities on our Website. However, these technologies are solely controlled by Google, and we do not have access to or control over the information collected by Google AdSense.</p>
<p>Please refer to Google&apos;s Privacy Policy for more information about how Google collects and processes data: <a href="https://policies.google.com/privacy?hl=en-US">Google Privacy & Terms.</a></p>
<h3>Third-Party Links</h3>
<p>Our Website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read the privacy policies of these websites before providing any personal information.</p>

<h3>Changes to This Privacy Policy</h3>
<p>We reserve the right to update this Privacy Policy at any time without notice. It is your responsibility to review this Privacy Policy periodically for any changes. Your continued use of our Website after any modifications to the Privacy Policy will constitute your acceptance of such changes.</p>

<h3>Contact Us</h3>
<p>If you have any questions about this Privacy Policy, please contact me at <a href="mailto:jsn.benoit@gmail.com">jsn.benoit@gmail.com</a></p>

<h3>GDPR Compliance</h3>
<p>While we do not collect personal information, we are committed to GDPR compliance. If you believe that we may have collected any personal information, please contact us immediately, and we will take the necessary steps to investigate and address the issue.</p>

<p>Thank you for using CyberTarot!</p>
<p id="returnLink"><Link to="/">Back to Home</Link></p>
</div>
  </main>
  )
}

export default PrivacyPolicy;
