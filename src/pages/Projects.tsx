import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plus, 
  Search, 
  Filter, 
  Calendar,
  Clock,
  Truck,
  ClipboardCheck
} from 'lucide-react';
import ProjectsTable from '../components/ProjectsTable';
import type { Project } from '../components/ProjectsTable';

const Projects: React.FC = () => {
  const navigate = useNavigate();

  const projects: Project[] = [
    {
      id: 'PRJ001',
      name: 'Downtown Foundation Repair',
      customer: 'ABC Corporation',
      location: 'Downtown District',
      status: 'In Progress',
      startDate: '2024-03-01',
      budget: '$150,000',
      completion: '45%'
    },
    {
      id: 'PRJ002',
      name: 'Residential Foundation Installation',
      customer: 'John Smith',
      location: 'Suburban Heights',
      status: 'Scheduled',
      startDate: '2024-03-15',
      budget: '$85,000',
      completion: '0%'
    },
    {
      id: 'PRJ003',
      name: 'Commercial Building Foundation',
      customer: 'XYZ Enterprises',
      location: 'Business Park',
      status: 'Completed',
      startDate: '2024-02-15',
      budget: '$250,000',
      completion: '100%'
    },
    {
      id: 'PRJ004',
      name: 'Industrial Complex Foundation',
      customer: 'Metro Industries',
      location: 'Industrial Zone',
      status: 'Planning',
      startDate: '2024-04-01',
      budget: '$350,000',
      completion: '0%'
    },
    {
      id: 'PRJ005',
      name: 'Retail Center Foundation',
      customer: 'Shopping Corp',
      location: 'Market District',
      status: 'On Hold',
      startDate: '2024-03-20',
      budget: '$200,000',
      completion: '15%'
    }
  ];

  const todaySchedule = {
    jobs: 3,
    inspections: 2,
    concretePours: 1
  };

  const weekSchedule = {
    jobs: 8,
    inspections: 5,
    concretePours: 4
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
        <button
          onClick={() => navigate('/projects/new')}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Plus className="h-5 w-5 mr-2" />
          New Project
        </button>
      </div>

      {/* Schedule Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Today's Schedule</h3>
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Jobs Starting</span>
              <span className="text-sm font-medium text-blue-600">{todaySchedule.jobs}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Inspections</span>
              <span className="text-sm font-medium text-purple-600">{todaySchedule.inspections}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Concrete Pours</span>
              <span className="text-sm font-medium text-green-600">{todaySchedule.concretePours}</span>
            </div>
          </div>
        </div>

        {/* This Week's Schedule */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">This Week</h3>
            <Clock className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Jobs Starting</span>
              <span className="text-sm font-medium text-blue-600">{weekSchedule.jobs}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Inspections</span>
              <span className="text-sm font-medium text-purple-600">{weekSchedule.inspections}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Concrete Pours</span>
              <span className="text-sm font-medium text-green-600">{weekSchedule.concretePours}</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between px-4 py-2 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100">
              <span className="flex items-center">
                <ClipboardCheck className="h-4 w-4 mr-2" />
                Schedule Inspection
              </span>
              <Plus className="h-4 w-4" />
            </button>
            <button className="w-full flex items-center justify-between px-4 py-2 bg-green-50 text-green-700 rounded-md hover:bg-green-100">
              <span className="flex items-center">
                <Truck className="h-4 w-4 mr-2" />
                Schedule Pour
              </span>
              <Plus className="h-4 w-4" />
            </button>
            <button className="w-full flex items-center justify-between px-4 py-2 bg-purple-50 text-purple-700 rounded-md hover:bg-purple-100">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                View Calendar
              </span>
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center max-w-md flex-1">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm pl-10"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
              </div>
              <button className="ml-4 p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <Filter className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>

          <ProjectsTable projects={projects} />
        </div>
      </div>
    </div>
  );
};

export default Projects;