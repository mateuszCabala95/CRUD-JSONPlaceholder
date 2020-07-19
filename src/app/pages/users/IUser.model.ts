export interface IUser {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    [key: string]: IAddress,
  },
  geo: {
    [key: string]: IGeo,
  }
  phone: string,
  website: string,
  company: {
    [key: string]: ICompany,
  }
}

interface IAddress {
  street: string,
  suite: string,
  city: string,
  zipcode: string
}

interface IGeo {
  lat: string,
  lng: string,
}

interface ICompany{
  name: string,
  catchPhrase: string,
  bs: string
}
