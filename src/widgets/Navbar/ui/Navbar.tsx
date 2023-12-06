import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, ApplinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import style from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <div className={style.links}>
        <AppLink theme={ApplinkTheme.PRIMARY} to="/" className={style.mainLink}>
          {t("Главная страница")}
        </AppLink>
        <AppLink theme={ApplinkTheme.PRIMARY} to="/about">
          {t("О сайте")}
        </AppLink>
      </div>
    </div>
  );
};
