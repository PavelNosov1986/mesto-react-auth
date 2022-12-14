import React from "react";
import rejectImg from "../images/RejectImg.svg";
import successImg from "../images/SuccessImg.svg";

function InfoTooltip({ isOpen, onClose, isSuccessReg }) {
    return (
        <div className="popup popup_opened">
            <div className="popup__container">

                {/* <button className="popup__close" type="button" onClick={onClose}></button>
                <img
                    src={`${successImg}`}
                    className="popup__tooltip-image"
                    alt="Успешная регистрация"
                />
                <p className="popup__tooltip-info">Вы успешно зарегистрировались!</p> */}

                <button className="popup__close" type="button" onClick={onClose}></button>
                <img
                    src={`${rejectImg}`}
                    className="popup__tooltip-image"
                    alt="Успешная регистрация"
                />
                <p className="popup__tooltip-info"> Что-то пошло не так. Попробуйте еще раз!</p>

            </div>
        </div>)
}

export default InfoTooltip;