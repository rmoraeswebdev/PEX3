import React, { useState } from 'react';
import { 
  Bell, 
  Search, 
  Menu, 
  User,
  MessageSquare,
  Sliders
} from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <header className="bg-gray-900 border-b border-gray-700 py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar}
            className="mr-4 text-gray-400 hover:text-white focus:outline-none"
            aria-label="Alternar menu lateral"
          >
            <Menu size={20} />
          </button>
          <div className="relative">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Buscar projetos..."
              className="bg-gray-800 text-gray-200 px-4 py-2 pl-10 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64 transition-all duration-200"
            />
            <div className="absolute left-3 top-2.5 text-gray-400">
              <Search size={16} />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-white focus:outline-none relative">
            <MessageSquare size={20} />
            <span className="absolute -top-1 -right-1 bg-indigo-500 text-xs text-white rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </button>
          <button className="text-gray-400 hover:text-white focus:outline-none relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-indigo-500 text-xs text-white rounded-full h-4 w-4 flex items-center justify-center">
              5
            </span>
          </button>
          <button className="text-gray-400 hover:text-white focus:outline-none">
            <Sliders size={20} />
          </button>
          <div className="flex items-center space-x-2 ml-2">
            <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center">
              <User size={18} />
            </div>
            <span className="text-sm font-medium hidden md:block">João Diretor</span>
          </div>
        </div>
      </div>
    </header>
  );
};