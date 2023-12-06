import {createModal} from "../utils/modal.jsx";
import Header from "./components/Header.jsx";
import {useState} from "react";

export default function LoginModal({data, close}){
    const [search, setSearch] = useState('')
    return(
        <div className={'w-[500px]'}>
            <Header title='Giriş yap'/>
            <input type="text"  value={search} onChange={(e) => setSearch(e.target.value) }/>
            <p>Aranan kelime: {search}</p>
            <button type={'button'} onClick={()=> {
                createModal('register',{
                    name: 'tayfun',
                    surname:'erbilen',
                    setSearch,
                })
            }
            }>Register Modalı Yükle</button> <br/>
            <button type={'button'} onClick={close}>Kapat</button>
        </div>
    )
}