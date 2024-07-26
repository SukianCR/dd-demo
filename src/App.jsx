import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Droppable } from "./Droppable";
import { Draggable } from "./Draggable";

function App() {
  //const containers = ["A", "B", "C", "D", "E", "F"];

  const plants = [
    {
      id: 1,
      name: "Sunflower",
      zone: 1,
    },
    {
      id: 2,
      name: "Silver Oak",
      zone: 2,
    },
    {
      id: 3,
      name: "Tobacco",
      zone: 3,
    },
    {
      id: 4,
      name: "Barley",
      zone: 4,
    },
    {
      id: 5,
      name: "Clove",
      zone: 5,
    },
    {
      id: 6,
      name: "Dragon fruit",
      zone: 1,
    },
    {
      id: 7,
      name: "Lemon",
      zone: 2,
    },
  ];

  // const [parent, setParent] = useState(null);

  const [plantsInGarden, setPlantsInGarden] = useState([]);
  console.log(plantsInGarden);

  // const cartItems1 = ["string 1", "string 2", "string 3"];
  // setCartItems(cartItems1);

  //const draggableMarkup = <Draggable id="draggable">Drag me</Draggable>;

  return (
    // <DndContext onDragEnd={handleDragEnd}>

    <DndContext onDragEnd={addPlantsToGarden}>
      <div className="center">
        <main className="space-around">
          <div className="garden center">
            <Droppable items={plantsInGarden} />
          </div>

          <div className="plant-list center">
            <ul>
              {plants.map((plant) => {
                return (
                  <div key={plant.id} className="plant">
                    <Draggable key={plant.id} plant={plant}>
                      {/* {plant} */}
                      {plant.name}
                    </Draggable>
                  </div>
                );
              })}
            </ul>
          </div>
        </main>
      </div>
    </DndContext>
  );

  function addPlantsToGarden(event) {
    // const newPlant = event.active.data.current?.name;
    const newPlantName = event.active.data.current.name;
    // if (event.over?.id != "garden-droppable" || !newPlantName) return;
    console.log("name", newPlantName);
    const zone = 1;
    const id = Math.floor(Math.random() * 500);
    const npo = { id, name: `${newPlantName}`, zone: 1 };
    const temp = [...plantsInGarden];

    temp.push(npo);
    setPlantsInGarden(temp);
    console.log("array after set", plantsInGarden);

    // const { over } = event;
    // setParent(over ? over.id : null);
    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
  }
}

export default App;

{
  /* 
      {parent === null ? draggableMarkup : null}
        <div className="center">
        {containers.map((id) => (
          // We updated the Droppable component so it would accept an `id`
          // prop and pass it to `useDroppable`
          <div key={id}>
            <Droppable key={id} id={id}>
              {parent === id ? draggableMarkup : "Drop here"}
            </Droppable>
          </div>
        ))}
      </div> */
}
