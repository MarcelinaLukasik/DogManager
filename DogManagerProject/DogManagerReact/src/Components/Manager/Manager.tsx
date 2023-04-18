import "../../styles/main/banner.css";
import "../../styles/main/layout.css";
import "../../styles/manager/wrapper.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { BasicInfo } from "../../Enums/Notifications";
import { IBreedInfo } from "../Interfaces/IBreedInfo";
import DogInfo from "./DogInfo";
import { IDogData } from "../Interfaces/IDogData";
import BreedInfo from "./BreedInfo";
import SimilarBreeds from "./SimilarBreeds";

const Manager: React.FC = () => {
  const location = useLocation();
  let dogInfo: IDogData = location.state;
  let breedFound: boolean = false;
  const [dogFact, setDogFact] = useState<string>("");
  const [allBreedsInfo, setAllBreedsInfo] = useState<Array<any>>([]);
  const [breedInfo, setBreedInfo] = useState<IBreedInfo>();
  const [similarBreeds, setSimilarBreeds] = useState<Array<IBreedInfo>>([]);
  const [link, setLink] = useState<string>("https://dogapi.dog/api/v2/breeds");

  useEffect(() => {
    fetchDogFact();
    GetAllBreedsInfo();
  }, []);

  useEffect(() => {
    GetBreedInfo();
    GetSimiliarBreeds();
    GetAllBreedsInfo();
  }, [link]);

  async function fetchDogFact() {
    const res = await fetch(`https://dogapi.dog/api/v2/facts`);
    res.json().then((res) => {
      setDogFact(res.data[0].attributes.body);
    });
  }

  async function GetAllBreedsInfo() {
    fetch(link).then(async (res) => {
      try {
        const result = await res.json();
        setAllBreedsInfo(result.data);
        setLink(result.links.next);
      } catch (error) {
        console.log("invalid link");
      }
    });
  }

  function GetBreedInfo() {
    if (dogInfo && !breedFound) {
      allBreedsInfo.forEach((breed) => {
        if (breed.attributes.name.toLowerCase() === dogInfo.breed) {
          setBreedInfo(breed);
          breedFound = true;
        }
      });
    }
  }

  function GetSimiliarBreeds() {
    if (dogInfo) {
      allBreedsInfo.forEach((breed) => {
        if (
          breed.attributes.name
            .toLowerCase()
            .includes(dogInfo.breed.toLowerCase()) &&
          breed.attributes.name.toLowerCase() !== dogInfo.breed.toLowerCase()
        ) {
          setSimilarBreeds((oldArray) => [...oldArray, breed]);
        }
      });
    }
  }

  return (
    <div className="content">
      <h2>Your dog info:</h2>
      <div className="wrapper">
        <div className="item-1">
          {breedInfo && (
            <BreedInfo id={breedInfo.id} attributes={breedInfo.attributes} />
          )}
          {!breedInfo && <p>{BasicInfo.BreedInfoNotFound}</p>}

          <h3>Similar dog breeds:</h3>
          <SimilarBreeds similarBreeds={similarBreeds} />
        </div>
        <div className="item-2">
          {dogInfo && <img src={dogInfo.imageUrl} alt="dog" />}
        </div>
        <div className="item-3">
          <h3>Fun facts</h3>
          <p>{dogFact}</p>
          <button onClick={fetchDogFact}>Another one!</button>
        </div>
        <div className="item-4">
          {dogInfo && (
            <div className="row">
              <DogInfo
                name={dogInfo.name}
                age={dogInfo.age}
                breed={dogInfo.breed}
                gender={dogInfo.gender}
                weight={dogInfo.weight}
                sterilized={dogInfo.sterilized}
              />
            </div>
          )}
          {!dogInfo && <p>{BasicInfo.NoData}</p>}
        </div>
      </div>
    </div>
  );
};

export default Manager;
