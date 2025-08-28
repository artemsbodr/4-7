class $88a8b14fdfdc7357$export$2e2bcd8739ae039 {
    constructor(start, container){
        this.count = start;
        this.container = container;
    }
    init() {
        const btn = document.createElement('button');
        const display = document.createElement('span');
        display.textContent = this.count;
        btn.textContent = "\u0414\u043E\u0434\u0430\u0442\u0438";
        btn.onclick = ()=>{
            this.count++;
            display.textContent = this.count;
        };
        this.container.append(display, btn);
    }
}


function $2cb9677c88a54f62$export$aaea0094c1c69714(name) {
    return `\u{41F}\u{440}\u{438}\u{432}\u{456}\u{442}, ${name}!`;
}


const $cf838c15c8b009ba$var$app = document.getElementById('app');
$cf838c15c8b009ba$var$app.textContent = (0, $2cb9677c88a54f62$export$aaea0094c1c69714)('Parcel');
const $cf838c15c8b009ba$var$counter = new (0, $88a8b14fdfdc7357$export$2e2bcd8739ae039)(0, $cf838c15c8b009ba$var$app);
$cf838c15c8b009ba$var$counter.init();


//# sourceMappingURL=4-6.af1c9347.js.map
