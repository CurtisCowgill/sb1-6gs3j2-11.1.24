import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import TabNavigation, { defaultTabs } from '../components/TabNavigation';
import ProjectOverview from '../components/projects/ProjectOverview';
import ProjectPlans from '../components/projects/ProjectPlans';
import ProjectPhotos from '../components/projects/ProjectPhotos';
import ProjectTime from '../components/projects/ProjectTime';
import ProjectFinancial from '../components/projects/ProjectFinancial';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <ProjectOverview projectId={id} />;
      case 'plans':
        return <ProjectPlans projectId={id} />;
      case 'photos':
        return <ProjectPhotos projectId={id} />;
      case 'time':
        return <ProjectTime projectId={id} />;
      case 'financial':
        return <ProjectFinancial projectId={id} />;
      default:
        return <ProjectOverview projectId={id} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <button
            onClick={() => navigate('/projects')}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </button>
        </div>

        <TabNavigation
          tabs={defaultTabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />

        <div className="mt-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;