import { BasicInfo } from "../../Enums/Notifications";
import "../../styles/main/layout.css";
import { ISimilarBreeds } from "../Interfaces/IBreedInfo";

const SimilarBreeds = (props: ISimilarBreeds) => {
  const uniqueBreeds = props.similarBreeds.filter(function (elem, pos) {
    return props.similarBreeds.indexOf(elem) === pos;
  });
  return (
    <div>
      {props.similarBreeds.length !== 0 && (
        <div className="scrollable-list">
          {uniqueBreeds.map((item, index) => (
            <p key={index}>{item.attributes.name}</p>
          ))}
        </div>
      )}
      {props.similarBreeds.length === 0 && <p>{BasicInfo.NoResults}</p>}
    </div>
  );
};

export default SimilarBreeds;
