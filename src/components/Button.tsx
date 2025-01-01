interface ButtonProps {
  title: string;
  width?: string;
}

const Button = ({ title,width='w-[180px]' }: ButtonProps) => {
 
  return (
    <button className={`bg-colorHighlightsLight dark:text-colorTextLight dark:bg-colorHighlightsDark font-bold  text-colorTextDark py-3 ${width} rounded-full active:scale-95 w hover:bg-colorHighlightsDark hover:text-colorTextLight hover:dark:bg-colorHighlightsLight hover:shadow-xl hover:dark:text-colorTextDark transition-colors duration-500 ease-in-out`}>
      {title}
    </button>
  );
};

export default Button;
