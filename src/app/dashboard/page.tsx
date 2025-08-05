"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "../components/DashboardLayout";
import DoctorCard from "../components/DoctorCard";

type Doctor = {
  id: number;
  name: string;
  email: string;
  specialty: string;
};

export default function DashboardPage() {
  const router = useRouter();
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      const token = localStorage.getItem("access_token");

      console.log("📦 Token read from localStorage:", token);

      if (!token) {
        console.log("❌ No token found, redirecting to login");
        router.push("/login");
        return;
      }

      try {
        const res = await fetch("http://localhost:3001/doctors", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("📦 Response status:", res.status);

        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          console.error("❌ Not OK response from /doctors:", errorData);
          
          if (res.status === 401) {
            console.log("❌ Unauthorized, clearing token and redirecting");
            localStorage.removeItem("access_token");
            router.push("/login");
          }
          return;
        }

        const data = await res.json();
        console.log("✅ Doctors data received:", data);
        setDoctors(data);
      } catch (err) {
        console.error("❌ Fetch error:", err);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    // Use a longer delay to ensure token is properly set
    const timer = setTimeout(fetchDoctors, 100);
    return () => clearTimeout(timer);
  }, [router]);

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading doctors...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Doctors Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage your medical staff</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
              <span className="font-semibold">{doctors.length}</span> doctors
            </div>
          </div>
        </div>

        {/* Search and Actions */}
        <div className="flex justify-between items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search doctors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80 text-gray-900 placeholder-gray-500"
            />
            <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
          </div>
          <button
            onClick={() => router.push("/dashboard/create")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center space-x-2"
          >
            <span>➕</span>
            <span>Add Doctor</span>
          </button>
        </div>

        {/* Doctors Grid */}
        {filteredDoctors.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">👨‍⚕️</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              {searchTerm ? "No doctors found" : "No doctors yet"}
            </h3>
            <p className="text-gray-500 mb-6">
              {searchTerm 
                ? "Try adjusting your search terms" 
                : "Get started by adding your first doctor"
              }
            </p>
            {!searchTerm && (
              <button
                onClick={() => router.push("/dashboard/create")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Add Your First Doctor
              </button>
            )}
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
