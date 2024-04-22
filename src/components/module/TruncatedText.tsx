import { useEffect, useState } from "react";

interface TruncatedProps {
  text: string;
  maxLength: number;
  className: string;
  style?: any;
}
export const TruncatedText = ({
  text,
  maxLength,
  className,
  style,
}: TruncatedProps) => {
  const [truncatedText, setTruncatedText] = useState(text);

  useEffect(() => {
    if (text.length > maxLength) {
      setTruncatedText(text.slice(0, maxLength) + "...");
    }
  }, [text, maxLength]);

  return (
    <div style={style} className={className}>
      {truncatedText}
    </div>
  );
};
