import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Hello!</h1>
      <p className="mb-4">{`I'm Leoman — a frontend developer who builds fast, accessible, and scalable web applications. I focus on clean, maintainable code and delivering smooth, high-performance digital experiences. I’m all about a seamless developer workflow and great user experience.`}</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
