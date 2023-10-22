import Button from "shared/ui/Button";
import Text from "shared/ui/Text";
import styles from "./style.module.sass";
import LinkTo from "shared/ui/LinkTo";

const About = () => {
  return (
    <div className={styles.about}>
      <Text type="h1">ToDo Team</Text>
      <Text type="h3">
        Удобный и доступный инструмент
        <br />
        для It-специалистов и студентов
      </Text>
      <Text type="text" style={styles.text}>
        ✓ управление личными задачами и проектами
        <br />✓ командная разработка
        <br />✓ интеграция с популярными инструментами разработки
      </Text>
      <Button size="_large">
        <LinkTo src="/login">Попробовать бесплатно</LinkTo>
      </Button>
    </div>
  );
};

export default About;
