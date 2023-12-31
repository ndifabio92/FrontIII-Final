export type Dentist = {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

export type Address = {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export type Geo = {
    lat: string;
    lng: string;
}

export type Company = {
    name:        string;
    catchPhrase: string;
    bs:          string;
}

export type FormData = {
    name: string;
    email: string;
}

export type State = {
    ids: string[]
}

export type Action =
    | { type: 'ADD_ID'; payload: string }
    | { type: 'REMOVE_ID'; payload: string }
    | { type: 'GET_LOCALSTORAGE', payload: string };