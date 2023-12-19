export interface IUser{
    id:number;
    name:string;
    email:string;
}


export interface IRegisterInput{
    name:string;
    email:string;
    password:string;
}

export interface ILoginInput{
    email:string;
    password:string;
}