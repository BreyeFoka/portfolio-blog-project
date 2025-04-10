export default function HomePage() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Hey, I’m Breye 👋</h1>
        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300">
          Software Engineer • Builder • Knowledge Sharer
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="/projects" className="px-5 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
            View Projects
          </a>
          <a href="/about" className="px-5 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 dark:hover:bg-zinc-800 transition">
            <strong>Who am I ?</strong>
          </a>
          <a href="/blog" className="px-5 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 dark:hover:bg-zinc-800 transition">
            Read Blog 
          </a>
        </div>
      </div>
    </section>
  );
}
