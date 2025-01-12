import React from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link2, CheckCircle2, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const BlockchainLogs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto p-8 space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Blockchain Verification Logs</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Search Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input placeholder="Enter transaction ID or product code" className="flex-1" />
              <Button>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-green-100 rounded-full">
                      <Link2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Transaction #{i}ABC{i}23</h3>
                      <p className="text-sm text-gray-500 mt-1">Product: Fair Trade Coffee Beans</p>
                      <div className="flex items-center mt-2 space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-green-600">Verified on Chain</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Timestamp</p>
                    <p className="font-medium">2024-02-{i}0 14:30 UTC</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockchainLogs;