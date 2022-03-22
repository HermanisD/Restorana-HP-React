import React, { Component } from "react";
import picture from "./pexel_lg.jpg";
import styles from "./Jumba.module.css";

const Jumba = () => {
  return (
    <div>
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.rowContent}>
          <img id={styles.img}
            src={picture}
            alt="Picture of restaurant"
          />
        </div>
      </div>
      <div className={styles.row}>
        
          <div className={styles.rowContent}>
            <a href="#">
              <div id="menu-tile">
                <span>Ēdienkarte</span>
              </div>
            </a>
          </div>
          <div className={styles.rowContent}>
            <a href="#">
              <div id="specials-tile">
                <span>Īpašie piedāvājumi</span>
              </div>
            </a>
          </div>
          <div className={styles.rowContent}>
            <a
              href="https://www.google.com/maps/@56.8327829,24.4936618,16.5z"
              target="_blank"
            >
              <div>
                <span>karte</span>
              </div>
            </a>
          </div>
        
      </div>
    </div>
    </div>
  );
};

export default Jumba;
