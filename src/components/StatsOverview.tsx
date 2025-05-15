import React from 'react';
import { BarChart2, Clock, Film, Users } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  positive?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon, positive = true }) => {
  return (
    <div className="bg-gray-700 rounded-lg p-6 transition-transform duration-200 hover:transform hover:scale-102">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-400 text-sm">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          <div className={`flex items-center mt-2 text-sm ${positive ? 'text-green-400' : 'text-red-400'}`}>
            <span>{change}</span>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-gray-600 text-indigo-400">
          {icon}
        </div>
      </div>
    </div>
  );
};

export const StatsOverview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Projetos Ativos"
        value="24"
        change="+2 desde semana passada"
        icon={<Film size={24} />}
        positive={true}
      />
      <StatCard
        title="Concluídos este Mês"
        value="18"
        change="+4 desde mês passado"
        icon={<BarChart2 size={24} />}
        positive={true}
      />
      <StatCard
        title="Utilização da Equipe"
        value="86%"
        change="-2% desde semana passada"
        icon={<Users size={24} />}
        positive={false}
      />
      <StatCard
        title="Tempo Médio de Entrega"
        value="4,2 dias"
        change="-0,5 desde mês passado"
        icon={<Clock size={24} />}
        positive={true}
      />
    </div>
  );
};