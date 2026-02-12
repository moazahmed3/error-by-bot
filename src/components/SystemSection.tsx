import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { PlayCircle, FileText, ClipboardCheck, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: PlayCircle,
    step: "01",
    title: "Weekly Explanation",
    desc: "Detailed lectures covering core concepts with practical examples and real-world applications.",
    color: "from-accent to-accent/70",
  },
  {
    icon: FileText,
    step: "02",
    title: "Structured Task",
    desc: "Hands-on assignments designed to reinforce learning and build problem-solving skills.",
    color: "from-accent/90 to-accent/60",
  },
  {
    icon: ClipboardCheck,
    step: "03",
    title: "Quiz Assessment",
    desc: "Scored out of 10 — weekly quizzes that measure comprehension and identify knowledge gaps.",
    color: "from-accent/80 to-accent/50",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Feedback & Tracking",
    desc: "Personalized performance reports with actionable insights for continuous improvement.",
    color: "from-accent/70 to-accent/40",
  },
];

export default function SystemSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="system" className="py-24 lg:py-32 relative bg-secondary/30">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Learning System</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A proven 4-step cycle designed to maximize retention and real understanding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className={`relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="p-6 rounded-2xl gradient-card shadow-card border border-border/50 hover:shadow-card-hover transition-all duration-300 h-full group">
                <div className="text-5xl font-heading font-bold text-accent/15 mb-4">
                  {s.step}
                </div>
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4 shadow-accent group-hover:scale-110 transition-transform">
                  <s.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>

              {/* Arrow connector (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-accent/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
