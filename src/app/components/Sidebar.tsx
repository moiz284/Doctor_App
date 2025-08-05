"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: "🏥" },
    { href: "/dashboard/create", label: "Add Doctor", icon: "➕" },
    { href: "/dashboard/patients", label: "Patients", icon: "👥" },
    { href: "/dashboard/appointments", label: "Appointments", icon: "📅" },
    { href: "/dashboard/settings", label: "Settings", icon: "⚙️" },
  ];

  return (
    <aside className="w-64 bg-white shadow-lg min-h-screen">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Doctor Admin</h2>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                pathname === item.href
                  ? "bg-blue-100 text-blue-700 border-l-4 border-blue-500"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
