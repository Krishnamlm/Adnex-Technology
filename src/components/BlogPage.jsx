import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const blogs = [
  {
    id: 1,
    title: "Expert SEO Services to Boost Your Website Rankings",
    preview: "Discover how professional SEO services can increase your website traffic...",
    content: `
At Adnex Technologies, we provide comprehensive SEO services designed to improve your website’s visibility on search engines. Our team of SEO experts conducts in-depth keyword research, competitor analysis, and on-page optimization to ensure your website ranks for high-traffic, relevant keywords. We specialize in content optimization, link-building strategies, and technical SEO audits to enhance your site’s performance and user experience. By integrating our SEO services with content marketing and digital marketing campaigns, businesses can achieve higher search engine rankings, attract more qualified leads, and increase conversions. Our SEO solutions are tailored to meet the unique needs of your business, ensuring measurable results and sustainable growth in organic traffic. Partnering with Adnex means your website not only ranks higher but also drives tangible business outcomes.
`
  },
  {
    id: 2,
    title: "PPC Management Services for Maximum ROI",
    preview: "Learn how our PPC management services can help you reach the right audience...",
    content: `
Our PPC management services at Adnex Technologies help businesses maximize ROI from online advertising campaigns. We create highly targeted pay-per-click campaigns using Google Ads, Microsoft Advertising, and social media platforms to ensure your ads reach the most relevant audience. Our PPC experts handle keyword selection, ad copy creation, bidding strategies, and conversion tracking to deliver cost-effective results. By combining PPC campaigns with SEO services and content marketing strategies, we drive not just traffic but quality leads that convert into customers. We continuously optimize campaigns based on analytics to ensure your advertising budget is spent efficiently. With Adnex’s PPC management services, you can increase brand visibility, generate leads faster, and grow your business online with measurable results.
`
  },
  {
    id: 3,
    title: "Digital Marketing Services for Business Growth",
    preview: "Explore how our digital marketing services drive traffic, engagement, and sales...",
    content: `
Adnex Technologies offers end-to-end digital marketing services to help businesses thrive online. Our services include SEO, PPC management, content marketing, social media marketing, and web design optimization. We create integrated strategies that improve online visibility, engage audiences, and generate leads. Our team develops high-quality, keyword-optimized content that attracts organic traffic while ensuring brand consistency across all digital channels. We also implement performance tracking and analytics to continuously refine campaigns for maximum ROI. By leveraging our digital marketing services, businesses can increase conversions, grow their online presence, and establish themselves as industry leaders. Let Adnex be your partner in building a successful and measurable online marketing strategy.
`
  },
  {
    id: 4,
    title: "Graphic Design Services That Enhance Your Brand Identity",
    preview: "Learn how professional graphic design strengthens your brand...",
    content: `
Professional graphic design is essential for creating a strong and recognizable brand. At Adnex Technologies, our graphic design services include logo design, branding, social media graphics, web graphics, and marketing collaterals. We focus on creating visually appealing and consistent designs that reflect your brand’s identity and values. Our designers ensure that all visuals are optimized for digital marketing campaigns, SEO-friendly, and responsive across devices. Well-crafted graphics improve user engagement, ad performance, and website conversion rates. By combining graphic design with SEO services, web design, and digital marketing strategies, we deliver a cohesive visual experience that enhances brand credibility and drives measurable business results.
`
  },
  {
    id: 5,
    title: "Web Design & Development Services for SEO-Optimized Websites",
    preview: "Discover our web design services that are optimized for SEO and conversions...",
    content: `
Our web design and development services at Adnex Technologies focus on creating SEO-friendly, responsive, and high-performing websites. We build websites that are visually appealing, user-friendly, and optimized for search engines, ensuring higher visibility and organic traffic. Our team integrates SEO best practices during development, including site speed optimization, mobile responsiveness, structured data, and on-page SEO. We also focus on conversion rate optimization, creating intuitive navigation, clear call-to-actions, and engaging content layouts. By combining web design with digital marketing, SEO services, and graphic design, our websites not only look professional but also drive measurable business growth. Partner with Adnex to transform your website into a powerful marketing tool that attracts visitors and converts them into loyal customers.
`
  },
  {
    id: 6,
    title: "Content Strategy Services to Boost SEO & Engagement",
    preview: "See how our content strategy services increase traffic and conversions...",
    content: `
A strong content strategy is crucial for improving SEO, user engagement, and conversions. At Adnex Technologies, we develop customized content strategies that align with your business goals and target audience. Our services include keyword research, content creation, blog writing, social media content, and video scripts. Each piece of content is optimized for SEO, ensuring higher search engine rankings and organic traffic growth. We also integrate content marketing with PPC campaigns, graphic design, and web design to create a unified digital presence. By using analytics and performance tracking, we continuously refine content strategies to maximize ROI. Our content strategy services help businesses establish authority, attract qualified leads, and achieve measurable results in digital marketing campaigns.
`
  },
];


const BlogPage = () => {
  const [expandedId, setExpandedId] = useState(null);
  const refs = useRef({});

  useEffect(() => {
    if (expandedId !== null && refs.current[expandedId]) {
      setTimeout(() => {
        refs.current[expandedId].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 250); // Slightly longer delay to match animation
    }
  }, [expandedId]);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 sm:px-12 lg:px-24 xl:px-40 bg-white dark:bg-black text-gray-900 dark:text-white min-h-[70vh]"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4 pt-10">
          Expert Insights on Digital Marketing, SEO, PPC, Graphic & Web Design
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
          Explore in-depth guides and expert tips for digital marketing, SEO services, PPC management, content strategy, graphic designing, and web design. Optimize your campaigns, increase traffic, and grow your business online.
        </p>

        <div className="space-y-8">
          {blogs.map(blog => (
            <div key={blog.id} className="border-b border-gray-200 dark:border-gray-700 pb-6" ref={el => refs.current[blog.id] = el}>
              <h3 className="text-2xl font-bold text-primary mb-2">{blog.title}</h3>
              <p>{blog.preview}</p>

              <AnimatePresence>
                {expandedId === blog.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-3 text-gray-700 dark:text-gray-300 whitespace-pre-line"
                  >
                    {blog.content}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="button"
                onClick={() => toggleExpand(blog.id)}
                className="text-sm text-primary hover:underline mt-1 block"
              >
                {expandedId === blog.id ? "Read Less ↑" : "Read More →"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPage;
