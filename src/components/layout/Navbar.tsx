import React from 'react';
import { Link } from '@tanstack/react-router';
import { ShoppingCart, User, Search, Menu, X, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isAuthenticated, login, user } = useAuth();

  return (
    <nav className="sticky top-0 z-50 w-full glass border-b border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Waves className="h-8 w-8 text-primary animate-pulse-slow" />
              <div className="absolute inset-0 blur-lg bg-primary/20 group-hover:bg-primary/40 transition-colors" />
            </div>
            <span className="text-2xl font-display font-bold text-gradient">
              SELL WAVE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Marketplace
            </Link>
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Categories
            </Link>
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Sellers
            </Link>
          </div>

          {/* Search & Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 w-64 bg-secondary/50 border border-border/50 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
              />
            </div>
            
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-accent text-[10px] font-bold text-white rounded-full flex items-center justify-center">
                0
              </span>
            </Button>

            {isAuthenticated ? (
              <Button variant="ghost" size="icon" asChild>
                <Link to="/">
                  <User className="h-5 w-5" />
                </Link>
              </Button>
            ) : (
              <Button onClick={() => login()} className="rounded-full px-6 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                Join Sell Wave
              </Button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden absolute top-16 left-0 w-full glass border-b border-border/40 transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="flex flex-col p-4 space-y-4">
          <Link to="/" className="text-lg font-medium p-2 hover:bg-secondary/50 rounded-lg">Marketplace</Link>
          <Link to="/" className="text-lg font-medium p-2 hover:bg-secondary/50 rounded-lg">Categories</Link>
          <Link to="/" className="text-lg font-medium p-2 hover:bg-secondary/50 rounded-lg">Sellers</Link>
          <div className="pt-4 border-t border-border/40 flex flex-col space-y-4">
            {!isAuthenticated && (
              <Button onClick={() => login()} className="w-full rounded-xl py-6 bg-primary">
                Join Sell Wave
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
