import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AppContext } from "./../context/AppContext";
import DoctorCard from "../components/DoctorCard";

export default function Doctors() {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);
  return (
    <section>
      <p className="text-gray-600">Browse through the doctors specialist.</p>

      <div className="flex flex-col sm:flex-row items-start gap-5 mt-4">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border rounded transition-all cursor-pointer ${
              speciality === "General physician"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
            onClick={() =>
              speciality === "General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician")
            }
          >
            General physician
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border rounded transition-all cursor-pointer ${
              speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""
            }`}
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
          >
            Gynecologist
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border rounded transition-all cursor-pointer ${
              speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""
            }`}
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
          >
            Dermatologist
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border rounded transition-all cursor-pointer ${
              speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""
            }`}
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians")
            }
          >
            Pediatricians
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border rounded transition-all cursor-pointer ${
              speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""
            }`}
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
          >
            Neurologist
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border rounded transition-all cursor-pointer ${
              speciality === "Gastroenterologist"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologist")
            }
          >
            Gastroenterologist
          </p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
          {filterDoc.map((item, index) => {
            return <DoctorCard item={item} index={index} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
}
