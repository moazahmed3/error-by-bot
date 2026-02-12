import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BarChart3, TrendingUp, Target, Award } from "lucide-react";

const mockData = [
  { week: "W1", score: 6 },
  { week: "W2", score: 7 },
  { week: "W3", score: 7.5 },
  { week: "W4", score: 8 },
  { week: "W5", score: 8.5 },
  { week: "W6", score: 9 },
  { week: "W7", score: 9 },
  { week: "W8", score: 9.5 },
];

export default function DashboardMockup() {
  const { ref, isVisible } = useScrollAnimation();
  const maxScore = 10;

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-4">
            See Your Growth <span className="text-gradient">Week by Week</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            No more guessing — track every quiz, every task, and watch your scores climb.
          </p>
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="rounded-2xl gradient-card shadow-card border border-border/50 p-6 lg:p-8">
            {/* Top stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { icon: BarChart3, label: "Avg. Score", value: "8.4/10" },
                { icon: TrendingUp, label: "Improvement", value: "+58%" },
                { icon: Target, label: "Tasks Done", value: "24/24" },
                { icon: Award, label: "Rank", value: "Top 10%" },
              ].map((s) => (
                <div key={s.label} className="p-4 rounded-xl bg-secondary/50 border border-border/50">
                  <s.icon className="w-5 h-5 text-accent mb-2" />
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                  <div className="font-heading font-bold text-foreground">{s.value}</div>
                </div>
              ))}
            </div>

            {/* Chart mockup */}
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground mb-4">Weekly Quiz Scores</div>
              <div className="flex items-end gap-3 h-40">
                {mockData.map((d) => (
                  <div key={d.week} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full relative rounded-t-lg overflow-hidden bg-secondary/50">
                      <div
                        className="w-full gradient-accent rounded-t-lg transition-all duration-1000"
                        style={{
                          height: isVisible ? `${(d.score / maxScore) * 120}px` : "0px",
                        }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">{d.week}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
