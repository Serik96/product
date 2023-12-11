import { classNames } from "shared/lib/classNames/classNames";
import style from "./Loader.module.scss";
interface LoaderProps {
  className?: string;
}
export const Loader = ({ className }: LoaderProps) => {
  return <div className={classNames(style.loader, {}, [className])}></div>;
};
