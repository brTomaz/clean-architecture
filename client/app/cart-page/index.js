/**
 * Generally an index.js file should simply provide an index of public methods
 * and modules. This is a good way to signal to consumers of this feature code
 * which elements are meant to be referenced and used and which ones are for
 * internal use only. Of course, nothing stops code from reaching deeper into
 * the hierarchy and referencing internal modules, but this way, those imports
 * will stand out, because they have to be more explicit.
 **/

import CcCartTemplate from 'cart-page/template';
import createCartRoute from 'cart-page/route';
import { addToCart } from 'cart-page/actions';
import { selectTotalItemsInCart } from 'cart-page/selectors';

export default CcCartTemplate;
export { createCartRoute, addToCart, selectTotalItemsInCart };
