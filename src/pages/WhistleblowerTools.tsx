import React from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Upload, Lock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ReportingOverview from "@/components/ReportingOverview";

const WhistleblowerTools = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto p-8 space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Secure Reporting System</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="h-5 w-5 mr-2" />
                  Submit Confidential Report
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Report Details</label>
                    <Textarea
                      placeholder="Provide detailed information about the violation or concern..."
                      className="min-h-[200px]"
                    />
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Upload className="h-5 w-5 text-blue-500 mt-1" />
                      <div>
                        <p className="font-medium text-blue-700">Upload Evidence</p>
                        <p className="text-sm text-blue-600">
                          Attach relevant documents, photos, or videos (max 50MB)
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" className="mt-4">
                      Choose Files
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-yellow-600">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      <span className="text-sm">Your identity will remain anonymous</span>
                    </div>
                    <Button>Submit Report</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Protection Guarantees</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: Shield,
                      title: "Legal Protection",
                      description: "Full whistleblower protection under international law"
                    },
                    {
                      icon: Lock,
                      title: "Encrypted Communication",
                      description: "End-to-end encryption for all submitted information"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-2 bg-green-100 rounded-full">
                        <item.icon className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <ReportingOverview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhistleblowerTools;