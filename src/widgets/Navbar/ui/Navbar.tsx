import { classNames } from "shared/lib/classNames/classNames";
import style from "./Navbar.module.scss";
import { AppLink, ApplinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(style.navbar, {}, [className])}>
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
