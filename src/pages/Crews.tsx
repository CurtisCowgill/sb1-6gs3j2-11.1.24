import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, Filter, Download } from 'lucide-react';
import CrewTable from '../components/crews/CrewTable';
import CrewFilters from '../components/crews/CrewFilters';
import { Crew } from '../types';

const mockCrews: Crew[] = [
  {
    id: 'CREW001',
    name: 'Foundation Team Alpha',
    lead: {
      id: 'EMP001',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: '(555) 123-4567',
      role: 'Team Lead',
      startDate: '2023-01-15',
      status: 'Active',
      skills: ['Foundation Work', 'Team Leadership'],
      certifications: [],
      performanceMetrics: []
    },
    members: [],
    specialty: 'Foundation Installation',
    status: 'Available',
    performanceRating: 4.8,
    equipmentAssigned: ['Concrete Mixer', 'Foundation Forms']
  },
  {
    id: 'CREW002',
    name: 'Waterproofing Team Beta',
    lead: {
      id: 'EMP002',
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@example.com',
      phone: '(555) 234-5678',
      role: 'Team Lead',
      startDate: '2023-02-01',
      status: 'Active',
      skills: ['Waterproofing', 'Team Leadership'],
      certifications: [],
      performanceMetrics: []
    },
    members: [],
    specialty: 'Waterproofing',
    status: 'Assigned',
    performanceRating: 4.5,
    equipmentAssigned: ['Sprayer', 'Safety Equipment']
  }
];

const Crews: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [crews] = useState<Crew[]>(mockCrews);

  const handleAddCrew = () => {
    navigate('/crews/new');
  };

  const handleExport = () => {
    console.log('Exporting crew data...');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Crews</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleExport}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
          <button
            onClick={handleAddCrew}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Crew
          </button>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center max-w-md flex-1">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search crews..."
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

          {showFilters && <CrewFilters />}

          <CrewTable crews={crews} />
        </div>
      </div>
    </div>
  );
};

export default Crews;