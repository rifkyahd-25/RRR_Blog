import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-center">About RRR Blog</h1>
      
      <div className="mb-6">
        <p className="text-lg leading-relaxed">
          Welcome to <strong>RRR Blog</strong>, your go-to destination for insightful articles, thought-provoking ideas, and practical tips on the world of technology, blogging, and more.
        </p>
        <p className="text-lg mt-4 leading-relaxed">
          At RRR Blog, our mission is to provide our readers with high-quality, well-researched content that is both informative and engaging. Whether you're a tech enthusiast, an aspiring blogger, or someone seeking to stay ahead of industry trends, we strive to offer valuable insights that help you grow and succeed in the digital world.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
        <p className="text-lg leading-relaxed">
          Our vision is simple: to become a trusted source for valuable resources and actionable information that can help individuals and businesses navigate the fast-paced world of technology and online entrepreneurship. We believe in empowering our readers with knowledge, whether it’s through detailed tutorials, in-depth product reviews, or the latest industry updates.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">What We Cover</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed">
          <li>Technology & Gadgets: Reviews, trends, and news in the tech world.</li>
          <li>Blogging & Content Creation: Tips, guides, and strategies for successful blogging.</li>
          <li>Online Business & Marketing: Insights into growing and monetizing an online presence.</li>
          <li>Personal Development: Advice on productivity, mindset, and personal growth.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Why Choose RRR Blog?</h2>
        <p className="text-lg leading-relaxed">
          At RRR Blog, we are committed to delivering top-notch content with a focus on quality and relevance. Our team of passionate writers and experts work diligently to provide our readers with the latest trends and practical advice, so you can stay ahead in the digital age.
        </p>
        <p className="text-lg mt-4 leading-relaxed">
          We understand that the online world is constantly evolving, which is why we’re always adapting our content to meet the needs of our diverse audience. Whether you're just starting or you're a seasoned professional, we have something for everyone.
        </p>
      </div>

      <div className="text-center mt-8">
        <h2 className="text-xl font-semibold mb-2">Join Our Community</h2>
        <p className="text-lg leading-relaxed mb-4">
          We invite you to explore our articles, share your thoughts, and join the conversation. Don’t forget to subscribe to our newsletter for the latest updates straight to your inbox.
        </p>
        <a href="/contact" className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-colors">
          Get In Touch
        </a>
      </div>
    </div>
  );
};

export default About;
