import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { Profissionais } from "./_components/profissionais";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div>
        <Hero />
        <Profissionais />

      </div>
      <Footer />

    </div>
  )
}