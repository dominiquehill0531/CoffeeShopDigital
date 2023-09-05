export class MilkTypes {
    static nextId: number = 8;
    id: number;
    name: string;
    addPrice!: number;
    imageUrl?: string;
    static milkTypesList: MilkTypes[] = [
        // TODO: Add milkTypes imgs
        {id: 1, name: 'Whole', addPrice: 0.00},
        {id: 2, name: 'Breve', addPrice: 0.50},
        {id: 3, name: '2%', addPrice: 0.00},
        {id: 4, name: 'Skim', addPrice: 0.00},
        {id: 5, name: 'Oat', addPrice: 0.50},
        {id: 6, name: 'Almond', addPrice: 0.50},
        {id: 7, name: 'Soy', addPrice: 0.50}
    ]


    constructor(aName: string, addToPrice: number, image?: string) {
        this.id = MilkTypes.nextId;
        this.name = aName;
        this.addPrice = addToPrice;
        this.imageUrl = image;
        MilkTypes.nextId++;


    }

}    