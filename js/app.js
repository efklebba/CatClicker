
class CatObject {
    constructor(image, name) {
        this.catDiv = document.createElement("div");
        this.nameHeader = document.createElement("h1");
        this.nameHeader.innerHTML = name;
        this.name = name;
        this.catDiv.appendChild(this.nameHeader);

        this.image = document.createElement("img");
        this.image.setAttribute("id", name);
        this.image.setAttribute("src", image);
        this.image.setAttribute("alt", `Picture of cat named ${name}`);
        this.catDiv.appendChild(this.image);

        this.clickCount = -1;
        this.clickCounter = document.createElement("p");
        this.drawClickCount();
        this.catDiv.appendChild(this.clickCounter);

        var catObject = this;
        this.image.addEventListener('click',  function() {
            catObject.drawClickCount();
        
        });
    }

    drawClickCount() {
        this.clickCount++;
        this.clickCounter.innerHTML = `Number of clicks: ${this.clickCount}`;
    }
}



let cats = [
    new CatObject('images/Bernard.jpg', 'Bernard'),
    new CatObject('images/GreenManaleash.jpg', 'GreenManaleash'),
    new CatObject('images/Harry.jpg', 'Harry'),
    new CatObject('images/MrWhiskers.jpg', 'MrWhiskers'),
    new CatObject('images/PeeWee.JPG', 'PeeWee'),
    new CatObject('images/PeekABoo.JPG', 'PeekABoo'),
    new CatObject('images/Whitey.JPG', 'Whitey')
];

let catMap = new Map();

const list = document.getElementById('catNames');
cats.forEach(function(cat) {
    const catNameItem = document.createElement('li');
    catNameItem.setAttribute('id', cat.name);
    catNameItem.innerHTML = cat.name;
    catMap.set(cat.name, cat);
    list.appendChild(catNameItem);
});

list.addEventListener('click', function(e) {
 
    const cat = catMap.get(e.target.id);
    alert(cat.name);

    let catContainer = document.getElementById('catContainer');
    while (catContainer.firstChild) {
        catContainer.removeChild(catContainer.firstChild);
    }

    catContainer.appendChild(cat.catDiv);
});
