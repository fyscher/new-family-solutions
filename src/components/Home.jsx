import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import HowItWorks from "./HowItWorks.jsx";
import TrustStrip from "./TrustStrip.jsx";
import "../static/css/sections.css";
import { Helmet } from "react-helmet-async";
import { pages, organizationSchema, SITE_NAME } from "../seo.js";

const { title, description, canonical, ogType } = pages.home;

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <main className="home-page">
        <Hero />
        <Services />
        <HowItWorks />
        <About />
        <TrustStrip />
      </main>
    </>
  );
};

export default Home;
