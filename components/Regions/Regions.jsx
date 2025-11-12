import React from "react";
import Image from "next/image";
import styles from "./Regions.module.css";

const regionsData = [
  {
    id: 1,
    name: "Tartus",
    imageUrl: "/tartus.jpg",
    customClass: styles.tall,
  },
  {
    id: 2,
    name: "Mashta Al Hilu",
    imageUrl: "/mashta-al-hilu.jpg",
    customClass: styles.wide,
  },
  {
    id: 3,
    name: "Dreikish",
    imageUrl: "/dreikish.jpg",
    customClass: "",
  },
  { id: 4, name: "Baniyas", imageUrl: "/baniyas.jpg", customClass: "" },
  { id: 5, name: "Safita", imageUrl: "/safita.jpg", customClass: "" },
  {
    id: 6,
    name: "Ash Shaykh Badr",
    imageUrl: "/ash-shaykh-badr.jpg",
    customClass: "",
  },
];

const Regions = () => {
  return (
    <section className={styles.regionsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Bringing Care to Every Region</h2>
        <div className={styles.regionsGrid}>
          {regionsData.map((region) => (
            <div
              key={region.id}
              className={`${styles.regionCard} ${region.customClass}`}
            >
              <Image
                src={region.imageUrl}
                alt={`View of ${region.name}`}
                layout="fill"
                objectFit="cover"
                className={styles.cardImage}
              />
              <div className={styles.regionName}>{region.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Regions;
