import React from 'react';
import Features from 'dev/solighetti/Features';

const featuresData = [
  {
     imageUrl: "https....",
     title: "Free Chat",
     description: "Divide details about..."
  },

];

function HomePage() {
  return (
    <div>
      <Features
        title="Why our product is the best"
        description="This is the paragraph......."
        features={featuresData}
        cardWidth={4}
      />
    </div>
  );
}

export default HomePage;
