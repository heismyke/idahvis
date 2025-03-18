import React from 'react'

const Services = () => {
  const services = [
    {
      title: 'Project Management & Construction Consultancy',
      description:
        'We offer comprehensive project management and construction consultancy services to ensure timely and cost-effective execution of projects. Our team of experts helps clients develop well-articulated programs to solve problems through superior services.',
      capabilities: [
        'Project planning and scheduling',
        'Budget management and cost control',
        'Quality assurance and control',
        'Construction supervision',
        'Risk management',
        'Procurement management',
      ],
    },
    {
      title: 'Information Technology/Technological Services',
      description:
        'Our IT services are designed to meet the continuously changing requirements of our clients. We provide innovative technological solutions to enhance business operations and improve productivity.',
      capabilities: [
        'Set up of acoustic call centers',
        'Office IT equipment supply and setup',
        'Audio/visual components installation',
        'Starlink deployment',
        'IT infrastructure management',
        'Technical support and maintenance',
      ],
    },
    {
      title: 'General Contracts and Supplies',
      description:
        'We execute contracts and supply various materials and equipment to meet the needs of our clients. Our focus is on delivering quality products and services within specified timelines.',
      capabilities: [
        'Supply of IT equipment',
        'Office setup and furnishing',
        'Procurement of printers and other office equipment',
        'Installation of GMP windows',
        'Painting and maintenance services',
        'Training center setup',
      ],
    },
  ]
  return (
    <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-12">Our Services</h1>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="border-t-2 border-black pt-8">
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-700 mb-6">{service.description}</p>

              <h3 className="text-lg font-medium mb-3">Capabilities</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                {service.capabilities.map((capability, idx) => (
                  <li key={idx} className="text-gray-700 flex items-start">
                    <span className="mr-2 text-black">•</span>
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-stone-100">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
          <p className="text-gray-700 mb-4">
            At IDAHVIS NIGERIA LIMITED, we are committed to maintaining the highest standards of
            quality and professionalism in all our services. Our team of experienced professionals
            ensures that every project is executed with precision and excellence.
          </p>
          <p className="text-gray-700">
            We are poised to offer unmatched effective and efficient services to our clients as we
            bring to play our wealth of experience and professional resources. We will be very
            pleased if you give us the opportunity to be part of the drive towards the successful
            achievement of your organizational goals.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
