import { getAllPostsData } from '@/lib/markdown';
import ProjectsClient from './ProjectsClient';

export default function ProjectsPage() {
  const projects = getAllPostsData('project'); 
  
  return <ProjectsClient projects={projects} />;
}