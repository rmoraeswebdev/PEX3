import React from 'react';
import { Video, FileText, Upload, MessageSquare } from 'lucide-react';

interface ActivityItemProps {
  user: {
    name: string;
    avatar: string;
  };
  action: string;
  project: string;
  time: string;
  icon: React.ReactNode;
  iconBg: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ 
  user, 
  action, 
  project, 
  time, 
  icon,
  iconBg
}) => {
  return (
    <div className="flex py-3">
      <div className="flex-shrink-0 mr-3">
        <img 
          src={user.avatar} 
          alt={user.name} 
          className="w-9 h-9 rounded-full border-2 border-gray-700"
        />
      </div>
      <div className="flex-grow min-w-0">
        <div className="flex items-center">
          <span className="font-medium text-white">{user.name}</span>
          <span className="mx-1.5 text-gray-500">•</span>
          <span className="text-gray-400 text-sm">{time}</span>
        </div>
        <p className="text-gray-300 mt-0.5 text-sm">
          {action} <span className="font-medium text-indigo-400">{project}</span>
        </p>
      </div>
      <div className={`flex-shrink-0 ml-3 ${iconBg} p-2 rounded-lg self-start`}>
        {icon}
      </div>
    </div>
  );
};

export const TeamActivity: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden h-full">
      <div className="border-b border-gray-700 p-4">
        <h2 className="text-xl font-bold">Team Activity</h2>
      </div>
      <div className="p-4">
        <div className="divide-y divide-gray-700">
          <ActivityItem 
            user={{
              name: "Alex Morgan",
              avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }}
            action="uploaded the final cut for"
            project="Summer Campaign"
            time="5 min ago"
            icon={<Video size={18} className="text-indigo-400" />}
            iconBg="bg-indigo-400/10"
          />
          <ActivityItem 
            user={{
              name: "Sarah Wilson",
              avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }}
            action="added comments to"
            project="Product Launch"
            time="27 min ago"
            icon={<MessageSquare size={18} className="text-green-400" />}
            iconBg="bg-green-400/10"
          />
          <ActivityItem 
            user={{
              name: "John Davis",
              avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }}
            action="uploaded b-roll footage for"
            project="Corporate Annual"
            time="1 hour ago"
            icon={<Upload size={18} className="text-amber-400" />}
            iconBg="bg-amber-400/10"
          />
          <ActivityItem 
            user={{
              name: "Emily Parker",
              avatar: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }}
            action="updated the script for"
            project="Social Media Shorts"
            time="2 hours ago"
            icon={<FileText size={18} className="text-blue-400" />}
            iconBg="bg-blue-400/10"
          />
          <ActivityItem 
            user={{
              name: "Michael Torres",
              avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }}
            action="started color grading for"
            project="Summer Campaign"
            time="3 hours ago"
            icon={<Video size={18} className="text-purple-400" />}
            iconBg="bg-purple-400/10"
          />
        </div>
        <button className="w-full mt-4 py-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
          View All Activity
        </button>
      </div>
    </div>
  );
};