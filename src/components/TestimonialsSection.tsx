import { useState, useEffect, useCallback } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Ahmed Hassan",
    year: "Third Year",
    text: "Error by Bot completely changed how I study. The structured tasks and weekly quizzes helped me score consistently higher than before. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sara Mohamed",
    year: "Second Year",
    text: "The feedback system is incredible. I always know exactly where I stand and what to improve. My database and OOP grades improved significantly.",
    rating: 5,
  },
  {
    name: "Omar Ali",
    year: "Fourth Year",
    text: "I've been with Error by Bot since my first year. Their systematic approach to teaching is unmatched. The quizzes keep you accountable and the explanations are crystal clear.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-secondary/30 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-4">
            Don't Take Our Word — <span className="text-gradient">Hear Theirs</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Students who joined, committed, and saw real results.
          </p>
        </div>

        {/* Slider */}
        <div
          className={`max-w-2xl mx-auto transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative p-8 lg:p-12 rounded-2xl gradient-card shadow-card border border-border/50">
            <Quote className="w-10 h-10 text-accent/20 mb-6" />

            <div className="min-h-[120px]">
              <p className="text-foreground text-lg leading-relaxed mb-6 transition-opacity duration-300">
                {t.text}
              </p>
            </div>

            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>

            <div className="mb-6">
              <div className="font-heading text-lg font-semibold text-foreground">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.year}</div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={prev} className="rounded-full w-10 h-10">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={next} className="rounded-full w-10 h-10">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === current ? "bg-accent w-6" : "bg-border hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
