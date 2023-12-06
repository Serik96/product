import { classNames } from "shared/lib/classNames/classNames";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher";

import style from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(style.Sidebar, { [style.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={style.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={style.lang} />
      </div>
    </div>
  );
};
