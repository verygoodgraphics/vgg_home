import { useVGG } from "@verygoodgraphics/vgg-react"
import { useEffect, useState } from "react"

function AnimatedLoadingDots() {
  return (
    <div className="flex space-x-1">
      <div className="size-[6px] animate-bounce rounded-full bg-white/40"></div>
      <div className="size-[6px] animate-bounce rounded-full bg-white/60 delay-250"></div>
      <div className="size-[6px] animate-bounce rounded-full bg-white/80 delay-500"></div>
    </div>
  )
}

export function PreviewVGG() {
  const { canvasRef, isRendered } = useVGG({
    src: "vgg.daruma",
    runtime: "runtime",
    // verbose: true,
    // editMode: true,
  })
  const [height, setHeight] = useState(window.innerHeight)
  const [showTips, setShowTips] = useState(false)

  useEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement
      doc.style.setProperty("--app-height", `${window.innerHeight}px`)
      setHeight(window.innerHeight)
    }
    window.addEventListener("resize", appHeight)
    appHeight()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (isRendered) return
      setShowTips(true)
    }, 10 * 1000)
  }, [])

  return (
    <>
      {!isRendered && (
        <div className="fixed left-0 top-0 z-[9999] h-screen w-screen bg-black">
          <div className="flex h-screen w-screen items-center flex-col justify-center bg-black text-white/80">
            <AnimatedLoadingDots />
            {showTips && (
              <p className="text-xs mt-4 text-white/70">
                Downloading resources... If this persists, please check your
                network.
              </p>
            )}
          </div>
        </div>
      )}
      <div className="relative flex min-h-screen items-start justify-center overflow-hidden">
        <canvas
          ref={canvasRef}
          style={{
            width: "100vw",
            height: height,
          }}
          className="bg-white outline-none h-[var(--app-height)]"
        />
      </div>
    </>
  )
}
