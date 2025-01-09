interface ButtonProps {
  title: string;
}

const Button = ({ title}: ButtonProps) => {
 
  return (
    <button className={`w-full bg-colorHighlightsLight dark:text-colorTextLight dark:bg-colorHighlightsDark font-bold  text-colorTextDark py-3 rounded-full active:scale-95 w hover:bg-colorHighlightsDark hover:text-colorTextLight hover:dark:bg-colorHighlightsLight hover:shadow-xl hover:dark:text-colorTextDark transition-colors duration-500 ease-in-out`}>
      {title}
    </button>
  );
};

export default Button;
