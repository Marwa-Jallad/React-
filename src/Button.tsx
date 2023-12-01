import React from "react";
interface Props {
  children: string;
  onClick: () => void;
}
const Button = ({ children, onClick }: Props) => {
  return (
    <button type="button" className="btn btn-danger" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
