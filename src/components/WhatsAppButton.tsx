import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/201091008224"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-accent shadow-accent flex items-center justify-center hover:scale-110 transition-transform animate-pulse-glow"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-accent-foreground" />
    </a>
  );
}
