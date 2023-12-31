
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Gallery = () => {
  const campaigns = [
    {
      id: 1,
      image: "/img/gallery/gi1.jpg", // Replace with your image URLs
      description: "Lorem ipsum dolor sit amet. Et blanditiis blanditiis ut quibusdam enim sit deserunt ratione 33 quod voluptas et eligendi expedita non error quaerat qui deserunt repudiandae. ",
    },
    {
      id: 2,
      image: "/img/gallery/gi2.jpg", // Replace with your image URLs
      description: "Et laboriosam velit non quibusdam ducimus et repellat voluptatem eum quis ipsum aut galisum odio nam doloribus commodi et magnam quibusdam. ",
    },
    // Add more campaigns as needed
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          NGO Campaigns Gallery
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-white rounded-md overflow-hidden shadow-md"
            >
              <img
                src={campaign.image}
                alt={`Campaign ${campaign.id}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                {/* <h2 className="text-xl font-bold mb-2">
                  Campaign {campaign.id}
                </h2> */}
                <p className="text-gray-700">{campaign.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
