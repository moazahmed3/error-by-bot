import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does the learning system work?",
    a: "Our system follows a 4-step cycle: weekly explanation sessions, structured tasks, quizzes scored out of 10, and personalized feedback with performance tracking. This proven approach ensures deep understanding rather than surface-level memorization.",
  },
  {
    q: "Which university do you currently operate at?",
    a: "We are currently operating at EELU University, with plans to expand to more universities soon. Stay tuned for announcements about new locations.",
  },
  {
    q: "Can I enroll in multiple courses?",
    a: "Absolutely! Many students enroll in multiple courses simultaneously. We offer packages and discounts for students taking more than one subject.",
  },
  {
    q: "How are quizzes scored?",
    a: "All quizzes are scored on a scale of 1-10. Your scores are tracked over time to show improvement and identify areas that need more attention.",
  },
  {
    q: "What if I fall behind?",
    a: "Our continuous feedback system ensures you never fall too far behind. We provide personalized guidance and additional resources to help you catch up quickly.",
  },
  {
    q: "How do I join?",
    a: "Simply click the 'Join Now' button to fill out our enrollment form, or reach out to us via WhatsApp or email. We'll get you set up right away!",
  },
];

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-4">
            Got <span className="text-gradient">Questions?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Here are the answers to the most common things students ask us.
          </p>
        </div>

        <div
          className={`max-w-3xl mx-auto transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl gradient-card shadow-card border border-border/50 px-6 overflow-hidden"
              >
                <AccordionTrigger className="font-heading font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
