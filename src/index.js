import { products } from '../data.js';
import productTemplate from './product-list.hbs';

const html = productTemplate({ products });
document.getElementById('app').innerHTML = html;