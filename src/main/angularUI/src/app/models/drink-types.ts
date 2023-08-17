export class DrinkTypes {
    
    static nextId: number = 11;
    id: number;
    name!: string;
    price!: number;
    imageUrl?: string;
    static drinkTypesList: DrinkTypes[] = [
        // TODO: Add basic descriptions
        {id: 1, name: 'Latte', price: 4.50, imageUrl: "/assets/images/Latte.jpg"},
        {id: 2, name: 'Cafe Au Lait', price: 3.75, imageUrl: ''},// TODO: AuLait img
        {id: 3, name: 'Cappuccino', price: 4.00, imageUrl: '/assets/images/Cappuccino.jpg'},
        {id: 4, name: 'Cortado', price: 3.50, imageUrl: ''},// TODO: Cortado img
        {id: 5, name: 'Drip', price: 3.25, imageUrl: ''},// TODO: Drip img
        {id: 6, name: 'Espresso', price: 2.75, imageUrl: ''},// TODO: Esp img
        {id: 7, name: 'Espresso Tonic', price: 4.25, imageUrl: ''},// TODO: Eton img
        {id: 8, name: 'Pourover', price: 4.00, imageUrl: ''},// TODO: PO img
        {id: 9, name: 'Tea', price: 3.00, imageUrl: ''},// TODO: Tea img
        {id: 10, name: 'Tea Fog', price: 3.50, imageUrl: ''}// TODO: TeaFog img
    ]
    
    
    constructor(aName: string, aPrice: number, image?: string) {
        this.id = DrinkTypes.nextId;
        this.name = aName;
        this.price = aPrice;
        this.imageUrl = image;
        DrinkTypes.nextId++;
    }
}
