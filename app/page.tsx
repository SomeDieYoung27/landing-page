// pages/index.js
import DynamicFeatureSection from "./components/DynamicFeatureSection";
import FeatureSection from "./components/FeatureSection";
import LandingPage from "./components/LandingPage";
import Layout from "./components/Layout";
import Section from "./components/Section";
import PricingTable from "./components/PricingTable";
import Faq from "./components/Faq";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";
import Feature from "./components/Feature";
import First from "./components/First";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <Feature />
      <First />
      <DynamicFeatureSection />
      <Section />
      <Layout />
      <PricingTable />
      <Faq />
      <Subscription />
      <Footer />
    </div>
  );
}
