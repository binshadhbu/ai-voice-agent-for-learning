import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";

export default function Home() {
  return (
    <div>
      <h1 className="home-section">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard id="123" subject="science" name="the brainy explorer" topic="science" duration={45} color="#ffda6" />
        <CompanionCard id="124" subject="history" name="the adventurous traveler" topic="history" duration={30} color="#e5d0ff" />
        <CompanionCard id="125" subject="math" name="the curious learner" topic="math" duration={60} color="#ffda6e" />
      </section>

      <section className="home-section">
        <CompanionsList title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full" />
          
        <CTA />

      </section>
    </div>
  );
}
