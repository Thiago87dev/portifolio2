import { Link } from "@/i18n/routing";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <div className="flex justify-center items-center py-5 md:py-8 bg-colorBgNavLight dark:bg-colorBgNavDark text-colorTextLight dark:text-colorTextDark px-5">
      <div className="flex flex-col md:flex-row text-center items-center justify-between gap-4 w-[1220px] ">
        <div>
          <h4>
            © {currentYear} | Projetado e codificado por{" "}
            <span className="text-colorHighlightsLight dark:text-colorHighlightsDark">
              Thiago Alves
            </span>
          </h4>
        </div>
        <div className="flex gap-6">
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/thiago-alves-dev/"}
          >
            <FaLinkedin size={25} title="Linkedin" />
          </Link>
          <Link target="_blank" href={"https://github.com/Thiago87dev"}>
            <FaGithub size={25} title="Githug" />
          </Link>
          <Link target="_blank" href={"https://www.instagram.com/thiagopaulista87/"}>
            <FaInstagram size={25} title="Instagram" />
          </Link>
          <Link target="_blank" href={"https://wa.me/5547989124895"}>
            <FaWhatsapp size={25} title="Whatsapp" />
          </Link>
          <Link target="_blank" href={"https://www.frontendmentor.io/profile/Thiago87dev"}>
            <SiFrontendmentor size={25} title="Frontend Mentor" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
