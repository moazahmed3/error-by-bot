import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Rocket, Globe, Users } from "lucide-react";

export default function ExpansionSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <div
          className={`relative rounded-3xl overflow-hidden bg-gradient-to-br from-[hsl(207,49%,18%)] via-[hsl(205,55%,25%)] to-[hsl(200,80%,35%)] p-12 lg:p-20 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative z-10">
            <div className="flex justify-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[hsl(200,80%,60%)]/20 flex items-center justify-center animate-float">
                <Rocket className="w-7 h-7 text-[hsl(200,80%,70%)]" />
              </div>
              <div
                className="w-14 h-14 rounded-2xl bg-[hsl(200,80%,60%)]/20 flex items-center justify-center animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <Globe className="w-7 h-7 text-[hsl(200,80%,70%)]" />
              </div>
              <div
                className="w-14 h-14 rounded-2xl bg-[hsl(200,80%,60%)]/20 flex items-center justify-center animate-float"
                style={{ animationDelay: "1s" }}
              >
                <Users className="w-7 h-7 text-[hsl(200,80%,70%)]" />
              </div>
            </div>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-white mb-6">
              Your University Could Be Next 🚀
            </h2>
            <p className="text-[hsl(210,20%,82%)] text-lg max-w-2xl mx-auto mb-8">
              We started at EELU — now we're scaling up. If your university
              isn't listed yet, stay tuned. Our proven system is coming to more
              campuses soon. Don't miss out.
            </p>
            <div className="inline-flex  items-center gap-2 px-5 py-2.5 rounded-full bg-[hsl(200,80%,60%)]/20 text-[hsl(200,80%,70%)] text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[hsl(200,80%,60%)] animate-pulse" />
              Coming Soon to New Universities
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
