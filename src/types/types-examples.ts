export type GettingUsers = (count: number) => Promise<IUser>;

export interface IAdressPropositions {
    lat: string,
    lng: string,
}

export interface IUserAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    address: IAdressPropositions
}

export interface ICompany {
    name: string,
    catchPhrase: string,
    bs: string,
}

export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IUserAddress,
    phone: string,
    website: string,
    company: ICompany
};

export const getUsers: GettingUsers = async (count) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users.filter((user: IUser, index: number) => count > index);
};

export type IUserNicknames = Omit<IUser, 'name' | 'email' | 'phone' | 'website' | 'company' | 'address'>; 

export type IUserPhoneNumber = Pick<IUser, 'id' | 'phone'>;

export interface ILibrary {
    bookCount: number,
    openingHours?: string,
}

export interface IBookStore extends Required<ILibrary> {
    name: string,
};

export interface ICat {
    readonly name: string,
    readonly age: string,
    readonly breed: string,
}