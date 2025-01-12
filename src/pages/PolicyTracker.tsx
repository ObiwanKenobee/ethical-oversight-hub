import React from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, CheckCircle, AlertCircle, FileText } from "lucide-react";
import PolicyCompliancePanel from "@/components/PolicyCompliancePanel";

const PolicyTracker = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto p-8 space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Policy Compliance Tracker</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PolicyCompliancePanel />
          
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Policy Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                  <FileText className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <p className="font-medium">Modern Slavery Act Amendment</p>
                    <p className="text-sm text-gray-600">New reporting requirements for companies with revenue over $100M</p>
                    <p className="text-sm text-gray-500 mt-1">Updated 2 days ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                  <FileText className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <p className="font-medium">Environmental Standards Update</p>
                    <p className="text-sm text-gray-600">Revised carbon emission limits for manufacturing sector</p>
                    <p className="text-sm text-gray-500 mt-1">Updated 5 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PolicyTracker;