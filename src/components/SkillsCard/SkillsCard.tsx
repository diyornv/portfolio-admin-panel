import { Button, Card, Typography } from 'antd';
import { DeleteIcon, Edit2Icon } from 'lucide-react';

interface Props {
  skill_id?: number;
  name: string;
  description?: string;
  onEdit?: () => void;
  onDelete: () => void;
}

export const SkillsCard = ({ name, description, onDelete, onEdit }: Props) => {
  return (
    <div className="bg-white rounded-2xl shadow p-6 mb-4 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">{name}</h2>
        <div className="flex gap-2">
          {onEdit && (
            <button
              onClick={onEdit}
              className="flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-700 text-sm font-medium transition"
            >
              Edit <Edit2Icon size={16} />
            </button>
          )}
          <button
            onClick={onDelete}
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-red-100 hover:bg-red-200 text-red-700 text-sm font-medium transition"
          >
            Delete <DeleteIcon size={16} />
          </button>
        </div>
      </div>
      {/* Description faqat bor bo'lsa chiqsin */}
      {description && (
        <div className="text-gray-500 text-base">{description}</div>
      )}
    </div>
  );
};