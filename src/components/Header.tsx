import React from "react";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Search, User, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-xl font-bold text-primary">Guardian IO</Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Monitoring</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <div className="grid grid-cols-2 gap-4">
                        <Link to="/supply-chain-map" className="block group">
                          <h3 className="font-medium mb-1 group-hover:text-primary">Supply Chain Map</h3>
                          <p className="text-sm text-muted-foreground">Interactive global visualization of supply chains</p>
                        </Link>
                        <Link to="/risk-dashboard" className="block group">
                          <h3 className="font-medium mb-1 group-hover:text-primary">Risk Dashboard</h3>
                          <p className="text-sm text-muted-foreground">Real-time ethical risk monitoring</p>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Compliance</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <div className="grid grid-cols-2 gap-4">
                        <Link to="/policy-tracker" className="block group">
                          <h3 className="font-medium mb-1 group-hover:text-primary">Policy Tracker</h3>
                          <p className="text-sm text-muted-foreground">Monitor compliance with laws and frameworks</p>
                        </Link>
                        <Link to="/blockchain-logs" className="block group">
                          <h3 className="font-medium mb-1 group-hover:text-primary">Blockchain Logs</h3>
                          <p className="text-sm text-muted-foreground">Verified supply chain records</p>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Reporting</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <div className="grid grid-cols-2 gap-4">
                        <Link to="/impact-reports" className="block group">
                          <h3 className="font-medium mb-1 group-hover:text-primary">Impact Reports</h3>
                          <p className="text-sm text-muted-foreground">Generate customized reports and insights</p>
                        </Link>
                        <Link to="/whistleblower" className="block group">
                          <h3 className="font-medium mb-1 group-hover:text-primary">Whistleblower Tool</h3>
                          <p className="text-sm text-muted-foreground">Secure reporting system for violations</p>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;