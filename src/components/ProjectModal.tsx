import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Project } from '@/data/projects';

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      <motion.div
        initial={{ y: 20, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="relative z-70 max-w-3xl w-full mx-4 bg-card text-card-foreground rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{project.tech.join(' • ')}</p>
            </div>
            <button onClick={onClose} className="p-2 rounded-lg hover:bg-accent/5">
              <X />
            </button>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden">
              <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                {project.screenshots && project.screenshots.length > 0 ? (
                  <img src={project.screenshots[0]} alt={`${project.title} screenshot`} className="w-full h-full object-cover" />
                ) : project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">No image</div>
                )}
              </div>

              {/* Thumbnails */}
              {project.screenshots && project.screenshots.length > 1 && (
                <div className="mt-3 flex gap-2">
                  {project.screenshots.map((src, i) => (
                    <img key={src} src={src} alt={`${project.title} ${i + 1}`} className="w-20 h-12 object-cover rounded-md border" />
                  ))}
                </div>
              )}
            </div>

            <div>
              <p className="text-sm text-muted-foreground">{project.description}</p>
              <div className="mt-4 flex gap-3">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-primary text-primary-foreground">Visit</a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border">Source</a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
