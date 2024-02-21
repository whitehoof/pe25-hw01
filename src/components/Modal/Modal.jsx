import ModalWrapper	from "../ModalWrapper/ModalWrapper";
import ModalClose	from "../ModalClose/ModalClose";
import ModalHeader	from "../ModalHeader/ModalHeader";
import ModalBody	from "../ModalBody/ModalBody";
import ModalFooter	from "../ModalFooter/ModalFooter";

import {useState} from "react";

export default function Modal({ onClose, modalType }) {
	
	const [isModalOpen, setIsModalOpen] = useState(true);
	
	const deleteProduct = () => onClose(); // replace onClose() with a function that really deletes a product
	const faveProduct = () => onClose(); // replace onClose() with a function that really faves a product
	
	return (
		isModalOpen ? (
			<ModalWrapper onClick={ onClose }>
				<ModalClose onClick={ onClose } />
				<ModalHeader modalType={ modalType } />
				<ModalBody modalType={ modalType }/>
				
				{ modalType === 'deleteProduct' &&
					<ModalFooter
						firstText="no, cancel"
						firstClick={ onClose }
						secondaryText="yes, delete"
						secondaryClick={ deleteProduct }
					/>
				}
			
				{ modalType === 'addToFavorites' &&
					<ModalFooter
						firstText="add to favorites"
						firstClick={ faveProduct }
					/>
				}
				
			</ModalWrapper>
			) : null
	)
}