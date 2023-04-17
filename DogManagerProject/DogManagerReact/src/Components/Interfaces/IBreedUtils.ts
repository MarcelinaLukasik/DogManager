export interface IBreedUtils {
  info: {
    breed: string;
    imageUrl: string;
  };
  functions: {
    changeToNextBreed: () => void;
    changeToPreviousBreed: () => void;
  };
}
