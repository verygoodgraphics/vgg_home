import { useVGG } from "@verygoodgraphics/vgg-react"

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

  return (
    <>
      {!isRendered && (
        <div className="fixed left-0 top-0 z-[9999] h-screen w-screen bg-black">
          <div className="flex h-screen w-screen items-center justify-center bg-black text-white/80">
            <AnimatedLoadingDots />
          </div>
        </div>
      )}
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <canvas
          ref={canvasRef}
          style={{
            width: "100vw",
            height: "100vh",
          }}
          className="bg-white outline-none"
        />
      </div>
    </>
  )
}
