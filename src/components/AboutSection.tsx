import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, BookCheck, MessageSquare, TrendingUp } from "lucide-react";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "1000+", label: "Students Taught" },
  { value: "90%+", label: "Success Rate" },
  { value: "20+", label: "Courses" },
];

const highlights = [
  {
    icon: Target,
    title: "Structured Tasks",
    desc: "Organized weekly assignments to reinforce learning",
  },
  {
    icon: BookCheck,
    title: "Weekly Quizzes",
    desc: "Regular assessments to track your progress",
  },
  {
    icon: MessageSquare,
    title: "Continuous Feedback",
    desc: "Personalized guidance on every step",
  },
  {
    icon: TrendingUp,
    title: "Performance Tracking",
    desc: "Monitor your growth with data-driven insights",
  },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 lg:py-32 relative ">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Stats */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center p-6 rounded-2xl gradient-card shadow-card border border-border/50"
            >
              <div className="text-3xl lg:text-4xl font-heading font-bold text-accent mb-1">
                {s.value}
              </div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        {/* About content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">
              Built on <span className="text-gradient">Real Understanding</span>
              , Not Memorization
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Tired of last-minute cramming that leads nowhere? We've spent 4+
              years perfecting a system that makes learning stick — so you walk
              into exams with confidence, not anxiety.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our students don't just pass — they understand. And that's why
              we're expanding from EELU to more universities across the region.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {highlights.map((h) => (
              <div
                key={h.title}
                className="p-6 rounded-2xl gradient-card shadow-card border border-border/50 hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4 shadow-accent group-hover:scale-110 transition-transform">
                  <h.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {h.title}
                </h3>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
