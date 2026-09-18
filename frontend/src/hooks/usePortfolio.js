import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { profileAPI, projectsAPI, contactAPI, authAPI, uploadAPI } from '@/lib/api';
import { toast } from 'sonner';

// -------------------------------------------------------------
// PROFILE HOOKS
// -------------------------------------------------------------
export function useProfile() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      try {
        return await profileAPI.get();
      } catch (err) {
        console.error('Failed to load profile from MongoDB:', err.message);
        return null;
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes cache
  });
}

export function useUpdateProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (updatedData) => {
      return await profileAPI.update(updatedData);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['profile'], data);
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      toast.success('Website details updated successfully!');
    },
    onError: (error) => {
      toast.error(`Update failed: ${error.message}`);
    },
  });
}

// -------------------------------------------------------------
// PROJECTS HOOKS
// -------------------------------------------------------------
export function useProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      try {
        return await projectsAPI.getAll();
      } catch (err) {
        console.error('Failed to load projects from MongoDB:', err.message);
        return [];
      }
    },
    staleTime: 1000 * 60 * 3,
  });
}

export function useCreateProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (projectData) => {
      return await projectsAPI.create(projectData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast.success('Project created and published successfully!');
    },
    onError: (error) => {
      toast.error(`Failed to create project: ${error.message}`);
    },
  });
}

export function useUpdateProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }) => {
      return await projectsAPI.update(id, data);
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

export function useDeleteProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      return await projectsAPI.delete(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast.success('Project deleted successfully!');
    },
    onError: (error) => {
      toast.error(`Failed to delete project: ${error.message}`);
    },
  });
}

// -------------------------------------------------------------
// CONTACT MESSAGES HOOKS
// -------------------------------------------------------------
export function useMessages() {
  return useQuery({
    queryKey: ['contact-messages'],
    queryFn: async () => {
      return await contactAPI.getAll();
    },
  });
}

export function useDeleteMessage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      return await contactAPI.delete(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contact-messages'] });
      toast.success('Message deleted');
    },
  });
}

// -------------------------------------------------------------
// ADMIN AUTH HOOK
// -------------------------------------------------------------
export function useAdminAuth() {
  const [isAdmin, setIsAdmin] = useState(() => authAPI.isAuthenticated());
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    let mounted = true;
    const checkAuth = async () => {
      if (!authAPI.isAuthenticated()) {
        if (mounted) {
          setIsAdmin(false);
          setIsLoading(false);
        }
        return;
      }

      try {
        const verifiedUser = await authAPI.verify();
        if (mounted) {
          if (verifiedUser) {
            setIsAdmin(true);
            setUser(verifiedUser);
          } else {
            setIsAdmin(false);
            setUser(null);
          }
          setIsLoading(false);
        }
      } catch {
        if (mounted) {
          setIsAdmin(false);
          setIsLoading(false);
        }
      }
    };

    checkAuth();
    return () => {
      mounted = false;
    };
  }, []);

  const login = async (password, email) => {
    const data = await authAPI.login(password, email);
    setIsAdmin(true);
    setUser(data.user);
    toast.success('Welcome to the Admin Dashboard!');
    return data;
  };

  const logout = () => {
    authAPI.logout();
    setIsAdmin(false);
    setUser(null);
    toast.info('Logged out from Admin Dashboard');
  };

  return { isAdmin, isLoading, user, login, logout };
}
