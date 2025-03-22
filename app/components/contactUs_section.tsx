
'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowRight, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
})

// ✅ Type inference from schema
type ContactFormData = z.infer<typeof contactFormSchema>

const ContactSection = () => {
  // ✅ Form state management
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // ✅ Initialize react-hook-form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  // ✅ Form submission handler for API Gateway
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitSuccess(null)
    setErrorMessage(null)

    try {
      const apiGatewayUrl =
        'https://xs1y905ufi.execute-api.eu-north-1.amazonaws.com/prod/message'

      const response = await fetch(apiGatewayUrl, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Name: data.name,
          Email: data.email,
          Message: data.message,
        }),
      })

      const responseData = await response.json()

      if (!response.ok) {
        throw new Error(responseData.error || responseData.message || 'Failed to submit form')
      }

      setSubmitSuccess(true)
      reset() // Clear form
    } catch (error) {
      setSubmitSuccess(false)
      setErrorMessage(error instanceof Error ? error.message : 'An unknown error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* ✅ Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* ✅ Left Side: Contact Information */}
          <div>
            <p className="text-gray-700 mb-8">
              We&apos;d love to hear from you. Whether you have a question about our services,
              projects, or anything else, our team is ready to answer all your questions.
            </p>

            <div className="space-y-4">
              {/* Email Info */}
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-1 text-gray-700" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-700">idahvis@gmail.com</p>
                </div>
              </div>

              {/* Phone Info */}
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-1 text-gray-700" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-700">09036009426</p>
                  <p className="text-gray-700">08032678880</p>
                </div>
              </div>

              {/* Location Info */}
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-gray-700" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-700">Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ Right Side: Contact Form */}
          <div className="bg-stone-100 p-6">
            <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
            <p className="text-gray-700 mb-4">
              Fill out the form below for a quick response from our team.
            </p>

            {/* ✅ Success Message */}
            {submitSuccess === true && (
              <div className="mb-4 p-4 bg-green-100 text-green-800 border border-green-200 rounded">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {/* ✅ Error Message */}
            {submitSuccess === false && (
              <div className="mb-4 p-4 bg-red-100 text-red-800 border border-red-200 rounded">
                <p>Sorry, there was a problem sending your message.</p>
                {errorMessage && <p className="text-sm mt-1">{errorMessage}</p>}
              </div>
            )}

            {/* ✅ Contact Form */}
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              {/* Name Input */}
              <div>
                <label className="block text-sm mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name')}
                  className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                  placeholder="Your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-sm mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register('message')}
                  className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                  placeholder="Your message"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors duration-300 disabled:bg-gray-400 flex items-center justify-center"
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

        {/* ✅ Link to View More Contact Details */}
        <div className="mt-10 text-center">
          <Link href="/contact" className="inline-flex items-center group">
            <span className="text-lg font-medium border-b-2 border-black group-hover:border-gray-500 transition-colors duration-300">
              View all contact details
            </span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

