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
    text: "The feedback system is incredible. I always know exactly where I stand and what to improve. My Database and OOP grades improved significantly.",
    rating: 5,
  },
  {
    name: "Omar Ali",
    year: "Fourth Year",
    text: "I've been with Error by Bot since my first year. Their systematic approach is unmatched. The quizzes keep you accountable and the explanations are crystal clear.",
    rating: 5,
  },
  {
    name: "Mariam Adel",
    year: "First Year",
    text: "Programming felt impossible at first, but the step-by-step system made everything clear. The tasks really build your understanding.",
    rating: 5,
  },
  {
    name: "Youssef Khaled",
    year: "Second Year",
    text: "Web and Software Engineering became much easier with their structured plan. The weekly follow-up keeps me disciplined.",
    rating: 5,
  },
  {
    name: "Nada Ibrahim",
    year: "Third Year",
    text: "Operating Systems was one of the hardest subjects for me, but their explanations simplified every concept.",
    rating: 5,
  },
  {
    name: "Mostafa Tarek",
    year: "Second Year",
    text: "Data Structure finally makes sense. The quizzes out of 10 make it competitive and motivating.",
    rating: 5,
  },
  {
    name: "Aya Mahmoud",
    year: "First Year",
    text: "Electronics and Logic were very confusing before joining. Now I feel confident solving exams.",
    rating: 5,
  },
  {
    name: "Karim Samy",
    year: "Third Year",
    text: "Algorithm became enjoyable instead of stressful. Their problem-solving sessions are powerful.",
    rating: 5,
  },
  {
    name: "Hana Reda",
    year: "Fourth Year",
    text: "Embedded Systems explanations are very practical and clear. They focus on real understanding.",
    rating: 5,
  },
  {
    name: "Mohamed Adel",
    year: "Second Year",
    text: "The feedback reports after every quiz helped me fix my weaknesses quickly.",
    rating: 5,
  },
  {
    name: "Salma Ashraf",
    year: "Third Year",
    text: "NLP sounded complicated, but they break down every topic in a very organized way.",
    rating: 5,
  },
  {
    name: "Ali Mostafa",
    year: "First Year",
    text: "IC and Programming became structured instead of random studying. Huge difference.",
    rating: 5,
  },
  {
    name: "Reem Hany",
    year: "Second Year",
    text: "Database sessions are very practical. I finally understand normalization and queries properly.",
    rating: 5,
  },
  {
    name: "Mahmoud Fathy",
    year: "Third Year",
    text: "Advanced Software used to feel overwhelming, but their structured roadmap made it manageable.",
    rating: 5,
  },
  {
    name: "Fatma Yasser",
    year: "Fourth Year",
    text: "Selected Lab preparation was smooth and organized. I felt fully prepared before exams.",
    rating: 5,
  },
  {
    name: "Ibrahim Nasser",
    year: "Second Year",
    text: "OOP concepts finally clicked with real-life examples and practical tasks.",
    rating: 5,
  },
  {
    name: "Dina Khaled",
    year: "First Year",
    text: "The weekly quizzes motivate me to stay consistent. I stopped last-minute studying.",
    rating: 5,
  },
  {
    name: "Tamer Wael",
    year: "Third Year",
    text: "Microcontroller sessions are very detailed and hands-on. I gained real confidence.",
    rating: 5,
  },
  {
    name: "Laila Ahmed",
    year: "Second Year",
    text: "Their system makes you disciplined. It's not just teaching, it's a complete academic structure.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((p) => (p + 1) % testimonials.length),
    [],
  );
  const prev = useCallback(
    () =>
      setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length),
    [],
  );

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-secondary/30 relative"
    >
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-4">
            Don't Take Our Word —{" "}
            <span className="text-gradient">Hear Theirs</span>
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
              <div className="font-heading text-lg font-semibold text-foreground">
                {t.name}
              </div>
              <div className="text-sm text-muted-foreground">{t.year}</div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prev}
                  className="rounded-full w-10 h-10"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={next}
                  className="rounded-full w-10 h-10"
                >
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
                      i === current
                        ? "bg-accent w-6"
                        : "bg-border hover:bg-muted-foreground"
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
