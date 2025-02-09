"use client";
import { ChangeEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../Button";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErros {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactForm = () => {
  const [hasSent, setHasSent] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const form = useRef<HTMLFormElement | null>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: FormErros = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
    let hasError = false;
    const errorMsg = "Este campo é obrigatório";

    if (!formData.name.trim()) {
      newErrors.name = errorMsg;
      hasError = true;
    }
    if (!formData.email.trim()) {
      newErrors.email = errorMsg;
      hasError = true;
    }
    if (!formData.subject.trim()) {
      newErrors.subject = errorMsg;
      hasError = true;
    }
    if (!formData.message.trim()) {
      newErrors.message = errorMsg;
      hasError = true;
    }
    setErrors(newErrors);
    return !hasError;
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current || !validateForm()) return;

    const serviceId = process.env.NEXT_PUBLIC_APP_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_APP_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_APP_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.log("error in .env");
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setHasSent(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="dark:text-colorTextDark text-colorTextLight w-full sm:w-[80%] md:w-1/2 mb-20">
      {hasSent ? (
        <div className="flex flex-col items-center justify-center bg-colorBgLight dark:bg-colorBgDark sm:p-10 md:h-[570px] rounded-br-[55px] gap-8">
          <h2 className="text-3xl font-semibold text-center">
            Muito obrigado pelo seu contato {formData.name}! 🎉🎉
          </h2>
          <h2 className="text-3xl font-semibold text-center">
            Sua mensagem já está na minha lista de prioridades! Em breve te
            respondo! 📩
          </h2>
          <div
            onClick={() => {
              setHasSent(false);
              setFormData({ name: "", email: "", subject: "", message: "" });
            }}
            className="w-1/2"
          >
            <Button title="Voltar" />
          </div>
        </div>
      ) : (
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col bg-colorBgLight dark:bg-colorBgDark p-4 sm:p-10 h-[570px] rounded-br-[55px] gap-8"
        >
          <div className="flex flex-col">
            <label className="italic">Nome</label>
            <input
              value={formData.name}
              onChange={handleInputChange}
              type="text"
              name="name"
              className="text-colorTextLight  rounded-lg p-1.5 border-2 border-colorTextLight"
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          </div>
          <div className="flex flex-col">
            <label className="italic">Email</label>
            <input
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              name="email"
              className="text-colorTextLight  rounded-lg p-1.5 border-2 border-colorTextLight"
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>
          <div className="flex flex-col">
            <label className="italic">Assunto</label>
            <input
              value={formData.subject}
              onChange={handleInputChange}
              type="text"
              name="subject"
              className="text-colorTextLight  rounded-lg p-1.5 border-2 border-colorTextLight"
            />
            {errors.subject && <p style={{ color: "red" }}>{errors.subject}</p>}
          </div>
          <div className="flex flex-col">
            <label className="italic">Mensagem</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="text-colorTextLight  rounded-lg p-5 border-2 border-colorTextLight"
            />
            {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
          </div>
          <div className="flex flex-col w-full dark:bg-colorHighlightsDark bg-colorHighlightsLight text-colorTextDark dark:text-colorTextLight rounded-full p-1.5  cursor-pointer hover:dark:bg-colorHighlightsLight hover:dark:text-colorTextDark hover:bg-colorHighlightsDark hover:text-colorTextLight">
            <input
              type="submit"
              value="Enviar Mensagem"
              className="cursor-pointer font-bold"
            />
          </div>
        </form>
      )}
    </div>
  );
};
