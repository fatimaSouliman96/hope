
import styles from "./StructureRoles.module.css";

const rolesData = [
  {
    imageSrc:
      "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Community Center Supervisor",
    description:
      "Overall supervision of the center, leading and monitoring the team, and coordinating all programs and activities",
  },
  {
    imageSrc:
      "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Vocational Training Officer",
    description:
      "Designing, implementing, and supervising vocational training according to the needs of the local community",
  },
  {
    imageSrc:
      "https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Initiatives Officer",
    description:
      "Designing and preparing initiatives, and supervising their implementation, documentation, and evaluation",
  },
  {
    imageSrc:
      "https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Life Skills Trainer",
    description:
      "Recruiting adolescents and youth, and actively participating in activating growth and participation activities for adolescents",
  },
  {
    imageSrc:
      "https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
