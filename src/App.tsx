import { Route, Router } from 'wouter'
import styles from '../src/styles/App_style.module.css'

import Dashboard from './Components/Dashboard'
import Menu from './Components/Menu'
import { Marcador_Provider } from './Context/Marcador'
function App() {
  
  return (
    <>
     <main className={styles.main_app}>
      <Marcador_Provider>
     <Menu/>
      <Router>
        <Route path={'/'} component={Dashboard} />
      </Router>
      </Marcador_Provider>    
 </main>
    </>
  )
}

export default App
