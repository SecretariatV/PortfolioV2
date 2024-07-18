import { FC } from "react";
import { Helmet } from "react-helmet-async";

interface IProps {
  title: string;
  type: string;
  description: string;
}

const SEO: FC<IProps> = ({ title, type, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="react, frontend, frontend developer, engineer, oliver boucher"
      />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

export default SEO;
