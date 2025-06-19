import React from "react";

function Boton_de_bandeja() {
    return (
        <nav className="bg-white border-gray-200 flex items-center justify-between px-6 py-2 shadow">
           
            <div className="flex items-center">
                <img src="/Carl-Sagan-log.webp" alt="Carl Sagan" className="h-10 mr-4" />
            </div>

           
            <div className="flex-1 flex justify-center items-center space-x-7 text-sm" style={{ color: "#92C137" }}>
                <span className="font-bold">Historia</span>
                <span>Soporte estudiantil</span>
                <span>Matricula en línea</span>
                <img src="/imagen bandeja .png" alt="Bandeja" className="h-5" />
            </div>

            
            <button className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded shadow-md">
                Cerrar Sesión
            </button>
        </nav>
    );
}

export default Boton_de_bandeja;
