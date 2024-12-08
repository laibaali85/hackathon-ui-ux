import Payment from "@/components/product-list-page/Payment"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function PricingSection() {
  return (
    <div className="min-h-screen bg-white py-16 md:mt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl font-bold">Pricing</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Problems trying to resolve the conflict between the two major realms of Classical physics
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-medium`}>Monthly</span>
            <div className="bg-[#23A6F0] rounded-full p-1 cursor-pointer">
              <div className="h-6 w-12 relative bg-white rounded-full">
                <div className="absolute right-1 top-1 h-4 w-4 rounded-full bg-[#23A6F0] transition-transform"></div>
              </div>
            </div>
            <span className={`text-sm font-medium`}>Yearly</span>
            <span className="ml-2 inline-block px-2 py-1 text-xs bg-[#23A6F0] text-white rounded-full">
              Save 25%
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Tier */}
          <Card className="relative">
            <CardHeader>
              <CardTitle>FREE</CardTitle>
              <CardDescription>Organize across all apps by hand</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">$0</span>
                <span className="text-muted-foreground ml-1">Per month</span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Unlimited product updates</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Unlimited product updates</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Unlimited product updates</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Try for free</Button>
            </CardFooter>
          </Card>

          {/* Standard Tier */}
          <Card className="relative border-primary bg-slate-900 text-white">
            <CardHeader>
              <CardTitle>STANDARD</CardTitle>
              <CardDescription className="text-gray-300">Organize across all apps by hand</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">$9.99</span>
                <span className="text-gray-300 ml-1">Per month</span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Unlimited product updates</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Unlimited product updates</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Unlimited product updates</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="secondary">Try for free</Button>
            </CardFooter>
          </Card>

          {/* Premium Tier */}
          <Card className="relative">
            <CardHeader>
              <CardTitle>PREMIUM</CardTitle>
              <CardDescription>Organize across all apps by hand</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">$19.99</span>
                <span className="text-muted-foreground ml-1">Per month</span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Unlimited product updates</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Unlimited product updates</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Unlimited product updates</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Try for free</Button>
            </CardFooter>
          </Card>
        </div>

        {/* Trusted By Section */}
        <Payment />

        {/* FAQ Section */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Pricing FAQs</h3>
            <p className="text-muted-foreground">
              Problems trying to resolve the conflict between the two major realms of Classical physics
            </p>
          </div>
          
          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-2">
                <h4 className="font-semibold">the quick fox jumps over the lazy dog</h4>
                <p className="text-muted-foreground text-sm">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </p>
              </div>
            ))}
          </div>
          
          {/* Support Link */}
          <div className="text-center mb-20">
            <Link href="/support" className="text-primary hover:underline">
              Haven&apos;t got your answer? Contact our support
            </Link>
          </div>
          
          {/* CTA Section */}
          <div className="text-center max-w-2xl mx-auto space-y-6 pb-12">
            <h2 className="text-3xl font-bold">Start your 14 days free trial</h2>
            <p className="text-muted-foreground">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.
            </p>
            <Button size="lg" className="px-8">
              Try it free now
            </Button>
            
            {/* Social Links */}
            <div className="flex justify-center items-center gap-6 pt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
      </div>
      </div>
    </div>
  )
}

