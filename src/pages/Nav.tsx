import React from 'react'
import { Link } from 'react-router-dom';

export default function
    () {
    return (
        <>
            <nav id="sidebar" className="text-white">

                <div className="sidebar-header d-flex position-relative">
                    <Link to="#" className="log-out position-absolute">log out</Link>
                    <div className="avatar mr-3 d-flex align-items-center">
                        <span className="icon-user-solid-circle"></span>
                    </div>
                    <div>
                        <div className="label">Logged in as:</div>
                        <div className="email">francisco@tvguide.co.uk</div>
                    </div>
                </div>

                <div className="content">
                    <nav>
                        <ul className="list-unstyled">
                            <li className="active">
                                <Link to="#">TV Guide</Link>
                                <ul className="list-unstyled mt-2 sub-nav">
                                    <li>
                                        <Link to="#">Channels</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Genre</Link>
                                    </li>
                                    <li>
                                        <Link to="#">VOD</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Trending</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="active">
                                <Link to="/new-on-tv">New On TV</Link>
                            </li>
                            <li>
                                <Link to="/new-films">New Films</Link>
                            </li>
                            <li>
                                <Link to="#" className="d-inline-flex align-items-center" data-toggle="modal" data-target="#settings-modal" data-backdrop="static">
                                    <span className="icon-cog mr-3"></span> Settings
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </nav>
        </>
    )
}
