import modalData from "../modal.jsx";
import {destroyModal, useModals} from "../utils/modal.jsx";

export default function Modal(){

    const modals = useModals()
    return(
        <div className={'fixed inset-0 bg-black/50 flex items-center justify-center'}>
            {modals.map(modal => {

                const m = modalData.find(m => m.name === modal.name)
                console.log(m)
                return <div className={'hidden last:block bg-white shadow-lg rounded'}>
                    <m.element data={modal.data} close={destroyModal}/>
                </div>
            })}
        </div>
    )
}