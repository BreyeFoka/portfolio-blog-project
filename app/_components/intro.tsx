

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 mb-5 md:mb-0 max-w-xs">
        A blog about the latest in web development, programming, and technology.
        <br />
        <br />
        <span className="text-sm">
          By{" Breye "}
        </span>
      </h4> 
    </section>
  );
}
