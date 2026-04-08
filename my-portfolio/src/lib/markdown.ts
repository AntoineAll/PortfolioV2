import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export function getPostData(fileName: string) {
  const fullPath = path.join(contentDirectory, `${fileName}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return { data: { title: "Fichier Manquant" }, content: "" };
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { data, content };
}

export function getAllPostsData(folder: string) {
  const folderPath = path.join(contentDirectory, folder);
  
  if (!fs.existsSync(folderPath)) {
    console.warn(`Dossier introuvable : ${folderPath}`);
    return [];
  }

  const fileNames = fs.readdirSync(folderPath);

  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(folderPath, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return { id, ...data };
    });
}