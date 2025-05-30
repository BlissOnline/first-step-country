const BreadcrumbSchema = ({ questionNumber }: { questionNumber: number }) => {
  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://firststepcountry.com/" },
      { "@type": "ListItem", "position": 2, "name": "Quiz", "item": "https://firststepcountry.com/questions" },
      { "@type": "ListItem", "position": 3, "name": `Question ${questionNumber}`, "item": `https://firststepcountry.com/questions/q${questionNumber}` }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }} // ✅ Fixed TypeScript error
    />
  );
};

export default BreadcrumbSchema;

