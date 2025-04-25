import Correo from '../../src/assets/correo.png'
import Message from '../../src/assets/message.png'
import Start from '../../src/assets/start.png'
import Lupa from '../../src/assets/lupa.png'
import Setting from '../../src/assets/setting.png'
import Home from '../../src/assets/home.png'
import Graficos from '../../src/assets/graficos.png'
import styles from '../../src/styles/App_style.module.css'
import { Link } from 'wouter'
import Menu_icon from '../assets/icono_menu.png'
import { useState } from 'react'
import Salir_icon from '../assets/salir.png'
export default function Menu(){
    
  const [show,setshow] = useState<boolean>(false)
   
    return(
        <div className={styles.div_menu}>
      <div className={styles.div_menu_escritorio}>
        <h1>Your title</h1>
      <div className={styles.div_menu_escritorio_h}>
        <form>
          <img src={Lupa} alt='Lupa_icon'/>
          <input placeholder='Search' color='white' type="Search" />
        </form>
        <Link to='' className={styles.div_menu_escritorio_h1}><img src={Home} alt='Home_icon'/><span >Dashboard</span></Link>
        <Link to='' className={styles.div_menu_escritorio_h1}><img src={Graficos} alt='Chart_icon'/><span >Chart</span></Link>
        <Link to='' className={styles.div_menu_escritorio_h1}><img src={Message} alt='Chat_icon'/><span >Chat</span></Link>
        <Link to='' className={styles.div_menu_escritorio_h1}><img src={Correo} alt='Message_icon'/><span >Message</span></Link>
        <Link to='' className={styles.div_menu_escritorio_h1}><img src={Start} alt='App_icon'/><span>App</span></Link>
        <Link to='' className={styles.div_menu_escritorio_h1}><img src={Setting} alt='Setting_icon'/><span >Setting</span></Link>
      </div>
      </div>
      <div className={styles.menu_movile}>
       <button onClick={()=>setshow(true)}><img src={Menu_icon} alt='Icono_Menu'/></button>
    
  <button style={{position: 'fixed',transform: show ? 'scale(1)' : 'scale(0)',
      transition: 'transform 600ms ease-in-out',
      top: '5%',
      right: '3%',
      zIndex: 9999
    }}
    onClick={() => setshow(false)}
  >
    <img src={Salir_icon} alt='Icono de Salida' />
  </button>


      <div  className={show  ? styles.div_movile_show : styles.div_mobile_hidden} style={{transition:'transform 500ms ease-in-out',width:'100vw',height:'100vh',background:'rgb(15, 14, 43)',position:'fixed',top:0,left:'-100vw',zIndex:999}}>
        <div className={styles.styles_mobiles_a}>
      <form>
          <img src={Lupa} alt='Lupa_icon'/>
          <input placeholder='Search' color='white' type="Search" />
        </form>
        <Link to='' className={styles.div_menu_escritorio_h1}><img src={Home} alt='Home_icon'/><span >Dashboard</span></Link>
        <Link to='' className={styles.div_menu_escritorio_h1}><img src={Graficos} alt='Chart_icon'/><span >Chart</span></Link>
        <Link to='' className={styles.div_menu_escritorio_h1}><img src={Message} alt='Chat_icon'/><span >Chat</span></Link>
        <Link to='' className={styles.div_menu_escritorio_h1}><img src={Correo} alt='Message_icon'/><span >Message</span></Link>
        <Link to='' className={styles.div_menu_escritorio_h1}><img src={Start} alt='App_icon'/><span>App</span></Link>
        <Link to='' className={styles.div_menu_escritorio_h1}><img src={Setting} alt='Setting_icon'/><span >Setting</span></Link>
      </div>
      </div>
      </div>
      </div>
    )
}