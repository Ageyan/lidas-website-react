import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import { IoClose } from "react-icons/io5";
import { MdOutlineDone } from "react-icons/md";

function Modal({ show, closeModal }) {
    
    const {input, addUsers, secondInput, setSecondInput, setInput, isPostLoading, error, secondError, setSecondError, setError, addDone} = useFetch('users')

    const [showDone, setShowDone] = useState(false);

    useEffect(() => {
        if (addDone) {
            setShowDone(true);
            const timer = setTimeout(() => setShowDone(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [addDone])

    const onChangeHandler = (e) => {
        const value = e.target.value;
        setInput(value);
        if (error) setError("");
    };

    const onChangeHandlerSecond = (e) => {
        const value = e.target.value;
        setSecondInput(value);
        if (secondError) setSecondError("");
    };

    return (
        <div className={`modal ${show ? "show" : ""}`}>
            <div className="modal__content">
                <IoClose className="modal__btn-close" onClick={closeModal}/>
                <form className="modal__form-container" onSubmit={(e) => { e.preventDefault(); addUsers()}}>
                    <h2 className="modal__title">Leave your contacts for consultation</h2>
                    <input className="modal__input" value={input} onChange={onChangeHandler} type="text" placeholder="Name" />
                        {error && <p className="error-message">{error}</p>}
                    <input className="modal__input" value={secondInput} onChange={onChangeHandlerSecond} type="text" placeholder="Phone number" />
                        {secondError && <p className="error-message">{secondError}</p>}
                    <button disabled={isPostLoading} className='modal__btn'>{isPostLoading ? "Loading..." : "Make an appointment"}</button>
                    <div className={`done-message ${addDone ? 'visible' : ''}`}>Done<MdOutlineDone/></div>
                </form>
            </div>
        </div>
    );
}

export default Modal;