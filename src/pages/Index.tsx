import React from "react";
import DashboardHero from "@/components/DashboardHero";
import RiskMetricsCard from "@/components/RiskMetricsCard";
import PolicyCompliancePanel from "@/components/PolicyCompliancePanel";
import ReportingOverview from "@/components/ReportingOverview";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <DashboardHero />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <RiskMetricsCard />
          <PolicyCompliancePanel />
          <ReportingOverview />
        </div>
      </div>
    </div>
  );
};

export default Index;