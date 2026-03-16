import React from 'react';
import { Link } from '@tanstack/react-router';
import { Waves, Github, Twitter, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-secondary/30 pt-20 pb-10 border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-2 group w-max">
              <Waves className="h-6 w-6 text-primary animate-pulse-slow" />
              <span className="text-xl font-display font-bold text-gradient tracking-tight">
                SELL WAVE
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Experience the next generation of commerce with our AI-driven multilingual marketplace. Buy and sell with unprecedented speed and intelligence.
            </p>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Marketplace */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-display font-bold text-lg text-foreground">Marketplace</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Explore All</Link>
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Trending Products</Link>
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Top Categories</Link>
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Featured Sellers</Link>
            </div>
          </div>

          {/* Business */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-display font-bold text-lg text-foreground">For Sellers</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sell on Sell Wave</Link>
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">AI Merchant Tools</Link>
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Global Logistics</Link>
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Seller Protection</Link>
            </div>
          </div>

          {/* Support */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-display font-bold text-lg text-foreground">Newsletter</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Get weekly updates on top trends and new global arrivals.
            </p>
            <div className="flex items-center space-x-2">
              <div className="relative flex-1 group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 pr-4 py-2 w-full bg-background border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <Button size="icon" className="bg-primary text-white shrink-0 rounded-lg shadow-lg shadow-primary/20">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-xs text-muted-foreground">
          <p>© {currentYear} Sell Wave Marketplace. All rights reserved.</p>
          <div className="flex items-center space-x-8">
            <Link to="/" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/" className="hover:text-primary transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
