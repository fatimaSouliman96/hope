import Image from "next/image";
import "./tabs.css";
import { GetServerSideProps } from "next";

interface TabsProps {
  options: string[];
  currentTab: string;
}

const Tabs: React.FC<TabsProps> = ({ options, currentTab }) => {
  
  return (
    <div className="tabs">
      {/* أزرار التابات */}
      <div className="tabs-option mb-3" role="group">
        {options.map((tab, index) => (
          <a
            key={tab}
            href={`/tabs?tab=${encodeURIComponent(tab)}`}
            className={`option ${currentTab === tab ? "active-option" : ""}`}
          >
            {index + 1}. {tab}
          </a>
        ))}
      </div>

      {/* محتوى التاب المفتوح */}
      <div className="tab-content">
        {currentTab === "Free Education" && (
          <div className="tab-pane fade show active">
            <Image
              src={"/service.jpg"}
              alt="service"
              fill
              style={{ objectFit: "cover" }}
            />
            <h3>
              Tailored educational programs designed to meet the unique learning
              needs of each child.
            </h3>
          </div>
        )}

        {currentTab === "Physical Therapy" && (
          <div className="tab-pane fade show active">
            <h3>Providing personalized therapy sessions to enhance mobility and recovery.</h3>
          </div>
        )}

        {currentTab === "Medical Supervision" && (
          <div className="tab-pane fade show active">
            <h3>Ensuring continuous health monitoring and professional medical care.</h3>
          </div>
        )}

        {currentTab === "Ambulance Service" && (
          <div className="tab-pane fade show active">
            <h3>Emergency transport and first-response assistance available 24/7.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

// ------------------- SSR -------------------
export const getServerSideProps: GetServerSideProps<TabsProps> = async (context) => {
  // مصفوفة التابات (اللي بتمررها)
  const options = [
    "Free Education",
    "Physical Therapy",
    "Medical Supervision",
    "Ambulance Service",
  ];

  const queryTab = context.query.tab
    ? decodeURIComponent(context.query.tab as string)
    : null;

  // التاب الحالي: من الـ query أو أول تاب افتراضيًا
  const currentTab = options.includes(queryTab as string)
    ? (queryTab as string)
    : options[0];

  return {
    props: {
      options,
      currentTab,
    },
  };
};

export default Tabs;

