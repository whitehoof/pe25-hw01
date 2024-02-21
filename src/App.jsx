import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

import './App.scss'

import { useState } from 'react'

function App() {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState('deleteProduct');
    
    const closeModal = () => setIsModalOpen(false);
    const openModal  = ( _modalType ) => {
        setModalType(_modalType);
        setIsModalOpen(true);
    };
    
    
    return (
        <>
            <h1>PE25 HW01</h1>
            
            <p>Welcome to our app — the first app in the world that can both delete a product and add one to favorites. Your favorites, yes! This is hard to believe, eh? Just try for yourself, you will never want to use another app. 30 days money back, no questions asked.</p>
            
            <Button
				classNames="button-primary"
				onClick={ () => openModal("deleteProduct") }>
				Delete product
			</Button>
			
            <Button
				classNames="button-secondary"
				onClick={ () => openModal("addToFavorites") }>
				Add to favorites
			</Button>
            
            { isModalOpen && <Modal modalType={ modalType } onClose={ closeModal } /> }
        </>
    )
}

export default App
