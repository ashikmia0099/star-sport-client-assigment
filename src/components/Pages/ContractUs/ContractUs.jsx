import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const ContractUs = () => {
    return (
        <section className="min-h-screen bg-gray-100 py-20 text-left">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
        <p className="text-center text-gray-600 mb-10">
          We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, we're here to help.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Get in Touch</h2>
              <p className="text-gray-600">📧 Email: <a href="mailto:support@sportshow.com" className="text-blue-500 underline">support@sportshow.com</a></p>
              <p className="text-gray-600">📞 Phone: <a href="tel:+18007767871" className="text-blue-500 underline">+1-800-SPORTS-1</a></p>
              <p className="text-gray-600">📍 Address: Sport Show HQ, 123 Arena Street, Sportsville, USA</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Business Inquiries</h2>
              <p className="text-gray-600">
                For sponsorships, partnerships, or media inquiries, email us at{' '}
                <a href="mailto:business@sportshow.com" className="text-blue-500 underline">business@sportshow.com</a>.
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Connect with Us</h2>
            <p className="text-gray-600 mb-6">Stay updated by following us on social media:</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-blue-700 hover:text-blue-500 text-3xl"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 text-3xl"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-pink-600 hover:text-pink-500 text-3xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-red-600 hover:text-red-500 text-3xl"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600">Sport Show - Where Every Fan Matters!</p>
        </div>
      </div>
    </section>
    );
};

export default ContractUs;