"use client"

import Link from "next/link";
import { useState, useEffect, use } from "react";
import Modal from "./components/Modal";
import Cards from "./components/Cards";
import Header from "./components/Header";


interface ProjectTypes {
  id: number;
  name: string;
}

interface Promotions {
  id: number;
  name: string;
  startDate: Date;
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [getTypes, setGetTypes] = useState<ProjectTypes[]>([]);
  const [getPromotions, setGetPromotions] = useState<Promotions[]>([]);


//récupérer les types de projets
useEffect(() => {
  async function fetchData() {
    const res = await fetch("/api/project_types");
    const result = await res.json();
    setGetTypes(result);
  }
  fetchData();
}, []);

//récupérer les promotions
useEffect(() => {
  async function fetchData() {
    const res = await fetch("/api/promotions");
    const result = await res.json();
    setGetPromotions(result);
  }
  fetchData();
}, []);



 

  return (
    <div className="p-2 m-2 rounded-xl">
      <Link href="./" className="text-white"> / Home 🏠︎ </Link>
      <Header data={getTypes} openModal={() => setIsModalOpen(true)}  />
       {isModalOpen && (
      <Modal promo={getPromotions} type={getTypes} onClose={() => setIsModalOpen(false)}/>
      )}
      <Cards/>
    </div>
  )
}
