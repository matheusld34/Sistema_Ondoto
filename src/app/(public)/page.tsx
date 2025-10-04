import { Header } from "./_components/header";
import { Hero } from "./_components/hero";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div>
        <Hero />
      </div>

    </div>
  )
}