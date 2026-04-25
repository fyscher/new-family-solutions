export const SITE_URL = "https://silver-parfait-f39620.netlify.app";
export const SITE_NAME = "New Family Solutions";

export const pages = {
  home: {
    title: `${SITE_NAME} | Autism & Disability Support for Alberta Families`,
    description:
      "Individualized, family-centred support for children with autism and diverse abilities — delivered in your home, at your pace. Serving Alberta families since 2007.",
    canonical: `${SITE_URL}/`,
    ogType: "website",
  },
  aboutUs: {
    title: `Our Story | ${SITE_NAME}`,
    description:
      "Founded in 2007 by Susan Johanson, New Family Solutions was built on lived experience and a belief that every family deserves compassionate, individualized support.",
    canonical: `${SITE_URL}/about-us`,
    ogType: "website",
  },
  ourTeam: {
    title: `Our Clinical Team | ${SITE_NAME}`,
    description:
      "Meet our multidisciplinary team of Speech-Language Pathologists, Behavioral Consultants, Occupational Therapists, Physiotherapists, and Program Coordinators supporting Alberta families.",
    canonical: `${SITE_URL}/our-team`,
    ogType: "website",
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  description:
    "Alberta-based clinical support services for families raising children with autism and diverse abilities.",
  url: SITE_URL,
  foundingDate: "2007",
  founder: {
    "@type": "Person",
    name: "Susan Johanson",
    jobTitle: "Founder & Director",
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "AB",
    addressCountry: "CA",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Alberta, Canada",
  },
  knowsAbout: [
    "Autism Support",
    "Speech-Language Pathology",
    "Behavioral Consultation",
    "Occupational Therapy",
    "Physiotherapy",
    "Family Support Services",
    "FSCD Alberta",
  ],
};
