import {createModal, useModals} from "./utils/modal";
import Modal from "./modals/index.jsx";
function App() {

    const modals = useModals()

    console.log(modals)

  return (
    <div className={'App'}>
        {modals.length > 0 && <Modal />}
        <button type="button" onClick={()=> createModal('login')}>Modal Aç</button>
    </div>
  )
}

export default App
