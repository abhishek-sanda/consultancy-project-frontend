import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Consulting/Manpower IT & Non IT',
      description: 'Comprehensive consulting and manpower solutions for both IT and non-IT sectors, providing skilled professionals and strategic guidance.',
      icon: '👥',
      features: ['IT Staffing', 'Non-IT Recruitment', 'Consulting Services', 'Talent Management', 'HR Solutions'],
      detailedDescription: 'Our consulting and manpower services cover the entire spectrum of IT and non-IT recruitment. We provide end-to-end solutions including talent acquisition, skill assessment, training, and placement. Our expert consultants work closely with clients to understand their specific requirements and deliver customized staffing solutions that drive business success.',
      benefits: ['Access to qualified candidates', 'Reduced recruitment time', 'Cost-effective solutions', 'Quality assurance', 'Ongoing support']
    },
    {
      title: 'Marine Manufacturing',
      description: 'Specialized manufacturing solutions for marine industry including shipbuilding, marine equipment, and offshore structures.',
      icon: '🚢',
      features: ['Shipbuilding', 'Marine Equipment', 'Offshore Structures', 'Quality Control', 'Technical Support'],
      detailedDescription: 'We specialize in marine manufacturing with expertise in shipbuilding, marine equipment production, and offshore structure fabrication. Our state-of-the-art facilities and experienced team ensure compliance with international maritime standards and deliver high-quality products that meet the demanding requirements of the marine industry.',
      benefits: ['International quality standards', 'Custom manufacturing', 'Technical expertise', 'Timely delivery', 'After-sales support']
    },
    {
      title: 'Marketing',
      description: 'Strategic marketing services to boost your brand presence, increase market share, and drive business growth.',
      icon: '📈',
      features: ['Brand Strategy', 'Market Research', 'Digital Marketing', 'Advertising', 'Sales Promotion'],
      detailedDescription: 'Our marketing services encompass comprehensive strategies to enhance your brand visibility and market penetration. From market research and brand strategy development to digital marketing campaigns and traditional advertising, we create tailored marketing solutions that resonate with your target audience and drive measurable business results.',
      benefits: ['Increased brand awareness', 'Higher market share', 'Improved ROI', 'Customer engagement', 'Competitive advantage']
    },
    {
      title: 'Properties',
      description: 'Real estate consulting and property management services including buying, selling, leasing, and property development.',
      icon: '🏢',
      features: ['Property Sales', 'Real Estate Consulting', 'Property Management', 'Leasing Services', 'Market Analysis'],
      detailedDescription: 'Our property services cover the complete real estate lifecycle from acquisition and development to sales, leasing, and management. We provide expert guidance on property investments, market analysis, and portfolio management to help clients maximize their real estate investments and achieve their property-related objectives.',
      benefits: ['Expert market insights', 'Investment optimization', 'Property management', 'Legal compliance', 'Financial planning']
    },
    {
      title: 'Courier and Cargo',
      description: 'Reliable courier and cargo services for domestic and international shipping, logistics, and supply chain management.',
      icon: '📦',
      features: ['Domestic Shipping', 'International Cargo', 'Logistics Solutions', 'Supply Chain', 'Express Delivery'],
      detailedDescription: 'We provide comprehensive courier and cargo services with global reach and local expertise. Our logistics network ensures timely and secure delivery of goods across domestic and international destinations. We handle everything from small packages to large cargo shipments with end-to-end tracking and customer support.',
      benefits: ['Global shipping network', 'Real-time tracking', 'Secure packaging', 'Express delivery', 'Customer support']
    },
    
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const closeServiceDetail = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section for Services */}
      <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Comprehensive consulting solutions tailored to meet your business needs and drive sustainable growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
                onClick={() => handleServiceClick(service)}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-500 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center mb-1">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-blue-600 hover:text-blue-800 font-medium">
                  Learn More →
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-gray-600">Understanding your needs and objectives</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Strategy</h3>
              <p className="text-gray-600">Developing customized solutions</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600">Executing plans with precision</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Results</h3>
              <p className="text-gray-600">Measuring success and optimizing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <span className="text-4xl mr-4">{selectedService.icon}</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{selectedService.title}</h2>
                </div>
                <button
                  onClick={closeServiceDetail}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Overview</h3>
                  <p className="text-gray-600 mb-6">{selectedService.detailedDescription}</p>

                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Key Features</h3>
                  <ul className="text-gray-600 mb-6">
                    {selectedService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center mb-2">
                        <span className="text-green-500 mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Benefits</h3>
                  <ul className="text-gray-600 mb-6">
                    {selectedService.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center mb-2">
                        <span className="text-blue-500 mr-3">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Ready to Get Started?</h3>
                    <p className="text-gray-600 mb-4">
                      Contact us today to discuss how we can help you with {selectedService.title.toLowerCase()}.
                    </p>
                    <Link
                      to="/contact"
                      onClick={closeServiceDetail}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 inline-block"
                    >
                      Request a Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Services;