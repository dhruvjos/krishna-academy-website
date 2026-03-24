import React from "react";
import HeroSlider from "../components/home/HeroSlider";
import StatsSection from "../components/home/StatsSection";
import CourseGrid from "../components/home/CourseGrid";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CampsSection from "../components/home/CampsSection";
import CTASection from "../components/home/CTASection";
import ReviewsSection from "../components/home/ReviewsSection";
import StudentReportSection from "../components/home/StudentReportSection";
import RecentEventsSection from "../components/home/RecentEventsSection";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <StatsSection />
      <WhyChooseUs />
      <CourseGrid />
      <CampsSection />
      <ReviewsSection />
      <StudentReportSection />
      <RecentEventsSection />
      <CTASection />
    </div>
  );
}