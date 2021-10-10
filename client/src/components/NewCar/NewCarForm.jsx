import Style from './NewCarForm.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { VscSave } from 'react-icons/vsc';
import { AiOutlineClear } from 'react-icons/ai';
import swal from 'sweetalert';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';



export default function NewCarForm(){
    let history = useHistory();

    let [form, setForm] = useState({
        patente: '',
        marca: '',
        modelo: '',
        tipoVeh: '',
        observaciones: ''
    });

    let [error, setError] = useState({
        patente: 'Error',
        marca: 'Error',
        modelo: 'Error',
        tipoVeh: 'Error',
        observaciones: 'Error'
    });

    const clear = (e) => {
        e.preventDefault();
        // let inputs = document.querySelectorAll('input');
        // inputs.forEach( (input) => {
        //     input.value = '';
        // });
        // inputs[0].focus();
        let inputs = document.querySelectorAll('input');

        setForm({
            patente: '',
            marca: '',
            modelo: '',
            tipoVeh: '',
            observaciones: ''
        })

        setError({
            patente: 'Error',
            marca: 'Error',
            modelo: 'Error',
            tipoVeh: 'Error',
            observaciones: 'Error'
        })

        inputs[0].focus();
    }

    const inputs = (e) => {
        e.preventDefault();
        let name = e.target.name;
        let value = e.target.value;

        setForm({
            ...form,
            [name]: value
        })

        if(value === '') {
            setError({
                ...error,
                [name]: 'Error'
            })
        } else {
            setError({
                ...error,
                [name]: ''
            })
        }
        console.log(form, 'form');   
    }

    const save = async (e) => {
        e.preventDefault();
        if(form.patente && form.marca && form.modelo && form.tipoVeh && !error.patente && !error.marca && !error.modelo && !error.tipoVeh){
            await swal({
                title: 'Operación exitosa!',
                text: 'El vehículo fue creado correctamente',
                icon: 'success',
                buttons: [''],
                timer: 2000
              })
            history.push('/back_office');
        } else {
            await swal({
                title: 'Advertencia!',
                text: 'Por favor complete los campos obligatorios antes de guardar',
                icon: 'warning'
              })
            document.querySelector('.inpPatente').focus();            
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

    return(
        <div>            
            <div className={`${Style.containerVehiculos} containerVehiculos`}>
                <div className={`${Style.fondo} row m-0`}>
                    <div className={`${Style.title} col-12 mt-4`}>
                        <h3>Nuevo Vehículo</h3>
                    </div>
                    <div className={`${Style.formCar} col-11 mt-4`}>
                        <section className={`row justify-content-center m-auto`}>
                            <div className={`col-11`}>
                                <div className={`row`}>
                                    <label className={`${Style.asterisk} col-10`}>(los campos con (*) son obligatorios)</label>
                                </div>
                            </div>
                            
                            <div className={`col-sm-12 col-md-12 col-lg-12 mt-2`}>
                                <div className={`row`}>
                                    <label className={`col-sm-3 col-md-2 col-lg-2 text-start`}>Marca (*)</label>
                                    <input className={`col-sm-9 col-md-4 col-lg-4 inpMarca`} type="text" onChange={(e)=>inputs(e)} value={form.marca} name="marca"/>
                                    <label className={`mt-2 mt-sm-2 mt-md-0 mt-lg-0 col-sm-3 col-md-2 col-lg-2 text-start text-md-start text-lg-start`}>Modelo (*)</label>
                                    <input className={`mt-sm-2 mt-md-0 mt-lg-0 col-sm-9 col-md-4 col-lg-4 inpModelo`} type="text" onChange={(e)=>inputs(e)} value={form.modelo} name="modelo"/>
                                </div>
                            </div>
                            <div className={`col-sm-12 col-md-12 col-lg-12 mt-2`}>
                                <div className={`row`}>
                                    <label className={`col-sm-4 col-md-3 col-lg-3`}>Tipo Vehículo (*)</label>
                                    <select className={`col-sm-8 col-md-3 col-lg-3 inpTipoVeh`} name="tipoVeh">
                                        <option value="1">Sedan</option>
                                        <option value="2">Van</option>
                                    </select>
                                    <label className={`${Style.cantPas} mt-2 mt-sm-2 mt-md-0 mt-lg-0 col-sm-4 col-md-3 col-lg-3 text-start text-md-start text-lg-start`}>Pasajeros (*)</label>
                                    <select className={`mt-sm-2 mt-md-0 mt-lg-0 col-sm-8 col-md-3 col-lg-3 inpTipoVeh`} name="tipoVeh">
                                        <option value="1">1 pasajero</option>
                                        <option value="2">2 pasajeros</option>
                                        <option value="2">3 pasajeros</option>
                                        <option value="2">4 pasajeros</option>
                                        <option value="2">5 pasajeros</option>
                                    </select>
                                    {/* <input className={`col-lg-4 inpObs`} type="text" onChange={(e)=>inputs(e)} value={form.observaciones} name="observaciones"/> */}
                                </div>
                            </div>
                        
                            <div className={`col-sm-12 col-md-12 col-lg-12 mt-2`}>
                                <div className={`row`}>
                                    <label className={`col-sm-3 col-md-2 col-lg-2 text-start`}>Equipaje (*)</label>
                                    <input className={`col-sm-9 col-md-4 col-lg-4 inpObs`} type="text" onChange={(e)=>inputs(e)} value={form.observaciones} name="observaciones"/>
                                    <label className={`mt-2 mt-sm-2 mt-md-0 mt-lg-0 col-sm-3 col-md-2 col-lg-2 text-start text-md-start text-lg-start`}>Año (*)</label>
                                    <input className={`mt-sm-2 mt-md-0 mt-lg-0 col-sm-9 col-md-4 col-lg-4 inpObs`} type="text" onChange={(e)=>inputs(e)} value={form.observaciones} name="observaciones"/>
                                </div>
                            </div>
                            <div className={`col-sm-12 col-md-12 col-lg-12 mt-2`}>
                                <div className={`row`}>
                                    <label className={`${Style.kilometrajeLabel} col-sm-4 col-md-2 col-lg-2 text-start`}>Kilometraje (*)</label>
                                    <input className={`col-sm-8 col-md-2 col-lg-3 inpObs`} type="text" onChange={(e)=>inputs(e)} value={form.observaciones} name="observaciones"/>
                                    <label className={`col-sm-6 col-md-4 col-lg-3 text-start mt-2 mt-sm-2 mt-md-0 mt-lg-0`}>Última revisión técnica (*)</label>
                                    <form className={`${classes.container} ${Style.inputFecha} mt-sm-2 mt-md-0 mt-lg-0 col-12 col-sm-12 col-md-3 col-lg-3`} noValidate>
                                    <TextField
                                        id="date"
                                        label=""
                                        type="date"
                                        name="fechaNac"
                                        onChange={(e)=>inputs(e)}
                                        value={form.observaciones} name="observaciones"
                                        // defaultValue="2017-05-24"
                                        className={`${classes.textField} text-center`}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                                    </form>
                                </div>
                            </div>
                            <div className={`col-sm-12 col-md-12 col-lg-12 mt-2`}>
                                <div className={`row`}>
                                    <label className={`${Style.lineaNegocio} col-12 col-sm-5 col-md-4 col-lg-4 text-start`}>Líneas de negocio (*)</label>
                                    <div className={`${Style.radioButtons} row d-none d-sm-inline-flex d-md-inline-flex d-lg-inline-flex col-12 col-sm-7 col-md-8 col-lg-8`}>
                                        <div className={`${Style.lines} col-4 col-sm-4 col-md-4 col-lg-4`}>
                                            <input className={`text-center`} type="radio" name="options" value="Empresa" />
                                            <label className={`${Style.labelRadio}`}>Empresa</label>
                                        </div>
                                        <div className={`${Style.lines} col-4 col-sm-4 col-md-4 col-lg-4`}>
                                            <input className={`text-center`} type="radio" name="options" value="Familiar" />
                                            <label className={`${Style.labelRadio}`}>Familiar</label>
                                        </div>
                                        <div className={`${Style.lines} col-4 col-sm-4 col-md-4 col-lg-4`}>
                                            <input className={`text-center`} type="radio" name="options" value="Eventos" />
                                            <label className={`${Style.labelRadio}`}>Eventos</label>
                                        </div>
                                    </div>
                                    <div className={`${Style.radioButtons} row d-inline-block d-sm-none d-md-none d-lg-none col-12 col-sm-7 col-md-8 col-lg-8`}>
                                        <div className={`${Style.lines} col-12`}>
                                            <input className={`${Style.inputRadio} text-center`} type="radio" name="options" value="Empresa" />
                                            <label className={`${Style.labelRadio}`}>Empresa</label>
                                            <input className={`${Style.inputRadio} text-center`} type="radio" name="options" value="Familiar" />
                                            <label className={`${Style.labelRadio}`}>Familiar</label>
                                            <input className={`${Style.inputRadio} text-center`} type="radio" name="options" value="Eventos" />
                                            <label className={`${Style.labelRadio}`}>Eventos</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${Style.inputsFile} col -12 col-sm-12 col-md-12 col-lg-12 mt-2`}>
                                <div className={`row`}>
                                    <label className={`${Style.titleDoc} col-md-2 col-lg-2 text-start mt-3`}>Documentos (*)</label>
                                    <div className={`${Style.docs} d-none d-md-inline-flex d-lg-inline-flex col-md-10 col-lg-10`}>
                                        <div className={`${Style.docsDivs} row`}>
                                            <label className={`${Style.labelDocs} mt-3`}>Permiso de Circulación (*)</label>
                                            <label className={`${Style.labelDocs} mt-3`}>Seguro Responsabilidad Civil (*)</label>
                                            <label className={`${Style.labelDocs} mt-3`}>Permiso de Circulación (*)</label>
                                            <label className={`${Style.labelDocs} mt-3`}>Decreto 80 (*)</label>                                            
                                        </div>
                                        <div className={`${Style.docsDivs} row`}>
                                            <input type="file" className={`${Style.upButtons}`} />
                                            <input type="file" className={`${Style.upButtons}`} />
                                            <input type="file" className={`${Style.upButtons}`} />
                                            <input type="file" className={`${Style.upButtons}`} />
                                        </div>
                                    </div>
                                    <div className={`${Style.docs} d-inline-flex d-md-none d-lg-none col-md-10 col-lg-10`}>
                                        <div className={`${Style.docsDivs} row`}>
                                            <label className={`${Style.labelDocs} mt-3`}>Permiso de Circulación (*)</label>
                                            <input type="file" className={`${Style.upButtons}`} />
                                            <label className={`${Style.labelDocs} mt-3`}>Seguro Responsabilidad Civil (*)</label>
                                            <input type="file" className={`${Style.upButtons}`} />
                                            <label className={`${Style.labelDocs} mt-3`}>Permiso de Circulación (*)</label>
                                            <input type="file" className={`${Style.upButtons}`} />
                                            <label className={`${Style.labelDocs} mt-3`}>Decreto 80 (*)</label>
                                            <input type="file" className={`${Style.upButtons}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${Style.inputsFile} col-12 col-sm-12 col-md-12 col-lg-12 mt-2`}>
                                <div className={`row`}>
                                    <label className={`${Style.titleVeh} col-12 col-md-3 col-lg-3 text-start mt-2`}>Fotos Vehículo (*)</label>
                                    <div className={`${Style.docs} d-none d-md-inline-flex d-lg-inline-flex col-8`}>
                                        <div className={`${Style.docsDivs}`}>
                                            <label className={`${Style.labelDocs} mt-2`}>Principal (*)</label>
                                            <label className={`${Style.labelDocs} mt-3`}>Foto1 (*)</label>
                                            <label className={`${Style.labelDocs} mt-3`}>Foto2 (*)</label>                                            
                                        </div>
                                        <div className={`${Style.docsDivs}`}>
                                            <input type="file" className={`${Style.upButtons}`} />
                                            <input type="file" className={`${Style.upButtons}`} />
                                            <input type="file" className={`${Style.upButtons}`} />
                                        </div>                                        
                                    </div>
                                    <div className={`${Style.docs} d-inline-flex d-md-none d-lg-none col-8`}>
                                        <div className={`${Style.docsDivs}`}>
                                            <label className={`${Style.labelDocs} mt-2`}>Principal (*)</label>
                                            <input type="file" className={`${Style.upButtons}`} />
                                            <label className={`${Style.labelDocs} mt-3`}>Foto1 (*)</label>
                                            <input type="file" className={`${Style.upButtons}`} />
                                            <label className={`${Style.labelDocs} mt-3`}>Foto2 (*)</label>
                                            <input type="file" className={`${Style.upButtons}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </section>
                    </div>
                    <div className={`col-12 mt-4`}>
                        <div className={`${Style.buttons} row justify-content-center`}>
                            <Link to='/back_office/vehiculos' className={`${Style.first} col-3`}><FaArrowAltCircleLeft className={Style.iconBack} />Volver</Link>
                            <a className={`${Style.second} col-3`} href="" onClick={ (e) => save(e) }><VscSave className={`${Style.iconSave}`} />Guardar</a>
                            <a className={`${Style.third} col-3`} href="" onClick={(e)=>clear(e)}><AiOutlineClear className={`${Style.iconClear}`}/>Limpiar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


