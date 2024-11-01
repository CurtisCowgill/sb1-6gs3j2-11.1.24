import React from 'react';
import ProjectLocation from '../ProjectLocation';
import ProjectDetails from '../ProjectDetails';
import WorkOrderList from '../WorkOrderList';
import { STANDARD_WORK_ORDERS } from '../../data/workOrders';

interface ProjectOverviewProps {
  projectId?: string;
}

const mockProject = {
  customer: 'Nies Homes',
  neighborhood: 'Sienna Ranch',
  address: '3001 Cottonwood Ln',
  city: 'Rose Hill',
  state: 'KS',
  zip: '67133',
  lot: '48',
  block: 'A',
  addition: 'Sienna Ranch 4th',
  inspectionJurisdiction: 'City of Rose Hill',
  projectType: 'Foundation + Waterproofing',
  builderProjectId: '2024-072',
  dateAdded: '10/31/2024',
  floorplan: 'Custom',
  permitNumber: 'P4358-A19',
  permitDate: '10/15/2024',
  permitIncluded: true
};

const ProjectOverview: React.FC<ProjectOverviewProps> = () => {
  const handleWorkOrderUpdate = (id: string, data: any) => {
    console.log('Updating work order:', id, data);
  };

  return (
    <div className="space-y-6">
      <ProjectLocation project={mockProject} />
      <ProjectDetails project={mockProject} />
      
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium text-gray-900">Work Orders</h2>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            Add Work Order
          </button>
        </div>
        <WorkOrderList 
          workOrders={STANDARD_WORK_ORDERS} 
          onUpdate={handleWorkOrderUpdate}
        />
      </div>
    </div>
  );
};

export default ProjectOverview;