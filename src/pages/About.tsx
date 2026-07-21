import Layout from "@/components/layout/Layout";
import ScrollRevealText from "@/components/ScrollRevealText";

const About = () => {
  const experience = [
    {
      role: "Photo Restoration Specialist",
      company: "Fiverr",
      period: "2018 — Present",
    },
    {
      role: "Digital Content Designer",
      company: "Clixosoft Advertising Agency",
      period: "Jul 2023 — Oct 2023",
    },
    {
      role: "Social Media Manager",
      company: "Boolmind",
      period: "May 2024 — Sept 2024",
    },
    {
      role: "Junior 3D Artist and Design Lead",
      company: "Hexones",
      period: "Jun 2025 — Apr 2026",
    },
  ];

  const services = [
    "Visual Identity Design",
    "Logo & Mark Development",
    "Typography Systems",
    "Brand Guidelines & Stationery",
    "Print & Packaging Design",
    "3D Product Visualization",
    "Motion Design",
    "Social Media Art Direction",
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="container-editorial pt-24 md:pt-32 pb-16 md:pb-24">
        <ScrollRevealText className="heading-large">
          Visual designer focused on
        </ScrollRevealText>

        <ScrollRevealText className="heading-large">
          brand identity, print, and 3D.
        </ScrollRevealText>
      </section>

      {/* Bio */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2"></div>

          <div className="col-span-12 md:col-span-8">
            <p className="text-body text-muted-foreground">
              I'm Alvina, a Visual Communication Designer working across
              branding, motion, 3D, photography, and digital design. I enjoy
              building visual identities and experiences that are thoughtful,
              purposeful, and rooted in strong concepts. Taking an idea from
              concept to something you can actually hold, watch, or walk
              through. Whether developing a brand identity or crafting visual
              narratives, I aim to create work that feels clear, engaging, and
              memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <span className="label-uppercase text-muted-foreground">
              Experience
            </span>
          </div>

          <div className="col-span-12 md:col-span-10">
            {experience.map((item, index) => (
              <div
                key={index}
                className="py-5 border-b border-border flex flex-col md:flex-row md:items-center md:justify-between gap-2"
              >
                <div>
                  <h3 className="text-body font-medium">{item.role}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.company}
                  </p>
                </div>

                <span className="text-sm text-muted-foreground">
                  {item.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <span className="label-uppercase text-muted-foreground">
              What I Do
            </span>
          </div>

          <div className="col-span-12 md:col-span-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="py-4 border-b border-border"
              >
                <span className="text-body">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;