import React from 'react';
import { Clock, MoreVertical, Star, PlayCircle, User, MessageSquare } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  client: string;
  thumbnail: string;
  progress: number;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
  team: { name: string; avatar: string }[];
  comments: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  client,
  thumbnail,
  progress,
  dueDate,
  priority,
  team,
  comments
}) => {
  const priorityColor = {
    high: 'bg-red-500',
    medium: 'bg-amber-500',
    low: 'bg-blue-500'
  };

  return (
    <div className="bg-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
      <div className="relative">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-40 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
          <div className="flex items-center justify-between w-full">
            <div>
              <span className={`${priorityColor[priority]} text-white text-xs px-2 py-1 rounded uppercase`}>
                {priority}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button className="w-8 h-8 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                <Star size={16} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                <PlayCircle size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-white">{title}</h3>
            <p className="text-gray-400 text-sm">{client}</p>
          </div>
          <button className="text-gray-400 hover:text-white">
            <MoreVertical size={18} />
          </button>
        </div>

        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-400 mb-1">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-600 rounded-full h-2">
            <div 
              className="bg-indigo-500 h-2 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-600">
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              {team.map((member, index) => (
                <div 
                  key={index} 
                  className="w-7 h-7 rounded-full border-2 border-gray-700 overflow-hidden"
                  title={member.name}
                >
                  {member.avatar ? (
                    <img 
                      src={member.avatar} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-indigo-600 flex items-center justify-center">
                      <User size={14} />
                    </div>
                  )}
                </div>
              ))}
              <div className="w-7 h-7 rounded-full bg-gray-600 border-2 border-gray-700 flex items-center justify-center text-xs">
                +2
              </div>
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <MessageSquare size={14} className="mr-1" />
              <span>{comments}</span>
            </div>
          </div>
          <div className="flex items-center text-amber-400 text-sm">
            <Clock size={14} className="mr-1" />
            <span>{dueDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectGrid: React.FC = () => {
  const projects = [
    {
      title: "Summer Campaign Videos",
      client: "Outdoor Lifestyle Co.",
      thumbnail: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      progress: 75,
      dueDate: "3 days",
      priority: "high" as const,
      team: [
        { name: "Sarah M.", avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { name: "Mike T.", avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { name: "Anna K.", avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
      ],
      comments: 12
    },
    {
      title: "Product Launch Teaser",
      client: "Tech Innovations Inc.",
      thumbnail: "https://images.pexels.com/photos/2512282/pexels-photo-2512282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      progress: 45,
      dueDate: "5 days",
      priority: "medium" as const,
      team: [
        { name: "John D.", avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { name: "Lisa R.", avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
      ],
      comments: 8
    },
    {
      title: "Corporate Annual Review",
      client: "Finance Solutions",
      thumbnail: "https://images.pexels.com/photos/5466476/pexels-photo-5466476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      progress: 90,
      dueDate: "Tomorrow",
      priority: "high" as const,
      team: [
        { name: "Robert B.", avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { name: "Emily S.", avatar: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { name: "Mark L.", avatar: "" }
      ],
      comments: 5
    },
    {
      title: "Social Media Shorts",
      client: "Fashion Brand Co.",
      thumbnail: "https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      progress: 60,
      dueDate: "4 days",
      priority: "low" as const,
      team: [
        { name: "Jennifer C.", avatar: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { name: "Alex K.", avatar: "" }
      ],
      comments: 21
    }
  ];

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
      <div className="border-b border-gray-700 p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Recent Projects</h2>
        <div className="flex space-x-2">
          <select className="bg-gray-700 border border-gray-600 text-white rounded px-3 py-1.5 text-sm">
            <option>All Projects</option>
            <option>High Priority</option>
            <option>Due Soon</option>
          </select>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1.5 rounded text-sm font-medium transition-colors duration-200">
            View All
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};