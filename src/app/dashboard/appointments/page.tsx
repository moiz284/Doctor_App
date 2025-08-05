"use client";

import DashboardLayout from "../../components/DashboardLayout";

export default function AppointmentsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Appointments</h1>
            <p className="text-gray-600 mt-1">Schedule and manage patient appointments</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg">
              <span className="font-semibold">0</span> appointments
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📅</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            Appointment Scheduling
          </h3>
          <p className="text-gray-500 mb-6">
            Appointment management functionality coming soon!
          </p>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-purple-800 text-sm">
              This feature will include appointment scheduling, calendar integration, 
              reminder notifications, and appointment history tracking.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 