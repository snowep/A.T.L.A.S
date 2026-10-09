"use client";

import { Box, CssBaseline, useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import { NavItem } from "@/components/molecules/NavItem";
import { EditorialHeader } from "@/components/organisms/EditorialHeader";
import { EditorialMainContent } from "@/components/organisms/EditorialMainContent";
import { EditorialRecommendationRail } from "@/components/organisms/EditorialRecommendationRail";
import { NavigationItem } from "@/components/organisms/NavigationDrawer";

interface EditorialDashboardLayoutProps {
  navigationItems?: NavigationItem[];
  children?: React.ReactNode;
}

export function EditorialDashboardLayout({
  navigationItems,
  children,
}: EditorialDashboardLayoutProps) {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(true);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />
      
      {/* Outer page background */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: theme.palette.mode === "light" ? "#F5F1E8" : "#121212",
          minHeight: "100vh",
          overflow: "auto",
        }}
      >
        {/* Left Navigation Rail */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            width: { md: 72, lg: 80 },
            flexShrink: 0,
            py: 2,
            px: 1,
            backgroundColor: "transparent",
          }}
          role="navigation"
          aria-label="Main navigation"
        >
          <NavItem label="Dashboard" icon={<span>📊</span>} selected />
          <NavItem label="Library" icon={<span>📚</span>} />
          <NavItem label="Reading List" icon={<span>📖</span>} />
          <NavItem label="Buy List" icon={<span>🛒</span>} />
          <NavItem label="Read Next" icon={<span>⏭️</span>} />
          
          <Box sx={{ flexGrow: 1 }} />
          
          <NavItem label="Settings" icon={<span>⚙️</span>} />
          <NavItem label="Profile" icon={<span>👤</span>} />
        </Box>

        {/* Mobile bottom navigation */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1300,
            backgroundColor: theme.palette.background.paper,
            borderTop: `1px solid ${theme.palette.divider}`,
            px: 1,
            py: 1,
            justifyContent: "space-around",
          }}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <NavItem label="Dashboard" icon={<span>📊</span>} selected />
          <NavItem label="Library" icon={<span>📚</span>} />
          <NavItem label="Reading" icon={<span>📖</span>} />
          <NavItem label="Buy" icon={<span>🛒</span>} />
          <NavItem label="Next" icon={<span>⏭️</span>} />
        </Box>

        {/* Centered Application Shell */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            mx: { xs: 0, sm: 2, md: 3, lg: 4 },
            my: { xs: 0, sm: 2, md: 3 },
            borderRadius: { xs: 0, sm: 4 },
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.palette.mode === "light" 
              ? "0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)"
              : "0 4px 24px rgba(0,0,0,0.3), 0 1px 4px rgba(0,0,0,0.2)",
            minHeight: { xs: "100vh", sm: "calc(100vh - 48px)" },
            maxHeight: { xs: "100vh", sm: "calc(100vh - 48px)" },
            overflow: "hidden",
            position: "relative",
            mb: { xs: 80, md: 0 },
          }}
        >
          {/* Top Header */}
          <EditorialHeader 
            title="A.T.L.A.S. Dashboard"
            onMenuClick={toggleDrawer(true)}
            drawerOpen={drawerOpen}
          />

          {/* Main Content Area */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Main Content */}
            <Box
              sx={{
                flexGrow: 1,
                overflow: "auto",
                p: { xs: 2, md: 3 },
                minWidth: 0,
              }}
            >
              <EditorialMainContent />
            </Box>

            {/* Right Recommendation Rail */}
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                flexDirection: "column",
                width: 320,
                flexShrink: 0,
                backgroundColor: theme.palette.mode === "light" 
                  ? "rgba(255, 241, 225, 0.5)" 
                  : "rgba(30, 30, 30, 0.6)",
                borderLeft: `1px solid ${theme.palette.divider}`,
                overflow: "auto",
                minWidth: 0,
              }}
            >
              <EditorialRecommendationRail />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}