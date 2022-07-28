import { ActiveBox, MoGo, playMousic, sider3D, vueCreptol, vrLoading ,html, css, javascript, reactImage, vueImage, sass, firebase, mySql, github, bitbucket, tailwind, bootstap} from '../dateAndImportImg/ImportImg';

/* socialLinks */ 
import { FaGithub } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';


/* navbar */
const navbar = [
    {
        id: 1,
        link: 'home'
    },
    {
        id: 2,
        link: 'about'
    },
    {
        id: 3,
        link: 'portfolio'
    },
    {
        id: 4,
        link: 'experience'
    },
    {
        id: 5,
        link: 'contact'
    },

]

/* socialLinks */ 
const socialLinks = [
    {
        id: 1,
        child: (
            <>
                Phone number <AiOutlinePhone size={30} />
            </>
        ),
        href: 'tel:+380968749135',
        style: 'rounded-tr-md'
    },
    {
        id: 2,
        child: (
            <>
                GitHub <FaGithub size={30} />
            </>
        ),
        href: 'https://github.com/Yarik2019',
    },
    {
        id: 3,
        child: (
            <>
                Mail <HiOutlineMail size={30} />
            </>
        ),
        href: 'mailto:yroslavterno@gmail.com',
    },
    {
        id: 4,
        child: (
            <>
                Resume <BsFillPersonLinesFill size={30} />
            </>
        ),
        href: './ЯРОСЛАВ _ТЕРНО _CV.pdf',
        style: 'rounded-br-md',
        download: true
    },
]
/* portfolio */
const portfolio = [
    {
        id: 1,
        src: ActiveBox,
        demoLink:'https://62d7915db60af2746bda48fd--ephemeral-meringue-53162d.netlify.app/',
        codeLink:'https://github.com/Yarik2019/ActiveBox'
    },
    {
        id: 2,
        src: MoGo,
        demoLink:'https://gregarious-sorbet-88f50d.netlify.app/#',
        codeLink:'https://github.com/Yarik2019/MoGo'
    },
    {
        id: 3,
        src: playMousic,
        demoLink:'https://62d78d8581600571eda44653--boisterous-gumdrop-4f91e8.netlify.app/',
        codeLink:'https://github.com/Yarik2019/PlayerMouse'
    },
    {
        id: 4,
        src: sider3D,
        demoLink:'https://62d78ce8816005716da44546--superlative-douhua-091e42.netlify.app/',
        codeLink:'https://github.com/Yarik2019/SliderAssassinsCreed-'
    },
    {
        id: 5,
        src: vueCreptol,
        demoLink:'https://62d78f70b60af2730eda5a13--merry-narwhal-a569a2.netlify.app/?filter=&page=1',
        codeLink:'https://github.com/Yarik2019/vueCryptocompare'
    },
    {
        id: 6,
        src: vrLoading,
        demoLink:'https://62e248b266a5925cd8415a6d--preeminent-khapse-7f54d7.netlify.app/',
        codeLink:'https://github.com/Yarik2019/vr-loading'
    },
]

/* experience */
 const experience = [
    {
        id:1,
        src: html,
        title: 'HTML',
        style: 'shadow-orange-500',
    },
    {
        id:2,
        src: css,
        title: 'CSS',
        style: 'shadow-blue-500',
    },
    {
        id:3,
        src: sass,
        title: 'Sass / Scss ',
        style: 'shadow-pink-400',
    },
    {
        id:4,
        src: javascript,
        title: 'JavaScript',
        style: 'shadow-yellow-500',
    },
    {
        id:5,
        src: reactImage,
        title: 'React',
        style: 'shadow-blue-500',
    },
    {
        id:6,
        src: vueImage,
        title: 'Vue',
        style: 'shadow-green-500',
    },
    {
        id:7,
        src: tailwind,
        title: 'Tailwind',
        style: 'shadow-sky-500',
    },
    {
        id:8,
        src: bootstap,
        title: 'Bootstap',
        style: 'shadow-purple-400',
    },
    {
        id:9,
        src: firebase,
        title: 'Firebase',
        style: 'shadow-yellow-400',
    },
    {
        id:10,
        src: mySql,
        title: 'mySql',
        style: 'shadow-sky-400',
    },
    {
        id:11,
        src: github,
        title: 'GitHub',
        style: 'shadow-gray-400',
    },
    {
        id:12,
        src: bitbucket,
        title: 'Bitbucket',
        style: 'shadow-blue-400',
    },
   
]

export {navbar, socialLinks, portfolio, experience,}