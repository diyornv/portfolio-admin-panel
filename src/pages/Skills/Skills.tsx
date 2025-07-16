import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getSkills, addSkills, updateSkill, deleteSkill } from '../../api/skills';
import { SkillsCard } from '../../components/SkillsCard';
import { AddEditSkillModal } from '../../components/addModal';
import { Button, message, Spin } from 'antd';
import { Plus } from 'lucide-react';

export const Skills = () => {
  const queryClient = useQueryClient();
  const [modalOpen, setModalOpen] = useState(false);
  const [editSkill, setEditSkill] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // Fetch all skills
  const { data: skills = [], isLoading } = useQuery({
    queryKey: ['skills'],
    queryFn: getSkills,
  });

  // Add skill
  const addMutation = useMutation({
    mutationFn: addSkills,
    onSuccess: () => {
      message.success('Skill(s) added!');
      queryClient.invalidateQueries({ queryKey: ['skills'] });
      setModalOpen(false);
    },
    onError: () => message.error('Failed to add skill'),
  });

  // Edit skill
  const editMutation = useMutation({
    mutationFn: ({ id, data }: any) => updateSkill(id, data),
    onSuccess: () => {
      message.success('Skill updated!');
      queryClient.invalidateQueries({ queryKey: ['skills'] });
      setEditSkill(null);
    },
    onError: () => message.error('Failed to update skill'),
  });

  // Delete skill
  const deleteMutation = useMutation({
    mutationFn: deleteSkill,
    onSuccess: () => {
      message.success('Skill deleted!');
      queryClient.invalidateQueries({ queryKey: ['skills'] });
    },
    onError: () => message.error('Failed to delete skill'),
  });

  // Modal submit handler
  const handleModalSubmit = (values: { name: string; description?: string }) => {
    setLoading(true);
    if (editSkill) {
      editMutation.mutate({ id: editSkill.id, data: values }, {
        onSettled: () => setLoading(false),
      });
    } else {
      // To‘g‘ri formatda yuborish
      addMutation.mutate([{ name: values.name, description: values.description }], {
        onSettled: () => setLoading(false),
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-1">Skills</h1>
          <div className="text-gray-400">ASDJASD</div>
        </div>
        <Button
          type="primary"
          icon={<Plus />}
          className="!rounded-xl !h-10 !font-medium bg-blue-600 hover:bg-blue-700 text-white text-base px-6"
          onClick={() => setModalOpen(true)}
        >
          Add
        </Button>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <Spin size="large" />
        </div>
      ) : (
        <div>
          {skills && Array.isArray(skills) && skills.length > 0 ? (
            skills.map((skill: any) => (
              <SkillsCard
                key={skill.id}
                name={skill.name}
                description={skill.description}
                onEdit={() => setEditSkill(skill)}
                onDelete={() => deleteMutation.mutate(skill.id)}
              />
            ))
          ) : (
            <div className="text-gray-400 text-center py-10">No skills found.</div>
          )}
        </div>
      )}
      {/* Add/Edit Modal */}
      <AddEditSkillModal
        open={modalOpen || !!editSkill}
        onClose={() => {
          setModalOpen(false);
          setEditSkill(null);
        }}
        onSubmit={handleModalSubmit}
        initialValues={editSkill ? { name: editSkill.name, description: editSkill.description } : undefined}
        isEdit={!!editSkill}
        loading={loading}
      />
    </div>
  );
};
