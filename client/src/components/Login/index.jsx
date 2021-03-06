import { useState, useEffect } from 'react';
import Style from './Login.module.css';
import register from '../../img/register.jpg';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';


export default function Login(){

    let history = useHistory();

    useEffect( () => {
        window.scrollTo(0, 0);
    });
    
    let [form, setForm] = useState({
        mail: '',
        clave: ''
    });

    let [error, setError] = useState({
        mail: '',
        clave: ''
    });
    
    let [email, setEmail] = useState({
        valid: false,
        repeat: false
    });
    
    const verifyMail = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        

        // ================ PROCESO EMAIL, REPEAT EMAIL =====================
        if(name==='mail'){
            if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(value)){
                setError({...error, [name]: 'Error'});
                setEmail({...email, valid: false});                
                
            } else {
                setError({...error, [name]: ''});
                setEmail({...email, valid: true});                
                
            }
        }
        
        // =========================================================================
        // ================ PROCESO PASSWORD, REPEAT PASSWORD ======================
        if(name==='clave'){
            let typedPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            if(!typedPass.test(value)){
                setError({...error, [name]: 'Error'});
                setPass({...pass, valid: false});               
                
            } else {
                setError({...error, [name]: ''});
                setPass({...pass, valid: true});
                
            }
        }

        setForm({
            ...form,
            [name]: value,
        });

        if(!error.mail && !error.clave && form.mail && form.clave) {
            setAlldata({ready: true})
        } else {
            setAlldata({ready: false})
        }

    }

    let [pass, setPass] = useState({
        valid: false,
        repeat: false
    });

    let [admin, setAdmin] = useState({
        valid: false
    })

    const verifyAdmin = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        
        if(!/^[A-Za-z]+$/g.test(value)){
            setAdmin({...admin, valid: false});
            setError({...error, [name]: 'Error'});
            console.log('novalido');
        } else {
            setAdmin({...admin, valid: true});
            setError({...error, [name]: ''});
            console.log('VALIDO');
        }

        setForm({...form, [name]: value});
        
        if(!error.mail && !error.repeatMail && !error.clave && !error.repeatClave && !error.admin && !error.direccion && !error.fechaNac && !error.cel1 && !error.cel2 && form.mail && form.repeatMail && form.clave && form.repeatClave && form.admin && form.direccion && form.fechaNac && form.cel1) {
            setAlldata({ready: true})
        } else {
            setAlldata({ready: false})
        }
    }
    
    // ====== MATERIAL UI (Calendario Fecha de Nacimiento) =======
    const useStyles = makeStyles((theme) => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 200,
        },
    }));

    const classes = useStyles();
    // ===========================================================

    let [alldata, setAlldata] = useState({
        ready: false
    });

    const login = (e) => {
        e.preventDefault();
        history.push('/back_office');
            swal({
                title: 'Bienvenido a Evann!',
                text: 'Que disfrutes tu estad??a en la p??gina',
                icon: 'success',
                timer: 2000
              })

        
        // if(alldata.ready){
        //     history.push('/back_office');
        //     swal({
        //         title: 'Bienvenido a Evann!',
        //         text: 'Que disfrutes tu estad??a en la p??gina',
        //         icon: 'success',
        //         timer: 2000
        //       })
            
        // } else {
        //     swal({
        //         title: 'Datos incorrectos!',
        //         text: 'Por favor verifica que tus datos sean correctos',
        //         icon: 'error'
        //       })
        // }
    }
  

    const back = (e) => {
        e.preventDefault();
        history.push('/asociados');
        window.scrollTo(0, 0);
    }


    return(
        <Fade>
        <div>
            <div className={Style.containerRegister}>            
                <img src={register} className={Style.registerOne}/>
                <div className={Style.form}>
                </div>
                <div className={`${Style.formComplete}`}>
                    <h1 className={Style.title}>Iniciar sesi??n</h1>
                    <div className={Style.formRegister}>
                        <div className={Style.titleForm}>
                            <h4>Iniciar sesi??n</h4>
                            <h5>Tu usuario es tu mail</h5>
                        </div>

                        <div className={`${Style.data}`}>
                            <div className={`row`}>
                                <h4 className={`col-2`}>Mail</h4>
                                <input autoFocus className={`mail col-9`} type="text" name="mail" value={form.mail} onChange={(e)=> verifyMail(e)}/>
                            </div>
                            {error.mail && form.mail ?
                                <div className={`row`}>
                                    <h5 className={`${Style.alertTexts} col-6`}>Introduza un correo v??lido</h5>
                                </div>
                                : null 
                            }
                            <div className={`row`}>
                                <h4 className={`col-2`}>Clave</h4>
                                <input className={`col-9 pass`} type="password" name="clave" value={form.clave} onChange={(e)=> verifyMail(e)}/>
                            </div>
                            {/* {error.clave && form.clave ?
                                <div className={`row`}>
                                    <h5 className={`${Style.alertTexts} col-6`}>M??nimo 8 caracteres, una letra y un n??mero</h5>
                                </div>
                                : null 
                            }                             */}
                        </div>
                    </div>
                    <div className={Style.containerSave}>
                        <div className={`${Style.buttons} row w-75 `}>
                            <button className={`col-3 ${Style.back}`} onClick={(e)=>back(e)}><FaArrowAltCircleLeft className={Style.iconBack} />Volver</button>
                            <button className={`col-3 mx-auto ${Style.save}`} onClick={(e)=>login(e)}>Ingresar</button>
                        </div>
                    </div>
                </div>
                {/* <div className={`${Style.formComplete}`}>
                    <h1 className={`${Style.title}`}>M??evete con Evann</h1>
                    <div className={Style.contentDescription}>
                        <span className={Style.description}>S??mate al servicio de transporte de personas con el standard m??s alto del pa??s. Reg??stra tus datos e ingresa tus autom??viles y conductores para que seas parte de nuestro selectro grupo
                        </span>                        
                            <a href="" className={Style.linkRegister}><Link to="/asociados/register">REG??STRATE</Link></a>                        
                        <span className={Style.here}>Si ya te registraste, ingres?? <a href="#">Aqu??</a></span>
                    </div>
                    <div className={Style.info}>
                        <div className={Style.box}>
                            <h3>M??s ingresos</h3>
                            <p className={Style.textBox}>Gana mas conduciento con nuestra frecuencia de viajes y recibe los mejores beneficios por tu servicio.</p>    
                        </div>
                        <div className={Style.box}>
                            <h3>Nuestra App</h3>
                            <p className={Style.textBox}>Se tu propio jefe, tendr??s siempre informaci??n actualizada respecto de tus viajes, tarifas trayectos, etc.</p>    
                        </div>
                        <div className={Style.box}>
                            <h3>Pasajeros Vip</h3>
                            <p className={Style.textBox}>Conduce para los m??s exigentes y exclusivos pasajeros y empresas de nuestro pa??s.</p>
                        </div>
                    </div>            
                                   
                </div>                     */}
                
            </div>
        </div>
        </Fade>
    )
}