interface ButtonProps {
  title: string;
  px?: string;
}

const Button = ({ title,px='8' }: ButtonProps) => {
  const pxClass = `px-${px}`
  return (
    <button className={`bg-colorHighlightsLight dark:text-colorTextLight dark:bg-colorHighlightsDark font-bold  text-colorTextDark ${pxClass} px-8 py-2 rounded-full active:scale-95 hover:bg-colorHighlightsDark hover:text-colorTextLight hover:dark:bg-colorHighlightsLight hover:dark:text-colorTextDark`}>
      {title}
    </button>
  );
};

export default Button;
