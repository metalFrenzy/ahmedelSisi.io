import AboutMe from "./components/about-me/about-me";
import Landing from "./components/landing/landing";
import TechStack from "./components/tech-stack/tech-stack";

export default function Home() {
  return (
    <main>
      <Landing />
      <AboutMe />
      <TechStack />
    </main>
  )
}
