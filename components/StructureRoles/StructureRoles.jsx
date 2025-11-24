
import styles from "./StructureRoles.module.css";

const rolesData = [
  {
    imageSrc:"/role2.jpg",
    title: "Community Center Supervisor",
    description:
      "Overall supervision of the center, leading and monitoring the team, and coordinating all programs and activities",
  },
  {
    imageSrc:"/role3.jpg",
    title: "Vocational Training Officer",
    description:
      "Designing, implementing, and supervising vocational training according to the needs of the local community",
  },
  {
    imageSrc:"/role4.jpg",
    title: "Initiatives Officer",
    description:
      "Designing and preparing initiatives, and supervising their implementation, documentation, and evaluation",
  },
  {
    imageSrc:"/role5.jpg",
    title: "Life Skills Trainer",
    description:
      "Recruiting adolescents and youth, and actively participating in activating growth and participation activities for adolescents",
  },
  {
    imageSrc:"/role1.jpg",
    title: "Administrative Assistant",
    description:
      "Registering, organizing, and securing data and information, archiving documents, and preparing periodic reports",
  },
];

const StructureRoles = () => {
  return (
    <div className={styles.structureContainer}>
      <h2 className={styles.mainTitle}>Our Structure & Key Roles</h2>
      <div className={styles.rolesGrid}>
        {rolesData.map((role, index) => (
          <div className={styles.roleCard} key={index}>
            <div className={styles.imageWrapper}>
              <img
                src={role.imageSrc}
                alt={role.title}
                className={styles.roleImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.roleTitle}>{role.title}</h3>
              <p className={styles.roleDescription}>{role.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StructureRoles;
