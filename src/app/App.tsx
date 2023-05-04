import {AppRouter} from "app/providers/router";
import {useTheme} from "app/providers/ThemeProvider";
import {Suspense} from "react";
import {useTranslation} from "react-i18next";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import classNames from "../shared/lib/classNames/classNames";
import './styles/index.scss'

const Component = () => {
  const {t, i18n} = useTranslation()

  const toggle = () => {
    return i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <div>
      <button onClick={toggle}>change language</button>
      {t('test')}
    </div>
  )
}

const App = () => {

  const {theme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Component/>
        <Navbar/>
        <div className="content-page">
          <Sidebar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  )
}

export default App;
