'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Phone } from "lucide-react"
import Link from "next/link"

export function LocationSectionComponent() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <Card className="flex flex-col h-full">
            <CardContent className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-4">Our Location</h3>
              <p className="mb-4">123 Gourmet Street, Foodville, FC 12345</p>
              <h4 className="font-semibold mb-2">Hours of Operation</h4>
              <ul className="mb-6">
                <li>Monday - Friday: 11:00 AM - 10:00 PM</li>
                <li>Saturday - Sunday: 10:00 AM - 11:00 PM</li>
              </ul>
              <div className="mt-auto flex space-x-4">
                <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">
                  <Phone size={32} />
                  <span className="sr-only">WhatsApp</span>
                </Link>
                <Link href="https://instagram.com/yourrestaurant" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700">
                  <Instagram size={32} />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card className="flex flex-col h-full">
            <CardContent className="p-0 flex-grow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1510579767785"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Location"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}