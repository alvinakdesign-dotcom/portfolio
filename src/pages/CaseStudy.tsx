import { useParams, Navigate, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ScrollRevealText from "@/components/ScrollRevealText";
import { getProjectById } from "@/data/projects";

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : null;

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const galleryImages = (project.images || []).filter(Boolean);

  return (
    <Layout>
      {/* Project Header */}
      <section className="container-editorial pt-24 md:pt-32 pb-12 md:pb-16">
        <div>
          <ScrollRevealText className="heading-display mb-6">
            {project.title}
          </ScrollRevealText>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-muted-foreground">
            <span className="text-sm">{project.category}</span>
            <span className="text-border">•</span>
            <span className="text-sm">{project.year}</span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-16 md:pb-24 px-2 md:px-4">
        <div className="w-full max-w-[1920px] mx-auto aspect-[16/9] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover animate-scale-in"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="container-editorial pb-16 md:pb-24">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <span className="label-uppercase text-muted-foreground">
              Overview
            </span>
          </div>

          <div className="col-span-12 md:col-span-8">
            <p className="text-body text-muted-foreground">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {galleryImages.length > 0 && (
        <section className="pb-16 md:pb-24 px-2 md:px-4">
          <div className="w-full max-w-[1920px] mx-auto space-y-6 md:space-y-8">
            {galleryImages.map((src, i) => (
              <div key={i} className="w-full aspect-[16/9] overflow-hidden">
                <img
                  src={src}
                  alt={`${project.title} ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Back to Work */}
      <section className="container-editorial pb-24 md:pb-32 flex justify-center">
        <Link
          to="/work"
          className="label-uppercase link-underline inline-flex items-center gap-2"
        >
          <span aria-hidden="true">←</span>
          Work
        </Link>
      </section>
    </Layout>
  );
};

export default CaseStudy;