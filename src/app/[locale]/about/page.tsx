'use client'
import { useActionState } from "react";

const About = () => {
  const [tags, formAction] = useActionState(
    (prevState: string[], formData: FormData) => [
      ...prevState,
      formData.get("tag") as string,
    ],
    []
  );
  return (
    <div  className="flex flex-col items-center gap-5 pt-96 w-full dark:text-white">
      <form className="flex gap-5 text-lg text-black" action={formAction}>
        <input type="text" name="tag" />
        <button className="bg-gray-500 rounded px-4 py-2" type="submit">Add tag</button>
      </form>
      <div>
        {tags.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
      </div>
      <div className="dark:bg-red-500 h-screen w-full"></div>
    </div>
  );
};

export default About;
