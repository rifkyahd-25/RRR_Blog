import React from 'react'

export default function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto p-6 text-gray-800">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-6">
            <strong>Effective Date:</strong> April 5, 2025 <br />
            <strong>Website:</strong>{' '}
            <a href="https://rrr-blog-1.onrender.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              RRR Blog
            </a>
          </p>
    
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc list-inside mt-2">
              <li>
                <strong>Personal Information</strong> (only if you voluntarily provide it, such as via a contact form or newsletter subscription): Name, Email address
              </li>
              <li>
                <strong>Non-Personal Information:</strong> Browser type, IP address, Pages visited, Time spent on pages, Referring site
              </li>
            </ul>
            <p className="mt-2">We use cookies and analytics tools (like Google Analytics) to improve user experience and understand visitor behavior.</p>
          </section>
    
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside">
              <li>Improve our content and user experience</li>
              <li>Respond to inquiries or feedback</li>
              <li>Send occasional updates or newsletters (only if you’ve subscribed)</li>
              <li>Monitor and analyze usage trends and preferences</li>
            </ul>
            <p className="mt-2"><strong>We do not sell or share your personal data</strong> with third parties for marketing purposes.</p>
          </section>
    
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">3. Third-Party Services</h2>
            <p>
              RRR Blog may use third-party services (such as analytics or comment plugins) that collect data according to their own privacy policies.
              Please refer to those services for further information.
            </p>
          </section>
    
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">4. Cookies</h2>
            <p>
              Cookies are small data files stored on your device. You can choose to disable cookies in your browser settings,
              but this may affect your experience on the site.
            </p>
          </section>
    
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Opt-out of receiving newsletters or marketing emails at any time</li>
            </ul>
          </section>
    
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">6. Children’s Privacy</h2>
            <p>
              RRR Blog is not intended for children under the age of 13. We do not knowingly collect personal information from children.
            </p>
          </section>
    
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">7. Changes to This Privacy Policy</h2>
            <p>
              We may update this policy occasionally. Changes will be reflected on this page with a revised effective date.
            </p>
          </section>
    
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, feel free to contact us at:
            </p>
            <p className="mt-2">
              📧 Email: <a href="mailto:rrrblog1@gmail.com" className="text-blue-600 underline">rrrblog1@gmail.com</a>
            </p>
          </section>
        </div>
      );
}
