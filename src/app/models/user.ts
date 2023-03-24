export interface login {
      email: String;
      password: String;
}

export interface signUp {
      first_name: string
      last_name: string
      email: string;
      password: string;
}
export interface addadress {
      customer_id: number
      first_name: string
      last_name: string
      company: string
      phone: number
      address_1: string
      address_2: string
      city: string
      state: string
      zip: number
      country: string
}

export interface editadress {
      customer_id: number
      first_name: string
      last_name: string
      company: string
      phone: number
      address_1: string
      address_2: string
      city: string
      state: string
      zip: number
      country: string
      id:number
}
export interface deleteAddress {
      customers_id: number,
      id:number
}
export interface getAddress {
      customers_id: number,
}
