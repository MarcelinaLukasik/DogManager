export interface IBreedInfo {
  id: string;
  attributes: {
    name: string;
    hypoallergenic: boolean;
    description: string;
  };
}

export interface ISimilarBreeds {
  similarBreeds: IBreedInfo[];
}
