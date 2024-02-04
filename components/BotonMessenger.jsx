import { FaFacebookMessenger } from "react-icons/fa";

export default function Boton(params) {
    return (
        <button className="text-lg font-semibold text-white border-2 border-[#00B2FF] bg-[#00B2FF] rounded-lg h-14 w-20 flex flex-row items-center gap-2 py-2 px-2 justify-center">
            <div className="text-4xl">
                <FaFacebookMessenger  />
            </div>
        </button>
    )
}