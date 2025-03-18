import React from 'react'

const About = () => {
  return (
    <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-12">About Us</h1>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Company Profile</h2>
            <p className="text-gray-700 mb-4">
              IDAHVIS NIGERIA LIMITED was incorporated in 2017 under the companies and Allied
              Matters Act of 1990 with RC Number &quot;1451843&quot;. We are a wholly indigenous
              multidisciplinary consulting company specialized in Project Management & Construction
              Consultancy, Information Technology/Technological Services, General Contracts and
              Supplies with the unique capabilities of meeting the continuously changing
              requirements of our clients.
            </p>
            <p className="text-gray-700">
              Our services are well known and ranked among the best in the industry and it is our
              policy to assist our clients to develop a well-articulated program in solving problems
              through the offering of superior services, providing unique value and maintaining
              solid relationship to ensure client satisfaction. In order to ensure effective
              integrated and support services at the end users point, we operate and maintain a
              well-equipped office with highly skilled and experienced professionals that guarantee
              satisfaction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              We are committed to consistently deliver quality projects on schedule using innovative
              cost-effective solutions within a defined budget scope.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-700">
              To become a leading solution provider in the areas of General Consultancy Services,
              IT/Technological Services, Project Management & Construction, General Contracts and
              Supplies in Nigeria.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-gray-700">
              IDAHVIS NIGERIA LIMITED has established a core team of very experienced technical and
              highly trained professionals with proven competence and high integrity, who have
              worked with top companies in the industry. The good blend of skills within the team
              enables us to serve our clients to a total satisfaction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-medium">Idahtonye Toby</p>
                <p className="text-gray-700">Managing Director</p>
                <p className="text-gray-700">Email: idahvis@gmail.com</p>
                <p className="text-gray-700">Phone: 09036009426</p>
              </div>
              <div>
                <p className="font-medium">Chukwu John Ikechukwu</p>
                <p className="text-gray-700">MNSE, COREN</p>
                <p className="text-gray-700">Phone: 08032678880</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
