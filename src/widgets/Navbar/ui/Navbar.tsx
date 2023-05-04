import {useTranslation} from "react-i18next";
import classNames from "shared/lib/classNames/classNames";
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import cls from "./Navbar.module.scss"

interface NavbarProps {
  className?: string
}

const Navbar = () => {
  const {t} = useTranslation()

  return (
    <div className={classNames(cls.Navbar, {}, [])}>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={'/'}
          className={cls.mainLink}
        >
          {t('main')}
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={'/about'}
        >
          {t('about')}
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
