import { Helmet } from 'react-helmet-async';

const BreadcrumbSchema = ({ questionNumber }: { questionNumber: number }) => {
  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://firststepcountry.com/" },
      { "@type": "ListItem", "position": 2, "name": "Quiz", "item": "https://firststepcountry.com/quiz" },
      { "@type": "ListItem", "position": 3, "name": `Question ${questionNumber}`, "item": `https://firststepcountry.com/quiz/q${questionNumber}` }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbJson)}
      </script>
    </Helmet>
  );
};

export default BreadcrumbSchema;
