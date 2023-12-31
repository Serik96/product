import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import style from "./LangSwitcher.module.scss";
import { Button, ThemeButton } from "../../Button/Button";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const toogle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(style.LangSwitcher, {}, [className])}
      onClick={toogle}
    >
      {t("Язык")}
    </Button>
  );
};
