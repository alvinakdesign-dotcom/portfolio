import Layout from "@/components/layout/Layout";
import ScrollRevealText from "@/components/ScrollRevealText";

const Contact = () => {
  const socialLinks = [
    {
      label: "Instagram",
      url: "https://www.instagram.com/alviinart?igsh=cGJja2ptcnZ1ZTlx&utm_source=qr",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/alvina-khan-643b6a247?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
    {
      label: "Behance",
      url: "https://www.behance.net/alvinakh/projects",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="container-editorial pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="w-full overflow-hidden">
          <ScrollRevealText className="text-3xl md:text-5xl lg:text-6xl font-normal leading-[1] tracking-tight mb-12">
            Let's create together
          </ScrollRevealText>

          <p className="text-body text-muted-foreground max-w-xl mb-12">
            I'm always open to discussing new projects, creative
            collaborations, and opportunities to bring thoughtful ideas to
            life.
          </p>

          <div>
            <span className="label-uppercase text-muted-foreground block mb-3">
              Email
            </span>

            <a
              href="mailto:Alvinak.design@gmail.com"
              className="text-xl md:text-2xl font-normal hover:opacity-70 transition-opacity"
            >
              Alvinak.design@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="max-w-2xl">
          <span className="label-uppercase text-muted-foreground block mb-6">
            Elsewhere
          </span>

          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 border-b border-border flex items-center justify-between group hover:opacity-70 transition-opacity"
            >
              <span className="text-body">{link.label}</span>
              <span className="text-muted-foreground group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Contact;