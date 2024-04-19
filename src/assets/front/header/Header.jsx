import React from 'react';
import backgroundImage from './background.jpg'; 
import './Header.css'


const Header = () => {
    return (
        <div>
            <div className="header-container" style={{ backgroundImage: `url(${backgroundImage})` }}/>

            <header>
                <h1>Mon Application</h1>
                <nav>
                    <ul>
                        <li><button>Accueil</button></li>
                        <li><button>News</button></li>
                        <li><button>Planning</button></li>
                        <li><button>Contact</button></li>
                        <li><button>Boutique</button></li>
                        <li><button>Connexion</button></li>
                        <li><button>Inscription</button></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}


export default Header