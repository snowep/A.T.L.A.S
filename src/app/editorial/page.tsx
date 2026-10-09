"use client";

import { EditorialDashboardLayout } from "@/components/templates/EditorialDashboardLayout";
import { NavigationItem } from "@/components/organisms/NavigationDrawer";

const navigation: NavigationItem[] = [
  { label: "Dashboard", icon: "📊", href: "/" },
  { label: "Library", icon: "📚", href: "/library" },
  { label: "Reading List", icon: "📖", href: "/reading-list" },
  { label: "Buy List", icon: "🛒", href: "/buy-list" },
  { label: "Read Next", icon: "⏭️", href: "/read-next" },
  { label: "Settings", icon: "⚙️", href: "/settings" },
  { label: "Profile", icon: "👤", href: "/profile" },
];

export default function EditorialDashboard() {
  return (
    <EditorialDashboardLayout navigationItems={navigation}>
      {/* Content is rendered inside the layout */}
    </EditorialDashboardLayout>
  );
}