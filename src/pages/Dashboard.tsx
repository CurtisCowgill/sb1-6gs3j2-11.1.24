import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  HardHat, 
  FolderKanban,
  AlertTriangle,
  Calendar,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { formatCurrency } from '../utils/format';

const Dashboard: React.FC = () => {
  // Mock data for dashboard metrics
  const metrics = {
    activeProjects: 12,
    completedProjects: 45,
    totalRevenue: 850000,
    activeCrews: 8,
    totalEmployees: 32,
    activeCustomers: 24,
    upcomingInspections: 5,
    pendingWorkOrders: 28,
    projectsOnHold: 3,
    safetyIncidents: 0
  };

  const recentActivity = [
    {
      id: 1,
      type: 'project',
      action: 'Project Started',
      description: 'Downtown Foundation Repair',
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      type: 'inspection',
      action: 'Inspection Passed',
      description: 'Residential Foundation #2024-072',
      timestamp: '4 hours ago'
    },
    {
      id: 3,
      type: 'workOrder',
      action: 'Work Order Completed',
      description: 'Site Preparation - Team Alpha',
      timestamp: '6 hours ago'
    }
  ];

  const upcomingSchedule = [
    {
      id: 1,
      time: '8:00 AM',
      event: 'Concrete Pour',
      location: '123 Main St',
      crew: 'Team Alpha'
    },
    {
      id: 2,
      time: '10:30 AM',
      event: 'Site Inspection',
      location: '456 Oak Ave',
      crew: 'Team Beta'
    },
    {
      id: 3,
      time: '1:00 PM',
      event: 'Wall Installation',
      location: '789 Pine St',
      crew: 'Team Gamma'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <FolderKanban className="h-8 w-8 text-blue-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Active Projects</p>
              <p className="text-2xl font-semibold text-gray-900">{metrics.activeProjects}</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Completed</span>
              <span className="text-green-600">{metrics.completedProjects}</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-gray-500">On Hold</span>
              <span className="text-yellow-600">{metrics.projectsOnHold}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <HardHat className="h-8 w-8 text-green-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Active Crews</p>
              <p className="text-2xl font-semibold text-gray-900">{metrics.activeCrews}</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Total Employees</span>
              <span className="text-blue-600">{metrics.totalEmployees}</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-gray-500">Safety Incidents</span>
              <span className="text-green-600">{metrics.safetyIncidents}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <Clock className="h-8 w-8 text-purple-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Pending Work Orders</p>
              <p className="text-2xl font-semibold text-gray-900">{metrics.pendingWorkOrders}</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Inspections Due</span>
              <span className="text-yellow-600">{metrics.upcomingInspections}</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-gray-500">Revenue YTD</span>
              <span className="text-green-600">{formatCurrency(metrics.totalRevenue)}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-orange-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Active Customers</p>
              <p className="text-2xl font-semibold text-gray-900">{metrics.activeCustomers}</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Projects in Progress</span>
              <span className="text-blue-600">{metrics.activeProjects}</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-gray-500">Satisfaction Rate</span>
              <span className="text-green-600">94%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity and Schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start">
                  <div className="flex-shrink-0">
                    {activity.type === 'project' ? (
                      <FolderKanban className="h-5 w-5 text-blue-500" />
                    ) : activity.type === 'inspection' ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    ) : (
                      <Clock className="h-5 w-5 text-purple-500" />
                    )}
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-500">{activity.description}</p>
                    <p className="text-xs text-gray-400 mt-1">{activity.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Today's Schedule</h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {upcomingSchedule.map((event) => (
                <div key={event.id} className="flex items-start">
                  <div className="flex-shrink-0 w-16 text-sm font-medium text-gray-600">
                    {event.time}
                  </div>
                  <div className="flex-1 ml-4">
                    <p className="text-sm font-medium text-gray-900">{event.event}</p>
                    <p className="text-sm text-gray-500">{event.location}</p>
                    <p className="text-sm text-gray-500">{event.crew}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Alerts and Notifications */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Alerts & Notifications</h2>
        <div className="space-y-4">
          <div className="flex items-center p-4 bg-yellow-50 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-yellow-400" />
            <div className="ml-3">
              <p className="text-sm font-medium text-yellow-800">
                5 inspections scheduled for this week
              </p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-blue-50 rounded-lg">
            <AlertCircle className="h-5 w-5 text-blue-400" />
            <div className="ml-3">
              <p className="text-sm font-medium text-blue-800">
                3 work orders require immediate attention
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;