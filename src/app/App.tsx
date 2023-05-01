import {AppRouter} from "app/providers/router";
import {useTheme} from "app/providers/ThemeProvider";
import {Link} from "react-router-dom";
import {Navbar} from "widgets/Navbar";
import classNames from "../shared/lib/classNames/classNames";
import './styles/index.scss'

const App = () => {

 const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app',{}, [theme])}>
      <Navbar/>

      <button onClick={toggleTheme}>change theme</button>

      <AppRouter/>
    </div>
  )
}

export default App;
