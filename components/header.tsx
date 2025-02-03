import Link from "next/link"
import { Button } from "@/components/ui/button"
import { UserCircle } from "lucide-react"

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-2xl font-bold text-purple-600">
            StubHub
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/sports" className="text-sm hover:text-purple-600">
              Sports
            </Link>
            <Link href="/concerts" className="text-sm hover:text-purple-600">
              Concerts
            </Link>
            <Link href="/theater" className="text-sm hover:text-purple-600">
              Theater
            </Link>
            <Link href="/festivals" className="text-sm hover:text-purple-600">
              Festivals
            </Link>
            <Link href="/cities" className="text-sm hover:text-purple-600">
              Cities
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/gift-cards" className="text-sm hover:text-purple-600">
            Gift Cards
          </Link>
          <Link href="/explore" className="text-sm hover:text-purple-600">
            Explore
          </Link>
          <Link href="/sell" className="text-sm hover:text-purple-600">
            Sell
          </Link>
          <Link href="/favorites" className="text-sm hover:text-purple-600">
            Favorites
          </Link>
          <Link href="/my-tickets" className="text-sm hover:text-purple-600">
            My Tickets
          </Link>
          <Button variant="ghost" size="icon">
            <UserCircle className="h-5 w-5" />
            <span className="sr-only">Sign In</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

