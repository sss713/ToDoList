import { FC } from "react";
import styles from "./style.module.sass";

interface TelegrammButtonProps {
  style?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: any;
}

const TelegrammButton: FC<TelegrammButtonProps> = ({
  style,
  disabled = false,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={[styles.button, style].join(" ")}
      onClick={onClick}
    >
      <img
        src="https://s657sas.storage.yandex.net/rdisk/3785f7e10c7a2604c500eaf4b91470e7228b365910c4a631046b7b1f8bf6f09d/653701e1/X7Nlsb8mgE0b2aB4a1oTmE7oDIsUBoQz9xdB_pe3-_C7V9IZ8a7y6QTqwJJmKiomh4vqBENxlSs_GwEhvuR_Bg==?uid=747859828&filename=telegram%20%281%29.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=747859828&fsize=1521&hid=0af08c68c9578c30474f2fbcd12b77e2&media_type=image&tknv=v2&etag=cf03599050070fee9959037198652f96&rtoken=EpMYRCGdZhOB&force_default=yes&ycrid=na-a285ca063080c6666b582d4068d143f2-downloader7h&ts=6086a986b7a40&s=8bf0a7bd4e614cc078d9fc381da1e133941aa876ae8b1733d25314a30644a651&pb=U2FsdGVkX1_ON1f7kmD8jm2PgFVIRgB06fF3_2RmG5F9rcISehs8l6sW-i4Q6SlUIKzGvYg5QfWxIV9GDYiWfHI8zARGyIldOSETfSwnhBE"
        alt="tg"
        className={styles.img}
      />
    </button>
  );
};

export default TelegrammButton;
