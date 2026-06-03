import { useReveal } from "@/hooks/use-reveal"
import { QRCodeSVG } from "qrcode.react"

export function PublicationsSection() {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Публикации
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Научные издания кафедры</p>
        </div>

        <div
          className={`flex flex-col items-start gap-6 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <a href="https://lib.bspu.ru" target="_blank" rel="noopener noreferrer" className="group">
            <div className="rounded-xl bg-foreground/10 p-4 backdrop-blur-sm transition-all duration-300 group-hover:bg-foreground/15 md:p-6">
              <QRCodeSVG
                value="https://lib.bspu.ru"
                size={200}
                bgColor="transparent"
                fgColor="rgba(255,255,255,0.9)"
                level="M"
              />
            </div>
          </a>
          <div>
            <p className="font-sans text-lg font-light text-foreground md:text-2xl">Библиотека БГПУ им. М. Акмуллы</p>
            <p className="font-mono text-sm text-foreground/50">lib.bspu.ru</p>
          </div>
        </div>
      </div>
    </section>
  )
}
