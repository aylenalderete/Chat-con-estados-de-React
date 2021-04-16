import {useState} from 'react'
import Manuel from "../Imagenes/Manuel.png"
import Luciana from "../Imagenes/Luciana.png"
import Micaela from "../Imagenes/Micaela.png"
import Chats from './Chats'
import ChatInd from './ChatInd'
import Styles from "./Chat.module.css"

function Chat() {
    const [activo, setactivo] = useState(-1)
    const [chats, setchats] = useState([
    {
        nombre: 'Micaela Alvarez',
        puesto: 'Marketing manager',
        imagen: Micaela,
        mensaje: [
            {from: 'other', text: 'Hola, como estas?'},
        ],
    },
    {
        nombre: 'Luciana Gutierrez',
        puesto: 'Marketing',
        imagen: Luciana,
        mensaje: [
            {from: 'other', text: 'Holaa'},
        ],
    },
    {
        nombre: 'Manuel Hoffman',
        puesto: 'Designer',
        imagen: Manuel,
        mensaje: [
            {from: 'other', text: 'Hola!!!'}
        ],
    }])

    const mensajeNuevo = (mensaje) => {
        let mensajeNuevo = {from: 'me', text: mensaje}
        let chatsCopia = [...chats]
        let chatActivo = {...chatsCopia[activo]}
        chatActivo.mensaje.push(mensajeNuevo)
        chatsCopia.splice(activo, 1)
        chatsCopia.unshift(chatActivo)
        setchats(chatsCopia)
        setactivo(0)
    }

    return (
        <div className={Styles.mainContainer}>
            <Chats chats={chats} function={setactivo}/>
            <ChatInd chats={chats[activo]} function={mensajeNuevo}/>
        </div>
    )
}

export default Chat
