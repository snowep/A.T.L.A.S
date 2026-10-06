"use client";

import { CouncilClient } from "./CouncilClient";
import { ClippedDrawerLayout } from "@/components/templates/ClippedDrawerLayout";
import { Home as HomeIcon, Dashboard as DashboardIcon, Settings as SettingsIcon, People as UsersIcon } from "@mui/icons-material";

const navigation = [
  { label: "Home", icon: <HomeIcon />, href: "/" },
  { label: "Council", icon: <UsersIcon />, href: "/council" },
  { label: "Dashboard", icon: <DashboardIcon />, href: "/dashboard" },
  { label: "Settings", icon: <SettingsIcon />, href: "/settings" },
];

export default function CouncilPage() {
  return (
    <ClippedDrawerLayout title="A.T.L.A.S." navigationItems={navigation}>
      <CouncilClient />
    </ClippedDrawerLayout>
  );
}