import { EducationList } from "./education";
import EducationComponent from "../../components/EducationComponent/EducationComponent";

const Education = () => {
  return (
    <section id="educationSection" className="mx-[5%] mb-[10%]">
      <>
        <div className="text-center mb-6 space-y-2">
          <h3 className="z-50 uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-tight">
            Education
          </h3>
          <p className="text-sm sm:text-base tracking-wide text-gray-300">
            Places where I studied
          </p>
        </div>

        {EducationList.map((edu) => (
          <EducationComponent key={edu.id} {...edu} />
        ))}
      </>
    </section>
  );
};

export default Education;
