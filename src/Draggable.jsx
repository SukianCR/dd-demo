import React from "react";
import { useDraggable } from "@dnd-kit/core";

export function Draggable(props) {
  console.log("props in", props);
  const idD = props.plant.id + props.children;
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    //id: "draggable",
    id: idD,
    data: { name: props.children },
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <button
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="yellow"
    >
      {props.children}
    </button>
  );
}
