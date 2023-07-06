export interface Art {
    name: string;
    author: string;
    value?: number; // ? pour dire que la propriété est optionnelle
    createdDate: Date;
    description?: string;
}