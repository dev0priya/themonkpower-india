import React from "react";
import HeroSlider from "@/components/home/HeroSlider";
import CompanyIntro from "@/components/home/CompanyIntro";
import ProductCategories from "@/components/home/ProductCategories";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ManufacturingExcellence from "@/components/home/ManufacturingExcellence";
import IndustriesServed from "@/components/home/IndustriesServed";
import QualityCommitment from "@/components/home/QualityCommitment";
import FeaturedProductSlider from "@/components/home/FeaturedProductSlider";
import BusinessEnquiryCTA from "@/components/home/BusinessEnquiryCTA";
import LatestBlogSection from "@/components/home/LatestBlogSection";
import HomeContactForm from "@/components/home/HomeContactForm";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Section 1: Animated Hero Banner */}
      <HeroSlider />

      {/* Section 2: Company Introduction */}
      <CompanyIntro />

      {/* Section 3: Product Categories */}
      <ProductCategories />

      {/* Section 4: Why Choose The Monk Power India? */}
      <WhyChooseUs />

      {/* Section 5: Manufacturing Excellence & Workflow */}
      <ManufacturingExcellence />

      {/* Section 6: Industries We Serve */}
      <IndustriesServed />

      {/* Section 7: Quality Commitment & Testing Protocols */}
      <QualityCommitment />

      {/* Section 8: Featured Products / Product Showcase */}
      <FeaturedProductSlider />

      {/* Section 9: Business Enquiry CTA */}
      <BusinessEnquiryCTA />

      {/* Section 10: Latest Updates / Blog Articles */}
      <LatestBlogSection />

      {/* Section 11: Contact & Fast Callback Form */}
      <HomeContactForm />
    </div>
  );
}
