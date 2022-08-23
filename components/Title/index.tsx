import React from "react";
import styles from './styles.module.css';

function Title() {
  /**
   * Renders
   */
  return (
    <h1 className={styles.title}>
      Proof of concept for <a href="https://react-spectrum.adobe.com/react-spectrum/index.html" target="_blank" rel="noreferrer">Adobe Spectrum</a>
    </h1>
  );
}

export { Title };
