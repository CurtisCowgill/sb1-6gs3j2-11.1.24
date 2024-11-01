import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, Filter, Download, Building2, Users, Home } from 'lucide-react';
import CustomerTable from '../components/customers/CustomerTable';
import CustomerFilters from '../components/customers/CustomerFilters';
import { Customer } from '../types';

const mockCustomers: Customer[] = [
  {
    id: 'CUST001',
    companyName: 'Nies Homes',
    contactName: 'John Nies',
    email: 'john@nieshomes.com',
    phone: '(316) 555-0123',
    address: {
      street: '1234 Builder Way',
      city: 'Wichita',
      state: 'KS',
      zip: '67226'
    },
    projects: [],
    status: 'Active',
    notes: 'Premium home builder, prefers early morning concrete pours',
    preferredCommunication: 'Email',
    rating: 5,
    lastContact: '2024-03-10'
  },
  {
    id: 'CUST002',
    companyName: 'Remodel Masters',
    contactName: 'Sarah Johnson',
    email: 'sarah@remodelmasters.com',
    phone: '(316) 555-0456',
    address: {
      street: '789 Contractor Lane',
      city: 'Derby',
      state: 'KS',
      zip: '67037'
    },
    projects: [],
    status: 'Active',
    notes: 'Specializes in basement remodels',
    preferredCommunication: 'Phone',
    rating: 4,
    lastContact: '2024-03-08'
  }
];

const customerTypes = [
  { icon: Building2, label: 'Builders', count: 15 },
  { icon: Home, label: 'Remodelers', count: 8 },
  { icon: Home, label: 'Homeowners', count: 12 },
  { icon: Users, label: 'Other', count: 5 }
];

const Customers: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [customers] = useState<Customer[]>(mockCustomers);

  const handleAddCustomer = () => {
    navigate('/customers/new');
  };

  const handleExport = () => {
    console.log('Exporting customer data...');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleExport}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
          <button
            onClick={handleAddCustomer}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Customer
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {customerTypes.map((type) => (
          <div key={type.label} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <type.icon className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{type.label}</p>
                <p className="text-2xl font-semibold text-gray-900">{type.count}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center max-w-md flex-1">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search customers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm pl-10"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="ml-4 p-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <Filter className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>

          {showFilters && <CustomerFilters />}

          <CustomerTable customers={customers} />
        </div>
      </div>
    </div>
  );
};

export default Customers;