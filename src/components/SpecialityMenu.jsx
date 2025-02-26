import { Link } from "react-router";
import { specialityData } from "./../assets/assets";

export default function SpecialityMenu() {
  return (
    <section
      id="speciality"
      className="flex flex-col items-center gap-4 py-16 text-gray-800 "
    >
      <h1 className="text-3xl font-medium">Find by Speciality</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment here
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
        {specialityData.map((item, index) => {
          return (
            <Link
              className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
              key={index}
              to={`/doctors/${item.speciality}`}
              onClick={() => scrollTo(0, 0)}
            >
              <img
                src={item.image}
                alt={item.speciality}
                className="w-16 sm:w-24 mb-2"
              />
              <p>{item.speciality}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
