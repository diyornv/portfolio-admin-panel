import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';

interface SkillsCardProps {
  name: string;
  description?: string;
  onEdit: () => void;
  onDelete: () => void;
}

export const SkillsCard: React.FC<SkillsCardProps> = ({ name, description, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-6 mb-4 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">{name}</h2>
        <div className="flex gap-2">
          <button
            onClick={onEdit}
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-700 text-sm font-medium transition"
          >
            Edit <Pencil size={16} />
          </button>
          <button
            onClick={onDelete}
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-red-100 hover:bg-red-200 text-red-700 text-sm font-medium transition"
          >
            Delete <Trash2 size={16} />
          </button>
        </div>
      </div>
      <div className="text-gray-500 text-base">{description || 'Description'}</div>
    </div>
  );
};
