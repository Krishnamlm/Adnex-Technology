import React from "react";

const SEO = () => {
  return (
    <div className="px-6 sm:px-12 lg:px-24 py-16 max-w-6xl mx-auto">

      <h1 className="text-3xl sm:text-4xl font-semibold mb-6">
        SEO Services in India
      </h1>

      <p className="text-gray-600 mb-8">
        Adnex Technologies offers result-driven SEO services to improve your
        Google ranking and drive organic traffic to your website.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Our SEO Services</h2>
      <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
        <li>Keyword Research</li>
        <li>On-Page SEO</li>
        <li>Technical SEO</li>
        <li>Link Building</li>
        <li>Local SEO</li>
      </ul>

      <div className="bg-[#5044E5] text-white p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-2">
          Rank Higher on Google
        </h3>
        <p className="mb-4">
          Get more traffic, leads, and customers with our SEO strategies.
        </p>
        <button className="bg-white text-[#5044E5] px-5 py-2 rounded-lg">
          Boost My Ranking
        </button>
      </div>

    </div>
  );
};

export default SEO;