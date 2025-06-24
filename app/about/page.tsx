export const metadata = {
  title: "About Us | Learn More About First Step Country",
  description: "Learn about First Step Country's mission and how we help explorers find their next adventure.",
  openGraph: {
    title: "About First Step Country – Our Mission & Story",
    description: "Get to know how First Step Country helps travelers explore the world.",
    url: "https://firststepcountry.com/about",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "About First Step Country – Our Mission & Story",
    description: "Learn more about our vision and how we help travelers.",
  },
};

import AboutContent from "./AboutClient";

export default function AboutPage() {
  return <AboutContent />;
}
