"use client"

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-[#6366F1] border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <Link
          href="/"
          className="text-2xl font-bold text-white tracking-wide"
        >
          Vivida
        </Link>

        {/* Navigation */}
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex gap-2">
            
            {/* Product */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:cursor-pointer ">
                Product
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[320px] p-4 space-y-3">
                  <NavItem
                    href="/how-it-works"
                    title="How It Works"
                    description="Daily practices designed to rewire self-belief"
                  />
                  <NavItem
                    href="#features"
                    title="Features"
                    description="Sessions, streaks, progress, and reflection"
                  />
                  <NavItem
                    href="#progress"
                    title="Progress & Streaks"
                    description="Build consistency and track growth"
                  />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Science */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/science"
                  className="px-4 py-2 text-white/90"
                >
                  Science
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* About */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/about"
                  className="px-4 py-2 text-white/90"
                >
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        {/* Auth actions */}
        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button
              variant="ghost"
              className="text-white hover:bg-white hover:cursor-pointer hover:text-[#6366F1]"
            >
              Log in
            </Button>
          </Link>

          <Link href="/signup">
            <Button className="bg-white text-[#6366F1] hover:bg-white/90 hover:cursor-pointer rounded-full px-6">
              Get Started
            </Button>
          </Link>
        </div>

      </div>
    </nav>
  )
}

function NavItem({
  title,
  description,
  href,
}: {
  title: string
  description: string
  href: string
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block rounded-md p-3 hover:bg-muted transition"
        >
          <div className="font-medium">{title}</div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
