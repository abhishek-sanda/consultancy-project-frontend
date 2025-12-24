import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Our Consultancy
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We provide expert consulting services to help your business grow and succeed.
            Our team of professionals is dedicated to delivering exceptional results.
          </p>
          <div className="space-x-4">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              With years of experience and a proven track record, we deliver tailored solutions
              that drive real results for our clients. Our commitment to excellence and
              customer satisfaction sets us apart.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2">Expertise</h3>
                <p className="text-gray-600">Deep industry knowledge and specialized skills</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
                <p className="text-gray-600">Fast, reliable delivery of high-quality solutions</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-2">Partnership</h3>
                <p className="text-gray-600">Collaborative approach focused on your success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              We offer a comprehensive range of consulting services designed to meet your unique business needs.
            </p>
            <Link
              to="/services"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and discover how we can help you achieve your goals.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Contact Us Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;