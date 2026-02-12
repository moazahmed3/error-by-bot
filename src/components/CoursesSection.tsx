import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";

const coursesByYear: Record<string, { name: string; desc: string }[]> = {
  "First Year": [
    { name: "Programming", desc: "Fundamentals of programming logic and syntax" },
    { name: "Introduction to Computer (IC)", desc: "Core computing concepts and digital literacy" },
    { name: "Electronics", desc: "Basics of electronic circuits and components" },
    { name: "Logic", desc: "Mathematical logic and boolean algebra" },
  ],
  "Second Year": [
    { name: "OOP", desc: "Object-oriented programming principles and design" },
    { name: "Database", desc: "Database design, SQL, and data management" },
    { name: "Software Engineering", desc: "SDLC, methodologies, and project management" },
    { name: "Web", desc: "Web development technologies and frameworks" },
    { name: "Data Structure", desc: "Arrays, trees, graphs, and algorithmic thinking" },
  ],
  "Third Year": [
    { name: "Operating System (OS)", desc: "Process management, memory, and scheduling" },
    { name: "Algorithm", desc: "Algorithm design, analysis, and optimization" },
    { name: "NLP", desc: "Natural language processing and text analysis" },
    { name: "Advanced Software", desc: "Advanced software architecture and patterns" },
    { name: "Microcontroller", desc: "Embedded systems and microcontroller programming" },
  ],
  "Fourth Year": [
    { name: "Selected Lab", desc: "Specialized lab projects and hands-on practice" },
    { name: "Embedded System", desc: "Embedded systems design and implementation" },
  ],
};

const years = Object.keys(coursesByYear);

export default function CoursesSection() {
  const [activeYear, setActiveYear] = useState(years[0]);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="courses" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <div
          className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-4">
            Courses We <span className="text-gradient">Teach</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From First Year basics to Fourth Year specializations — we've got your entire journey covered.
          </p>
        </div>

        {/* Year Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeYear === year
                  ? "gradient-accent text-accent-foreground shadow-accent"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {coursesByYear[activeYear].map((course, i) => (
            <div
              key={course.name}
              className="p-6 rounded-2xl gradient-card shadow-card border border-border/50 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <BookOpen className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-semibold text-foreground mb-1">{course.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{course.desc}</p>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-accent hover:text-accent hover:bg-accent/10 p-0 h-auto font-medium"
                  >
                    Enroll Now <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
