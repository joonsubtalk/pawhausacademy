import { Link } from 'wouter';
const TermsPage = () => {
  return (
    <div className="container mx-auto p-8 text-pawhaus-dark">
        <h1 className='text-3xl font-bold mb-4'>Terms of Service</h1>
        <p><strong>Last Updated:</strong> March 20, 2025</p>
        <p>Welcome to PawHaus Academy, LLC (“Company”, “we”, “us”, or “our”). These Website Terms of Service (“Terms”) govern your use of our website. By accessing or using our website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our website.</p>
        
        <h2 className='text-xl font-bold my-2'>1. Use of Website</h2>
        <p>Our website is provided for informational purposes only.</p>
        <p>You must be at least 18 years old to use this website.</p>
        <p>You agree not to misuse the website, including attempting to gain unauthorized access to our systems.</p>

        <h2 className='text-xl font-bold my-2'>2. Intellectual Property</h2>
        <p>All content, including text, images, logos, and design elements, is the property of PawHaus Academy, LLC and is protected by copyright and trademark laws.</p>
        <p>You may not use, reproduce, distribute, or modify any content without our express permission.</p>

        <h2 className='text-xl font-bold my-2'>3. User-Generated Content</h2>
        <p>If you submit reviews, comments, or other content to our website, you grant us a non-exclusive, royalty-free license to use, display, and distribute that content.</p>
        <p>You agree not to post unlawful, offensive, or misleading content.</p>

        <h2 className='text-xl font-bold my-2'>4. Third-Party Links</h2>
        <p>Our website may contain links to third-party websites for your convenience.</p>
        <p>We do not endorse or assume responsibility for third-party content, products, or services.</p>

        <h2 className='text-xl font-bold my-2'>5. Disclaimer of Warranties</h2>
        <p>Our website is provided “as is” without warranties of any kind, either express or implied.</p>
        <p>We do not guarantee that the website will be error-free or uninterrupted.</p>

        <h2 className='text-xl font-bold my-2'>6. Limitation of Liability</h2>
        <p>We are not responsible for any damages arising from your use of our website.</p>
        <p>To the fullest extent permitted by law, we disclaim liability for any indirect, incidental, or consequential damages.</p>

        <h2 className='text-xl font-bold my-2'>7. Privacy Policy</h2>
        <p>Your use of our website is also subject to our Privacy Policy, which can be found <Link href="/privacy">here</Link>.</p>

        <h2 className='text-xl font-bold my-2'>8. Changes to Terms</h2>
        <p>We reserve the right to update these Terms at any time. Your continued use of our website after changes are posted constitutes your acceptance of the revised Terms.</p>

        <h2 className='text-xl font-bold my-2'>9. Governing Law</h2>
        <p>These Terms are governed by the laws of Los Angeles County, California (USA). Any disputes shall be resolved in the appropriate courts of Los Angeles County, California (USA).</p>

        <h2 className='text-xl font-bold my-2'>10. Contact Us</h2>
        <p>If you have any questions regarding these Terms, please contact us at:</p>
        <p><strong>PawHaus Academy, LLC</strong><br />
        25876 Stevenson Ranch Rd. #318<br />
        Stevenson Ranch, CA 91381<br />
        Email:
        <a href="mailto:faculty@pawhausacademy.com">faculty@pawhausacademy.com</a><br />
        (747) 297-4327</p>
    </div>
  );
};

export default TermsPage;