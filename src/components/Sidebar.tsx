import React from 'react';
import { 
  Home, 
  Calendar, 
  Film, 
  Users, 
  BarChart2,
  MessageSquare,
  Settings,
  Clock,
  FolderOpen,
  HelpCircle,
  LogOut
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
}

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  collapsed: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, active = false, collapsed }) => {
  return (
    <li>
      <a 
        href="#" 
        className={`flex items-center py-3 px-4 rounded-lg transition-colors duration-200 ${
          active 
            ? 'bg-indigo-700 text-white' 
            : 'text-gray-400 hover:bg-gray-700 hover:text-white'
        }`}
      >
        <span className="mr-3">{icon}</span>
        {!collapsed && <span className="text-sm font-medium">{text}</span>}
      </a>
    </li>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  return (
    <div 
      className={`bg-gray-900 border-r border-gray-700 transition-all duration-300 ease-in-out ${
        collapsed ? 'w-16' : 'w-56'
      }`}
    >
      <div className="p-4 flex items-center justify-center">
        <div className="flex items-center">
          
        </div>
      </div>

      <div className="px-2 py-4">
        <nav>
          <ul className="space-y-1">
            <SidebarItem 
              icon={<Home size={20} />} 
              text="Painel" 
              active={true} 
              collapsed={collapsed} 
            />
            <SidebarItem 
              icon={<Film size={20} />} 
              text="Projetos" 
              collapsed={collapsed} 
            />
            <SidebarItem 
              icon={<Clock size={20} />} 
              text="Linha do Tempo" 
              collapsed={collapsed} 
            />
            <SidebarItem 
              icon={<Calendar size={20} />} 
              text="Agenda" 
              collapsed={collapsed} 
            />
            <SidebarItem 
              icon={<Users size={20} />} 
              text="Equipe" 
              collapsed={collapsed} 
            />
            <SidebarItem 
              icon={<FolderOpen size={20} />} 
              text="Arquivos" 
              collapsed={collapsed} 
            />
            <SidebarItem 
              icon={<MessageSquare size={20} />} 
              text="Feedback" 
              collapsed={collapsed} 
            />
            <SidebarItem 
              icon={<BarChart2 size={20} />} 
              text="Análises" 
              collapsed={collapsed} 
            />
          </ul>

          <div className="mt-8 pt-4 border-t border-gray-700">
            <ul className="space-y-1">
              <SidebarItem 
                icon={<Settings size={20} />} 
                text="Configurações" 
                collapsed={collapsed} 
              />
              <SidebarItem 
                icon={<HelpCircle size={20} />} 
                text="Ajuda & Suporte" 
                collapsed={collapsed} 
              />
              <SidebarItem 
                icon={<LogOut size={20} />} 
                text="Sair" 
                collapsed={collapsed} 
              />
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};