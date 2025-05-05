import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Hello!</h1>
      <p className="mb-4">
        {`I'm Leoman — a frontend engineer who builds fast, accessible, and scalable web experiences.
With 8+ years of experience, I craft high-performance websites using modern tools like Next.js, Tailwind CSS, and Sanity. I'm a static typing advocate and VS Code user—always focused on clean, maintainable code and a seamless developer experience.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
