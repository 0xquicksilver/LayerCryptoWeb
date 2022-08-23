import React from "react";

type ButtonProps = {};
type customButtonProps = ButtonProps & React.HTMLProps<HTMLButtonElement>;
const Button = (props: customButtonProps) => {
  return (
    <button
      type="button"
      className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      onClick={props.onClick}
    >
      Purple to Blue
    </button>
  );
};

export default Button;
