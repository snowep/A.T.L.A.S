"use client";

import { Typography } from "@mui/material";
import { ClippedDrawerLayout } from "@/components/templates/ClippedDrawerLayout";
import { Home as HomeIcon, Dashboard as DashboardIcon, Settings as SettingsIcon, People as UsersIcon } from "@mui/icons-material";

const navigation = [
  { label: "Home", icon: <HomeIcon />, href: "/" },
  { label: "Council", icon: <UsersIcon />, href: "/council" },
  { label: "Dashboard", icon: <DashboardIcon />, href: "/dashboard" },
  { label: "Settings", icon: <SettingsIcon />, href: "/settings" },
];

export default function Settings() {
  return (
    <ClippedDrawerLayout title="A.T.L.A.S." navigationItems={navigation}>
      <Typography variant="h4" color="text.primary" align="center">
        Settings
      </Typography>
      <Typography variant="body1" color="text.secondary" align="center" sx={{ mt: 2 }}>
        Settings page — routing functional
      </Typography>
    </ClippedDrawerLayout>
  );
}