import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"
import { QRCodeSVG } from "qrcode.react"

const publications = [
  {
    year: "2024",
    authors: "Шафикова Г.Р., Бурнасова Н.Ю.",
    title: "Этнокультурное образование в современной школе: теория и практика",
    journal: "Вестник БГПУ им. М. Акмуллы",
    type: "Статья",
  },
  {
    year: "2023",
    authors: "Дегтярёва С.Н.",
    title: "Методические подходы к преподаванию обществознания в условиях ФГОС",
    journal: "Педагогическое образование в России",
    type: "Статья",
  },
  {
    year: "2023",
    authors: "Кузнецов А.В., Попова М.Г.",
    title: "Финансовая грамотность как компонент социально-экономического образования",
    journal: "Экономика образования",
    type: "Статья",
  },
  {
    year: "2022",
    authors: "Мухамедьянова И.Ф.",
    title: "Правовое воспитание обучающихся: новые вызовы и подходы",
    journal: "Право и образование",
    type: "Монография",
  },
  {
    year: "2022",
    authors: "Шафикова Г.Р.",
    title: "Культурное наследие народов Башкортостана в системе педагогического образования",
    journal: "Уфа: Изд-во БГПУ",
    type: "Монография",
  },
  {
    year: "2021",
    authors: "Бурнасова Н.Ю., Дегтярёва С.Н.",
    title: "Интерактивные технологии в преподавании культурологии",
    journal: "Современные проблемы науки и образования",
    type: "Статья",
  },
]

const typeColors: Record<string, string> = {
  Статья: "text-foreground/50",
  Монография: "text-foreground/80",
}

export function PublicationsSection() {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-10 transition-all duration-700 md:mb-14 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Публикации
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Научные издания кафедры</p>
        </div>

        <div className="flex gap-12 lg:gap-20">
          <div className="min-w-0 flex-1 space-y-0">
          {publications.map((pub, i) => (
            <div
              key={i}
              className={`group flex items-start gap-4 border-b border-foreground/10 py-4 transition-all duration-700 hover:border-foreground/20 md:gap-8 md:py-5 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="w-10 shrink-0 font-mono text-xs text-foreground/30 md:text-sm">{pub.year}</span>
              <div className="min-w-0 flex-1">
                <p className="mb-0.5 font-mono text-xs text-foreground/50">{pub.authors}</p>
                <h3 className="mb-1 font-sans text-sm font-light leading-snug text-foreground transition-transform duration-300 group-hover:translate-x-1 md:text-base">
                  {pub.title}
                </h3>
                <p className="font-mono text-xs text-foreground/40 italic">{pub.journal}</p>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <Icon name={pub.type === "Монография" ? "BookOpen" : "FileText"} size={12} className="text-foreground/30" />
                <span className={`font-mono text-xs ${typeColors[pub.type] ?? "text-foreground/50"}`}>{pub.type}</span>
              </div>
            </div>
          ))}
          </div>

          <div
            className={`hidden shrink-0 flex-col items-center justify-center gap-4 lg:flex transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="rounded-lg bg-foreground/10 p-3 backdrop-blur-sm">
              <QRCodeSVG
                value="https://lib.bspu.ru"
                size={120}
                bgColor="transparent"
                fgColor="rgba(255,255,255,0.85)"
                level="M"
              />
            </div>
            <div className="text-center">
              <p className="font-mono text-xs text-foreground/60">Библиотека кафедры</p>
              <p className="font-mono text-xs text-foreground/30">lib.bspu.ru</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}