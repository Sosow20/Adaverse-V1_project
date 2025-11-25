"use client"


type Props = {
    onClose: () => void;
    type: any;
    promo: any;
};

export default function Modal({ onClose, type, promo}: Props) {

    return (
        <div className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="overlay w-full h-full bg-[#000000d6] absolute top-0 left-0" onClick={onClose} ></div>
            <div className="modal-content bg-white p-6 rounded-lg z-10 max-w-lg lg:w-full relative overflow-auto max-h-[90vh] md:w-md sm:w-sm">
                <button
                    className="closeModal absolute top-2 right-2 text-xl font-bold cursor-pointer rounded-2xl border-xl"
                    onClick={onClose}>
                    &#10540;
                </button>
                <h1 className="text-center text-2xl"> Proposer un projet </h1>
                <form action="" className="flex flex-col gap-2">
                    
                    <label htmlFor="" className="font-bold font-">Titre</label>
                    <input className="border-2" type="text" required />

                    <label htmlFor="" className="font-bold">URL Github </label>
                    <input className="border-2" type="text" required/>

                    <label htmlFor="" className="font-bold">URL de démo</label>
                    <input className="border-2" type="text" required />

                    <label htmlFor="" className="font-bold">Promo ADA</label>
                    <select name="" id="" className="border-2 p-1" required>
                        {promo.map((promotion: { id: number; name: string}) => (
                            <option key={promotion.id} value={promotion.id}>{promotion.name.toUpperCase()}</option>
                        ))}
                    </select>

                    <label htmlFor="" className="font-bold">Projet ADA</label>
                    <select name="" id="" className="border-2 p-1" required>
                        {type.map((projectType: { id: number; name: string }) => (
                            <option key={projectType.id} value={projectType.id}>{projectType.name}</option>
                        ))}
                       
                        
                    </select>

                  <button type="submit" className="hover:bg-blue-300 p-1 w-[20%] rounded-sm border-2 font-mono cursor-pointer"> Envoyer </button>
                </form>



            </div>
        </div>
    )
}