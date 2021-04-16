import {useState} from 'react'
import Styles from "./ChatInd.module.css"
import Imagen from "../Imagenes/avatar-4.png"

function ChatInd(props) {
const [mensaje, setmensaje] = useState('')

const handleChange = (e) => {
    setmensaje(e.target.value)
}

const sendMessage = () => {
    props.function(mensaje)
    setmensaje('')
}

    return (
        <div className={Styles.mainContainer}> 
        {
            !props.chats ? 
            <div>
                <div className={Styles.head}>
                    <div className={Styles.headerContainer}>
                    </div>
                </div>
                <div className={Styles.body}>
                    <p>Seleccione un chat</p>
                </div>
                <div className={Styles.inputContainer}>
                    <input 
                        className={Styles.inputMessage}
                        name="mensaje" 
                        value={mensaje} 
                        onChange={handleChange}
                        placeholder="Type your message...">
                    </input>
                    <button className={Styles.buttonSend} onClick={sendMessage}>SEND</button>
                </div>
            </div>
            :
            <div>
                <div className={Styles.head}>
                    <div className={Styles.headerContainer}>
                        <div className={Styles.imgContainer}>
                            <img className={Styles.imgHeader} src={props.chats.imagen}></img>
                        </div>
                        <div className={Styles.textContainerChat}>
                            <p className={Styles.titleChat}>{props.chats.nombre}</p>
                            <p className={Styles.subtitle}>{props.chats.puesto}</p>
                        </div>
                    </div>                       
                </div>
                <div className={Styles.body}>
                    { props.chats.mensaje.map((el) => (
                            <div className={el.from === 'me' ? Styles.messageContainerMe : Styles.messageContainerOther}>
                                <div className={el.from === 'me' ? Styles.imgContainerMe : Styles.imgContainerOther}>
                                    <img className={Styles.imgMe} 
                                         src={el.from === 'me' ? Imagen : props.chats.imagen}></img>
                                </div>
                                <div className={el.from === 'me' ? Styles.textContainerMe : Styles.textContainer}>
                                    <p className={Styles.textMessage}>{el.text}</p>
                                </div>
                            </div>                        
                        ))
                    }
                </div>
                <form 
                    onSubmit={(e) => {
                        e.preventDefault()
                        sendMessage(e)
                    }} 
                    className={Styles.inputContainer}
                >
                    <input 
                        className={Styles.inputMessage}
                        name="mensaje" 
                        value={mensaje} 
                        onChange={handleChange}
                        autoComplete='off'
                        placeholder="Type your message...">
                    </input>
                    <button type='submit' className={Styles.buttonSend}>SEND</button>
                </form>
            </div>           
        }
        </div>
    )
}

export default ChatInd
