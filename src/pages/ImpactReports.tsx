import React from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const ImpactReports = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto p-8 space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Impact Reports</h1>
          <Button>
            <Filter className="h-4 w-4 mr-2" />
            Filter Reports
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Q1 2024 Ethical Supply Chain Report",
              type: "Quarterly Review",
              date: "March 15, 2024",
              status: "Final"
            },
            {
              title: "Environmental Impact Assessment",
              type: "Special Report",
              date: "March 1, 2024",
              status: "Draft"
            },
            {
              title: "Labor Rights Compliance Summary",
              type: "Monthly Review",
              date: "February 28, 2024",
              status: "Final"
            }
          ].map((report, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      report.status === "Final" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {report.status}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-2">{report.title}</h3>
                    <p className="text-sm text-gray-500">{report.type}</p>
                    <p className="text-sm text-gray-500">{report.date}</p>
                  </div>
                  <Button variant="outline" className="mt-4 w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactReports;