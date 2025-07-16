import { useMutation } from '@tanstack/react-query';
import request from '../../../../config/requests';

export const useUpdateSkill = () => {
  return useMutation({
    mutationKey: ['updateSkill'],
    mutationFn: ({ id, data }: { id: string, data: { name: string; description?: string } }) =>
      request.put(`/myskill/${id}`, data).then(res => res.data),
  });
}; 