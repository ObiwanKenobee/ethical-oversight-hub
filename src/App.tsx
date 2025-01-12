import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SupplyChainMap from "./pages/SupplyChainMap";
import RiskDashboard from "./pages/RiskDashboard";
import PolicyTracker from "./pages/PolicyTracker";
import BlockchainLogs from "./pages/BlockchainLogs";
import ImpactReports from "./pages/ImpactReports";
import WhistleblowerTools from "./pages/WhistleblowerTools";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/supply-chain-map" element={<SupplyChainMap />} />
          <Route path="/risk-dashboard" element={<RiskDashboard />} />
          <Route path="/policy-tracker" element={<PolicyTracker />} />
          <Route path="/blockchain-logs" element={<BlockchainLogs />} />
          <Route path="/impact-reports" element={<ImpactReports />} />
          <Route path="/whistleblower" element={<WhistleblowerTools />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;