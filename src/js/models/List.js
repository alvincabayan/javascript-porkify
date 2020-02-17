import uniqueid from 'uniqid';

export default class List {
    constructor() {
        this.items = [];
    }

    addItem (count, unit, ingredient) {
        const item = {
            id: uniqueid(),
            count,
            unit,
            ingredient
        }
        this.items.push(item);
        return item;
    }   

    deleteItem(id) {
        const index = this.items.findIndex(el => el.id === id);
        // splice removes the element in the array given the index number, and also as to how many will be removed. 
        // slice does the same thing, but accepts the index of the start and index of the end.
        this.items.splice(index, 1);
    }

    updateCount(id, newCount) {
        this.items.find(el => el.id === id).count = newCount;
    }
}