import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ContactClient from './ContactClient';

export default function ContactPage() {
  const filePath = path.join(process.cwd(), 'content', 'contact.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContent);

  return (
    <ContactClient data={data} />
  );
}