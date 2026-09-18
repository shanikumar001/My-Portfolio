import React, { useState, useEffect } from 'react';
import {
  FolderGit2,
  User,
  GraduationCap,
  Sparkles,
  Mail,
  MessageSquare,
  Plus,
  Trash2,
  Edit3,
  ExternalLink,
  Upload,
  Check,
  X,
  ArrowLeft,
  LogOut,
  Save,
  RotateCw,
  Eye,
  Database,
  Cloud,
  CheckCircle2,
  Sliders,
  Layers,
  Code2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { uploadAPI } from '@/lib/api';
import {
  useProfile,
  useUpdateProfile,
  useProjects,
  useCreateProject,
  useUpdateProject,
  useDeleteProject,
  useMessages,
  useDeleteMessage
} from '@/hooks/usePortfolio';

const AdminDashboard = ({ onExit }) => {
  const [activeTab, setActiveTab] = useState('projects');

  // React Query Data Hooks
  const { data: profile, isLoading: isProfileLoading } = useProfile();
  const updateProfileMutation = useUpdateProfile();

  const { data: projects = [], isLoading: isProjectsLoading } = useProjects();
  const createProjectMutation = useCreateProject();
  const updateProjectMutation = useUpdateProject();
  const deleteProjectMutation = useDeleteProject();

  const { data: messages = [], isLoading: isMessagesLoading } = useMessages();
  const deleteMessageMutation = useDeleteMessage();

  // Local Form States
  const [profileForm, setProfileForm] = useState(null);
  const [editingProject, setEditingProject] = useState(null);
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [projectForm, setProjectForm] = useState({
    title: '',
    description: '',
    tags: '',
    image: '',
    imageId: '',
    liveUrl: '',
    githubUrl: '',
    featured: true,
    order: 0,
  });

  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [imagePreview, setImagePreview] = useState('');

  // Sync profile form once loaded
  useEffect(() => {
    if (profile && !profileForm) {
      setProfileForm(profile);
    }
  }, [profile]);

  // Handle Project Form Reset
  const resetProjectForm = () => {
    setProjectForm({
      title: '',
      description: '',
      tags: '',
      image: '',
      imageId: '',
      liveUrl: '',
      githubUrl: '',
      featured: true,
      order: (projects?.length || 0) + 1,
    });
    setImagePreview('');
    setEditingProject(null);
    setIsAddingProject(false);
  };

  // Populate form for editing
  const handleEditProject = (proj) => {
    setEditingProject(proj);
    setProjectForm({
      title: proj.title || '',
      description: proj.description || '',
      tags: Array.isArray(proj.tags) ? proj.tags.join(', ') : '',
      image: proj.image || '',
      imageId: proj.imageId || '',
      liveUrl: proj.liveUrl || '',
      githubUrl: proj.githubUrl || '',
      featured: proj.featured !== undefined ? proj.featured : true,
      order: proj.order || 0,
    });
    setImagePreview(proj.image || '');
    setIsAddingProject(true);
  };

  // Upload file directly to Cloudinary
  const handleImageUpload = async (e, target = 'project') => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingImage(true);
    try {
      toast.loading('Uploading image to Cloudinary...', { id: 'img-upload' });
      const data = await uploadAPI.uploadImage(file, target === 'avatar' ? 'portfolio/avatar' : 'portfolio/projects');
      toast.success('Image successfully uploaded to Cloudinary!', { id: 'img-upload' });

      if (target === 'avatar') {
        setProfileForm((prev) => ({
          ...prev,
          avatarUrl: data.url,
          avatarId: data.public_id,
        }));
      } else {
        setProjectForm((prev) => ({
          ...prev,
          image: data.url,
          imageId: data.public_id,
        }));
        setImagePreview(data.url);
      }
    } catch (err) {
      toast.error(`Upload failed: ${err.message}`, { id: 'img-upload' });
    } finally {
      setIsUploadingImage(false);
    }
  };

  // Submit Project (Create or Update)
  const handleSaveProject = async (e) => {
    e.preventDefault();
    if (!projectForm.title.trim() || !projectForm.description.trim()) {
      toast.error('Title and description are required');
      return;
    }

    const tagsArray = projectForm.tags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const payload = {
      ...projectForm,
      tags: tagsArray,
      order: Number(projectForm.order) || 0,
    };

    if (editingProject) {
      await updateProjectMutation.mutateAsync({
        id: editingProject._id || editingProject.id,
        data: payload,
      });
    } else {
      await createProjectMutation.mutateAsync(payload);
    }

    resetProjectForm();
  };

  // Delete Project
  const handleDeleteProject = async (proj) => {
    if (window.confirm(`Are you sure you want to delete "${proj.title}"?`)) {
      await deleteProjectMutation.mutateAsync(proj._id || proj.id);
    }
  };

  // Save General Profile Changes
  const handleSaveProfile = async () => {
    if (!profileForm) return;
    await updateProfileMutation.mutateAsync(profileForm);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col antialiased select-none">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-card/80 backdrop-blur-xl px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onExit}
            className="flex items-center gap-1.5 text-xs font-mono font-bold rounded-lg border border-border/60 hover:border-primary"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Public View</span>
          </Button>

          <div className="h-5 w-px bg-border/60 mx-1" />

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <h1 className="text-sm sm:text-base font-black tracking-tight text-foreground">
              Portfolio Admin Studio
            </h1>
            <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20 text-[10px] font-mono font-bold">
              <Database className="w-3 h-3" /> MongoDB Atlas
            </span>
            <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-sky-500/10 text-sky-500 border border-sky-500/20 text-[10px] font-mono font-bold">
              <Cloud className="w-3 h-3" /> Cloudinary
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            size="sm"
            onClick={handleSaveProfile}
            disabled={updateProfileMutation.isPending}
            className="bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground font-bold text-xs px-4 py-2 rounded-lg shadow-md shadow-primary/20 flex items-center gap-1.5"
          >
            <Save className="w-3.5 h-3.5" />
            <span>{updateProfileMutation.isPending ? 'Saving...' : 'Save Website'}</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={onExit}
            className="text-xs font-mono text-muted-foreground hover:text-rose-500 hover:border-rose-500/50 rounded-lg"
            title="Exit Studio"
          >
            <LogOut className="w-3.5 h-3.5" />
          </Button>
        </div>
      </header>

      {/* Main Studio Body */}
      <div className="flex-1 flex flex-col lg:flex-row max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 gap-6">
        {/* Left Navigation Sidebar */}
        <aside className="w-full lg:w-64 shrink-0 flex lg:flex-col gap-1.5 overflow-x-auto pb-2 lg:pb-0">
          {[
            { id: 'projects', label: 'Projects & Work', icon: FolderGit2, badge: projects?.length },
            { id: 'hero', label: 'Hero & Identity', icon: User },
            { id: 'journey', label: 'Academic Journey', icon: GraduationCap },
            { id: 'skills', label: 'About & Skills', icon: Sparkles },
            { id: 'contact', label: 'Contact & Socials', icon: Mail },
            { id: 'messages', label: 'Inquiries Inbox', icon: MessageSquare, badge: messages?.length },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  if (tab.id !== 'projects') resetProjectForm();
                }}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20 font-extrabold'
                    : 'bg-card/60 hover:bg-card border border-border/50 text-muted-foreground hover:text-foreground'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </div>
                {tab.badge !== undefined && (
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-primary-foreground/20 text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </aside>

        {/* Right Content Area */}
        <main className="flex-1 min-w-0">
          {/* ========================================================= */}
          {/* TAB 1: PROJECTS & REPOSITORIES                            */}
          {/* ========================================================= */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-border/60">
                <div>
                  <h2 className="text-xl font-black tracking-tight text-foreground">Projects Showcase</h2>
                  <p className="text-xs text-muted-foreground">
                    Manage your portfolio projects. Images uploaded here stream directly to your Cloudinary database.
                  </p>
                </div>

                {!isAddingProject && (
                  <Button
                    onClick={() => {
                      resetProjectForm();
                      setIsAddingProject(true);
                    }}
                    size="sm"
                    className="bg-primary text-primary-foreground font-bold text-xs rounded-xl flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Project</span>
                  </Button>
                )}
              </div>

              {/* Add / Edit Project Form */}
              {isAddingProject && (
                <form
                  onSubmit={handleSaveProject}
                  className="p-5 sm:p-6 rounded-2xl bg-card border border-border/80 shadow-xl space-y-4 animate-in fade-in duration-300"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-border/50">
                    <h3 className="text-sm font-bold text-foreground">
                      {editingProject ? 'Edit Project' : 'Create New Project'}
                    </h3>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={resetProjectForm}
                      className="text-xs text-muted-foreground"
                    >
                      Cancel
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1.5 md:col-span-2">
                      <label className="font-mono font-bold uppercase text-muted-foreground text-[10px]">
                        Project Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={projectForm.title}
                        onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                        placeholder="e.g. ZiuroDB - Centralized DB Engine"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-muted/40 border border-border/70 text-foreground focus:border-primary focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5 md:col-span-2">
                      <label className="font-mono font-bold uppercase text-muted-foreground text-[10px]">
                        Project Description *
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={projectForm.description}
                        onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                        placeholder="Provide a detailed, impactful summary of what you engineered..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-muted/40 border border-border/70 text-foreground focus:border-primary focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5 md:col-span-2">
                      <label className="font-mono font-bold uppercase text-muted-foreground text-[10px]">
                        Tech Stack Tags (Comma separated)
                      </label>
                      <input
                        type="text"
                        value={projectForm.tags}
                        onChange={(e) => setProjectForm({ ...projectForm, tags: e.target.value })}
                        placeholder="React, Node.js, TypeScript, MongoDB, Redis, Docker"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-muted/40 border border-border/70 text-foreground focus:border-primary focus:outline-none font-mono"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono font-bold uppercase text-muted-foreground text-[10px]">
                        Live Demo URL
                      </label>
                      <input
                        type="url"
                        value={projectForm.liveUrl}
                        onChange={(e) => setProjectForm({ ...projectForm, liveUrl: e.target.value })}
                        placeholder="https://www.ziurodb.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-muted/40 border border-border/70 text-foreground focus:border-primary focus:outline-none font-mono"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono font-bold uppercase text-muted-foreground text-[10px]">
                        GitHub Repository URL
                      </label>
                      <input
                        type="url"
                        value={projectForm.githubUrl}
                        onChange={(e) => setProjectForm({ ...projectForm, githubUrl: e.target.value })}
                        placeholder="https://github.com/ziurodb"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-muted/40 border border-border/70 text-foreground focus:border-primary focus:outline-none font-mono"
                      />
                    </div>

                    {/* Cloudinary Image Upload Section */}
                    <div className="space-y-1.5 md:col-span-2">
                      <label className="font-mono font-bold uppercase text-muted-foreground text-[10px] flex items-center justify-between">
                        <span>Project Preview Media (Cloudinary Upload)</span>
                        {imagePreview && <span className="text-emerald-500 font-semibold">Image Loaded</span>}
                      </label>

                      <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-muted/20 border border-dashed border-border/80">
                        {imagePreview ? (
                          <div className="relative w-36 h-24 rounded-lg overflow-hidden border border-border/60 shrink-0 bg-muted">
                            <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                            <button
                              type="button"
                              onClick={() => {
                                setProjectForm({ ...projectForm, image: '', imageId: '' });
                                setImagePreview('');
                              }}
                              className="absolute top-1 right-1 p-1 bg-background/80 rounded-full text-foreground hover:text-rose-500"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ) : (
                          <div className="w-36 h-24 rounded-lg border border-border/60 flex items-center justify-center bg-muted/40 text-muted-foreground text-[11px] font-mono shrink-0">
                            No Image
                          </div>
                        )}

                        <div className="flex-1 space-y-2">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageUpload(e, 'project')}
                            disabled={isUploadingImage}
                            className="text-xs file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-primary file:text-primary-foreground hover:file:opacity-90 cursor-pointer text-muted-foreground"
                          />
                          <p className="text-[10px] text-muted-foreground">
                            Upload PNG, JPG, or WEBP up to 10MB. It will be streamed directly to your Cloudinary storage.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={projectForm.featured}
                          onChange={(e) => setProjectForm({ ...projectForm, featured: e.target.checked })}
                          className="rounded border-border text-primary focus:ring-primary"
                        />
                        <span className="font-semibold text-foreground">Featured Project</span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-3 flex justify-end gap-2.5">
                    <Button type="button" variant="outline" size="sm" onClick={resetProjectForm} className="rounded-xl">
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      size="sm"
                      disabled={isUploadingImage || createProjectMutation.isPending || updateProjectMutation.isPending}
                      className="bg-primary text-primary-foreground font-bold rounded-xl px-5"
                    >
                      {editingProject ? 'Save Project Changes' : 'Publish Project'}
                    </Button>
                  </div>
                </form>
              )}

              {/* Projects List Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((proj) => (
                  <div
                    key={proj._id || proj.id}
                    className="p-4 rounded-2xl bg-card border border-border/70 hover:border-primary/50 transition-all flex flex-col justify-between space-y-3 shadow-sm group"
                  >
                    <div className="space-y-2">
                      {proj.image && (
                        <div className="w-full h-32 rounded-xl overflow-hidden bg-muted/20 border border-border/40">
                          <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                        </div>
                      )}

                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                          {proj.title}
                        </h4>
                        {proj.featured && (
                          <span className="shrink-0 text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                            FEATURED
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {proj.description}
                      </p>

                      {proj.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {proj.tags.slice(0, 5).map((t, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted/40 border border-border/50 text-foreground/80"
                            >
                              {t}
                            </span>
                          ))}
                          {proj.tags.length > 5 && (
                            <span className="text-[10px] font-mono px-1.5 py-0.5 text-muted-foreground">
                              +{proj.tags.length - 5}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="pt-2 border-t border-border/50 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-[11px]">
                        {proj.liveUrl && (
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-primary hover:underline flex items-center gap-1"
                          >
                            <ExternalLink className="w-3 h-3" /> Live
                          </a>
                        )}
                        {proj.githubUrl && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-foreground flex items-center gap-1"
                          >
                            <Code2 className="w-3 h-3" /> Code
                          </a>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleEditProject(proj)}
                          className="p-1.5 rounded-lg bg-muted/40 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
                          title="Edit Project"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteProject(proj)}
                          className="p-1.5 rounded-lg bg-muted/40 hover:bg-rose-500/20 text-muted-foreground hover:text-rose-500 transition-colors"
                          title="Delete Project"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 2: HERO & PROFILE IDENTITY                            */}
          {/* ========================================================= */}
          {activeTab === 'hero' && profileForm && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-border/60">
                <h2 className="text-xl font-black tracking-tight text-foreground">Hero Section & Identity</h2>
                <p className="text-xs text-muted-foreground">
                  Update your name, live founder status pill, typewriter roles, and hero portrait.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-md space-y-5 text-xs">
                {/* Cloudinary Profile Photo Uploader */}
                <div>
                  <label className="font-mono font-bold uppercase text-muted-foreground text-[10px] block mb-2">
                    Hero Profile Picture (Cloudinary)
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden border border-border/60 bg-muted shrink-0 relative">
                      {profileForm.avatarUrl ? (
                        <img src={profileForm.avatarUrl} alt="Avatar" className="w-full h-full object-cover object-top" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs font-mono">
                          Default
                        </div>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, 'avatar')}
                        className="text-xs file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-primary file:text-primary-foreground hover:file:opacity-90 cursor-pointer text-muted-foreground"
                      />
                      <p className="text-[10px] text-muted-foreground">
                        Upload your high-resolution portrait to replace the Hero image via Cloudinary.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono font-bold uppercase text-muted-foreground text-[10px]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={profileForm.name || ''}
                      onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-muted/40 border border-border/70 text-foreground font-bold focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono font-bold uppercase text-muted-foreground text-[10px]">
                      Status Pill Text
                    </label>
                    <input
                      type="text"
                      value={profileForm.statusPill || ''}
                      onChange={(e) => setProfileForm({ ...profileForm, statusPill: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-muted/40 border border-border/70 text-foreground font-mono focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono font-bold uppercase text-muted-foreground text-[10px]">
                    Hero Narrative Bio
                  </label>
                  <textarea
                    rows={3}
                    value={profileForm.bio || ''}
                    onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-muted/40 border border-border/70 text-foreground focus:border-primary focus:outline-none leading-relaxed"
                  />
                </div>

                {/* Typewriter Titles */}
                <div className="space-y-2">
                  <label className="font-mono font-bold uppercase text-muted-foreground text-[10px] block">
                    Typewriter Heading Roles (Animated in Hero)
                  </label>
                  <div className="space-y-2">
                    {profileForm.typingTitles?.map((title, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={title}
                          onChange={(e) => {
                            const updated = [...profileForm.typingTitles];
                            updated[i] = e.target.value;
                            setProfileForm({ ...profileForm, typingTitles: updated });
                          }}
                          className="flex-1 px-3 py-2 rounded-xl bg-muted/40 border border-border/70 text-foreground font-mono text-xs focus:border-primary focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const updated = profileForm.typingTitles.filter((_, idx) => idx !== i);
                            setProfileForm({ ...profileForm, typingTitles: updated });
                          }}
                          className="p-2 text-muted-foreground hover:text-rose-500 rounded-lg hover:bg-muted"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setProfileForm({
                          ...profileForm,
                          typingTitles: [...(profileForm.typingTitles || []), 'NEW ROLE TITLE'],
                        })
                      }
                      className="text-xs font-mono rounded-lg"
                    >
                      <Plus className="w-3.5 h-3.5 mr-1" /> Add Role Title
                    </Button>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="space-y-1.5">
                  <label className="font-mono font-bold uppercase text-muted-foreground text-[10px]">
                    Hero Tech Stack Chips (Comma separated)
                  </label>
                  <input
                    type="text"
                    value={profileForm.techChips?.join(', ') || ''}
                    onChange={(e) =>
                      setProfileForm({
                        ...profileForm,
                        techChips: e.target.value
                          .split(',')
                          .map((s) => s.trim())
                          .filter(Boolean),
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-muted/40 border border-border/70 text-foreground font-mono focus:border-primary focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 3: ACADEMIC JOURNEY & MILESTONES                      */}
          {/* ========================================================= */}
          {activeTab === 'journey' && profileForm && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-border/60">
                <div>
                  <h2 className="text-xl font-black tracking-tight text-foreground">Academic Journey & Roots</h2>
                  <p className="text-xs text-muted-foreground">
                    Edit the milestones that render along the interactive winding road in the Background section.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {profileForm.milestones?.map((milestone, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-card border border-border/70 shadow-sm space-y-3 text-xs"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-border/40">
                      <span className="font-mono font-bold text-primary flex items-center gap-1.5">
                        <GraduationCap className="w-4 h-4" /> Milestone #{idx + 1}: {milestone.badge || 'Stage'}
                      </span>
                      <span className="font-mono text-muted-foreground text-[11px]">{milestone.side?.toUpperCase()} SIDE</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-muted-foreground uppercase">Year Range</label>
                        <input
                          type="text"
                          value={milestone.year || ''}
                          onChange={(e) => {
                            const updated = [...profileForm.milestones];
                            updated[idx].year = e.target.value;
                            setProfileForm({ ...profileForm, milestones: updated });
                          }}
                          className="w-full px-3 py-2 rounded-xl bg-muted/40 border border-border/70 text-foreground font-mono"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-muted-foreground uppercase">Title / Degree</label>
                        <input
                          type="text"
                          value={milestone.title || ''}
                          onChange={(e) => {
                            const updated = [...profileForm.milestones];
                            updated[idx].title = e.target.value;
                            setProfileForm({ ...profileForm, milestones: updated });
                          }}
                          className="w-full px-3 py-2 rounded-xl bg-muted/40 border border-border/70 text-foreground font-bold"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-muted-foreground uppercase">Institution</label>
                        <input
                          type="text"
                          value={milestone.institution || ''}
                          onChange={(e) => {
                            const updated = [...profileForm.milestones];
                            updated[idx].institution = e.target.value;
                            setProfileForm({ ...profileForm, milestones: updated });
                          }}
                          className="w-full px-3 py-2 rounded-xl bg-muted/40 border border-border/70 text-foreground"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-muted-foreground uppercase">Score / CGPA</label>
                        <input
                          type="text"
                          value={milestone.score || ''}
                          onChange={(e) => {
                            const updated = [...profileForm.milestones];
                            updated[idx].score = e.target.value;
                            setProfileForm({ ...profileForm, milestones: updated });
                          }}
                          className="w-full px-3 py-2 rounded-xl bg-muted/40 border border-border/70 text-emerald-500 font-bold font-mono"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-muted-foreground uppercase">Location</label>
                        <input
                          type="text"
                          value={milestone.location || ''}
                          onChange={(e) => {
                            const updated = [...profileForm.milestones];
                            updated[idx].location = e.target.value;
                            setProfileForm({ ...profileForm, milestones: updated });
                          }}
                          className="w-full px-3 py-2 rounded-xl bg-muted/40 border border-border/70 text-foreground"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-muted-foreground uppercase">Side</label>
                        <select
                          value={milestone.side || 'right'}
                          onChange={(e) => {
                            const updated = [...profileForm.milestones];
                            updated[idx].side = e.target.value;
                            setProfileForm({ ...profileForm, milestones: updated });
                          }}
                          className="w-full px-3 py-2 rounded-xl bg-muted/40 border border-border/70 text-foreground"
                        >
                          <option value="left">Left Side</option>
                          <option value="right">Right Side</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 4: ABOUT & TECHNICAL SKILLS                           */}
          {/* ========================================================= */}
          {activeTab === 'skills' && profileForm && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-border/60">
                <h2 className="text-xl font-black tracking-tight text-foreground">About & Core Skills</h2>
                <p className="text-xs text-muted-foreground">
                  Configure the 4 key statistical metric cards and the skill categories in the About section.
                </p>
              </div>

              {/* 4 Stats */}
              <div className="p-5 rounded-2xl bg-card border border-border/70 shadow-sm space-y-3">
                <h3 className="text-xs font-mono font-bold uppercase text-muted-foreground">About Key Statistics</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <label className="text-[10px] font-mono text-muted-foreground block mb-1">CGPA Metric</label>
                    <input
                      type="text"
                      value={profileForm.stats?.cgpa || ''}
                      onChange={(e) =>
                        setProfileForm({
                          ...profileForm,
                          stats: { ...profileForm.stats, cgpa: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-muted/40 border border-border/70 text-foreground font-bold font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-muted-foreground block mb-1">Platforms Built</label>
                    <input
                      type="text"
                      value={profileForm.stats?.platformsBuilt || ''}
                      onChange={(e) =>
                        setProfileForm({
                          ...profileForm,
                          stats: { ...profileForm.stats, platformsBuilt: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-muted/40 border border-border/70 text-foreground font-bold font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-muted-foreground block mb-1">Tech Tools Count</label>
                    <input
                      type="text"
                      value={profileForm.stats?.techTools || ''}
                      onChange={(e) =>
                        setProfileForm({
                          ...profileForm,
                          stats: { ...profileForm.stats, techTools: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-muted/40 border border-border/70 text-foreground font-bold font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-muted-foreground block mb-1">Graduation Year</label>
                    <input
                      type="text"
                      value={profileForm.stats?.gradYear || ''}
                      onChange={(e) =>
                        setProfileForm({
                          ...profileForm,
                          stats: { ...profileForm.stats, gradYear: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-muted/40 border border-border/70 text-foreground font-bold font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* About Bio */}
              <div className="p-5 rounded-2xl bg-card border border-border/70 shadow-sm space-y-2 text-xs">
                <label className="font-mono font-bold uppercase text-muted-foreground text-[10px]">
                  About Narrative Bio
                </label>
                <textarea
                  rows={4}
                  value={profileForm.aboutBio || ''}
                  onChange={(e) => setProfileForm({ ...profileForm, aboutBio: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-muted/40 border border-border/70 text-foreground leading-relaxed"
                />
              </div>

              {/* Skill Categories */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold uppercase text-muted-foreground">Skill Categories</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {profileForm.skillCategories?.map((cat, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-card border border-border/70 space-y-2 text-xs">
                      <input
                        type="text"
                        value={cat.title}
                        onChange={(e) => {
                          const updated = [...profileForm.skillCategories];
                          updated[idx].title = e.target.value;
                          setProfileForm({ ...profileForm, skillCategories: updated });
                        }}
                        className="w-full font-bold text-sm bg-transparent border-b border-border/60 pb-1 text-primary focus:outline-none"
                      />
                      <textarea
                        rows={2}
                        value={cat.skills?.join(', ')}
                        onChange={(e) => {
                          const updated = [...profileForm.skillCategories];
                          updated[idx].skills = e.target.value
                            .split(',')
                            .map((s) => s.trim())
                            .filter(Boolean);
                          setProfileForm({ ...profileForm, skillCategories: updated });
                        }}
                        placeholder="Skills separated by commas"
                        className="w-full px-2.5 py-1.5 rounded-lg bg-muted/40 border border-border/60 font-mono text-[11px]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 5: CONTACT & SOCIAL MEDIA                             */}
          {/* ========================================================= */}
          {activeTab === 'contact' && profileForm && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-border/60">
                <h2 className="text-xl font-black tracking-tight text-foreground">Contact & Social Links</h2>
                <p className="text-xs text-muted-foreground">
                  Update your contact email, phone number, location, and social network handles.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-md space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono font-bold uppercase text-muted-foreground text-[10px]">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      value={profileForm.email || ''}
                      onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-muted/40 border border-border/70 text-foreground font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono font-bold uppercase text-muted-foreground text-[10px]">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      value={profileForm.phone || ''}
                      onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-muted/40 border border-border/70 text-foreground font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono font-bold uppercase text-muted-foreground text-[10px]">
                      Location / Base
                    </label>
                    <input
                      type="text"
                      value={profileForm.location || ''}
                      onChange={(e) => setProfileForm({ ...profileForm, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-muted/40 border border-border/70 text-foreground"
                    />
                  </div>
                </div>

                <div className="pt-3 border-t border-border/50">
                  <h4 className="font-mono font-bold uppercase text-muted-foreground text-[10px] mb-3">
                    Social Network Profiles
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <span className="text-[11px] font-semibold text-foreground">LinkedIn URL</span>
                      <input
                        type="url"
                        value={profileForm.socialLinks?.linkedin || ''}
                        onChange={(e) =>
                          setProfileForm({
                            ...profileForm,
                            socialLinks: { ...profileForm.socialLinks, linkedin: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-muted/40 border border-border/70 text-foreground font-mono text-[11px]"
                      />
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] font-semibold text-foreground">GitHub URL</span>
                      <input
                        type="url"
                        value={profileForm.socialLinks?.github || ''}
                        onChange={(e) =>
                          setProfileForm({
                            ...profileForm,
                            socialLinks: { ...profileForm.socialLinks, github: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-muted/40 border border-border/70 text-foreground font-mono text-[11px]"
                      />
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] font-semibold text-foreground">YouTube Channel</span>
                      <input
                        type="url"
                        value={profileForm.socialLinks?.youtube || ''}
                        onChange={(e) =>
                          setProfileForm({
                            ...profileForm,
                            socialLinks: { ...profileForm.socialLinks, youtube: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-muted/40 border border-border/70 text-foreground font-mono text-[11px]"
                      />
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] font-semibold text-foreground">Instagram URL</span>
                      <input
                        type="url"
                        value={profileForm.socialLinks?.instagram || ''}
                        onChange={(e) =>
                          setProfileForm({
                            ...profileForm,
                            socialLinks: { ...profileForm.socialLinks, instagram: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-muted/40 border border-border/70 text-foreground font-mono text-[11px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 6: INQUIRIES & MESSAGES INBOX                         */}
          {/* ========================================================= */}
          {activeTab === 'messages' && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-border/60">
                <h2 className="text-xl font-black tracking-tight text-foreground">Inquiries Inbox</h2>
                <p className="text-xs text-muted-foreground">
                  Read messages and collaboration inquiries submitted by visitors from the public contact form.
                </p>
              </div>

              {messages.length === 0 ? (
                <div className="p-12 text-center rounded-2xl bg-card border border-border/60 text-muted-foreground space-y-2">
                  <Mail className="w-8 h-8 mx-auto text-muted-foreground/60" />
                  <p className="text-sm font-semibold">No messages received yet</p>
                  <p className="text-xs">When visitors submit inquiries through your website, they will appear here.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {messages.map((msg) => (
                    <div
                      key={msg._id || msg.id}
                      className="p-5 rounded-2xl bg-card border border-border/70 space-y-2.5 shadow-sm"
                    >
                      <div className="flex items-center justify-between text-xs pb-2 border-b border-border/40">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-foreground">{msg.name}</span>
                          <span className="text-primary font-mono">{msg.email}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-mono text-muted-foreground">
                            {new Date(msg.createdAt).toLocaleString()}
                          </span>
                          <button
                            onClick={() => {
                              if (window.confirm('Delete this message?')) {
                                deleteMessageMutation.mutate(msg._id || msg.id);
                              }
                            }}
                            className="p-1 rounded text-muted-foreground hover:text-rose-500"
                            title="Delete Message"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <p className="text-xs text-foreground/90 whitespace-pre-wrap leading-relaxed">
                        {msg.message}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
