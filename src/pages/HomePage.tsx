import React from 'react';
import { ShoppingBag, Sparkles, Globe, ShieldCheck, Zap, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse-slow delay-700" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center space-y-8"
          >
            <Badge variant="outline" className="px-4 py-1.5 rounded-full glass border-primary/20 text-primary animate-fade-in flex items-center space-x-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span className="text-[10px] font-bold tracking-widest uppercase">The Future of Commerce is Here</span>
            </Badge>

            <h1 className="text-5xl md:text-8xl font-display font-black tracking-tight leading-[0.9] text-foreground max-w-5xl">
              GLOBAL MARKETPLACE <br />
              <span className="text-gradient">AI-DRIVEN SCALE</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Experience "Sell Wave"—the world's first ultra-modern, multilingual AI commerce engine. High-performance, secure, and built for global scale.
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Button size="lg" className="h-14 px-8 rounded-full bg-primary text-white shadow-2xl shadow-primary/40 hover:scale-105 transition-transform text-lg group">
                <ShoppingBag className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Start Shopping
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-full glass border-white/10 hover:bg-white/5 text-lg">
                <TrendingUp className="mr-2 h-5 w-5" />
                Sell Globally
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center pt-2">
            <div className="w-1 h-2 bg-muted-foreground rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Globe className="h-8 w-8 text-primary" />}
            title="Multilingual"
            description="Sell in 50+ languages with automated AI-driven translations that preserve brand intent."
          />
          <FeatureCard 
            icon={<ShieldCheck className="h-8 w-8 text-accent" />}
            title="Secure Scale"
            description="Enterprise-grade security with AES-256 encryption and autonomous fraud protection."
          />
          <FeatureCard 
            icon={<Zap className="h-8 w-8 text-yellow-400" />}
            title="Instant Flow"
            description="High-performance SSR/ISR ensures lightning-fast load times across the globe."
          />
        </div>
      </section>

      {/* Placeholder Category Feed */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-display font-bold">TOP CATEGORIES</h2>
              <p className="text-muted-foreground mt-2">Curated global collections by our AI trend engine.</p>
            </div>
            <Button variant="link" className="text-primary font-bold">View All Categories</Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <CategoryCard name="Electronics" count="12k+ Products" image="https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=2070&auto=format&fit=crop" />
            <CategoryCard name="Fashion" count="8k+ Products" image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" />
            <CategoryCard name="Home & Living" count="5k+ Products" image="https://images.unsplash.com/photo-1484101403033-57105d2b77ac?q=80&w=2070&auto=format&fit=crop" />
            <CategoryCard name="Health & Beauty" count="3k+ Products" image="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2070&auto=format&fit=crop" />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300">
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function CategoryCard({ name, count, image }: { name: string, count: string, image: string }) {
  return (
    <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/5 cursor-pointer">
      <img 
        src={image} 
        alt={name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-6 left-6 right-6">
        <h4 className="text-xl font-bold text-white mb-1">{name}</h4>
        <p className="text-white/60 text-xs font-medium tracking-wider uppercase">{count}</p>
      </div>
    </div>
  );
}
