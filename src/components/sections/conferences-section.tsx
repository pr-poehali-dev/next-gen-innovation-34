import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

const conferences = [
  {
    year: "апрель 2025",
    title: "Человек. Общество. Культура. Социализация (ЧОКС)",
    type: "Международная молодёжная научно-практическая",
    place: "БГПУ им. М. Акмуллы, Уфа",
    status: "Планируется",
    note: "XXI выпуск · ежегодная",
  },
  {
    year: "2024",
    title: "Человек. Общество. Культура. Социализация (ЧОКС)",
    type: "Международная молодёжная научно-практическая",
    place: "БГПУ им. М. Акмуллы, Уфа",
    status: "Состоялась",
    note: "XX выпуск",
  },
  {
    year: "2023",
    title: "Человек. Общество. Культура. Социализация (ЧОКС)",
    type: "Международная молодёжная научно-практическая",
    place: "БГПУ им. М. Акмуллы, Уфа",
    status: "Состоялась",
    note: "XIX выпуск",
  },
  {
    year: "2022",
    title: "Человек. Общество. Культура. Социализация (ЧОКС)",
    type: "Международная молодёжная научно-практическая",
    place: "БГПУ им. М. Акмуллы, Уфа",
    status: "Состоялась",
    note: "XVIII выпуск",
  },
  {
    year: "2024",
    title: "Республиканский форум «Образование глазами современной молодёжи»",
    type: "Республиканская",
    place: "БГПУ им. М. Акмуллы, Уфа",
    status: "Состоялась",
    note: "",
  },
  {
    year: "2023",
    title: "Республиканский форум «Образование глазами современной молодёжи»",
    type: "Республиканская",
    place: "БГПУ им. М. Акмуллы, Уфа",
    status: "Состоялась",
    note: "",
  },
]

const statusStyle: Record<string, string> = {
  "Состоялась": "text-foreground/40",
  "Планируется": "text-foreground/90",
}

export function ConferencesSection() {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-10 transition-all duration-700 md:mb-14 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Конференции
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Научная жизнь кафедры</p>
        </div>

        <div className="space-y-0">
          {conferences.map((conf, i) => (
            <div
              key={i}
              className={`group flex items-start gap-4 border-b border-foreground/10 py-5 transition-all duration-700 hover:border-foreground/20 md:gap-8 md:py-6 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="w-10 shrink-0 font-mono text-xs text-foreground/30 md:text-sm">{conf.year}</span>

              <div className="min-w-0 flex-1">
                <h3 className="mb-1 font-sans text-sm font-light leading-snug text-foreground transition-transform duration-300 group-hover:translate-x-1 md:text-base lg:text-lg">
                  {conf.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5">
                  <span className="font-mono text-xs text-foreground/40">{conf.type}</span>
                  <span className="font-mono text-xs text-foreground/25">·</span>
                  <div className="flex items-center gap-1">
                    <Icon name="MapPin" size={10} className="text-foreground/30" />
                    <span className="font-mono text-xs text-foreground/40">{conf.place}</span>
                  </div>
                  {conf.note ? (
                    <>
                      <span className="font-mono text-xs text-foreground/25">·</span>
                      <span className="font-mono text-xs text-foreground/30 italic">{conf.note}</span>
                    </>
                  ) : null}
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-1.5">
                {conf.status === "Планируется" && (
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-foreground/70" />
                )}
                <span className={`font-mono text-xs ${statusStyle[conf.status] ?? "text-foreground/40"}`}>
                  {conf.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}