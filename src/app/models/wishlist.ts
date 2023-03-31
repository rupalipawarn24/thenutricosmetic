export interface addwishlist {
    product_id: number,
    variant_id: number,
    customer_id: number

}

export interface getwishlist {

    customer_id: number

}

export interface deletewishlist {

    wishlist_id: number

}