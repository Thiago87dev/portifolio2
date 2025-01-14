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
} from "react-icons/si";

const iconsStyles = {
  html: { colorText: "#e34c25", colorBg: "transparent", rounded: "" },
  css: { colorText: "#1575e3", colorBg: "transparent", rounded: "" },
  javascript: { colorText: "#efda4e", colorBg: "black", rounded: "" },
  typescript: { colorText: "#377cc8", colorBg: "transparent", rounded: "" },
  react: { colorText: "#81e0ff", colorBg: "transparent", rounded: "" },
  nextJs: { colorText: "#000000", colorBg: "white", rounded: "100px" },
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
  { name: "Tailwind", icon: <SiTailwindcss />, ...iconsStyles.tailwind },
  { name: "Python", icon: <SiPython />, ...iconsStyles.python },
  { name: "Django", icon: <SiDjango />, ...iconsStyles.django },
  { name: "Mysql", icon: <SiMysql />, ...iconsStyles.mysql },
  { name: "Git", icon: <SiGit />, ...iconsStyles.git },
  { name: "GitHub", icon: <SiGithub />, ...iconsStyles.gitHub },
];

export const allProjects = [
  {
    title: "D.D.M.N",
    
    imgPath: "/images/ddmn.png",
    hrefRepo: "https://github.com/Thiago87dev/bricklayer-project",
    hrefSite: "https://www.ddmn.app.br/",
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
    title: "Best Movies",
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
    title: "Bloggers",
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
    title: "PokeNext",
    text: "Um site que mostra alguns pokémons e seus detalhes.",
    imgPath: "/img/pokenext.png",
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
    title: "Figbruary",
    text: "Um site criado através de um projeto figma utilizando dynamic rotes.",
    imgPath: "/img/figbruary.png",
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
  // {
  //   title: "My todo",
  //   text: "Um site de tarefas utilizando localStorage.",
  //   imgPath: "/img/my-todo.png",
  //   hrefRepo: "https://github.com/Thiago87dev/my-todo",
  //   hrefSite: "https://my-todo-dun.vercel.app/",
  //   alt: "Capa my todo",
  //   icons: [
  //     { title: "React", icon: <SiReact /> },
  //     { title: "Typescript", icon: <SiTypescript /> },
  //   ],
  // },
  // {
  //   title: "Gerador de CPF",
  //   text: "Um sistema que gera CPFs válidos.",
  //   imgPath: "/img/gera-cpf.png",
  //   hrefRepo: "https://github.com/Thiago87dev/geradorCPF",
  //   hrefSite: "https://thiago87dev.github.io/geradorCPF/",
  //   alt: "Capa gerador de cpf",
  //   icons: [
  //     { title: "Html 5", icon: <SiHtml5 /> },
  //     { title: "Css 3", icon: <SiCss3 /> },
  //     { title: "Javascipt", icon: <SiJavascript /> },
  //   ],
  // },
  // {
  //   title: "Gerador de Senha",
  //   text: "Um sistema que gera senhas aleatórias, podendo escolher entre letras maiúsculas ou minusculas, números e símbolos, além de definir o tamanho da senha. ",
  //   imgPath: "/img/gera-senha.png",
  //   hrefRepo: "https://github.com/Thiago87dev/password-generator",
  //   hrefSite: "https://password-generator-hazel-phi.vercel.app/",
  //   alt: "Capa gerador de senha",
  //   icons: [
  //     { title: "React", icon: <SiReact /> },
  //     { title: "Typescript", icon: <SiTypescript /> },
  //   ],
  // },
  // {
  //   title: "First landing page",
  //   text: "Minha primeira landing page utilizando apenas html e css.",
  //   imgPath: "/img/landing-page.png",
  //   hrefRepo: "https://github.com/Thiago87dev/landing-page",
  //   hrefSite: "https://tdevlandingpage.netlify.app/",
  //   alt: "Capa da minha primeira landing page",
  //   icons: [
  //     { title: "Html 5", icon: <SiHtml5 /> },
  //     { title: "Css 3", icon: <SiCss3 /> },
  //   ],
  // },
  // {
  //   title: "Média Uniasselvi",
  //   text: "Um sistema que criei em parceria com um colega de faculdade para calcular a média das notas da Uniasselvi.",
  //   imgPath: "/img/media-uni.png",
  //   hrefRepo: "https://github.com/Thiago87dev/mediaUniasselvi",
  //   hrefSite: "https://thiago87dev.github.io/mediaUniasselvi/",
  //   alt: "Capa da calculadora de média Uniasselvi",
  //   icons: [
  //     { title: "Html 5", icon: <SiHtml5 /> },
  //     { title: "Css 3", icon: <SiCss3 /> },
  //     { title: "Javascipt", icon: <SiJavascript /> },
  //   ],
  // },
];
