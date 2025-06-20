import { FaCheckCircle } from "react-icons/fa";

const Reporte = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-gray-100 p-12 rounded-xl flex justify-center items-center h-64 w-[500px] shadow-md">
        <div className="text-center flex items-center space-x-4">
          <span className="text-lime-600 font-semibold text-2xl leading-tight">
            Se ha enviado <br /> el Reporte
          </span>
          <FaCheckCircle className="text-lime-600 w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default Reporte;
