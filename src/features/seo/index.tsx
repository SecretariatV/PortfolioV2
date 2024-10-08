import { FC } from "react";
import { Helmet } from "react-helmet-async";

interface IProps {
  title: string;
  type: string;
  description: string;
}

const SEO: FC<IProps> = () => {
  const schema = {
    "@context": "https://ovb-portfolio.vercel.app",
    "@type": "portfolio",
    name: "Oliver Boucher",
    url: "https://ovb-portfolio.vercel.app",
    sameAs: [
      "https://github.com/SecretariatV",
      "https://www.frontendmentor.io/profile/SecretariatV",
    ],
    jobTitle: "Frontend Developer",
    description:
      "I am Oliver Boucher, a creative front-end developer who pioneered a new path through self-taught with a passion and love for programming that no one can match.",
  };
  return (
    <Helmet>
      {/* <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="react, frontend, front end, front-end, developer, frontend developer, front-end developer, engineer, frontend engineer, front-end engineer, oliver, boucher, oliver boucher, remote"
      />1
      <meta name="Oliver Boucher" />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://ovb-portfolio.vercel.app/avatar.webp"
      />
      <meta
        property="og:url"
        content="https://ovb-portfolio.vercel.app"
      />
      <meta property="og:site_name" content="Oliver Boucher" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://ovb-portfolio.vercel.app/avatar.webp"
      />
      <link rel="canonical" href="https://ovb-portfolio.vercel.app" /> */}

      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SEO;
