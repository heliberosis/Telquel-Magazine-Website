"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Search, Menu, Sun, Moon } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const navItems = [
    { href: '/politique', label: 'Politique' },
    { href: '/culture', label: 'Culture' },
    { href: '/economie', label: 'Économie' },
    { href: '/international', label: 'International' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-playfair text-3xl font-bold tracking-tight text-red-600 hover:text-red-700 transition-colors">
              Telquel
            </span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link 
                    href={item.href} 
                    className={`px-4 py-2 transition-colors hover:text-primary ${
                      pathname === item.href ? 'text-primary font-medium' : 'text-muted-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Link href="/abonnement">
            <Button variant="default">S'abonner</Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}