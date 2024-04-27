import React, { useState, ChangeEventHandler } from "react";

interface InputFieldProps {
  label: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  type?: string; // Added type prop
  height?: string; // Added height prop
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  onChange,
  type = "text", // Default value for type prop
  height = "auto", // Default value for height prop
}) => {
  const [value, setValue] = useState<string>("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-500 font-semi-bold mb-1">{label}</label>
      <input
        type={type} // Set input type from prop
        className={`w-full px-3 py-2 border border-black hover:border-[#FAB005] bg-transparent rounded-md text-gray-700 focus:outline-none focus:border-[#FAB005] h-[50px]`} // Dynamic height class
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputField;
