import "./MainSection.css";
import Image from "next/image";

const MainSection = (
  { page,
    firsttext,
    secondtext,
    finaltext,
    button
  }
    :
    {
      page: string,
      firsttext?: string,
      secondtext?: string,
      finaltext?: string,
      button?: string,

    }) => {
  return (
    <div className={`main-section ${page}`}>
      {/* First text */}
      {firsttext&&<div className="first-text">
        {firsttext}
      </div>}

      {/* Second text */}
      {secondtext&&<div className="second-text">
        {secondtext}
      </div>}

      {/* Final text */}
     {finaltext && <div className="final-text">
        {finaltext}
      </div>}

      {/* Button */}
     {button && <button className="main-button">{button}</button>}
      <div className="img">
        <Image src={'/Rectangle 52.svg'} alt="Rectangle" fill objectFit="cover" />
      </div>
    </div>
  );
};

export default MainSection;
