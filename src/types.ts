export interface Item {
    id: string;
    name: string;
  }

export type ItemList = Item[];

export interface FAQ {
    id: number;
    title: string;
    description: string;
}

export type FAQList = FAQ[];

export interface ITest {
  title: string;
  description: string;
  price: number;
  link: string;
  type: string;
  timeTaken: string;
}

export type TestList = ITest[];