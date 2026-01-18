"use client";
import PlantDetailsPage from "@/Components/Shop/Plant Details/PlantDetail";
import React, { useEffect, useState } from "react";

const Item = ({ params }) => {
  const { item } = React.use(params); // ✅ এখানেই fix

  const [plant, setPlant] = useState(null);

  useEffect(() => {
    fetch("/data/trees.json")
      .then((res) => res.json())
      .then((trees) => {
        const found = trees.find((t) => String(t.id) == item);
        setPlant(found);
      });
  }, [item]);

  if (!plant) return <div>Loading...</div>;

  return (
    <>
      <div>
        <PlantDetailsPage plant={plant} />
      </div>
    </>
  );
};

export default Item;
