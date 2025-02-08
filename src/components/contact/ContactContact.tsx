import { ContactForm } from "../ContactForm";

const ContactContact = () => {
  return (
    <div className="dark:bg-colorBg2Dark bg-colorBg3Light flex flex-col justify-start items-center w-full min-h-screen pt-10  dark:text-colorTextDark text-colorTextLight overflow-x-hidden">
      <div className="flex w-full max-w-[1204px]">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactContact;
