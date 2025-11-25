"use client"

export default function Header({ openModal, data }: { openModal: () => void, data: any }) {

    return (
        <div className="flex gap-2 ">
            <h1 className="font-bold text-[#f3d5d5] text-2xl self-end">ada<span>VERSE</span></h1>
            <div className="grow-4"></div>
            <select name="" id="" className="p-2 cursor-pointer text-white bg-black">
                <option value="">TOUS LES PROJETS</option>
                {data.map((promotion: { id: number; name: string }) => (
                    <option key={promotion.id} value={promotion.id}>{promotion.name.toUpperCase()}</option>
                ))}
            </select>
            <button className=" p-2 cursor-pointer bg-amber-700 text-white " onClick={openModal}>SOUMETTRE LE PROJET</button>
        </div>
    )
}