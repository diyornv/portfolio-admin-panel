import { useMutation } from '@tanstack/react-query';
import request from '../../../../config/requests';

export const useDeleteSkill = () => {
  return useMutation({
    mutationKey: ['deleteSkill'],
    mutationFn: (id: string) => request.delete(`/myskill/${id}`).then(res => res.data),
  });
}; 