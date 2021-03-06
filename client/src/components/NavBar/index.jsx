import Style from './NavBar.module.css';
import evann from '../../img/evannImage.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


export default function NavBar() {

    const imgVariants = {
        hidden: {
            x: '-100vh',
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.7,
                type: 'spring',
                stiffness: 500
            }
        }
        
    }

    let url = window.location.href.includes('asociados');
    let url2 = window.location.href.includes('back_office');

    return(
        <div>
            { !url2 ?
            <nav className={`${Style.navBar} navbar navbar-expand-lg navbar-light bg-light`}>
                <div className="container-fluid">
                    <Link to="/" className={Style.linkImg}>
                        <motion.img src={evann} className={`${Style.imageEvann}`} 
                            variants={imgVariants}
                            initial='hidden'
                            animate='visible'
                        />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`${Style.options} collapse navbar-collapse`} id="navbarSupportedContent">
                        {!url ?
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">                                                        
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Nosotros</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Servicios</a>
                                </li>                            
                                <li className="nav-item">
                                    <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Contacto</a>
                                </li>
                                <Link to="/asociados" className={`${Style.link} nav-link`}>
                                    <li className="nav-item">
                                        Asociados
                                    </li>
                                </Link>                            
                            </ul>
                            :
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                                <Link to="/asociados/iniciar_sesion" className={`${Style.linkLogin} nav-link`}>
                                    <li className="nav-item">
                                        Iniciar Sesi??n
                                    </li>
                                </Link>                            
                            </ul>                        
                        }
                    </div>
                    
                    </div>
                    
            </nav>
            :null
            }
        </div>
    )
}