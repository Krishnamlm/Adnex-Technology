// In src/assets/assets.js

// 1. CONSOLIDATE LOGO IMPORTS TO ONE VARIABLE
import logo_png from './logo.png' 


import arrow_icon from './arrow_icon.svg'
import group_profile from './group_profile.png'
import bgImage1 from './bgImage1.png'
import bgImage2 from './bgImage2.png'
import hero_img from './hero_img.png'
import microsoft_logo from './microsoft_logo.png'
import zoom_logo from './zoom_logo.png'
import rakuten_logo from './rakuten_logo.png'
import coinbase_logo from './coinbase_logo.png'
import ads_icon from './ads_icon.svg'
import content_icon from './content_icon.svg'
import marketing_icon from './marketing_icon.svg'
import social_icon from './social_icon.svg'
import menu_icon from './menu_icon.svg'
import close_icon from './close_icon.svg'
import work_mobile_app from './work_mobile_app.png'
import work_fitness_app from './work_fitness_app.png'
import work_dashboard_management from './work_dashboard_management.png'
import email_icon from './email_icon.svg'
import person_icon from './person_icon.svg'
import facebook_icon from './facebook_icon.svg'
import twitter_icon from './twitter_icon.svg'
import instagram_icon from './instagram_icon.svg'
import linkedin_icon from './linkedin_icon.svg'
import airbnb_logo from './airbnb_logo.png'
import google_logo from './google_logo.png'
import menu_icon_dark from './menu_icon_dark.svg'
import sun_icon from './sun_icon.svg'
import moon_icon from './moon_icon.svg'


export const company_logos = [
  microsoft_logo,
  zoom_logo,
  rakuten_logo,
  coinbase_logo,
  airbnb_logo,
  google_logo,
]

const assets = {
  // ✅ Assign the public URL path string (must start with /)
  logo: '/logo.png', 
  logo_dark: '/logo_dark.png', // Use the same public path for dark mode
  whatsapp_icon:'/whatsapp_icon.png',
  arrow_icon,
  group_profile,
  bgImage1,
  bgImage2,
  hero_img,
  ads_icon,
  content_icon,
  marketing_icon,
  social_icon,
  menu_icon,
  close_icon,
  work_mobile_app,
  work_fitness_app,
  work_dashboard_management,
  email_icon,
  person_icon,
  facebook_icon,
  twitter_icon,
  instagram_icon,
  linkedin_icon,
  menu_icon_dark,
  sun_icon,
  moon_icon
}
export default assets

export const teamData = [
  { name: 'Krishna Prajapati', title: 'CEO & founder', image: 'https://media.licdn.com/dms/image/v2/D4D03AQFSVyiMMrrPQw/profile-displayphoto-shrink_800_800/B4DZedtDkKHAAc-/0/1750697534270?e=1762992000&v=beta&t=5YjFA5R1qS0JUcwVxjTVcK8dt-3uhUvx5LKZNNPKj6g' },
  { name: 'Ayush Kushwah', title: 'Co-founder', image: './co-founder.png' },
  { name: 'Megan Brooks', title: 'Ads Manager', image: 'https://randomuser.me/api/portraits/women/12.jpg' },
  { name: 'Amber Foster', title: 'Performance Manager', image: 'https://randomuser.me/api/portraits/women/14.jpg' },
]