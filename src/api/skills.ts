import request from '../config/requests';

export const getSkills = () => request.get('/myskill').then(res => res.data);
export const addSkills = (skills: { name: string; description?: string }[]) =>
  request.post('/myskill', { skills }).then(res => res.data);
export const updateSkill = (id: string, data: { name: string, description?: string }) =>
  request.put(`/myskill/${id}`, data).then(res => res.data);
export const deleteSkill = (id: string) => request.delete(`/myskill/${id}`).then(res => res.data); 