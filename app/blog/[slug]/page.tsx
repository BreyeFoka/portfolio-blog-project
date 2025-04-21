// // app/blog/[slug]/page.tsx
// import fs from 'fs';
// import path from 'path';
// import { notFound } from 'next/navigation';  // Importing notFound to handle missing posts

// type Post = {
//   title: string;
//   content: string;
// };

// const fetchPost = async (slug: string): Promise<Post | null> => {
//   const postFilePath = path.join(process.cwd(), '/app/content', `${slug}.mdx`);
//   if (fs.existsSync(postFilePath)) {
//     const postContent = fs.readFileSync(postFilePath, 'utf-8');
//     return {
//       title: slug.replace('-', ' '), // Format title based on slug
//       content: postContent,
//     };
//   }
//   return null;
// };

// // Dynamic blog post page, with slug as part of the URL
// const BlogPost = async ({ params }: { params: { slug: string } }) => {
//   const { slug } = params; // Getting the slug directly from URL params
//   const post = await fetchPost(slug);

//   if (!post) {
//     notFound();  // If post doesn't exist, show a 404 page
//   }

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <div>{post.content}</div>
//     </div>
//   );
// };

// export default BlogPost;


// app/blog/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';  // Importing notFound to handle missing posts
import { MDXRemote } from 'next-mdx-remote'; // For rendering MDX content
import { serialize } from 'next-mdx-remote/serialize'; // Serialize MDX content

type Post = {
  title: string;
  content: string;
};

// Fetch post content based on slug
const fetchPost = async (slug: string): Promise<Post | null> => {
  const postFilePath = path.join(process.cwd(), 'app/content', `${slug}.mdx`);
  if (fs.existsSync(postFilePath)) {
    const postContent = fs.readFileSync(postFilePath, 'utf-8');
    return {
      title: slug.replace('-', ' '), // Format title based on slug
      content: postContent,
    };
  }
  return null;
};

// Async component to handle dynamic blog posts
const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params; // Destructuring slug from params
  const post = await fetchPost(slug); // Fetch post content by slug

  if (!post) {
    notFound();  // If post doesn't exist, show 404
  }

  // Serialize MDX content for rendering
  const mdxSource = await serialize(post.content);

  return (
    <div>
      <h1>{post.title}</h1>
      <MDXRemote {...mdxSource} />
    </div>
  );
};

export default BlogPost;
