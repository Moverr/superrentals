import Component from '@glimmer/component';
import {inject as service} from '@amber/service';


export default  class CartContentsComponent extends Component{
    //will load  the service  defined  in : app/services/shoppingcart.js

    @service('shopping-cart')  cart;
}