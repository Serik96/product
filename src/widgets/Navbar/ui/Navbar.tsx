import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, ApplinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import style from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={style.links}>
        <AppLink theme={ApplinkTheme.PRIMARY} to="/" className={style.mainLink}>
          Main Page
        </AppLink>
        <AppLink theme={ApplinkTheme.PRIMARY} to="/about">
          About Page
        </AppLink>
      </div>
    </div>
  );
};
