import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServicesCard from './ServicesCard'
import { motion } from "framer-motion";

const Services = () => {

    const servicesData = [
        {
            title: 'Graphic Design',
            description: 'Creates visual communication (logos, typography, illustrations) for all platforms. Designs high-converting ad creatives, landing pages, and infographics.',
            icon: assets.ads_icon
        },
        {
            title: 'Brand Collaborations',
            description: 'partnership between two or more companies to co-create a campaign, product, or service that leverages the distinct audience of each brand for mutual benefit..',
            icon: assets.marketing_icon
        },
        {
            title: 'Advertisement Production',
            description: 'entire process of creating an advertisement, from the initial concept development to the final preparation and delivery of the finished ad units',
            icon: assets.content_icon
        },
        {
            title: 'Social media',
            description: 'Social media marketing involves strategy, content creation, page management, and paid ads to build presence online.',
            icon: assets.social_icon
        }
    ]

  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{once: true}}
    transition={{staggerChildren: 0.2}}
    
    id='services' className='relative  flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 z-1 dark:hidden' />

      <div className="z-10">
        <Title title='How can we help?' desc='From strategy to execution, we craft digital solutions that move your business forward.' />
      </div>
      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index)=>(
            <ServicesCard key={index} service={service} index={index}/>
        ))}
      </div>
    </motion.div>
  )
}

export default Services
