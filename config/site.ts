export const siteConfig = {
    name: "Apprentice ",
    title: "APPRENTICE is dedicated to empowering communities across South Sudan by driving sustainable development, promoting social equity, and enhancing economic well-being. We believe in creating a brighter future for all by addressing the urgent needs of the most vulnerable. Your support can make a real difference—whether through donations, volunteering, or spreading awareness. Together, we can save lives and build resilient communities, ensuring that everyone has the opportunity to thrive. Join us in our mission to create lasting, positive change in South Sudan",
    url: process.env.NEXT_PUBLIC_BASE_URL||"https://www.apprenticengo.org/",
    ogImage: "https://res.cloudinary.com/ngobiowendev/image/upload/v1724583707/Lorem_ipsum_dolor_sit_amet_consectetur_adipiscing_elit._Donec_aliquam_tortor_vitae_diam_finibus_pulvinar._Nam_nec_hendrerit_metus._Quisque_convallis_diam_a_felis_porta_luctus._Class_aptent_taciti_qcv3ey.png",
    description:
      "APPRENTICE is a nonprofit organization committed to empowering communities in South Sudan by enhancing economic well-being, promoting social equity, and ensuring environmental sustainability. Through targeted initiatives and collaborative efforts, we strive to create lasting change that benefits current and future generations, fostering a brighter and more equitable future for all.",
    links: {
      twitter: "https://twitter.com/apprentice",
      github: "https://github.com/owenalbert606",
    },
  };
   
  export type SiteConfig = typeof siteConfig;