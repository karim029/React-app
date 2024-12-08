import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onclose: () => void;
}

const Alert = ({ children, onclose }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible" onClick={onclose}>
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
