import "../../styles/main/layout.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IDogData } from "../Interfaces/IDogData";
import { BasicDogInfo, AdditionalDogInfo } from "../../Enums/DogInfo";

const Details: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let dogInfo = location.state;

  const [dogData, setDogData] = useState<IDogData>({
    breed: dogInfo.breed,
    name: "",
    age: 0,
    imageUrl: dogInfo.imageUrl,
    gender: "male",
    weight: 0,
    sterilized: false,
  });

  function handleInfoSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/Manager", { state: dogData });
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.name);
    setDogData({ ...dogData, [event.target.name]: event.target.value });
  }

  return (
    <div className="content">
      <div className="panel">
        <h2>Your pet ({dogInfo.breed}) info:</h2>
        <form onSubmit={handleInfoSubmit}>
          <div className="row">
            <div className="col-12">
              {(
                Object.keys(BasicDogInfo) as Array<keyof typeof BasicDogInfo>
              ).map((item, i) => (
                <div key={i} className="formElement">
                  <label htmlFor={item}>{item}</label>
                  <input
                    id={item}
                    value={dogData[item]}
                    name={item}
                    required
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div className="formElement">
                <label htmlFor={AdditionalDogInfo.sterilized}>
                  {AdditionalDogInfo.sterilized}
                  <input
                    type="checkbox"
                    value="yes"
                    name={AdditionalDogInfo.sterilized}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <h2>{AdditionalDogInfo.gender}</h2>
              <div className="formElement radio">
                <label htmlFor={AdditionalDogInfo.gender}>
                  male
                  <input
                    type="radio"
                    value="male"
                    name={AdditionalDogInfo.gender}
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor={AdditionalDogInfo.gender}>
                  female
                  <input
                    type="radio"
                    value="female"
                    name={AdditionalDogInfo.gender}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button type="submit">Done!</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Details;
