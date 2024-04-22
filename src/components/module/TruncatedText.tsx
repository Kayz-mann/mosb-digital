import { useEffect, useState } from "react";

interface TruncatedProps {
  text: string;
  maxLength: number;
  className: string;
}
export const TruncatedText = ({
  text,
  maxLength,
  className,
}: TruncatedProps) => {
  const [truncatedText, setTruncatedText] = useState(text);

  useEffect(() => {
    if (text.length > maxLength) {
      setTruncatedText(text.slice(0, maxLength) + "...");
    }
  }, [text, maxLength]);

  return <div className={className}>{truncatedText}</div>;
};
