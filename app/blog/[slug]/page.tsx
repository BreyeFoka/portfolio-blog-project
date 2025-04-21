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


// // app/blog/[slug]/page.tsx
// import fs from 'fs';
// import path from 'path';
// import { notFound } from 'next/navigation';  // Importing notFound to handle missing posts
// import { MDXRemote } from 'next-mdx-remote';
// import { serialize } from 'next-mdx-remote/serialize';  // Serialize MDX content to render it

// type Post = {
//   title: string;
//   content: string;
// };

// const fetchPost = async (slug: string): Promise<Post | null> => {
//   const postFilePath = path.join(process.cwd(), 'app/content', `${slug}.mdx`);
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

//   // Serialize MDX content so it can be rendered correctly
//   const mdxSource = await serialize(post.content);

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       {/* Render the MDX content */}
//       <MDXRemote {...mdxSource} />
//     </div>
//   );
// };

// export default BlogPost;


// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPostsMeta } from '@/lib/posts'

export function generateStaticParams() {
  return getAllPostsMeta().map((p) => ({ slug: p.slug }))
}

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)
  if (!post) return notFound()

  return (
    <article className="prose mx-auto py-8">
      <h1>{post.title}</h1>
      <time className="block text-sm text-gray-500">{post.date}</time>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  )
}
