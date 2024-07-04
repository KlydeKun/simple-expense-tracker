import { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null;

  return <small className="text-red-600">{children}</small>;
};

export default ErrorMessage;
