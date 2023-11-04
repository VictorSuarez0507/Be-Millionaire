import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function wrong () {

    const redireccion = useNavigate();
    
    const wrongReply = () => {
        
        swal({
            title: "Respuesta incorrecta",
            text: "¡ Intentalo nuevamente ! ",
            icon: "error",
            timer: "2000"
        })
        setTimeout(() => {
            redireccion("/");
            onload();
        }, 2000);
        localStorage.clear();
    }

    const finishGame = () => {
        setTimeout(() => {
            redireccion("/");
            onload();
        }, 2000); 
        localStorage.clear();
    }


    return {
        wrongReply, 
        finishGame
    }
}