import { FC } from "react";
import { Link, useMatch } from "react-router-dom";

type Props = {
  to: string;
  children: string | any;
};

export const CustomLink: FC<Props> = ({ children, to }) => {
  const match = useMatch(to);
  return (
    <Link
      to={to}
      style={{
        color: match ? "#fff" : "#999999",
        fontSize: "18px",
        textDecoration: "none",
        marginRight: "10px",
      }}
    >
      {children}
    </Link>
  );
};

export const TitleLink: FC<Props> = ({ children, to }) => {
  return (
    <Link
      to={to}
      style={{
        color: "#fff",
        textDecoration: "none",
      }}
    >
      {children}
    </Link>
  );
};
