import {ReactComponent as Acerto} from './../../assets/img/checkmark-circle.svg'
import {ReactComponent as Erro} from './../../assets/img/close-circle.svg'
import {ReactComponent as Duvida} from './../../assets/img/help-circle.svg'

import '../../assets/css/style.css'
import setinha from '../../assets/img/setinha.png'

export default function Icon({status}) {

    if(status === 'not_answer') {
        return <ion-icon name="play-outline"></ion-icon>
    }
    if(status === 'setinha') {
        return <img src={setinha} alt="virar" className='icone'/>
    }
    if(status === 'correct') {
        return <Acerto className='icone' fill="#2FBE34" />
    }
    if(status === 'almost') {
        return <Duvida className='icone' fill="#FF922E" />
    }
    if(status === 'error') {
        return <Erro className='icone' fill="#FF3030" />
    }

}