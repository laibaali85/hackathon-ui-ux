import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function ContactSection() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden md:mt-20">
      {/* Decorative Elements */}
      <div className="absolute right-0 top-0 w-2/3 h-full">
        <div className="absolute right-0 top-0 w-96 h-96 bg-pink-50 rounded-full -translate-y-1/4 translate-x-1/4" />
        <div className="absolute right-20 top-40 w-8 h-8 bg-purple-200 rounded-full" />
        <div className="absolute right-96 top-20 w-4 h-4 bg-blue-200 rounded-full" />
      </div>

      <div className="container mx-auto px-4 py-16 relative  ">
        <div className="grid lg:grid-cols-2 gap-12 items-center ">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-wider text-gray-600">CONTACT US</p>
              <h1 className="text-4xl font-bold text-gray-900 lg:text-5xl">
                Get in touch today!
              </h1>
              <p className="text-gray-600 max-w-md">
                We know how large objects will act, but things on a small scale
              </p>
            </div>

            <div className="space-y-2">
              <p className="flex items-center text-gray-700">
                <span className="font-semibold mr-2">Phone :</span> +451 215 215
              </p>
              <p className="flex items-center text-gray-700">
                <span className="font-semibold mr-2">Fax :</span> +451 215 215
              </p>
            </div>

            <div className="flex space-x-6">
              <Link 
                href="#" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative lg:h-[600px]">
            <Image
              src="/contact-hero.png"
              alt="Family shopping together"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
      <section className="py-24 bg-white">
      {/* Support Cards Section */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            We help small businesses<br />with big ideas
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
          {/* Phone Support Card */}
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="rounded-full bg-blue-50 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-6 w-6 text-blue-500" />
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-muted-foreground">georgia.young@example.com</p>
                <p className="text-sm text-muted-foreground">georgia.young@ple.com</p>
              </div>
              <h3 className="font-semibold mb-2">Get Support</h3>
              <Button variant="outline" className="w-full">
                Submit Request
              </Button>
            </CardContent>
          </Card>

          {/* Location Card */}
          <Card className="text-center bg-slate-900 text-white">
            <CardContent className="pt-6">
              <div className="rounded-full bg-blue-500/10 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-blue-500" />
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-300">georgia.young@example.com</p>
                <p className="text-sm text-gray-300">georgia.young@ple.com</p>
              </div>
              <h3 className="font-semibold mb-2">Get Support</h3>
              <Button variant="outline" className="w-full border-gray-600 text-white bg-blue-600 hover:bg-gray-800">
                Submit Request
              </Button>
            </CardContent>
          </Card>

          {/* Email Support Card */}
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="rounded-full bg-blue-50 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Mail className="h-6 w-6 text-blue-500" />
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-muted-foreground">georgia.young@example.com</p>
                <p className="text-sm text-muted-foreground">georgia.young@ple.com</p>
              </div>
              <h3 className="font-semibold mb-2">Get Support</h3>
              <Button variant="outline" className="w-full">
                Submit Request
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Let's Talk Section */}
        <div className="text-center max-w-xl mx-auto">
          <div className="mb-8">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-t-[12px] border-t-blue-500 border-r-[8px] border-r-transparent rotate-180" />
              </div>
            </div>
            <p className="text-sm font-medium text-blue-500 mb-2">WE CAN&apos;T WAIT TO MEET YOU</p>
            <h2 className="text-3xl font-bold mb-6">Let&apos;s Talk</h2>
            <Button className="bg-blue-500 hover:bg-blue-600">
              Try it free now
            </Button>
          </div>
        </div>
      </div>
    </section>
  
    </div>
  )
}

