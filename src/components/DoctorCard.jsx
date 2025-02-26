import { useNavigate } from "react-router";

export default function DoctorCard({ item, index }) {
  const navigate = useNavigate();
  return (
    <div
      className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
      key={index}
      onClick={() => navigate(`/appointment/${item._id}`)}
    >
      <img className="bg-blue-50" src={item.image} alt={item.name} />
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm text-center text-green-500">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>Avaiable</span>
        </div>
        <h4 className="text-gray-900 text-lg font-medium">{item.name}</h4>
        <p className="text-gray-600 text-sm">{item.speciality}</p>
      </div>
    </div>
  );
}
