import { SellerModel } from "./Seller";
export interface TransactionModel {
    checkout_id: string;
    payment_method: string;
    product_id: number;
    seller_id: number;
    status: string;
    total_price: number;    
    user_address: string;
    user_id: number;
    name: string;
    created_at: string;
    quantity: string;
    is_reviewed: boolean;
    image_url: string | null;
    seller_details: SellerModel
}

