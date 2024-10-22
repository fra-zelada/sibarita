'use client'

import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function FooterComponent() {
  return (
    <footer className="bg-background">
      <div className="container px-4 py-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Delicious Bites</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Serving mouthwatering dishes with passion since 2010.
            </p>
            <h4 className="mb-2 text-sm font-semibold">Opening Hours</h4>
            <p className="text-sm">Monday - Friday: 11am - 10pm</p>
            <p className="text-sm">Saturday - Sunday: 10am - 11pm</p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase">Quick Links</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/menu" className="hover:underline">Menu</Link>
              <Link href="/reservations" className="hover:underline">Reservations</Link>
              <Link href="/about" className="hover:underline">About Us</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </nav>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase">Contact & Subscribe</h4>
            <div className="mb-4">
              <p className="text-sm">123 Gourmet Street</p>
              <p className="text-sm">Foodville, FL 12345</p>
              <p className="text-sm">Phone: (555) 123-4567</p>
              <p className="text-sm">Email: info@deliciousbites.com</p>
            </div>
            <form className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow"
              />
              <Button type="submit" className="w-full">Subscribe to Newsletter</Button>
            </form>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Delicious Bites. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}