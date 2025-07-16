import React, { useState, useEffect } from 'react';
import { Modal, Input, Form } from 'antd';

interface AddEditSkillModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: { name: string; description?: string }) => void;
  initialValues?: { name: string; description?: string };
  isEdit?: boolean;
  loading?: boolean;
}

export const AddEditSkillModal: React.FC<AddEditSkillModalProps> = ({
  open,
  onClose,
  onSubmit,
  initialValues,
  isEdit = false,
  loading = false,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (open) {
      form.setFieldsValue(initialValues || { name: '', description: '' });
    }
  }, [open, initialValues, form]);

  return (
    <Modal
      open={open}
      onCancel={onClose}
      onOk={() => form.submit()}
      okText={isEdit ? 'Save' : 'Add'}
      confirmLoading={loading}
      title={isEdit ? 'Edit Skill' : 'Add Skill'}
      centered
      destroyOnClose
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onSubmit}
        initialValues={initialValues || { name: '', description: '' }}
      >
        <Form.Item
          label="Skill Name"
          name="name"
          rules={[{ required: true, message: 'Please enter skill name' }]}
        >
          <Input placeholder="Enter skill name" />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input.TextArea placeholder="Enter description (optional)" autoSize={{ minRows: 2, maxRows: 4 }} />
        </Form.Item>
      </Form>
    </Modal>
  );
};
