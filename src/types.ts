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