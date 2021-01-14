import React from 'react'
import "./Footer.css"
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from "@material-ui/core/IconButton";

function Footer() {
    return (
        <div className="footer">

               <IconButton className="icon-container"><ReplayIcon fontSize="large" className="footer-icon"/></IconButton>
               <IconButton className="icon-container"><CloseIcon fontSize="large" className="footer-icon"/></IconButton>
               <IconButton className="icon-container"><StarRateIcon fontSize="large" className="footer-icon"/></IconButton>
               <IconButton className="icon-container"><FavoriteIcon fontSize="large" className="footer-icon"/></IconButton>
               <IconButton className="icon-container"><FlashOnIcon fontSize="large" className="footer-icon"/></IconButton>
            
        </div>
    )
}

export default Footer
