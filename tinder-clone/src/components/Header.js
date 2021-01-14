import React from 'react'
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import Message from '@material-ui/icons/QuestionAnswer';
import IconButton from "@material-ui/core/IconButton";
import TinderIcon from '@material-ui/icons/Whatshot';

function Header() {
        return(
            <div className="header">
               <IconButton><PersonIcon fontSize="large" className="header-icon"/></IconButton>
               <IconButton><TinderIcon fontSize="large"  className="header-icon"/></IconButton>
               <IconButton><Message fontSize="large"  className="header-icon"/> </IconButton>
            </div>
        )
}

export default Header;