import React from 'react';

function Register() {

    return (
        <>
            <div className="auth">
                <form className="popup__form">
                    <h3 className="popup__title popup__title_auth">Регистрация</h3>
                    <input
                        className="popup__input popup__input_auth"

                        name="email"
                        type="email"
                        placeholder="E-mail"
                        minLength="2"
                        maxLength="200"
                        title="Введите адрес электронной почты"
                        required
                    />
                    <span className="popup__input-error"></span> 
                    <input

                        className="popup__input popup__input_auth"

                        name="password"
                        type="password"
                        placeholder="Пароль"
                        minLength="2"
                        maxLength="30"
                        title="Придумайте и введите пароль"
                        required
                    />
                    <span className="popup__input-error"></span>
                    <button className="popup__save popup__save_auth">Зарегистрироваться</button>
                    <div className="auth__signup-link">Уже зарегистрированы? Войти</div>
                </form>
            </div>
        </>
    );
}

export default Register;