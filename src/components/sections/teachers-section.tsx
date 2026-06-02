import { useReveal } from "@/hooks/use-reveal"

const teachers = [
  {
    name: "Галина Рашитовна Шафикова",
    title: "Заведующая кафедрой",
    degree: "Доктор исторических наук, профессор",
    area: "Этнология, история народов Башкортостана",
  },
  {
    name: "Наталья Юрьевна Бурнасова",
    title: "Доцент",
    degree: "Кандидат философских наук",
    area: "Культурология, философия культуры",
  },
  {
    name: "Светлана Николаевна Дегтярёва",
    title: "Доцент",
    degree: "Кандидат педагогических наук",
    area: "Методика преподавания обществознания",
  },
  {
    name: "Алексей Владимирович Кузнецов",
    title: "Старший преподаватель",
    degree: "Кандидат экономических наук",
    area: "Экономика и финансовая грамотность",
  },
  {
    name: "Ирина Фаридовна Мухамедьянова",
    title: "Доцент",
    degree: "Кандидат юридических наук",
    area: "Право и правоведение",
  },
  {
    name: "Марина Геннадьевна Попова",
    title: "Доцент",
    degree: "Кандидат исторических наук",
    area: "История и обществознание",
  },
]

export function TeachersSection() {
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
            Преподаватели
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Состав кафедры</p>
        </div>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher, i) => (
            <div
              key={i}
              className={`group border-b border-foreground/10 py-5 pr-8 transition-all duration-700 hover:border-foreground/25 md:py-6 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-1 flex items-center gap-2">
                <div className="h-px w-5 bg-foreground/25 transition-all duration-300 group-hover:w-8 group-hover:bg-foreground/50" />
                <span className="font-mono text-xs text-foreground/40">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mb-1 font-sans text-base font-light leading-snug text-foreground transition-transform duration-300 group-hover:translate-x-1 md:text-lg">
                {teacher.name}
              </h3>
              <p className="mb-1 font-mono text-xs text-foreground/60">{teacher.title}</p>
              <p className="font-mono text-xs text-foreground/40">{teacher.degree}</p>
              <p className="mt-1 text-xs leading-relaxed text-foreground/50">{teacher.area}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
