import {destroyModal} from "../../utils/modal.jsx";

export default function Header({title}){
    return(
        <header className={'h-14 flex items-center justify-between px-4 border-b border-gray-300 text-sm font-medium'}>
            <h3>{title}</h3>
            <button type="button" onClick={destroyModal} className={'w-9 h-9 rounded hover:bg-gray-100 flex items-center justify-center'}>X</button>
        </header>
    )
}