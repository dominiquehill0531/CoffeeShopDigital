export class SweetTypes {
    
    id: number;
    name!: string;
    addPrice!: number;
    imageUrl?: string;
    isChosen?: boolean = false;

    static sweetTypesList: SweetTypes[] = [
        // TODO: Add SwtTypes imgs
        {id: 1, name: 'Raw Sugar', addPrice: 0.00},
        {id: 2, name: 'White Sugar', addPrice: 0.00},
        {id: 3, name: 'Splenda', addPrice: 0.00},
        {id: 4, name: 'Brown Sugar', addPrice: 0.30},
        {id: 5, name: 'Vanilla', addPrice: 0.75},
        {id: 6, name: 'Chocolate', addPrice: 0.75},
        {id: 7, name: 'Caramel', addPrice: 0.50},
        {id: 8, name: 'Lavender', addPrice: 0.75}
    ];
    static nextId: number = this.sweetTypesList.length + 1;

    constructor(aName: string, addToPrice: number, image?: string) {
        this.id = SweetTypes.nextId;
        this.name = aName;
        this.addPrice = addToPrice;
        this.imageUrl = image;
        SweetTypes.sweetTypesList.push(this);
        SweetTypes.nextId++;
    }
}