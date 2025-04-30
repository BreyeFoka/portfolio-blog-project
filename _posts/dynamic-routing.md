---
title: "Dynamic Routing and Static Generation in Next.js"
excerpt: "Learn how to implement dynamic routing in Next.js using static generation for improved performance and SEO."
coverImage: "/assets/blog/dynamic-routing/cover.jpg"
date: "2025-04-24T20:19:37.000Z"
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

Dynamic routing is a powerful feature in Next.js that enables developers to create routes with dynamic parameters, making it ideal for applications like blogs, e-commerce sites, and more. Combined with static generation, it ensures high performance and excellent SEO capabilities.

## What is Dynamic Routing?

In Next.js, dynamic routing is achieved using a file-based routing system. You can define dynamic routes by including square brackets (`[ ]`) in your file names within the `pages` directory.

For example:
```plaintext
pages/post/[id].js
```
This file will match routes like /post/1, /post/2, and so on. The id in the file name becomes a route parameter accessible in your component.

Static Generation with getStaticPaths
To pre-render pages with dynamic routes at build time, you can use the getStaticPaths function. It allows you to specify which paths should be generated statically.

Here’s an example:

JavaScript
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
    ],
    fallback: false, // Can also be 'true' or 'blocking'
  };
}
paths: An array of objects specifying the routes to pre-render.
fallback: Determines behavior for routes not specified in paths.
Fetching Data with getStaticProps
To provide data to the dynamically generated pages, use the getStaticProps function. It fetches the data for a specific route based on the parameters provided.

Example:

JavaScript
export async function getStaticProps({ params }) {
  const post = await fetchPostData(params.id);
  return {
    props: {
      post,
    },
  };
}
In this example, params.id refers to the dynamic id defined in the route.

Fallback Behavior
The fallback option in getStaticPaths determines how Next.js handles routes that were not pre-rendered:

fallback: false: Routes not returned by getStaticPaths will result in a 404 error.
fallback: true: The page will be generated server-side when requested for the first time, then cached for future requests.
fallback: 'blocking': The server waits until the page is generated before serving it to the user.
Benefits of Dynamic Routing with Static Generation
SEO-Friendly: Pre-rendered pages are optimized for search engines.
Performance: Static pages load faster and reduce server load.
Scalability: Ideal for use cases like blogs, product pages, or portfolios.
Example Use Case: Blog Application
Suppose you have a blog application where each post has a unique ID. Here’s how you can set it up:

Create a file: pages/blog/[id].js.
Use getStaticPaths to define which posts are pre-rendered.
Use getStaticProps to fetch the content for each post.
JavaScript
export async function getStaticPaths() {
  const posts = await fetchAllPosts();
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await fetchPostData(params.id);
  return {
    props: {
      post,
    },
  };
}
This setup ensures that your blog has high-performance pages with excellent SEO while maintaining flexibility for dynamic content.

Dynamic routing and static generation in Next.js provide a powerful combination for building modern web applications. By leveraging these features, you can create scalable, SEO-friendly, and high-performance websites tailored to your needs.
