import { getPostData } from '@/lib/markdown';
import HomeClient from './HomeClient';

export default function Home() {
  const { data, content } = getPostData('home');
  return <HomeClient data={data} content={content} />;
}