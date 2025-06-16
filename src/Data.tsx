import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiMysql,
  SiGit,
  SiGithub,
  SiRedux,
} from "react-icons/si";

const iconsStyles = {
  html: { colorText: "#e34c25", colorBg: "transparent", rounded: "" },
  css: { colorText: "#1575e3", colorBg: "transparent", rounded: "" },
  javascript: { colorText: "#efda4e", colorBg: "black", rounded: "" },
  typescript: { colorText: "#377cc8", colorBg: "transparent", rounded: "" },
  react: { colorText: "#81e0ff", colorBg: "transparent", rounded: "" },
  nextJs: { colorText: "#000000", colorBg: "white", rounded: "100px" },
  redux: { colorText: "#7a50be", colorBg: "transparent", rounded: "" },
  tailwind: { colorText: "#3ebff8", colorBg: "transparent", rounded: "" },
  python: { colorText: "#3c77a8", colorBg: "transparent", rounded: "" },
  django: { colorText: "#113527", colorBg: "transparent", rounded: "" },
  mysql: { colorText: "#e69208", colorBg: "transparent", rounded: "" },
  git: { colorText: "#f05539", colorBg: "transparent", rounded: "" },
  gitHub: { colorText: "#000", colorBg: "white", rounded: "100px" },
};

export const skillList = [
  { name: "Html 5", icon: <SiHtml5 />, ...iconsStyles.html },
  { name: "Css 3", icon: <SiCss3 />, ...iconsStyles.css },
  { name: "Javascript", icon: <SiJavascript />, ...iconsStyles.javascript },
  { name: "Typescript", icon: <SiTypescript />, ...iconsStyles.typescript },
  { name: "React", icon: <SiReact />, ...iconsStyles.react },
  { name: "NextJs", icon: <SiNextdotjs />, ...iconsStyles.nextJs },
  { name: "Redux", icon: <SiRedux />, ...iconsStyles.redux },
  { name: "Tailwind", icon: <SiTailwindcss />, ...iconsStyles.tailwind },
  { name: "Python", icon: <SiPython />, ...iconsStyles.python },
  { name: "Django", icon: <SiDjango />, ...iconsStyles.django },
  { name: "Mysql", icon: <SiMysql />, ...iconsStyles.mysql },
  { name: "Git", icon: <SiGit />, ...iconsStyles.git },
  { name: "GitHub", icon: <SiGithub />, ...iconsStyles.gitHub },
];

export const allProjects = [
  {
    text: "projectText10", // for translation
    title: "ddmn",
    imgPath: "/images/ddmn.png",
    hrefRepo: "https://github.com/Thiago87dev/bricklayer-project",
    hrefSite: "https://bricklayer-project.vercel.app/",
    alt: "Capa D.D.M.N Construtora",
    icons: [
      { title: "React", icon: <SiReact />, ...iconsStyles.react },
      { title: "Next", icon: <SiNextdotjs />, ...iconsStyles.nextJs },
      {
        title: "Typescript",
        icon: <SiTypescript />,
        ...iconsStyles.typescript,
      },
      { title: "Tailwind", icon: <SiTailwindcss />, ...iconsStyles.tailwind },
    ],
  },
  {
    text: "projectText11", // for translation
    title: "projectTitle11",
    imgPath: "/images/img-best-movie.png",
    hrefRepo: "https://github.com/Thiago87dev/react_bestMovies",
    hrefSite: "https://thiago87dev.github.io/react_bestMovies/",
    alt: "Capa site Best Movie",
    icons: [
      { title: "React", icon: <SiReact />, ...iconsStyles.react },
      {
        title: "Javascript",
        icon: <SiJavascript />,
        ...iconsStyles.javascript,
      },
    ],
  },
  {
    text: "projectText12", // for translation
    title: "bloggers",
    imgPath: "/images/img-blogger.png",
    hrefRepo: "https://github.com/Thiago87dev/my-blog",
    hrefSite: "https://my-blog-phi-green.vercel.app/",
    alt: "Capa blog",
    icons: [
      { title: "React", icon: <SiReact />, ...iconsStyles.react },
      { title: "Next", icon: <SiNextdotjs />, ...iconsStyles.nextJs },
      {
        title: "Typescript",
        icon: <SiTypescript />,
        ...iconsStyles.typescript,
      },
      { title: "Tailwind", icon: <SiTailwindcss />, ...iconsStyles.tailwind },
    ],
  },
  {
    text: "projectText2", // for translation
    title: "projectTitle2",
    imgPath: "/images/ecommerce-page.png",
    hrefRepo: "https://github.com/Thiago87dev/E-commerce-product-page",
    hrefSite: "https://e-commerce-product-page-gamma-neon.vercel.app/",
    alt: "Capa E-commerce product page",
    icons: [
      { title: "React", icon: <SiReact />, ...iconsStyles.react },
      { title: "Next", icon: <SiNextdotjs />, ...iconsStyles.nextJs },
      { title: "Redux", icon: <SiRedux />, ...iconsStyles.redux },
      {
        title: "Typescript",
        icon: <SiTypescript />,
        ...iconsStyles.typescript,
      },
      { title: "Tailwind", icon: <SiTailwindcss />, ...iconsStyles.tailwind },
    ],
  },
  {
    text: "projectText3", // for translation
    title: "projectTitle3",
    imgPath: "/images/product-list-with-cart-main.png",
    hrefRepo: "https://github.com/Thiago87dev/product-list-with-cart-main",
    hrefSite: "https://product-list-with-cart-main-ebbt.vercel.app/",
    alt: "Capa Product list with cart main",
    icons: [
      { title: "React", icon: <SiReact />, ...iconsStyles.react },
      { title: "Next", icon: <SiNextdotjs />, ...iconsStyles.nextJs },
      { title: "Redux", icon: <SiRedux />, ...iconsStyles.redux },
      {
        title: "Typescript",
        icon: <SiTypescript />,
        ...iconsStyles.typescript,
      },
      { title: "Tailwind", icon: <SiTailwindcss />, ...iconsStyles.tailwind },
    ],
  },
  {
    text: "projectText4", // for translation
    title: "pokeNext",
    imgPath: "/images/pokenext.png",
    hrefRepo: "https://github.com/Thiago87dev/pokeNext",
    hrefSite: "https://poke-next-one-xi.vercel.app/",
    alt: "Capa pokenext",
    icons: [
      { title: "React", icon: <SiReact />, ...iconsStyles.react },
      { title: "Next", icon: <SiNextdotjs />, ...iconsStyles.nextJs },
      {
        title: "Javascript",
        icon: <SiJavascript />,
        ...iconsStyles.javascript,
      },
    ],
  },
  {
    text: "projectText5", // for translation
    title: "figbruary",
    imgPath: "/images/figbruary.png",
    hrefRepo: "https://github.com/Thiago87dev/figbruary",
    hrefSite: "https://figbruary-five.vercel.app/",
    alt: "Capa figbruary",
    icons: [
      { title: "React", icon: <SiReact />, ...iconsStyles.react },
      { title: "Next", icon: <SiNextdotjs />, ...iconsStyles.nextJs },
      {
        title: "Typescript",
        icon: <SiTypescript />,
        ...iconsStyles.typescript,
      },
      { title: "Tailwind", icon: <SiTailwindcss />, ...iconsStyles.tailwind },
    ],
  },
  {
    text: "projectText6", // for translation
    title: "projectTitle6",
    imgPath: "/images/my-todo.png",
    hrefRepo: "https://github.com/Thiago87dev/my-todo",
    hrefSite: "https://my-todo-dun.vercel.app/",
    alt: "Capa my todo",
    icons: [
      { title: "React", icon: <SiReact />, ...iconsStyles.react },
      {
        title: "Typescript",
        icon: <SiTypescript />,
        ...iconsStyles.typescript,
      },
    ],
  },
  {
    text: "projectText7", // for translation
    title: "projectTitle7",
    imgPath: "/images/gera-cpf.png",
    hrefRepo: "https://github.com/Thiago87dev/geradorCPF",
    hrefSite: "https://thiago87dev.github.io/geradorCPF/",
    alt: "Capa gerador de cpf",
    icons: [
      { title: "Html 5", icon: <SiHtml5 />, ...iconsStyles.html },
      { title: "Css 3", icon: <SiCss3 />, ...iconsStyles.css },
      { title: "Javascipt", icon: <SiJavascript />, ...iconsStyles.javascript },
    ],
  },
  {
    title: "projectTitle8",
    text: "projectText8", // for translation
    imgPath: "/images/gera-senha.png",
    hrefRepo: "https://github.com/Thiago87dev/password-generator",
    hrefSite: "https://password-generator-hazel-phi.vercel.app/",
    alt: "Capa gerador de senha",
    icons: [
      { title: "React", icon: <SiReact />, ...iconsStyles.react },
      {
        title: "Typescript",
        icon: <SiTypescript />,
        ...iconsStyles.typescript,
      },
    ],
  },
  {
    text: "projectText9", // for translation
    title: "projectTitle9",
    imgPath: "/images/media-uni.png",
    hrefRepo: "https://github.com/Thiago87dev/mediaUniasselvi",
    hrefSite: "https://thiago87dev.github.io/mediaUniasselvi/",
    alt: "Capa da calculadora de média Uniasselvi",
    icons: [
      { title: "Html 5", icon: <SiHtml5 />, ...iconsStyles.html },
      { title: "Css 3", icon: <SiCss3 />, ...iconsStyles.css },
      { title: "Javascipt", icon: <SiJavascript />, ...iconsStyles.javascript },
    ],
  },
  // Homepage
  {
    text: "projectText14", // for translation
    title: "projectTitle14",
    imgPath: "/images/eq.png",
    hrefRepo: "https://github.com/Thiago87dev/escrevendo-na-quebrada",
    hrefSite: "https://www.escrevendonaquebrada.org.br/",
    alt: "Capa Escrevendo na quebrada",
    icons: [
      { title: "React", icon: <SiReact />, ...iconsStyles.react },
      { title: "Next", icon: <SiNextdotjs />, ...iconsStyles.nextJs },
      {
        title: "Typescript",
        icon: <SiTypescript />,
        ...iconsStyles.typescript,
      },
      { title: "Tailwind", icon: <SiTailwindcss />, ...iconsStyles.tailwind },
    ],
  },
  {
    text: "projectText13", // for translation
    title: "BikeShop",
    imgPath: "/images/bikeshop.png",
    hrefRepo: "https://github.com/Thiago87dev/BikeShop",
    hrefSite: "https://bike-shop-omega-snowy.vercel.app/",
    alt: "Capa BikeShop",
    icons: [
      { title: "React", icon: <SiReact />, ...iconsStyles.react },
      { title: "Next", icon: <SiNextdotjs />, ...iconsStyles.nextJs },
      { title: "Redux", icon: <SiRedux />, ...iconsStyles.redux },
      {
        title: "Typescript",
        icon: <SiTypescript />,
        ...iconsStyles.typescript,
      },
      { title: "Tailwind", icon: <SiTailwindcss />, ...iconsStyles.tailwind },
    ],
  },
  {
    text: "projectText1", // for translation
    title: "projectTitle1",
    imgPath: "/images/rest-contries.png",
    hrefRepo: "https://github.com/Thiago87dev/rest-countries",
    hrefSite: "https://rest-countries-drab-nu.vercel.app/",
    alt: "Capa Countries of the world",
    icons: [
      { title: "React", icon: <SiReact />, ...iconsStyles.react },
      { title: "Next", icon: <SiNextdotjs />, ...iconsStyles.nextJs },
      { title: "Redux", icon: <SiRedux />, ...iconsStyles.redux },
      {
        title: "Typescript",
        icon: <SiTypescript />,
        ...iconsStyles.typescript,
      },
      { title: "Tailwind", icon: <SiTailwindcss />, ...iconsStyles.tailwind },
    ],
  },
];
