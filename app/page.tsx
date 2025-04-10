export default function HomePage() {
  return (
    <section className="space-y-8 top-10 flex flex-col items-center justify-center h-screen relative z-10">
      <div className="text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Hey, I’m Breye 👋</h1>
        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300">
          Software Engineer | Builder | Knowledge Enthusiast
        </p>
        <p className="text-md sm:text-lg text-zinc-500 dark:text-zinc-400">
          I’m passionate about creating innovative solutions and sharing insights through my projects and blog. Join me on this journey of discovery and growth.
        </p>
        <div className="mt-6 flex justify-center gap-4 ">
          <a href="/projects" className="px-5 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
            View My Work
          </a>
          <a href="/about" className="px-5 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 dark:hover:bg-zinc-800 transition">
            <strong>Who Am I?</strong>
          </a>
          <a href="/blog" className="px-5 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 dark:hover:bg-zinc-800 transition">
            Explore My Thoughts
          </a>
        </div>
      </div>
    </section>
  );
}
