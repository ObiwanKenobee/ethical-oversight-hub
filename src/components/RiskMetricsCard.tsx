import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { AlertTriangle, TrendingUp, Users, Globe } from "lucide-react";

const RiskMetric = ({ icon: Icon, title, value, trend, color }: any) => (
  <div className="flex items-center space-x-4 p-4 border-b last:border-b-0">
    <div className={`p-2 rounded-full ${color}`}>
      <Icon className="h-6 w-6 text-white" />
    </div>
    <div className="flex-1">
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <div className="flex items-center">
        <p className="text-2xl font-bold">{value}</p>
        {trend && (
          <span className="ml-2 text-sm text-green-500 flex items-center">
            <TrendingUp className="h-4 w-4 mr-1" />
            {trend}
          </span>
        )}
      </div>
    </div>
  </div>
);

const RiskMetricsCard = () => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Real-Time Risk Metrics</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <RiskMetric
          icon={AlertTriangle}
          title="High Risk Alerts"
          value="24"
          trend="+2.4%"
          color="bg-red-500"
        />
        <RiskMetric
          icon={Users}
          title="Active Investigations"
          value="156"
          trend="+12%"
          color="bg-blue-500"
        />
        <RiskMetric
          icon={Globe}
          title="Monitored Regions"
          value="47"
          color="bg-green-500"
        />
      </CardContent>
    </Card>
  );
};

export default RiskMetricsCard;