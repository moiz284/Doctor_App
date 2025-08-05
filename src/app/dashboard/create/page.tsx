"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isAuthenticated } from "../../utils/auth";
import DashboardLayout from "../../components/DashboardLayout";
import { fetchWithAuth } from "../../utils/api";

export default function CreateDoctorPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    specialty: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isAuthenticated()) router.push("/login");
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetchWithAuth("/doctors", {
        method: "POST",
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to create doctor");
      }

      console.log("✅ Doctor created successfully");
      router.push("/dashboard");
    } catch (err: any) {
      console.error("❌ Error creating doctor:", err);
      setError(err.message || "Failed to create doctor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto">
                 <div className="bg-white rounded-lg shadow-md p-8">
           <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Doctor</h2>
           {error && (
             <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
               {error}
             </div>
           )}
           <form onSubmit={handleSubmit} className="space-y-6">
            {["name", "email", "specialty"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                                 <input
                   type="text"
                   placeholder={`Enter ${field}`}
                   className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                   value={(form as any)[field]}
                   onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                   required
                 />
              </div>
            ))}
                         <button
               type="submit"
               disabled={loading}
               className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 px-4 rounded-lg transition-colors font-medium">
               {loading ? "Creating..." : "Create Doctor"}
             </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
