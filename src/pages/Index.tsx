import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/ProjectCard";
import ScrollRevealText from "@/components/ScrollRevealText";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <video
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="block w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>

      
      </section>

      {/* Introduction with Scroll Reveal */}
      <section className="container-editorial py-24 md:py-32">
        <ScrollRevealText className="text-xl md:text-2xl lg:text-[42px] font-normal leading-tight lg:leading-[1.2] max-w-5xl">
          I'm Alvina, a visual designer working in branding, print 
          and 3D. I build brand identities that don't stay flat on
          a page.
        </ScrollRevealText>
      </section>

      {/* Featured Projects */}
      <section className="container-editorial pb-16 md:pb-20">
        <div className="flex flex-col gap-6 md:gap-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              heightClass="h-[60vh] md:h-[80vh] lg:h-[90vh]"
            />
          ))}
        </div>
      </section>

      {/* View All Projects link */}
      <section className="container-editorial pb-24 md:pb-32 flex justify-center">
        <Link
          to="/work"
          className="label-uppercase link-underline inline-flex items-center gap-2"
        >
          View all projects
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </Layout>
  );
};

export default Index;