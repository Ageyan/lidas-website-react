import { IoClose } from "react-icons/io5";

function Modal({show, closeModal}) {
    return (
        <div className={`modal-backdrop ${show ? "show" : ""}`}>
            <div className="modal-content">
                <IoClose className="modal-btn-close" onClick={closeModal}/>
                <form className="modal-form-container">
                    <h2 className="modal-title">Leave your contacts for consultation</h2>
                    <input className="modal-input" type="text" placeholder="Name"/>
                    <input className="modal-input" type="text" placeholder="Phone number" />
                    <button className="modal-btn">Make an appointment</button>
                </form>
            </div>
        </div>
    );
}

export default Modal;