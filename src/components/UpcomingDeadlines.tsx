import React from 'react';
import { Calendar, Clock, AlertCircle, CheckCircle } from 'lucide-react';

interface DeadlineItemProps {
  project: string;
  client: string;
  date: string;
  overdue?: boolean;
  complete?: boolean;
}

const DeadlineItem: React.FC<DeadlineItemProps> = ({ 
  project, 
  client, 
  date, 
  overdue = false,
  complete = false 
}) => {
  return (
    <div className={`flex items-center p-3 rounded-lg transition-all duration-200 ${
      complete 
        ? 'bg-green-500/10' 
        : overdue 
          ? 'bg-red-500/10' 
          : 'hover:bg-gray-700'
    }`}>
      <div className="mr-3">
        {complete ? (
          <CheckCircle size={20} className="text-green-500" />
        ) : overdue ? (
          <AlertCircle size={20} className="text-red-500" />
        ) : (
          <Clock size={20} className="text-amber-500" />
        )}
      </div>
      <div className="flex-grow min-w-0">
        <h4 className={`font-medium truncate ${
          complete ? 'text-green-300' : overdue ? 'text-red-300' : 'text-white'
        }`}>
          {project}
        </h4>
        <p className="text-gray-400 text-sm truncate">{client}</p>
      </div>
      <div className={`text-sm ${
        complete ? 'text-green-400' : overdue ? 'text-red-400' : 'text-gray-400'
      }`}>
        {date}
      </div>
    </div>
  );
};

export const UpcomingDeadlines: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden h-full">
      <div className="border-b border-gray-700 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Calendar size={18} className="mr-2 text-indigo-400" />
          <h2 className="text-xl font-bold">Upcoming Deadlines</h2>
        </div>
        <button className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors">
          View Calendar
        </button>
      </div>
      <div className="p-2">
        <div className="space-y-1">
          <DeadlineItem 
            project="Website Sizzle Reel"
            client="Creative Agency"
            date="Today"
          />
          <DeadlineItem 
            project="Product Explainer Revision"
            client="Tech Startup"
            date="Today"
            overdue={true}
          />
          <DeadlineItem 
            project="Corporate Training Module 1"
            client="Enterprise Solutions"
            date="Yesterday"
            complete={true}
          />
          <DeadlineItem 
            project="Social Media Ad Package"
            client="Fashion Brand"
            date="Tomorrow"
          />
          <DeadlineItem 
            project="Customer Testimonials"
            client="Service Provider Inc."
            date="In 2 days"
          />
          <DeadlineItem 
            project="Annual Conference Recap"
            client="Industry Association"
            date="In 3 days"
          />
          <DeadlineItem 
            project="Educational Series Ep.3"
            client="Online Academy"
            date="In 4 days"
          />
        </div>
      </div>
    </div>
  );
};