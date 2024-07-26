import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export function Draggable(props) {
  const idD = props.plant.id + props.children;
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    //id: "draggable",
    id: idD,
    data: { name: props.children },
  });

  // const style = transform
  //   ? {
  //       transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  //     }
  //   : undefined;

  return (
    <button
      ref={setNodeRef}
      style={{ transform: CSS.Translate.toString(transform) }}
      {...listeners}
      {...attributes}
      className="plant"
    >
      {props.plant.name}
    </button>
  );
}
