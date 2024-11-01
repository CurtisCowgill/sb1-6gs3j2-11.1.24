import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { 
  format, 
  addDays, 
  startOfWeek,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  subMonths,
  isSameMonth
} from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CrewCalendarProps {
  crews: Array<{
    id: string;
    name: string;
  }>;
}

const CrewCalendar: React.FC<CrewCalendarProps> = ({ crews }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<'week' | 'month'>('week');

  const getDays = () => {
    if (view === 'week') {
      const start = startOfWeek(currentDate, { weekStartsOn: 1 }); // Start on Monday
      return Array.from({ length: 5 }, (_, i) => addDays(start, i));
    } else {
      const start = startOfMonth(currentDate);
      const end = endOfMonth(currentDate);
      return eachDayOfInterval({ start, end });
    }
  };

  const handlePrevious = () => {
    if (view === 'week') {
      setCurrentDate(prev => addDays(prev, -7));
    } else {
      setCurrentDate(prev => subMonths(prev, 1));
    }
  };

  const handleNext = () => {
    if (view === 'week') {
      setCurrentDate(prev => addDays(prev, 7));
    } else {
      setCurrentDate(prev => addMonths(prev, 1));
    }
  };

  const days = getDays();

  return (
    <div className="flex-1 flex flex-col min-h-0">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={handlePrevious}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="font-medium">
            {format(currentDate, 'MMMM yyyy')}
          </span>
          <button
            onClick={handleNext}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <div className="flex rounded-lg overflow-hidden border">
          <button
            onClick={() => setView('week')}
            className={`px-3 py-1 text-sm ${
              view === 'week'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Week
          </button>
          <button
            onClick={() => setView('month')}
            className={`px-3 py-1 text-sm ${
              view === 'month'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Month
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto bg-white rounded-lg shadow">
        <div className={`min-w-[800px] h-full`}>
          <div className="grid grid-cols-[150px_1fr] h-full">
            {/* Crew names column */}
            <div className="bg-gray-50 border-r">
              <div className="h-10 border-b" /> {/* Header spacer */}
              {crews.map(crew => (
                <div
                  key={crew.id}
                  className="h-16 px-4 flex items-center border-b"
                >
                  <span className="text-sm font-medium truncate">
                    {crew.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="overflow-auto">
              {/* Days header */}
              <div className={`grid grid-cols-${days.length} border-b`}>
                {days.map(day => (
                  <div
                    key={day.toString()}
                    className={`h-10 px-2 flex flex-col justify-center border-r text-center ${
                      !isSameMonth(day, currentDate) ? 'bg-gray-50' : ''
                    }`}
                  >
                    <div className="text-xs font-medium">
                      {format(day, 'EEE')}
                    </div>
                    <div className="text-xs text-gray-500">
                      {format(day, 'MMM d')}
                    </div>
                  </div>
                ))}
              </div>

              {/* Crew rows */}
              {crews.map(crew => (
                <div
                  key={crew.id}
                  className={`grid grid-cols-${days.length}`}
                  style={{ gridTemplateColumns: `repeat(${days.length}, minmax(120px, 1fr))` }}
                >
                  {days.map(day => (
                    <Droppable
                      key={`${day.toString()}-${crew.id}`}
                      droppableId={`calendar-${format(day, 'yyyy-MM-dd')}-${crew.id}`}
                      type="PROJECT"
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          className={`h-16 border-r border-b p-1 transition-colors ${
                            snapshot.isDraggingOver ? 'bg-blue-50' : ''
                          } ${!isSameMonth(day, currentDate) ? 'bg-gray-50' : ''}`}
                        >
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrewCalendar;