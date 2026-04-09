import fs from "fs";
import path from "path";
import matter from "gray-matter";
import AboutClient from "./AboutClient";

export default function AboutPage() {
  const filePath = path.join(process.cwd(), "content", "about.md");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);

  return <AboutClient data={data} />;
}