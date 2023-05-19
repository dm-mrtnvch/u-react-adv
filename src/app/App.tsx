import { AppRouter } from 'app/providers/router'
import { useTheme } from 'app/providers/ThemeProvider'
import { Suspense, useState } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { classNames } from '../shared/lib/classNames/classNames'
import './styles/index.scss'

const App = () => {
  const { theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Aspernatur dicta eius fuga harum id repellendus, sint voluptates. Dolor, eius, temporibus.
        </Modal>
        <button onClick={() => setIsOpen(true)}>toggle</button>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
