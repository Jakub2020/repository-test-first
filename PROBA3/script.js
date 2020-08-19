const list = document.querySelector('.list');

const search = document.getElementById('searchBar');
const searchSize = document.getElementById('searchSize');



search.addEventListener('keyup',(e) =>{
    const containSearch = e.target.value.toLowerCase();

    const filteredList=list_items.filter(shoe =>{
      return shoe.name.toLowerCase().includes(containSearch);
    });

    displayList(filteredList);
});


searchSize.addEventListener('keyup',(e) =>{
    const containSize = e.target.value;
    const filteredSize = list_items.filter(size =>{
        return size.size.includes(containSize);
    });
    displayList(filteredSize);
});



let list_items = [
    {
        name:'Adidas White',
        price:'220',
        size:'45',
        img:'proba4.png',
        href:'http://google.com'
    },

    {
        name:'Adidas Blue',
        price:'750',
        size:'46',
        img:'proba6.png',
        href:'http://fcbarca.com'

    },

    {
        name:'Adidas Green',
        price:'530',
        size:'44',
        img:'proba2.png',
        href:'http://fcbarca.com'

    },

    {
        name:'Adidas W&B',
        price:'220',
        size:'47',
        img:'proba4.png',
        href:'http://google.com'
    },

    {
        name:'Adidas B&W',
        price:'750',
        size:'45',
        img:'proba6.png',
        href:'http://fcbarca.com'

    },

    {
        name:'Adidas G&B',
        price:'530',
        size:'45',
        img:'proba2.png',
        href:'http://fcbarca.com'

    }
    
];


var newArray = list_items.slice();









function displayList (array=[]){
    list.innerHTML="";

    for(let i=0; i < array.length; i++){
        let item = array[i];

        let item_element = document.createElement('div');
        item_element.classList.add('container2');

        let item_element2 = document.createElement('div');
        item_element2.classList.add('row');
        
        item_element.appendChild(item_element2);

        let item_element3 = document.createElement('div');
        item_element3.classList.add('col-md-4');
        
        item_element2.appendChild(item_element3);


        let card = document.createElement('div');
        card.classList.add('card');
       
        item_element3.appendChild(card);

        let imgBx = document.createElement('div');
        imgBx.classList.add('imgBx');


        card.appendChild(imgBx);


        let img = document.createElement('img');
        img.src=item.img;

        
        imgBx.appendChild(img);


        let content = document.createElement('div');
        content.classList.add('contentBx');


        card.appendChild(content);


        let contentH2 = document.createElement('h2');
    
        contentH2.innerHTML=item.name;


        content.appendChild(contentH2);


        let size = document.createElement('div');
        size.classList.add('size');


        content.appendChild(size);


        let sizeH3 = document.createElement('h3');
        sizeH3.innerHTML='Cena: '+ item.price + ' JURO';

        size.appendChild(sizeH3);

        let size2H3 = document.createElement('h3');
        size2H3.innerHTML='&nbsp Rozmiar: '+ item.size;

        size.appendChild(size2H3);

        let button = document.createElement('a');
        button.setAttribute('href', item.href);
        button.innerHTML='Kup Teraz';

        content.appendChild(button);
        

        list.appendChild(item_element);

    }
}

displayList(list_items);


const sort_name_btn = document.querySelector('.sort-price');
const sort_name_btn2 = document.querySelector('.sort-price2');
const set_fabric=document.querySelector('.fabric');





sort_name_btn.addEventListener('click', ()=>{
    let array = sort_array_by(newArray, 'price');
    displayList(array);

});


sort_name_btn2.addEventListener('click', ()=>{
    let array = sort_array_by2(newArray, 'price');
    displayList(array);

});


function sort_array_by(array,sort){
    array.sort(function (a,b){
        if(a[sort] < b[sort]) return -1;
        if(a[sort] > b[sort]) return 1;
        return 0;

    });

    return array;
}


function sort_array_by2(array,sort){
    array.sort(function (a,b){
        if(a[sort] > b[sort]) return -1;
        if(a[sort] < b[sort]) return 1;
        return 0;

    });

    return array;
}


set_fabric.addEventListener('click', ()=>{
    displayList(list_items);


});




