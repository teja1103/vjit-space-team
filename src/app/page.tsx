import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import AboutUs from "@/components/about-us"
import PastExperience from "@/components/past-experience"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <AboutUs />
          <PastExperience />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

