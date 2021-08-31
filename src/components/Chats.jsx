import React from 'react'
import Styles from "./Chats.module.css"
import logo from "../Imagenes/logo.png"

function Chats(props) {

    const clickChat = (i) => {
        props.function(i)
    }

    return (
        <div className={Styles.mainContainer}>
                <div className={Styles.reactChat}>
                    <div className={Styles.logoContainer}>
                        <img className={Styles.logo} src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"></img>
                    </div>
                    <div>
                        <p className={Styles.titleReactChat}>React Chat</p>
                    </div>
                </div>
                    { props.chats.map((el, i) => (
                    <div onClick={() => clickChat(i)} className={Styles.chatContainer}>
                        <div className={Styles.imagenContainer}>
                            <img className={Styles.imagen} src={el.imagen}></img>
                        </div>
                        <div className={Styles.textoMensajeContainer}>
                            <p className={Styles.nombre}>{el.nombre}</p>
                            <p className={Styles.mensajeReciente}>{el.mensaje[el.mensaje.length -1].text}</p>
                        </div>
                    </div>
                  ))
                }
                <div>
                    <p className={Styles.createNew}> + Create New </p>
                </div>
        </div>
    )
}

export default Chats
