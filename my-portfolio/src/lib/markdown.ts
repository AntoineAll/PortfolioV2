import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getPostData(fileName: string) {
  const contentDirectory = path.join(process.cwd(), 'content');
  const fullPath = path.join(contentDirectory, `${fileName}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return { data: { title: "Error" }, content: "File not found" };
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    data: data as { title: string; layout?: string },
    content,
  };
}