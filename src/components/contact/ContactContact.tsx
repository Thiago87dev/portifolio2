import AddressContact from "./AddressContact";
import { ContactForm } from "./ContactForm";
import TextsContact from "./TextsContact";

const ContactContact = () => {
  return (
    <div className="dark:bg-colorBg2Dark bg-colorBg3Light flex flex-col justify-start items-center w-full min-h-[696px] pt-10  dark:text-colorTextDark text-colorTextLight overflow-x-hidden">
      <div className="flex flex-col w-full max-w-[1204px]">
        <div className="flex flex-col md:flex-row items-center">
          <TextsContact />
          <ContactForm />
        </div>
        <AddressContact />
      </div>
    </div>
  );
};

export default ContactContact;
