"use client";

import { Typography } from "@mui/material";
import { Home as HomeIcon, Dashboard as DashboardIcon, Settings as SettingsIcon } from "@mui/icons-material";
import { ClippedDrawerLayout } from "@/components/templates/ClippedDrawerLayout";

const navigation = [
  { label: "Home", icon: <HomeIcon /> },
  { label: "Dashboard", icon: <DashboardIcon /> },
  { label: "Settings", icon: <SettingsIcon /> },
];

export default function Home() {
  return (
    <ClippedDrawerLayout title="A.T.L.A.S." navigationItems={navigation}>
      <Typography variant="body1" color="text.secondary" align="center">
        Clean MUI page — dark/light theme functional via useColorScheme
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
        Left drawer with permanent navigation (clipped under fixed AppBar)
      </Typography>
    </ClippedDrawerLayout>
  );
}