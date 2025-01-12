import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Shield, CheckCircle, AlertCircle } from "lucide-react";

const ComplianceItem = ({ title, progress, status }: any) => (
  <div className="mb-6 last:mb-0">
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center">
        <Shield className="h-5 w-5 mr-2 text-primary" />
        <span className="font-medium">{title}</span>
      </div>
      <span className={`flex items-center ${
        status === "Compliant" ? "text-green-500" : "text-yellow-500"
      }`}>
        {status === "Compliant" ? (
          <CheckCircle className="h-4 w-4 mr-1" />
        ) : (
          <AlertCircle className="h-4 w-4 mr-1" />
        )}
        {status}
      </span>
    </div>
    <Progress value={progress} className="h-2" />
    <div className="flex justify-between text-sm text-gray-500 mt-1">
      <span>{progress}% Complete</span>
      <span>Target: 100%</span>
    </div>
  </div>
);

const PolicyCompliancePanel = () => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Policy Compliance</CardTitle>
      </CardHeader>
      <CardContent>
        <ComplianceItem
          title="Modern Slavery Act"
          progress={92}
          status="Compliant"
        />
        <ComplianceItem
          title="Environmental Standards"
          progress={78}
          status="In Progress"
        />
        <ComplianceItem
          title="Labor Rights"
          progress={85}
          status="Compliant"
        />
      </CardContent>
    </Card>
  );
};

export default PolicyCompliancePanel;