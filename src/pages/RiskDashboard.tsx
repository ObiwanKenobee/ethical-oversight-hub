import React from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, TrendingUp, Users, Globe } from "lucide-react";
import RiskMetricsCard from "@/components/RiskMetricsCard";

const RiskDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto p-8 space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Risk Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <RiskMetricsCard />
          
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Risk Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-gray-100 rounded-lg">
                <TrendingUp className="h-16 w-16 text-gray-400" />
                <span className="ml-2 text-gray-500">Chart Coming Soon</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>High Risk Regions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-red-500" />
                    <span className="font-medium">Southeast Asia</span>
                  </div>
                  <span className="text-red-500">High</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-yellow-500" />
                    <span className="font-medium">West Africa</span>
                  </div>
                  <span className="text-yellow-500">Medium</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RiskDashboard;