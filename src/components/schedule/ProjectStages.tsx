import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import StageColumn from './StageColumn';

interface Project {
  id: string;
  name: string;
  customer: string;
  stage: string;
}

interface ProjectStagesProps {
  projects: Project[];
  onDragEnd: (result: any) => void;
}

const stages = [
  { id: 'ready', title: 'Ready to Start' },
  { id: 'stakeout', title: 'Stake Out' },
  { id: 'footings', title: 'Footings' },
  { id: 'walls', title: 'Walls' },
  { id: 'strip', title: 'Strip' },
  { id: 'waterproofing', title: 'Waterproofing' },
  { id: 'flatwork', title: 'Flatwork' }
];

const ProjectStages: React.FC<ProjectStagesProps> = ({ projects, onDragEnd }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="flex overflow-x-auto pb-2">
        {stages.map(stage => (
          <StageColumn
            key={stage.id}
            stageId={stage.id}
            title={stage.title}
            projects={projects.filter(p => p.stage === stage.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectStages;