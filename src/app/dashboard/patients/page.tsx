"use client";

import DashboardLayout from "../../components/DashboardLayout";

export default function PatientsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Patients Management</h1>
            <p className="text-gray-600 mt-1">Manage patient records and information</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg">
              <span className="font-semibold">0</span> patients
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="text-center py-12">
          <div className="text-6xl mb-4">👥</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            Patients Management
          </h3>
          <p className="text-gray-500 mb-6">
            Patient management functionality coming soon!
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-blue-800 text-sm">
              This feature will include patient registration, medical history tracking, 
              appointment scheduling, and more.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 