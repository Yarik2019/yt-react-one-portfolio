import {  arrayDestruct, installNode, navbarImg, reactParallax, reactSmooth, reactWeather ,html, css, javascript, reactImage, vueImage, sass, firebase, mySql, github, bitbucket, tailwind, bootstap} from '../dateAndImportImg/ImportImg';

/* socialLinks */ 
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
                LinkedIn <FaLinkedin size={30} />
            </>
        ),
        href: 'https://linkedin.com',
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
        src: arrayDestruct,
        demoLink:'https://',
        codeLink:'https://'
    },
    {
        id: 2,
        src: installNode,
        demoLink:'https://',
        codeLink:'https://'
    },
    {
        id: 3,
        src: navbarImg,
        demoLink:'https://',
        codeLink:'https://'
    },
    {
        id: 4,
        src: reactParallax,
        demoLink:'https://',
        codeLink:'https://'
    },
    {
        id: 5,
        src: reactSmooth,
        demoLink:'https://',
        codeLink:'https://'
    },
    {
        id: 6,
        src: reactWeather,
        demoLink:'https://',
        codeLink:'https://'
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
        style: 'shadow-gray-400',
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
        title: '    mySql',
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