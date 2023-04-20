import "../../styles/main/layout.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IDogData } from "../Interfaces/IDogData";
import { BasicDogInfo, AdditionalDogInfo } from "../../Enums/DogInfo";
import businessDogImage from "../../images/cute-little-dog-impersonating-business-person.jpg";

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
      <div className="row panel">
        <h1>Your pet ({dogInfo.breed}) info:</h1>
        <div className="col-5">
          <div className="image-container">
            <img
              className="panel-image"
              src={businessDogImage}
              alt="businessDogImage"
            />
          </div>
        </div>
        <div className="col-7">
          <div className="panel">
            <form onSubmit={handleInfoSubmit}>
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
                </label>
                <input
                  className="checkmark"
                  type="checkbox"
                  value="yes"
                  name={AdditionalDogInfo.sterilized}
                  onChange={handleChange}
                />
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

              <button type="submit">Done!</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
