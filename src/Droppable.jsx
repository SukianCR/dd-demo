import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable(props) {
  const last_item_index = props?.items?.length - 1;
  const last_item = props?.items[last_item_index];

  const new_cont_name = "cont_" + last_item?.id;

  // const new_cont_id = `cont_${last_item_index.id}`;
  console.log(new_cont_name);

  const { isOver, setNodeRef } = useDroppable({
    id: "garden-droppable",
    // id: new_cont_name,
  });

  const plantsIG = props.items;
  //console.log("viene el array", plantsIG);

  return (
    <div ref={setNodeRef}>
      {plantsIG.map((plant, idx) => (
        //<div key={item.id} className="plant">
        <div key={`${plant.id}-${idx}`} className="plant">
          {plant.name}
        </div>
      ))}
    </div>
  );
}

// const style = {
//   color: isOver ? "green" : undefined,
// };
// return (
//   <div ref={setNodeRef} style={style} className="blue">
//     {/* {props.children} */}
//   </div>
// );
// console.log("props !" + props.items);
