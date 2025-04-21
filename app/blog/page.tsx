// app/blog/page.tsx
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

type Post = {
  slug: string;
  title: string;
};

const fetchPosts = async (): Promise<Post[]> => {
  const postsDir = path.join(process.cwd(), '/app/content');
  const filenames = fs.readdirSync(postsDir);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
    title: filename.replace(/\.mdx$/, '').replace(/-/g, ' '),
  }));
};

const BlogIndex = async () => {
  const posts = await fetchPosts();

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogIndex;
