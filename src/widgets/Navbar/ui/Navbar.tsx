import classNames from "shared/lib/classNames/classNames";
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import cls from "./Navbar.module.scss"

interface NavbarProps {
  className?: string
}

const Navbar = () => {
  return (
    <div className={classNames(cls.Navbar, {}, [])}>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={'/'}
          className={cls.mainLink}
        >
          Main
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={'/about'}
        >
          ABOUT
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
