import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-4">
            Ready to <span className="text-gradient">Level Up?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Message us now and start your journey to better grades.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-5 rounded-2xl gradient-card shadow-card border border-border/50">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center shadow-accent">
                  <Phone className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">
                    WhatsApp
                  </div>
                  <div className="font-heading font-semibold text-foreground">
                    <a href="https://wa.me/201091008224" target="_blank">
                      01091008224
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-2xl gradient-card shadow-card border border-border/50">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center shadow-accent">
                  <Mail className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-heading font-semibold text-foreground">
                    <a href="mailto:errorbyb@gmail.com" target="_blank">
                      errorbyb@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-2xl gradient-card shadow-card border border-border/50">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center shadow-accent">
                  <Youtube className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Youtube</div>
                  <div className="font-heading font-semibold text-foreground">
                    <a
                      href="https://www.youtube.com/@ErrorbyBOT"
                      target="_blank"
                    >
                      Error by BOT
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-4 p-6 rounded-2xl gradient-card shadow-card border border-border/50 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="rounded-xl bg-background border-border"
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="rounded-xl bg-background border-border"
              required
            />
            <Textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="rounded-xl bg-background border-border min-h-[120px]"
              required
            />
            <Button
              type="submit"
              className="w-full gradient-accent text-accent-foreground shadow-accent hover:opacity-90 transition-opacity border-0 rounded-xl py-6"
            >
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
