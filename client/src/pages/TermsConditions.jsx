import React from 'react'

const TermsConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="text-sm text-gray-500 mb-6">
        <strong>Effective Date:</strong> April 5, 2025 <br />
        <strong>Website:</strong>{' '}
        <a
          href="https://rrr-blog-1.onrender.com"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          RRR Blog
        </a>
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          By accessing and using the RRR Blog website, you agree to comply with and be bound by these Terms and Conditions.
          If you do not agree with any part of these terms, you must not use our website.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Changes to Terms</h2>
        <p>
          We reserve the right to update or change these Terms at any time without prior notice. Continued use of the site
          after changes means you accept the revised terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Intellectual Property</h2>
        <p>
          All content on RRR Blog, including text, graphics, images, and logos, is the property of RRR Blog or its content creators
          and is protected by copyright laws. You may not copy, distribute, or use our content without written permission.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. User Conduct</h2>
        <p>By using this website, you agree not to:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Post or share harmful, illegal, or abusive content</li>
          <li>Violate any applicable laws or regulations</li>
          <li>Attempt to gain unauthorized access to the site or its systems</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Disclaimer</h2>
        <p>
          All information provided on RRR Blog is for general informational purposes only. We do not guarantee the accuracy,
          completeness, or reliability of any content. Use the information at your own risk.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Limitation of Liability</h2>
        <p>
          RRR Blog shall not be held liable for any direct, indirect, or incidental damages resulting from the use or inability to use
          this website or its content.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. External Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the content, policies, or practices of any
          external sites.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws of your local jurisdiction. Any disputes will be resolved
          under those laws.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
        <p>
          If you have any questions about these Terms and Conditions, please contact us at:
        </p>
        <p className="mt-2">
          📧 Email:{' '}
          <a href="mailto:rrrblog1@gmail.com" className="text-blue-600 underline">
          rrrblog1@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}

export default TermsConditions