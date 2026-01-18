"use client";
import PlantsForSale from "@/Components/Shop/ShopCard/ShopCard";
import GardenHeader from "@/Components/ShopHead/ShopHead";
import React, { useEffect, useState } from "react";

const Items = () => {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    fetch("data/trees.json")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);
  return (
    <>
      <div>
        <GardenHeader />
        <PlantsForSale treesData={plants} />
      </div>
    </>
  );
};

export default Items;
