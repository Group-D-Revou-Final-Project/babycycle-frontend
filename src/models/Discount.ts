export interface DiscountModel {
    discounted_price:     number;
    discount_amount:     null;
    discount_percentage: string;
    end_date:            string;
    id:                  number;
    is_active:           boolean;
    product_id:          number;
    start_date:          string;
}