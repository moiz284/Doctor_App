"use client";

import { useRouter } from "next/navigation";

interface Doctor {
  id: number;
  name: string;
  email: string;
  specialty: string;
}

interface DoctorCardProps {
  doctor: Doctor;
  onDelete?: (id: number) => void;
}

export default function DoctorCard({ doctor, onDelete }: DoctorCardProps) {
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this doctor?")) {
      return;
    }

    if (onDelete) {
      onDelete(doctor.id);
      return;
    }

    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(`http://localhost:3001/doctors/${doctor.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        window.location.reload();
      } else {
        alert("Failed to delete doctor");
      }
    } catch (error) {
      console.error("Error deleting doctor:", error);
      alert("Error deleting doctor");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">👨‍⚕️</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
              <p className="text-sm text-gray-500">{doctor.email}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => router.push(`/dashboard/edit/${doctor.id}`)}
              className="text-blue-600 hover:text-blue-800 p-2 rounded-lg hover:bg-blue-50 transition-colors"
              title="Edit doctor"
            >
              ✏️
            </button>
            <button
              onClick={handleDelete}
              className="text-red-600 hover:text-red-800 p-2 rounded-lg hover:bg-red-50 transition-colors"
              title="Delete doctor"
            >
              🗑️
            </button>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-600">Specialty:</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
              {doctor.specialty}
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-600">ID:</span>
            <span className="text-sm text-gray-500">#{doctor.id}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex space-x-2">
            <button
              onClick={() => router.push(`/dashboard/edit/${doctor.id}`)}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition-colors"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
