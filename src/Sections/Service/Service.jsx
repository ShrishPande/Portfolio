import React from "react";
import styles from "./Service.module.css";
import { service } from "../../ServiceData/ServiceData";
import Cards from "../../Components/Cards/Cards";

const Service = () => {
  return (
    <div className={styles.services} id="service">
      <div className={styles.title}>
        <h2>My services</h2>
      </div>
      <div className={styles.content}>
        {service.map((service) => (
          <div className={styles.cards}>
            <Cards data={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
