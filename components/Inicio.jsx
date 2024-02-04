import Botonw from "@/components/BotonWhatsapp"
import Botonm from "@/components/BotonMessenger"

export default function Inicio(params) {
    return (
        <div className="inicio">
            <h1>Bienestar Emocional</h1>
            <h2>Si eres estudiante BUAP de educacion media superior y requieres el servicio de atencion psicoemocional, puedes comunicarte a traves de los siguientes servicios.</h2>
            <div className="flex flex-row gap-5">
                <Botonw />
                <Botonm />
            </div>
        </div>
    )
}