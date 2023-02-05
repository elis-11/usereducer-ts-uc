import { BsTrash } from "react-icons/bs";
import { ActionsAll, ActionTypes, Coral } from "../../types";

export const CoralCart = ({
  coral,
  dispatch,
}: {
  dispatch: React.Dispatch<ActionsAll>;
  coral: Coral;
}) => {
  const handleDeleteCoral = (coralId: string) => {
    dispatch({ type: ActionTypes.CORAL_DELETE, payload: coralId });
  };

  return (
    <div key={coral._id} className="coral">
      <img src={coral.url} alt="" />
      <div className="name">{coral.name}</div>
      <div className="size">{coral.size} &nbsp; sm</div>
      <BsTrash onClick={() => handleDeleteCoral(coral._id)} />
    </div>
  );
};
