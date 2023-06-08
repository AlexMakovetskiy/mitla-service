interface ISignUpState {
    email: string,
    password: string,
    confirmPassword: string,
}

interface IDataState {
    email: string,
    password: string,
}

export type {
    ISignUpState,
    IDataState,
};