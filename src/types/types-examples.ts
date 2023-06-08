
// в этом файле собраны примеры типов и их использования

// ключевое слово type часто используется для типизирования простых структур. Например, массив или функция 
// всё обусловлено наличие оператора присваивания

type GettingUsers = (count: number) => Promise<IUser>;

// ключевое слово interface часто используется для типизирования сложных структур. Например, объект

interface IAdressPropositions {
    lat: string,
    lng: string,
}

interface IUserAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    address: IAdressPropositions
}

interface ICompany {
    name: string,
    catchPhrase: string,
    bs: string,
}

// нижерасположенный интерфлецйй является примером типизации вложенных объектов
// в данном случае ключевое слово extends не подходит, ибо оно расширяет поле ключевых имён вместо описания вложенности

interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IUserAddress,
    phone: string,
    website: string,
    company: ICompany
};

const getUsers: GettingUsers = async (count) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users.filter((user: IUser, index: number) => count > index);
};

// далее будут рассмотрены tips для TS

// создание нового интерфейса при помощи выборки из старого
// в данном случае мы указываем лишние поля 

type IUserNicknames = Omit<IUser, 'name' | 'email' | 'phone' | 'website' | 'company' | 'address'>; 

// хотя в данном случае лучше использовть ключевое слово Pick, которое создает новый тип забирая указанные поля

type IUserPhoneNumber = Pick<IUser, 'id' | 'phone'>;

// также рассмоотри ещё один пример

interface ILibrary {
    bookCount: number,
    openingHours?: string,
}

// данный пример показывает 2 вещи: использование ключевого слова extends (описание выше), а также ключевое слово Required, 
// которое указывает, что все поля указанного интерфейса будут обязательными

interface IBookStore extends Required<ILibrary> {
    name: string,
};

// данный пример показывает использование ключевого слова readonly, которое позводяет сделать объект с таким интерфейсом иммутабельным

interface ICat {
    readonly name: string,
    readonly age: string,
    readonly breed: string,
}

export { getUsers };

