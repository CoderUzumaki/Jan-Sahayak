import { Button } from "@/components/ui/button";

function App() {

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to Jan Sahayak</h1>
        <p className="mt-4 text-lg font-light italic text-gray-700">Your Guide to Government Schemes</p>
        <Button className="mt-4 bg-primary hover:bg-primary-dark text-primary-foreground">
          Get Started
        </Button>
      </div>
    </>
  )
}

export default App
