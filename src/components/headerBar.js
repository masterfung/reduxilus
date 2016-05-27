import React from 'react';

const HeaderBar = () => {
  return (
    <nav id="topNav" className="navbar navbar-default">
        <div className="container">
            <button className="navbar-toggler hidden-md-up pull-right" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                ☰
            </button>
            <a className="navbar-brand page-scroll" href="#first">Reduxilus</a>
            <div className="collapse navbar-toggleable-sm" id="collapsingNavbar">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link page-scroll" href="#themes">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link page-scroll" href="#snippets">Contact</a>
                    </li>
                </ul>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <a className="nav-link page-scroll" data-toggle="modal" title="A free Bootstrap theme" href="#aboutModal">Log In</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default HeaderBar;
