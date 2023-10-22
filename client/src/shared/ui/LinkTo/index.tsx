import { FC } from "react";
import styles from "./style.module.sass";
import { Link } from "react-router-dom";

interface LinkToProps {
  children?: React.ReactNode;
  style?: string;
  iswork?: boolean;
  src: string;
}

const LinkTo: FC<LinkToProps> = ({ children, style, src, iswork = true }) => {
  return (
    <>
      {iswork ? (
        <Link className={[style, styles.link].join(" ")} to={src}>
          {children}
        </Link>
      ) : (
        children
      )}
    </>
  );
};

export default LinkTo;
