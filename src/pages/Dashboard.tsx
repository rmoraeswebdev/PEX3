import React from 'react';
import { StatsOverview } from '../components/StatsOverview';
import { PipelineView } from '../components/PipelineView';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Painel de Produção</h1>
        <div className="flex space-x-2">
          <select className="bg-gray-700 border border-gray-600 text-white rounded px-3 py-1.5 text-sm">
            <option>Últimos 7 dias</option>
            <option>Últimos 14 dias</option>
            <option>Últimos 30 dias</option>
            <option>Últimos 90 dias</option>
          </select>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded text-sm font-medium transition-colors duration-200">
            Novo Projeto
          </button>
        </div>
      </div>

      <StatsOverview />
      
      <div className="w-full">
        <PipelineView />
      </div>
    </div>
  );
};