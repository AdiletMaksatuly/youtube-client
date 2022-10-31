export interface AppState {
  customCards: CustomCard[];
}

export interface CustomCard {
  title: string;
  description: string;
  coverLink: string;
  videoLink: string;
  creationDate: string;
}
