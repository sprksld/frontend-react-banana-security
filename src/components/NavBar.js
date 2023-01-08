import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import {useNavigate, Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function NavBar() {
    const { isAuth, toggleIsAuth, logoutHandler } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <nav>
            <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
            </Link>

            <div>
                {!isAuth &&
                <button
                    type="button"
                    onClick={() => navigate('/signin')}
                >
                    Log in
                </button> }
                {isAuth &&
                    <button
                        type="button"
                        onClick={logoutHandler}
                    >
                        Uitloggen
                    </button>
                }
                {!isAuth &&
                <button
                    type="button"
                    onClick={() => navigate('/signup')}
                >
                    Registreren
                </button> }
            </div>
        </nav>
    );
}

export default NavBar;