import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Settings, FileText, Layout, Box } from 'lucide-react';

export function AdminLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-800">CMS Admin</h1>
        </div>
        <nav className="mt-4">
          <Link
            to="/admin/pages"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <FileText className="w-5 h-5 mr-2" />
            Pages
          </Link>
          <Link
            to="/admin/components"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <Box className="w-5 h-5 mr-2" />
            Components
          </Link>
          <Link
            to="/admin/layouts"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <Layout className="w-5 h-5 mr-2" />
            Layouts
          </Link>
          <Link
            to="/admin/settings"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <Settings className="w-5 h-5 mr-2" />
            Settings
          </Link>
        </nav>
      </aside>
      <main className="flex-1 overflow-auto p-8">
        <Outlet />
      </main>
    </div>
  );
}