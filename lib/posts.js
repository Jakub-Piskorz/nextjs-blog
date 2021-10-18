import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const getSortedPostsData = () => {
  const postsDir = path.join(process.cwd(), 'posts');
  const postNames = fs.readdirSync(postsDir);
  const postsData = postNames.map((postName) => {
    const slug = postName.replace(/\.md$/, '');
    const fullPostDir = path.join(postsDir, postName);
    const file = fs.readFileSync(fullPostDir, 'utf8');

    const fileData = matter(file);
    return {
      slug,
      ...fileData.data,
    };
  });
  console.log(postsData);
  return postsData;
};

export default getSortedPostsData;
