import "../App.scss";
import { Forms } from "./events/Forms";
import { Objects } from "./events/Objects";
import { Strings } from "./events/Strings";

export const Events = () => {
  return (
    <div className="Events">
      <Strings />
      <Objects />
      <Forms />
    </div>
  );
};
