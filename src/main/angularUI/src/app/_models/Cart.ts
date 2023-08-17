export class Cart {
    items: any[] = [];

    get totalPrice(): number {
        let totalPrice = 0.00;
        this.items.forEach(item => {
            totalPrice += item.price;
        })

        return totalPrice;
    }
}