import * as React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface IAppProps {
  id?: any;
  children?: React.ReactNode;
}

const TagTel: React.FunctionComponent<IAppProps> = (props) => {
  const { id } = props;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });
  const style = { transform: CSS.Transform.toString(transform), transition };
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
        {props.children}
    </div>
  );
};

export default TagTel;
