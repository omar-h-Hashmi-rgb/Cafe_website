'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react'
import contactData from '@/data/contact.json'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch to make a reservation, 
            ask questions, or just say hello.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>

              {/* Contact Details */}
              <div className="space-y-6 mb-12">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a 
                      href={`tel:${contactData.contact.phone}`}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {contactData.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a 
                      href={`mailto:${contactData.contact.email}`}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {contactData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      {contactData.contact.address.street}<br />
                      {contactData.contact.address.city}, {contactData.contact.address.state} {contactData.contact.address.zipCode}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Opening Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {Object.entries(contactData.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between">
                      <span className="font-medium capitalize">{day}</span>
                      <span className="text-gray-600">{hours}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href={contactData.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href={contactData.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href={contactData.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Reservation Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Make a Reservation</CardTitle>
                  <CardDescription>
                    Book your table and we'll ensure everything is ready for your visit
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                      <p className="text-green-800">
                        Thank you! Your reservation request has been submitted. We'll contact you shortly to confirm.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                      <p className="text-red-800">
                        Sorry, there was an error submitting your reservation. Please try again or call us directly.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                          Date *
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                          Time *
                        </label>
                        <select
                          id="time"
                          name="time"
                          required
                          value={formData.time}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select time</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="11:30">11:30 AM</option>
                          <option value="12:00">12:00 PM</option>
                          <option value="12:30">12:30 PM</option>
                          <option value="13:00">1:00 PM</option>
                          <option value="13:30">1:30 PM</option>
                          <option value="14:00">2:00 PM</option>
                          <option value="18:00">6:00 PM</option>
                          <option value="18:30">6:30 PM</option>
                          <option value="19:00">7:00 PM</option>
                          <option value="19:30">7:30 PM</option>
                          <option value="20:00">8:00 PM</option>
                          <option value="20:30">8:30 PM</option>
                          <option value="21:00">9:00 PM</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                          Guests *
                        </label>
                        <select
                          id="guests"
                          name="guests"
                          required
                          value={formData.guests}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          {[1,2,3,4,5,6,7,8].map(num => (
                            <option key={num} value={num.toString()}>
                              {num} {num === 1 ? 'Guest' : 'Guests'}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Special Requests
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Any dietary restrictions, special occasions, or requests..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Reservation'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}