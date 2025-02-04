"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const serviceId = process.env.NEXT_PUBLIC_APP_SERVICE_ID
    const templateId  = process.env.NEXT_PUBLIC_APP_TEMPLATE_ID
    const publicKey  = process.env.NEXT_PUBLIC_APP_PUBLIC_KEY

    if(!serviceId || !templateId || !publicKey){
        console.log('error in .env');
        return
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="text-white">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" className="text-black" />
        <label>Email</label>
        <input type="email" name="user_email"className="text-black" />
        <label>Message</label>
        <textarea name="message" className="text-black"/>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
