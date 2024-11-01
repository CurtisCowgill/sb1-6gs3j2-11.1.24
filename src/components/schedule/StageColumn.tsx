import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

interface Project {
  id: string;
  name: string;
  customer: string;
}

interface StageColumnProps {
  stageId: string;
  title: string;
  projects: Project[];
}

const StageColumn: React.FC<StageColumnProps> = ({ stageId, title, projects }) => {
  return (
    <div className="w-64 flex flex-col bg-gray-50 rounded-lg mr-4">
      <div className="p-2 font-medium text-sm bg-white border-b rounded-t-lg">
        {title} ({projects.length})
      </div>
      <Droppable droppableId={stageId} type="PROJECT">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`flex-1 p-2 overflow-y-auto max-h-[calc(100vh-24rem)] ${
              snapshot.isDraggingOver ? 'bg-blue-50' : ''
            }`}
          >
            {projects.map((project, index) => (
              <Draggable key={project.id} draggableId={project.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`mb-2 p-2 text-xs bg-white rounded shadow-sm border ${
                      snapshot.isDragging ? 'border-blue-500 shadow-md' : 'border-gray-200'
                    }`}
                  >
                    <div className="font-medium truncate">{project.name}</div>
                    <div className="text-gray-500 truncate">{project.customer}</div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default StageColumn;