import { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { RxUpdate } from "react-icons/rx";
import { ActionsAll, ActionTypes, Coral } from "../../types";
import "./Corals.scss";


export const CoralCart = ({
  coral,
  dispatch,
}: {
  dispatch: React.Dispatch<ActionsAll>;
  coral: Coral;
}) => {
  const [editCoral, setEditCoral] = useState<Coral>(coral);
  const handleDeleteCoral = (coralId: string) => {
    dispatch({ type: ActionTypes.CORAL_DELETE, payload: coralId });
  };

  const handleSubmitCoral: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch({ type: ActionTypes.CORAL_UPDATE, payload: editCoral });
  };
  const handleChangeCoral: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEditCoral({ ...editCoral, [e.target.name]: e.target.value });
  };

  return (
    <>
        <div className="coral">
          <img src={coral.url} alt={coral.name} />
      {editCoral ? (
        <form onSubmit={handleSubmitCoral}>
          <input
            type="text"
            name="name"
            className="name"
            value={editCoral.name}
            onChange={handleChangeCoral}
          />
          <input
            type="number"
            name="size"
            className="size"
            value={editCoral.size}
            onChange={handleChangeCoral}
          />
        </form>
      ) : (
        <>
        <div className="name">{coral.name}</div>
        <div className="size">{coral.size} &nbsp; sm</div>
        </>
        )}
          <div className="actions">
            <RxUpdate type="submit" />
            <BsTrash onClick={() => handleDeleteCoral(coral._id)} />
          </div>
      </div>
    </>
  );
};
