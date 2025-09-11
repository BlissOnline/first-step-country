export const metadata = {
  title: "About Us | First Step Country – Budget Travel & Remote Work Tips",
  description:
    "Meet Wes Laycock and discover how First Step Country helps you travel smarter on any budget. Interactive quizzes, real cost breakdowns, and remote-work strategies await.",
  keywords: [
    "budget travel",
    "affordable travel",
    "digital nomad",
    "remote work",
    "language immersion",
    "travel quiz",
  ],
  openGraph: {
    title: "About First Step Country – Our Mission & Story",
    description:
      "Learn how Wes Laycock turned travel into a savings strategy, then built First Step Country to guide explorers toward affordable adventures.",
    url: "https://firststepcountry.com/about",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "About First Step Country – Our Mission & Story",
    description:
      "Discover the budget-minded mission behind First Step Country and join Wes’s quest to travel smarter.",
  },
};

import AboutContent from "./AboutClient";

export default function AboutPage() {
  return <AboutContent />;
}
