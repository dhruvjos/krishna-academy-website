import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HomeButton from "../common/HomeButton";
import WhatsAppFloat from "../common/WhatsAppFloat";
import BackButton from "../common/BackButton";
import OfferPopup from "../common/OfferPopup";
import CandidTalksBanner from "../common/CandidTalksBanner";

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <CandidTalksBanner />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BackButton />
      <HomeButton />
      <WhatsAppFloat />
      <OfferPopup />
    </div>
  );
}