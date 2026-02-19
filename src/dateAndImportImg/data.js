import {
  ActiveBox,
  MoGo,
  playMousic,
  sider3D,
  vueCreptol,
  vrLoading,
  activeTraker,
  vueInvoiceApp,
  html,
  css,
  javascript,
  jquery,
  node,
  typeScript,
  reactImage,
  nextImage,
  vueImage,
  nuxtImage,
  sass,
  firebase,
  supabase,
  mongodb,
  mySql,
  github,
  bitbucket,
  tailwind,
  bootstap,
  materialui,
  shadcnui,
  primevue,
  vercel,
  netlify,
} from "../dateAndImportImg/ImportImg";

import { v4 as uuidv4 } from "uuid";
/* socialLinks */
import { FaGithub } from "react-icons/fa";
// import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
import { LiaCertificateSolid } from "react-icons/lia";


const id = uuidv4();

/* navbar */
const navbar = [
  {
    id: id,
    link: "home",
  },
  {
    id: id,
    link: "about",
  },
  {
    id: id,
    link: "portfolio",
  },
  {
    id: id,
    link: "experience",
  },
  {
    id: id,
    link: "contact",
  },
];

/* socialLinks */
const socialLinks = [
  // {
  //     id: 1,
  //     child: (
  //         <>
  //             Phone number <AiOutlinePhone size={30} />
  //         </>
  //     ),
  //     href: 'tel:+380000000000',
  //     style: 'rounded-tr-md'
  // },
  {
    id: id,
    child: (
      <>
        GitHub <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/Yarik2019",
  },
  {
    id: id,
    child: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),
    href: "mailto:yroslavterno@gmail.com",
  },
   {
    id: id,
    child: (
      <>
        Certificate <LiaCertificateSolid className="!text-white" size={30} />
      </>
    ),
    style: "rounded-br-md",
    href: "https://drive.google.com/file/d/19bCoGx9aCszTwiuvVMUV0S0sOnMc-gI8/view?usp=sharing",
  },
//   {
//     id: id,
//     child: (
//       <>
//         Resume <BsFillPersonLinesFill size={30} />
//       </>
//     ),
//     href: "https://docs.google.com/document/d/1iV_WLj2dJfo-B7t74s1Is1QLhiQPE82HS0r59LxIRvk/edit?usp=sharing",
//     style: "rounded-br-md",
//     download: true,
//   },
];
/* portfolio */
const portfolio = [
  {
    id: id,
    src: ActiveBox,
    demoLink:
      "https://62d7915db60af2746bda48fd--ephemeral-meringue-53162d.netlify.app/",
    codeLink: "https://github.com/Yarik2019/ActiveBox",
  },
  {
    id: id,
    src: MoGo,
    demoLink: "https://gregarious-sorbet-88f50d.netlify.app/#",
    codeLink: "https://github.com/Yarik2019/MoGo",
  },
  {
    id: id,
    src: playMousic,
    demoLink:
      "https://62d78d8581600571eda44653--boisterous-gumdrop-4f91e8.netlify.app/",
    codeLink: "https://github.com/Yarik2019/PlayerMouse",
  },
  {
    id: id,
    src: sider3D,
    demoLink:
      "https://62d78ce8816005716da44546--superlative-douhua-091e42.netlify.app/",
    codeLink: "https://github.com/Yarik2019/SliderAssassinsCreed-",
  },
  {
    id: id,
    src: vueCreptol,
    demoLink:
      "https://62d78f70b60af2730eda5a13--merry-narwhal-a569a2.netlify.app/?filter=&page=1",
    codeLink: "https://github.com/Yarik2019/vueCryptocompare",
  },
  {
    id: id,
    src: vrLoading,
    demoLink:
      "https://62e248b266a5925cd8415a6d--preeminent-khapse-7f54d7.netlify.app/",
    codeLink: "https://github.com/Yarik2019/vr-loading",
  },
  {
    id: id,
    src: activeTraker,
    demoLink: "https://splendid-florentine-559fef.netlify.app/",
    codeLink: "https://github.com/Yarik2019/active_tracker_supbase",
  },
  {
    id: id,
    src: vueInvoiceApp,
    demoLink: "https://charming-gumdrop-d2a002.netlify.app/",
    codeLink: "https://github.com/Yarik2019/VueInvoiceApp",
  },
];

/* experience */
const experience = [
  {
    id: id,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: id,
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: id,
    src: sass,
    title: "Sass / Scss",
    style: "shadow-pink-400",
  },
  {
    id: id,
    src: tailwind,
    title: "Tailwind",
    style: "shadow-sky-500",
  },
  {
    id: id,
    src: bootstap,
    title: "Bootstap",
    style: "shadow-purple-400",
  },
  {
    id: id,
    src: javascript,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: id,
    src: jquery,
    title: "jQuery",
    style: "shadow-gray-400",
  },
  {
    id: id,
    src: node,
    title: "Node",
    style: "shadow-green-500",
  },
  {
    id: id,
    src: typeScript,
    title: "TypeScript",
    style: "shadow-blue-500",
  },
  {
    id: id,
    src: reactImage,
    title: "React",
    style: "shadow-blue-500",
  },
  {
    id: id,
    src: nextImage,
    title: "Next",
    style: "shadow-gray-400",
  },
  {
    id: id,
    src: materialui,
    title: "Material UI",
    style: "shadow-blue-500",
  },
  {
    id: id,
    src: shadcnui,
    title: "Shadcn UI",
    style: "shadow-gray-400",
  },
  {
    id: id,
    src: vueImage,
    title: "Vue",
    style: "shadow-green-500",
  },
  {
    id: id,
    src: nuxtImage,
    title: "Nuxt 2/3",
    style: "shadow-green-500",
  },
  {
    id: id,
    src: primevue,
    title: "PrimeVue",
    style: "shadow-green-500",
  },
  {
    id: id,
    src: firebase,
    title: "Firebase",
    style: "shadow-yellow-400",
  },
  {
    id: id,
    src: supabase,
    title: "Supabase",
    style: "shadow-green-500",
  },
  {
    id: id,
    src: mongodb,
    title: "MongoDB",
    style: "shadow-green-500",
  },
  {
    id: id,
    src: mySql,
    title: "mySql",
    style: "shadow-sky-400",
  },
  {
    id: id,
    src: github,
    title: "GitHub",
    style: "shadow-gray-400",
  },
  {
    id: id,
    src: bitbucket,
    title: "Bitbucket",
    style: "shadow-blue-400",
  },
  {
    id: id,
    src: vercel,
    title: "Vercel",
    style: "shadow-gray-400",
  },
  {
    id: id,
    src: netlify,
    title: "Netlify",
    style: "shadow-sky-400",
  },
];

export { navbar, socialLinks, portfolio, experience };
