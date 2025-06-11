import React from "react";

function Botones(){
    return(

        <div>

            <div className="">
                <img src="/imagen_Portada.jpg" alt="" className="w-full h-300px object-contain mb-20"/>
            </div>
            
            <div className="flex justify-center items-center gap-6 ">
                <button   button className="flex px-8 py-4 bg-gray-100 text-black shadow-[0_8px_10px_rgba(0,0,0,0.8)] transform transition-transform duration-300 hover:scale-110 ">
                    <img src="/icono_Libro.png" alt="" className="w-10 h-10"/>
                    <span>Educacion de Calidad</span>
                </button>
                <button className="flex px-8 py-4 bg-gray-100 text-black shadow-[0_8px_10px_rgba(0,0,0,0.8)] transform transition-transform duration-300 hover:scale-110 "> 
                    <img src="/icono_Edificio.png" alt="" className="w-8 h-10"/>
                    <span>Infraestructura moderna</span>
                </button>
                <button className="flex px-8 py-4 bg-gray-100 text-black shadow-[0_8px_12px_rgba(0,0,0,0.8)] transform transition-transform duration-300 hover:scale-110 ">
                    <img src="/icono_Check.png" alt="" className="w-12 h-10"/>
                    <span>Malla actualizada</span>
                </button>
            </div>
        

        </div>
    );
}

export default Botones;