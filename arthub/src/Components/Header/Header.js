import React from 'react'
import './Header.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from "@material-ui/core/IconButton"


function Header() {
    return (
        <div className="header">
            <IconButton> <AccountCircleIcon className="header__icon" fontSize="large" /></IconButton>
            <img className="header__logo"
                src="https://lh3.googleusercontent.com/proxy/GA26HMhd9zxu820clQlF-adCiXWOS89GdT5kVNVOP0rVbqajFcqx1bFeWA7qV9t7zmZvNNEHmppdZH_NjWPQGjI0y_irQ8A" alt="" />
            <IconButton> <ChatIcon className="header__icon" fontSize="large" /></IconButton>
        </div>
    )
}

export default Header
