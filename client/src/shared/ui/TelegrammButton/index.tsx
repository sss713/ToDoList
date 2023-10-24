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
        src="https://1.downloader.disk.yandex.ru/preview/f2ee01dadd45870146bae58a652cced8aefd42c21e0770f70cfbfb7b6c08dbb3/inf/355rSZcoPK5e-1dJ_LCgAhWcXA4FpioFm8owXz7Uj66eNlCrjz3tBKC1gtj47GgHhQJ-DfHHjI71Z90lHgv4og%3D%3D?uid=747859828&filename=telegram%20%281%29.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=747859828&tknv=v2&size=1855x940"
        alt="tg"
        className={styles.img}
      />
    </button>
  );
};

export default TelegrammButton;
