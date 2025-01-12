import React from "react";
import { Button } from "./ui/button";
import { MapPin, FileText } from "lucide-react";

const DashboardHero = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary to-secondary text-white py-16 px-8 rounded-lg shadow-lg mb-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Empowering Governments to Ensure Ethical Supply Chains
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Monitor, enforce, and drive global compliance with real-time insights.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-gray-100"
          >
            <MapPin className="mr-2 h-5 w-5" />
            Access Insights
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            <FileText className="mr-2 h-5 w-5" />
            View Reports
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
    </div>
  );
};

export default DashboardHero;