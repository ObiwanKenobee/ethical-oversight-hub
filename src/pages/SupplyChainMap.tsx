import React from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, AlertTriangle, Box } from "lucide-react";

const SupplyChainMap = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto p-8 space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Global Supply Chain Map</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="h-[600px]">
              <CardContent className="p-0">
                <div className="h-full w-full bg-gray-100 rounded-lg flex items-center justify-center">
                  <Globe className="h-16 w-16 text-gray-400" />
                  <span className="ml-2 text-gray-500">Interactive Map Coming Soon</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Risk Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-red-500">
                    <AlertTriangle className="h-5 w-5" />
                    <span>High risk detected in Southeast Asia region</span>
                  </div>
                  <div className="flex items-center space-x-3 text-yellow-500">
                    <AlertTriangle className="h-5 w-5" />
                    <span>Medium risk in South American supply routes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Active Shipments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Box className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-medium">Container XYZ-123</p>
                      <p className="text-sm text-gray-500">En route to Port of Rotterdam</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Box className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-medium">Container ABC-456</p>
                      <p className="text-sm text-gray-500">Departing Singapore Hub</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyChainMap;