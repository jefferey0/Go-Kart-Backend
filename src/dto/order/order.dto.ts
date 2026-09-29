export interface CreateOrderItemDto {
  productId: string;
  quantity: number;
  price: string;
}

export interface CreateOrderDto {
  userId: string;
  totalAmount: string;
  items: CreateOrderItemDto[];
}

export interface UpdateOrderDto {
  status?: string;
  totalAmount?: string;
}