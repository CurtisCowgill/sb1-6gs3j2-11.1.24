import React, { useState } from 'react';
import { Calendar, Users } from 'lucide-react';
import WorkOrderModal from './WorkOrderModal';
import type { WorkOrder } from '../types';

interface WorkOrderListProps {
  workOrders: WorkOrder[];
  onUpdate: (id: string, data: Partial<WorkOrder>) => void;
}

const WorkOrderList: React.FC<WorkOrderListProps> = ({ workOrders, onUpdate }) => {
  const [selectedWorkOrder, setSelectedWorkOrder] = useState<WorkOrder | null>(null);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in progress':
        return 'bg-blue-100 text-blue-800';
      case 'scheduled':
        return 'bg-purple-100 text-purple-800';
      case 'pending':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="divide-y divide-gray-200">
      {workOrders?.map((wo) => (
        <div
          key={wo.id}
          onClick={() => setSelectedWorkOrder(wo)}
          className="p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-150 ease-in-out"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-900">{wo.title}</h3>
              <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {wo.crew}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {wo.startDate || 'Not scheduled'}
                </div>
              </div>
            </div>
            <div className="ml-4">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(wo.status)}`}>
                {wo.status}
              </span>
            </div>
          </div>
          
          {wo.progress > 0 && (
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${wo.progress}%` }}
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">{wo.progress}% Complete</p>
            </div>
          )}
        </div>
      ))}

      {selectedWorkOrder && (
        <WorkOrderModal
          workOrder={selectedWorkOrder}
          onClose={() => setSelectedWorkOrder(null)}
          onUpdate={(data) => {
            onUpdate(selectedWorkOrder.id, data);
            setSelectedWorkOrder(null);
          }}
        />
      )}
    </div>
  );
};

export default WorkOrderList;