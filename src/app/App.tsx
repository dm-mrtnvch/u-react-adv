import {AppRouter} from "app/providers/router";
import {useTheme} from "app/providers/ThemeProvider";
import {Link} from "react-router-dom";
import {Navbar} from "widgets/Navbar";
import classNames from "../shared/lib/classNames/classNames";
import './styles/index.scss'

const App = () => {

 const {theme} = useTheme()

  return (
    <div className={classNames('app',{}, [theme])}>
      <Navbar/>


      <AppRouter/>
    </div>
  )
}

export default App;
