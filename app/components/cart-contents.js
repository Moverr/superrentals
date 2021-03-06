import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

import {action} from '@ember/action';

export default class CartContentsComponent extends Component {
    //will load  the service  defined  in : app/services/shoppingcart.js

    @service('shopping-cart') cart;


    @action
    remove(item) {
        this.cart.remove(item);
    }
}