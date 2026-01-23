import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { toast } from 'sonner';

export function useCheckUser() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (name) => {
      if (!actor) throw new Error('Actor not initialized');
      try {
        return await actor.checkUser(name);
      } catch (error) {
        console.error('Error checking user:', error);
        // Don't throw - allow app to continue even if user check fails
        return null;
      }
    },
  });
}

export function useGetUserProjects() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getUserProjects();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddProject() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (projectInput) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.addProject(projectInput);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast.success('Project added successfully!');
    },
    onError: (error) => {
      toast.error(`Failed to add project: ${error.message}`);
    },
  });
}

export function useUpdateProject() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.updateProject(id, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast.success('Project updated successfully!');
    },
    onError: (error) => {
      toast.error(`Failed to update project: ${error.message}`);
    },
  });
}

