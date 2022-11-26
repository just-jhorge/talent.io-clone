import Companies from "./components/Companies/Companies";
import CTA from "./components/CTA/CTA";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Locations from "./components/Locations/Locations";
import Navbar from "./components/Navbar/Navbar";
import Onboarding from "./components/Onboarding/Onboarding";
import TeamUp from "./components/TeamUp/TeamUp";
import Testimonials from "./components/Testimonials/Testimonials";

const App = () => {
	return (
		<>
			<Navbar />
			<Header />
			<Features />
			<Testimonials />
			<Onboarding />
			<Companies />
			<Locations />
			<TeamUp />
			<CTA />
			<Footer />
		</>
	);
};

export default App;
