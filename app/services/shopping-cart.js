import Service from '@ember/service';
import {A} from '@ember/array'

export default class ShoppingCartService extends Service {
    items = A([]);

    addItem(item){
        this.items.pushObject(item);
    }

    removeItem(item){
        this.items.removeObject(item);
    }
    empty(){
        this.items.clear();
    }
}
