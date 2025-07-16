import React, { useState } from 'react';
import { useGetSkills } from './services/query/useGetSkills';
import { useCreateSkill } from './services/mutation/useCreateSkill';
// import { useUpdateSkill } from './services/mutation/useUpdateSkill';
// import { useDeleteSkill } from './services/mutation/useDeleteSkill';
import { SkillsCard } from '../../components/SkillsCard';
import { AddEditSkillModal } from '../../components/addModal';
import { Button, message, Spin } from 'antd';
import { Plus } from 'lucide-react';

export const Skills = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editSkill, setEditSkill] = useState<any>(null);

  // Get all skills
  const { data: skills = [], isLoading, refetch } = useGetSkills();

  // Create skill
  const createSkill = useCreateSkill();

  // TODO: Uncomment and implement these if you have update/delete hooks
  // const updateSkill = useUpdateSkill();
  // const deleteSkill = useDeleteSkill();

  // Modal submit handler
  const handleModalSubmit = (values: { name: string; description?: string }) => {
    if (editSkill) {
      // updateSkill.mutate({ id: editSkill.id, data: values }, { onSuccess: refetch });
      message.info('Edit skill is not implemented in this demo.');
      setEditSkill(null);
      setModalOpen(false);
    } else {
      createSkill.mutate(values, {
        onSuccess: () => {
          message.success('Skill added!');
          setModalOpen(false);
          refetch();
        },
        onError: () => message.error('Failed to add skill'),
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-1">Skills</h1>
          <div className="text-gray-400">add skills</div>
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
                onDelete={() => message.info('Delete skill is not implemented in this demo.')}
                // To implement delete: onDelete={() => deleteSkill.mutate(skill.id, { onSuccess: refetch })}
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
        loading={createSkill.isLoading}
      />
    </div>
  );
};
