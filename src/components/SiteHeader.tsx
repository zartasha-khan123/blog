import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/logo.png" alt="Lilly Bakery" width={150} height={150} />
      </Link>
      <nav className="hidden md:flex items-center space-x-8">
        <Link href="/" className="text-white hover:text-gray-300 transition-colors">
          Home
        </Link>
        <Link href="#about" className="text-white hover:text-gray-300 transition-colors">
          About
        </Link>
        <Link href="/blogcards" className="text-white hover:text-gray-300 transition-colors">
          Menu
        </Link>
        <Link href="#cards" className="text-white hover:text-gray-300 transition-colors">
          Blog
        </Link>
        <Link href='/contactus'><Button variant="outline" className="text-black border-white hover:bg-yellow-700 hover:text-black">
          Contact Us
        </Button></Link>
      </nav>
    </header>



  )
}

