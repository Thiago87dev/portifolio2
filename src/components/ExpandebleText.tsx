import { useState } from "react";
import { useTranslations } from "next-intl";

interface ExpandebleTextProps {
  text: string;
  maxWords?: number;
}

const ExpandebleText = ({ text, maxWords = 20 }: ExpandebleTextProps) => {
  const t = useTranslations("Home");
  const [isExpanded, setIsExpanded] = useState(false);

  const words = text.split(' ')
  const isLongText = words.length > maxWords
  const displayedText = isExpanded ? text : words.slice(0, maxWords).join(' ') + (isLongText ? '...': '')

  const toggleText = () => setIsExpanded(!isExpanded);
  return (
    <div>
      {displayedText}
      {isLongText && (
        <button
          onClick={toggleText}
          className="ml-2 text-blue-500 hover:underline"
        >
            {isExpanded ? t('less'): t('more')}
        </button>
      )}
    </div>
  );
};

export default ExpandebleText;
