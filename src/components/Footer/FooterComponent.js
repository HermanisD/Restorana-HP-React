import React from "react";
import styles from './Footer.module.css'



function Footer(){
    return(

<div className={styles.panelFooter}>
    <div className={styles.container}>
      <div className={styles.row}>
        <div id="hours" className="col-sm-4">
          <span>Darba laiks:</span><br></br>
          Pirmdiena-Ceturtdiena: 11:00 - 22:00<br></br>
          Piekdiena-Svētdiena: 11:00 - 2:30
          <hr className="d-block d-sm-none"></hr>
        </div>
        <div id="address" className="col-sm-4">
          <span>Adrese:</span><br></br>
          Peldu iela 14<br></br>
          Ikšķile
          <p>* Piegādes radiuss 5km.</p>
          <hr className="d-block d-sm-none"></hr>
        </div>
        <div id="testimonials" className="col-sm-4">
          <p>"Labākais restorāns, kurā esmu bijis. Tas izsaka visu, jo daudz esmu baudījis!"</p>
          <p>"Izcils ēdiens! Lieliska apkalpošana. Iegriezīšos atkal un atkal!</p>
        </div>
      </div>
      <div className="text-center">&copy; Copyright Food Style 2023</div>
    </div>
  </div>
);
};



export default Footer