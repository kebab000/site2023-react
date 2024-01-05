import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
    return (
        <header
            id="header"
            className={`${props.attr[0]} ${props.attr[1]} ${props.attr[2]}`}
            role="heading"
            aria-level="1"
        >
            <div className="header__inner container">
                <h1 className="header__logo">
                    <Link to="/">
                        web <em>site</em>
                    </Link>
                </h1>
                <nav className="header__nav" role="navigation">
                    <ul>
                        <li>
                            <Link to="intro">INTRO</Link>
                        </li>
                        <li>
                            <Link to="port">PORTFOLIO</Link>
                        </li>
                        <li>
                            <Link to="youtube">YOUTUBE</Link>
                        </li>
                        <li>
                            <Link to="unsplash">UNSPLASH</Link>
                        </li>
                        <li>
                            <Link to="movie">MOVIE</Link>
                        </li>
                        {/* <li>
                            <Link to="guest">GUEST</Link>
                        </li> */}
                    </ul>
                </nav>
            </div>
        </header>
        //header -->
    );
};

export default Header;
