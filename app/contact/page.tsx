'use client'

import React, { useState } from 'react'
import { Mail, Phone, MapPin, Building, User, Loader2 } from 'lucide-react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

// Define Zod schema for form validation
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
})

// Type inference from schema
type ContactFormData = z.infer<typeof contactFormSchema>

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // Initialize react-hook-form with zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  })

  // Form submission handler for API Gateway
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitSuccess(null)
    setErrorMessage(null)
    
    try {
      // API Gateway endpoint - replace with your actual endpoint
      const apiGatewayUrl = 'https://xs1y905ufi.execute-api.eu-north-1.amazonaws.com/prod/message'
      
      const response = await fetch(apiGatewayUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any API keys or authorization headers if needed
          // 'x-api-key': 'your-api-key-here',
        },
        body: JSON.stringify({
          Name: data.name,
          Email: data.email,
          Phone: data.phone || "",
          Subject: data.subject,
          Message: data.message,
        }),
      })

      // Parse the response
      const responseData = await response.json()

      if (!response.ok) {
        throw new Error(responseData.error || responseData.message || 'Failed to submit form')
      }

      // Handle success
      setSubmitSuccess(true)
      reset() // Clear form
    } catch (error) {
      // Handle error
      setSubmitSuccess(false)
      setErrorMessage(error instanceof Error ? error.message : 'An unknown error occurred')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl font-bold mb-12">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-gray-700 mb-8">
              We&apos;d love to hear from you and discuss how we can help with your project needs.
              Our team is ready to provide you with the information you need and answer any
              questions you may have.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-4 mt-1 text-gray-700" />
                <div>
                  <p className="font-medium text-lg">Email</p>
                  <a
                    href="mailto:idahvis@gmail.com"
                    className="text-gray-700 hover:text-black transition-colors duration-300"
                  >
                    idahvis@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-4 mt-1 text-gray-700" />
                <div>
                  <p className="font-medium text-lg">Phone</p>
                  <p className="text-gray-700">09036009426</p>
                  <p className="text-gray-700">08032678880</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-4 mt-1 text-gray-700" />
                <div>
                  <p className="font-medium text-lg">Location</p>
                  <p className="text-gray-700">Nigeria</p>
                </div>
              </div>

              <div className="flex items-start">
                <Building className="h-6 w-6 mr-4 mt-1 text-gray-700" />
                <div>
                  <p className="font-medium text-lg">Company Information</p>
                  <p className="text-gray-700">IDAHVIS NIGERIA LIMITED</p>
                  <p className="text-gray-700">RC Number: 1451843</p>
                  <p className="text-gray-700">Established: 2017</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            
            {submitSuccess === true && (
              <div className="mb-6 p-4 bg-green-100 text-green-800 border border-green-200 rounded">
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}
            
            {submitSuccess === false && (
              <div className="mb-6 p-4 bg-red-100 text-red-800 border border-red-200 rounded">
                <p>Sorry, there was a problem sending your message.</p>
                {errorMessage && <p className="text-sm mt-1">{errorMessage}</p>}
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className={`w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 focus:ring-black`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 focus:ring-black`}
                  placeholder="Your email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="phone">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone")}
                  className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                  placeholder="Your phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register("subject")}
                  className={`w-full p-3 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 focus:ring-black`}
                  placeholder="Subject of your message"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  {...register("message")}
                  className={`w-full p-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 focus:ring-black`}
                  placeholder="Your message"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors duration-300 disabled:bg-gray-400 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-4 w-4" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t-2 border-black pt-12">
          <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <User className="h-12 w-12 mr-4 p-2 bg-stone-100 rounded-full text-gray-700" />
              <div>
                <p className="font-medium text-lg">Idahtonye Toby</p>
                <p className="text-gray-700">Managing Director</p>
                <p className="text-gray-700">Email: idahvis@gmail.com</p>
                <p className="text-gray-700">Phone: 09036009426</p>
              </div>
            </div>

            <div className="flex items-start">
              <User className="h-12 w-12 mr-4 p-2 bg-stone-100 rounded-full text-gray-700" />
              <div>
                <p className="font-medium text-lg">Chukwu John Ikechukwu</p>
                <p className="text-gray-700">MNSE, COREN</p>
                <p className="text-gray-700">Phone: 08032678880</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-stone-100">
          <h2 className="text-2xl font-semibold mb-4">Our Banking Details</h2>
          <p className="text-gray-700 mb-2">
            <span className="font-medium">Bank:</span> Keystone Bank
          </p>
          <p className="text-gray-700 italic">
            (Full account details will be provided upon request)
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
