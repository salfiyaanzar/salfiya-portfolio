import { BlogPosts } from "app/components/posts";
import LittleMiss from "app/components/svgs/littleMiss";
import Image from "next/image";
import SkillsCompact from "./components/skills";
import { Code, Zap, Database, Triangle, Palette, Bot, Hexagon, HardDrive, Cloud, Atom, Link, Globe } from "lucide-react";
import ProjectCard from "./components/project-card";

export default function Page() {
  return (
    <section>
      <div className="space-y-0.5 mb-8">
        <Image
          src="/saff.webp"
          draggable="false"
          width={120}
          height={120}
          className="mb-3 border bg-neutral-100 dark:bg-[#121212] border-neutral-300 p-1 dark:border-neutral-600"
          alt="A Picture of Salfiya Anzar"
        />
        <div></div>
        <h1 className=" text-3xl font-semibold">Salfiya Anzar</h1>
        <p className="text-neutral-600 dark:text-neutral-500 text-sm">
          Software Engineer
        </p>
      </div>
      <p className="mb-7 text-lg text-neutral-600 dark:text-neutral-200">
        Currently, working at a bangalore startup as an intern, with a focus on
        AWS services, RESTful APIs, and Database Systems.
      </p>
      <div className="mb-7 text-md text-neutral-600 dark:text-white border border-dashed border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-[#121212] p-2">
        Actively looking for full-time opportunities that I can pour my heart
        into. <br />૮ ˶ᵔ ᵕ ᵔ˶ ა
      </div>
      <p className="mb-7 text-lg text-neutral-600 dark:text-neutral-200">
        I love diving into the depths of APIs, databases, and server-side logic
        and I enjoy documenting my technical discoveries, breaking complex tech
        into simple threads.
      </p>

      <SkillsCompact />

      {/* Projects Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
          Projects
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          I've been actively engaged in a few side projects lately, exploring
          diverse technologies & ideas. Here's a quick glimpse of my ongoing and
          completed projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* GhibliClimate */}
          <ProjectCard
            title="GhibliClimate"
            description="A cozy, Ghibli-inspired web app for carbon footprint tracking and climate education"
            githubHref="#"
            liveHref="#"
            tech={[
              { icon: <Atom className="w-4 h-4 text-cyan-500" />, label: "React.js" },
              { icon: <Zap className="w-4 h-4 text-yellow-500" />, label: "FastAPI" },
              { icon: <Database className="w-4 h-4 text-green-500" />, label: "MongoDB" },
              { icon: <Triangle className="w-4 h-4 text-white" />, label: "Vercel" },
            ]}
          />

          {/* Photography Portfolio */}
          <ProjectCard
            title="Photography Portfolio"
            description="A sleek portfolio site showcasing photography with elegant gallery navigation"
            githubHref="#"
            liveHref="#"
            tech={[
              { icon: <Code className="w-4 h-4 text-blue-500" />, label: "TypeScript" },
              { icon: <Palette className="w-4 h-4 text-cyan-500" />, label: "Tailwind CSS" },
              { icon: <Triangle className="w-4 h-4 text-white" />, label: "Next.js" },
              { icon: <Triangle className="w-4 h-4 text-cyan-500" />, label: "Vercel" },
            ]}
          />

          {/* TaskBot */}
          <ProjectCard
            title="TaskBot"
            description="A cute Discord bot for task management directly from your server!"
            githubHref="#"
            liveHref="#"
            tech={[
              { icon: <Bot className="w-4 h-4 text-indigo-400" />, label: "Discord.js" },
              { icon: <Hexagon className="w-4 h-4 text-green-400" />, label: "Node.js" },
              { icon: <HardDrive className="w-4 h-4 text-blue-400" />, label: "SQLite" },
              { icon: <Cloud className="w-4 h-4 text-purple-400" />, label: "Railway" },
            ]}
          />

          {/* Recipedia */}
          <ProjectCard
            title="Recipedia"
            description="Encyclopedia for recipes with beautiful UI and easy recipe discovery"
            githubHref="#"
            liveHref="#"
            tech={[
              { icon: <Atom className="w-4 h-4 text-cyan-500" />, label: "React" },
              { icon: <Link className="w-4 h-4 text-orange-500" />, label: "API Integration" },
              { icon: <Palette className="w-4 h-4 text-blue-500" />, label: "CSS3" },
              { icon: <Globe className="w-4 h-4 text-green-500" />, label: "Netlify" },
            ]}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 max-w-xl py-7 select-none">
        <Image
          src="/sushi.webp"
          draggable="false"
          width="400"
          height="400"
          alt="Salfiya"
          className="border p-2 bg-neutral-50 dark:border-neutral-700 hover:dark:border-neutral-600 dark:bg-[#121212] hover:dark:bg-[#121212] border-neutral-300 hover:border-neutral-400 border hover:scale-110 hover:bg-neutral-100 duration-200 hover:rotate-6"
        />
        <Image
          src="/glove.webp"
          draggable="false"
          width="400"
          height="300"
          alt="glove by salfiya"
          className="border p-2 dark:border-neutral-700 hover:dark:border-neutral-600 dark:bg-[#121212] bg-neutral-50 hover:dark:bg-[#121212] border-neutral-300 border hover:border-neutral-400 hover:bg-neutral-100 hover:scale-110 duration-200 hover:rotate-6"
        />
        <Image
          src="/book.jpeg"
          draggable="false"
          width="400"
          height="300"
          alt="beanie by salfiya"
          className="border p-2 dark:border-neutral-700 hover:dark:border-neutral-600 dark:bg-[#121212] hover:dark:bg-[#121212] bg-neutral-50 border-neutral-300 hover:border-neutral-400 border hover:scale-110 hover:bg-neutral-100 duration-200 hover:rotate-6"
        />
      </div>
      {/* <div className="my-14">
        <BlogPosts />
      </div> */}
    </section>
  );
}