import { products } from './data.js';
import productTemplate from './temp/product.hbs';

const html = productTemplate({ products });
document.getElementById('app').innerHTML = html;