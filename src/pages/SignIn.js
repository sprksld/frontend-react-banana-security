import React, {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function SignIn() {
    const { isAuth, toggleIsAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    function submitHandler(e) {
        e.preventDefault();
        toggleIsAuth( true );
        console.log("Gebruiker is ingelogd")
        navigate("/profile");
    }

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>

            <form onSubmit={submitHandler}>
                <label htmlFor="email">E-mailadres:
                </label>
                <input id="email" type="email" name="email" />
                <label htmlFor="">Wachtwoord:</label>
                <input id="password" type="password" name="password"/>
                <p>*invoervelden*</p>
                <button onSubmit={submitHandler}>Inloggen</button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;