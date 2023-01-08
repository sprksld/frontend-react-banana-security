import React from 'react';
import {Link} from 'react-router-dom';

function SignUp() {
    return (
        <>
            <h1>Registreren</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque
                eligendi
                harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur
                deserunt
                doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
            <form>
                <label htmlFor="email">E-mailadres:</label>
                <input id="email" type="text"/>
                <label htmlFor="password">Wachtwoord:</label>
                <input id="password" type="password"/>
                <label htmlFor="username">Gebruikersnaam:</label>
                <input id="username" type="text"/>
                <button>Registreer!</button>
            </form>
            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    );
}

export default SignUp;