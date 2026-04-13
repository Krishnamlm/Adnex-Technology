import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServicesCard from './ServicesCard'
import { motion } from "framer-motion";

const Services = () => {

    const servicesData = [
  {
    title: 'Custom Software Dev',
    description: 'Engineering scalable enterprise solutions and bespoke software architectures tailored to your unique business workflows.',
    icon: assets.code_icon
  },
  {
    title: 'Web & Mobile Apps',
    description: 'Building high-performance, cross-platform applications using modern stacks like React, Flutter, and Node.js.',
    icon: assets.web_icon 
  },
  {
    title: 'UI/UX Strategy',
    description: 'User-centric design focusing on intuitive navigation and aesthetic excellence to ensure maximum user retention.',
    icon: assets.ui_ux_icon 
  },
  {
    title: 'Graphic Design',
    description: 'Visual communication including brand identity, typography, and high-converting marketing collateral for all platforms.',
    
  },
  {
    title: 'Cloud & DevOps',
    description: 'Optimizing infrastructure for 99.9% uptime with secure cloud migration (AWS/Azure) and automated deployment.',
    
  },
  {
    title: 'Social Media Management',
    description: 'Strategic content creation, page management, and community engagement to build a powerful online presence.',
    
  },
  {
    title: 'Ad Production',
    description: 'End-to-end advertisement creation, from initial concept development to final preparation and high-quality delivery.',
    
  },
  {
    title: 'Brand Collaborations',
    description: 'Strategic partnerships to co-create campaigns that leverage distinct audiences for mutual growth and visibility.',
    
  }
];

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