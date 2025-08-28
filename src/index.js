import  Counter  from './counter.js';
import { greet } from './un.js';


const app = document.getElementById('app');
app.textContent = greet('Parcel');

const counter = new Counter(0, app);
counter.init();
