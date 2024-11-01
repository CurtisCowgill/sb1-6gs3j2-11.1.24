import React from 'react';
import TimeTracking from '../TimeTracking';

interface ProjectTimeProps {
  projectId?: string;
}

const ProjectTime: React.FC<ProjectTimeProps> = () => {
  return <TimeTracking />;
};

export default ProjectTime;