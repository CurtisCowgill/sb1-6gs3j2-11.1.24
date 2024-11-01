import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  User,
  FileText,
  FolderKanban,
  MessageSquare,
  Receipt,
} from 'lucide-react';
import TabNavigation from '../components/TabNavigation';
import CustomerInfo from '../components/customers/CustomerInfo';
import CustomerProjects from '../components/customers/CustomerProjects';
import CustomerDocuments from '../components/customers/CustomerDocuments';
import CustomerCommunication from '../components/customers/CustomerCommunication';
import CustomerBilling from '../components/customers/CustomerBilling';

const mockCustomer = {
  id: 'CUST001',
  name: 'ABC Builders',
  type: 'Builder',
  email: 'contact@abcbuilders.com',
  phone: '(555) 123-4567',
  address: {
    street: '123 Construction Ave',
    city: 'Builder City',
    state: 'BC',
    zip: '12345'
  },
  preferredCommunication: 'Email',
  rating: 4.5,
  notes: 'Premium builder client with multiple ongoing projects',
  projects: [],
  documents: [],
  communications: [],
  billing: {
    status: 'Good Standing',
    creditLimit: 50000,
    currentBalance: 15000
  }
};

const CustomerDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('info');

  const tabs = [
    { id: 'info', label: 'Information', icon: User },
    { id: 'projects', label: 'Projects', icon: FolderKanban },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'communication', label: 'Communication', icon: MessageSquare },
    { id: 'billing', label: 'Billing', icon: Receipt },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'info':
        return <CustomerInfo customer={mockCustomer} />;
      case 'projects':
        return <CustomerProjects customerId={id} />;
      case 'documents':
        return <CustomerDocuments customerId={id} />;
      case 'communication':
        return <CustomerCommunication customerId={id} />;
      case 'billing':
        return <CustomerBilling customerId={id} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/customers')}
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Customers
          </button>
          <h1 className="text-2xl font-bold text-gray-900">{mockCustomer.name}</h1>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            {mockCustomer.type}
          </span>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
          Edit Customer
        </button>
      </div>

      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="mt-6">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default CustomerDetail;