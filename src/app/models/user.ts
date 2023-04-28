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
export interface resetpwd {

      email: string;
}
export interface otpdata {
      customer_id: number;
      otp: number;
      
}

export interface addadress {
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
