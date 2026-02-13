import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background - dark in dark mode, light in light mode */}
      <div className="absolute inset-0">
        <div className="hidden dark:block w-full h-full">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(207,49%,10%)]/60 via-[hsl(207,49%,12%)]/80 to-background" />
        </div>
        <div className="block dark:hidden w-full h-full bg-gradient-to-b from-[hsl(210,25%,95%)] via-[hsl(210,25%,97%)] to-background" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/25 text-accent text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              4+ Years of Structured Learning
            </div>
          </div>

          <h1
            className={`font-heading text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-foreground dark:text-[hsl(0,0%,100%)] transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Stop Struggling.{" "}
            <span className="text-accent dark:text-[hsl(200,80%,65%)]">
              Start Understanding.
            </span>
          </h1>

          <p
            className={`text-lg sm:text-xl text-muted-foreground dark:text-[hsl(210,20%,80%)] max-w-2xl mx-auto mb-10 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Join 1000+ university students who transformed their grades with our
            structured system — weekly tasks, quizzes, and feedback that
            actually work.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <a href="https://forms.gle/aCM555Fa9PN6pv41A" target="_blank">
              <Button
                size="lg"
                className="gradient-accent text-accent-foreground shadow-accent hover:opacity-90 transition-all border-0 text-base px-8 py-6 rounded-xl"
              >
                Join Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="#courses">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 rounded-xl border-border  dark:border-[hsl(0,0%,100%)]/25 text-foreground dark:text-[hsl(0,0%,100%)] hover:bg-accent dark:hover:bg-[hsl(0,0%,100%)]/10 bg-transparent"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Courses
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
