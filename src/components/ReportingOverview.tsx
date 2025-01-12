import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Flag, ArrowRight, AlertTriangle, Clock } from "lucide-react";

const ReportItem = ({ title, status, priority, time }: any) => (
  <div className="flex items-center justify-between p-4 border-b last:border-b-0">
    <div className="flex items-center space-x-4">
      <div className={`p-2 rounded-full ${
        priority === "High" ? "bg-red-100" : "bg-yellow-100"
      }`}>
        <Flag className={`h-4 w-4 ${
          priority === "High" ? "text-red-500" : "text-yellow-500"
        }`} />
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-1" />
          {time}
        </div>
      </div>
    </div>
    <div className="flex items-center">
      <span className={`px-3 py-1 rounded-full text-sm ${
        status === "Open" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
      }`}>
        {status}
      </span>
    </div>
  </div>
);

const ReportingOverview = () => {
  return (
    <Card className="shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-bold">Recent Reports</CardTitle>
        <Button variant="ghost" className="text-primary">
          View All <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <ReportItem
          title="Supply Chain Violation Report #127"
          status="Open"
          priority="High"
          time="2 hours ago"
        />
        <ReportItem
          title="Labor Rights Concern #089"
          status="Under Review"
          priority="Medium"
          time="5 hours ago"
        />
        <ReportItem
          title="Environmental Impact Report #234"
          status="Open"
          priority="High"
          time="1 day ago"
        />
      </CardContent>
    </Card>
  );
};

export default ReportingOverview;