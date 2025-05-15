import React from 'react';
import { Film, Edit, CheckSquare, Check, Clock, Award, MoreHorizontal } from 'lucide-react';

interface StageItemProps {
  project: string;
  client: string;
  dueDate: string;
  progress: number;
  thumbnail: string;
}

const StageItem: React.FC<StageItemProps> = ({ project, client, dueDate, progress, thumbnail }) => {
  return (
    <div className="bg-gray-700 rounded-lg p-4 mb-3 border-l-4 border-indigo-500 transition-all hover:shadow-lg">
      <div className="flex items-center">
        <div className="w-12 h-12 rounded overflow-hidden mr-4 flex-shrink-0">
          <img src={thumbnail} alt={project} className="w-full h-full object-cover" />
        </div>
        <div className="flex-grow min-w-0">
          <h4 className="font-medium text-white truncate">{project}</h4>
          <p className="text-gray-400 text-sm">{client}</p>
        </div>
        <div className="flex flex-col items-end ml-4">
          <div className="flex items-center text-amber-400 text-sm mb-1">
            <Clock size={14} className="mr-1" />
            <span>{dueDate}</span>
          </div>
          <div className="w-24 bg-gray-600 rounded-full h-1.5">
            <div 
              className="bg-indigo-500 h-1.5 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <button className="ml-2 text-gray-400 hover:text-white">
          <MoreHorizontal size={18} />
        </button>
      </div>
    </div>
  );
};

export const PipelineView: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
      <div className="border-b border-gray-700 p-4">
        <h2 className="text-xl font-bold">Pipeline de Produção</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-700">
        <div className="p-4">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 mr-2">
              <Film size={20} />
            </div>
            <h3 className="font-semibold text-lg">Pré-Produção</h3>
            <span className="ml-auto bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded">3</span>
          </div>
          <div className="space-y-3">
            <StageItem
              project="Comercial da Marca"
              client="Acme Corp"
              dueDate="2 dias restantes"
              progress={25}
              thumbnail="https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <StageItem
              project="Visão Geral do Produto"
              client="TechGiant Inc"
              dueDate="4 dias restantes"
              progress={15}
              thumbnail="https://images.pexels.com/photos/3759098/pexels-photo-3759098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <StageItem
              project="Resumo do Evento"
              client="Eventful Co"
              dueDate="3 dias restantes"
              progress={30}
              thumbnail="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 mr-2">
              <Edit size={20} />
            </div>
            <h3 className="font-semibold text-lg">Produção</h3>
            <span className="ml-auto bg-amber-500/20 text-amber-300 text-xs px-2 py-1 rounded">4</span>
          </div>
          <div className="space-y-3">
            <StageItem
              project="Treinamento Corporativo"
              client="Startup Inc"
              dueDate="1 dia restante"
              progress={60}
              thumbnail="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <StageItem
              project="Vídeos para Redes Sociais"
              client="Marca de Moda"
              dueDate="Amanhã"
              progress={75}
              thumbnail="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <StageItem
              project="Série Documental"
              client="Canal Natureza"
              dueDate="5 dias restantes"
              progress={45}
              thumbnail="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <StageItem
              project="Explicativo do Produto"
              client="Tech Startup"
              dueDate="3 dias restantes"
              progress={65}
              thumbnail="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-lg bg-green-500/10 text-green-400 mr-2">
              <CheckSquare size={20} />
            </div>
            <h3 className="font-semibold text-lg">Pós-Produção</h3>
            <span className="ml-auto bg-green-500/20 text-green-300 text-xs px-2 py-1 rounded">2</span>
          </div>
          <div className="space-y-3">
            <StageItem
              project="Vídeo do Relatório Anual"
              client="Finance Corp"
              dueDate="Hoje"
              progress={90}
              thumbnail="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <StageItem
              project="Background do Site"
              client="Agência XYZ"
              dueDate="Amanhã"
              progress={85}
              thumbnail="https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};