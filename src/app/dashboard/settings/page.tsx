"use client";

import DashboardLayout from "../../components/DashboardLayout";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
            <p className="text-gray-600 mt-1">Configure system preferences and user settings</p>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Profile Settings */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">👤 Profile Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Display Name
                </label>
                <input
                  type="text"
                  defaultValue="Admin User"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="admin@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                />
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                Update Profile
              </button>
            </div>
          </div>

          {/* System Settings */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">⚙️ System Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Dark Mode</span>
                <button className="w-12 h-6 bg-gray-200 rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute left-1 top-1 transition-transform"></div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Email Notifications</span>
                <button className="w-12 h-6 bg-blue-600 rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1 transition-transform"></div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Auto Save</span>
                <button className="w-12 h-6 bg-blue-600 rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1 transition-transform"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">🔒 Security</h3>
            <div className="space-y-4">
              <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg transition-colors">
                Change Password
              </button>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors">
                Enable 2FA
              </button>
              <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors">
                View Login History
              </button>
            </div>
          </div>

          {/* Data Management */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">📊 Data Management</h3>
            <div className="space-y-4">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors">
                Export Data
              </button>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                Backup Database
              </button>
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg transition-colors">
                Clear Cache
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 