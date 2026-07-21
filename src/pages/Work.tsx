import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/ProjectCard";
import ScrollRevealText from "@/components/ScrollRevealText";
import { projects } from "@/data/projects";

const Work = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="container-editorial pt-24 md:pt-32 pb-16 md:pb-20">
        <ScrollRevealText className="heading-display">
          Selected work
        </ScrollRevealText>
      </section>

      {/* Projects */}
      <section className="pb-24 md:pb-32 px-2 md:px-4">
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                variant="clean"
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;