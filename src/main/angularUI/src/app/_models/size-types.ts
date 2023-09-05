export class SizeTypes {
    name: string;
    addPrice: number;
    static sizeList: SizeTypes[] = [
        {name: 'Traditional', addPrice: 0.00},
        {name: 'American', addPrice: 0.50},
        {name: 'Large', addPrice: 0.75}
    ];

    constructor(aName: string, addToPrice: number) {
        this.name = aName;
        this.addPrice = addToPrice;
    }

}