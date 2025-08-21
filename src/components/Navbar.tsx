"use client";
import ThemeToggle from '@/components/ThemeToggle';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import Link from 'next/link';

export default function Navbar() {
    return (

    <header className="sticky top-0 z-40 w-full border-b bg-background">
    <div className="container flex h-auto items-center justify-between px-2 md:px-4">
        <Link href="#about"
                    className="flex items-center gap-1 text-2xl font-bold
                                hover:text-green-400" prefetch={false}>
            EDEMESSI Florian
        </Link>
        <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
            <NavigationMenuLink
                href="#projects"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md
                bg-background px-4 py-2 text-xl font-medium transition-colors
                hover:bg-accent
                hover:text-accent-foreground
                focus:bg-accent focus:text-accent-foreground
                focus:outline-none disabled:pointer-events-none
                disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                Projects
            </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <NavigationMenuLink
                href="#skills"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md
                bg-background px-4 py-2 text-xl font-medium transition-colors
                hover:bg-accent
                hover:text-accent-foreground
                focus:bg-accent focus:text-accent-foreground
                focus:outline-none disabled:pointer-events-none
                disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"              >
                Skills
            </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <NavigationMenuLink
                href="#contact"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md
                bg-background px-4 py-2 text-xl font-medium transition-colors
                hover:bg-accent
                hover:text-accent-foreground
                focus:bg-accent focus:text-accent-foreground
                focus:outline-none disabled:pointer-events-none
                disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                Contact
            </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <ThemeToggle />
            </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
    </div>
    </header>
)}
