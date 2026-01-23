import { useState, useEffect } from 'react';
import { usersAPI, projectsAPI } from '@/lib/api';

// API-based actor for Node.js backend
export function useActor() {
  const [actor, setActor] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    // Initialize actor with API methods
    const apiActor = {
      checkUser: async (name) => {
        try {
          const userData = await usersAPI.checkUser({ 
            name,
            identity: localStorage.getItem('internet-identity') || 'default-user'
          });
          return userData;
        } catch (error) {
          console.error('Error checking user:', error);
          throw error;
        }
      },
      getUserProjects: async () => {
        try {
          const projects = await projectsAPI.getAll();
          return projects;
        } catch (error) {
          console.error('Error fetching projects:', error);
          return [];
        }
      },
      addProject: async (projectInput) => {
        try {
          const result = await projectsAPI.create(projectInput);
          // Backend returns { success: true, data: { id: ... } }
          return result?.id || (typeof result === 'object' ? result : null);
        } catch (error) {
          console.error('Error adding project:', error);
          throw error;
        }
      },
      updateProject: async (id, data) => {
        try {
          await projectsAPI.update(id, data);
          return true;
        } catch (error) {
          console.error('Error updating project:', error);
          throw error;
        }
      },
    };

    setActor(apiActor);
    setIsFetching(false);
  }, []);

  return { actor, isFetching };
}

