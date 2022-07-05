export enum Gender {
    GIRL = "Girl",
    BOY = "Boy",
    UNISEX = "Unisex"
  }

export enum Popularity { 
    TRENDY = "Trendy",
    UNIQUE = "Unique"
  }

export enum Length {
    LONG = "Long",
    SHORT = "Short",
    ALL = "All"
  }

export type Option = {
    title: string,
    category: string;
    buttons: Array<Gender> | Array<Popularity> | Array<Length>
}

export type Options = {
    gender: Gender,
    popularity: Popularity,
    length: Length
}

export interface OptionsObject {
    gender: Gender,
    popularity: Popularity,
    length: Length
  }

export interface Name {
    id: number;
    name: string;
    gender: Gender;
    popularity: Popularity;
    length: Length;
}