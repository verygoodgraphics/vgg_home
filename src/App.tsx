import { PreviewVGG } from "./components/live-preview"
import "./App.css"

function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-white">
      <PreviewVGG />
    </div>
  )
}

export default App
