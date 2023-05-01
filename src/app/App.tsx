import {AppRouter} from "app/providers/router";
import {useTheme} from "app/providers/ThemeProvider";
import {Link} from "react-router-dom";
import classNames from "../shared/lib/classNames/classNames";
import './styles/index.scss'

const App = () => {

 const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app',{}, [theme])}>
      <button onClick={toggleTheme}>change theme</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>ABOUT</Link>
      <AppRouter/>
    </div>
  )
}

export default App
