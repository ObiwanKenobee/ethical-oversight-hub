import React, { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link2, CheckCircle2, Search, Filter, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BlockchainLogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [timeRange, setTimeRange] = useState("all");

  const mockTransactions = [
    {
      id: "TX123456",
      product: "Fair Trade Coffee Beans",
      timestamp: "2024-02-10 14:30 UTC",
      status: "verified",
      origin: "Ethiopia",
      destination: "USA",
    },
    {
      id: "TX789012",
      product: "Organic Cotton",
      timestamp: "2024-02-09 09:15 UTC",
      status: "verified",
      origin: "India",
      destination: "UK",
    },
    {
      id: "TX345678",
      product: "Sustainable Palm Oil",
      timestamp: "2024-02-08 16:45 UTC",
      status: "pending",
      origin: "Indonesia",
      destination: "Germany",
    },
  ];

  const filteredTransactions = mockTransactions.filter(
    (tx) =>
      tx.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.product.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto p-8 space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Blockchain Verification Logs</h1>
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Search & Filter Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search by transaction ID or product"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <Select
                value={timeRange}
                onValueChange={setTimeRange}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Time Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="day">Last 24 Hours</SelectItem>
                  <SelectItem value="week">Last Week</SelectItem>
                  <SelectItem value="month">Last Month</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Filter className="h-4 w-4 mr-2" />
                Apply Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Origin</TableHead>
                  <TableHead>Destination</TableHead>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransactions.map((tx) => (
                  <TableRow key={tx.id}>
                    <TableCell className="font-medium">{tx.id}</TableCell>
                    <TableCell>{tx.product}</TableCell>
                    <TableCell>{tx.origin}</TableCell>
                    <TableCell>{tx.destination}</TableCell>
                    <TableCell>{tx.timestamp}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className={`h-4 w-4 ${tx.status === 'verified' ? 'text-green-500' : 'text-yellow-500'}`} />
                        <span className={tx.status === 'verified' ? 'text-green-600' : 'text-yellow-600'}>
                          {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Verification Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Transactions</span>
                  <span className="font-semibold">1,234</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Verified Today</span>
                  <span className="font-semibold text-green-600">45</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Pending Verification</span>
                  <span className="font-semibold text-yellow-600">12</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full justify-start" variant="outline">
                  <Link2 className="h-4 w-4 mr-2" />
                  Verify New Transaction
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Search className="h-4 w-4 mr-2" />
                  Audit Trail Lookup
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlockchainLogs;