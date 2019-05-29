/* 
Model
Optopus
View
*/


var model = {

    gatitos = [
    {  
        id: 1,
        count: 0,
        name: 'pepito',
        img: 'img/cat.png',
    },
    {
        id: 2,
        count: 0,
        name: 'pablo',
        img: 'img/catsad.png',
    },
    {
        id: 3,
        count: 0,
        name: 'pedro',
        img: 'img/catthree.png',
    },
    {
        id: 4,
        count: 0,
        name: 'Zurullito',
        img: 'img/cat_4.png',
    },
    {
        id: 5,
        count: 0,
        name: 'Semental del culo',
        img: '../img/cat_4.png',
    }
    ]
}



var optopus = {
    // for (gato of gatitos) {
    //     // This is the number we're on...
    //     var num = gato.count;
    
    //     // We're creating a DOM element for the number
    //     var elem = document.getElementById(gato.id);
    //     elem.textContent = num;
    
    //     // ... and when we click, alert the value of `num`
    //     elem.addEventListener('click', (function(numCopy) {
    //         var id_span = gato.name;
    //         return function() {
    //             numCopy = numCopy + 1;
    //             document.getElementById(id_span).textContent= numCopy;
    //         };
    //     })(num));
    // };
    
    
}



var view = {

    get_id = function(){
        this.cat_element = document.getElementById('cat');
        this.cat_name = document.getElementById('cat-name');
        this.cat_count = document.getElementById('cat-count');
        this.cat_img = document.getElementById('cat-img');
        this.cat_list = document.getElementById('cat_list') 
    },

    render = function(){
        
        for(gato of model.gatitos){
            var list = document.createElement('li');
            list.textContent = this.cat_name
        
            this.cat_list.appendChild(list);
        }

    }

    // for (gato of gatitos) { 
    //     var elem = document.createElement('img');
    //     var span = document.createElement('span');
    //     var count = document.createElement('span');
        
    //     elem.src = gato.img;
    //     elem.className = "gatos";
    //     elem.id = gato.id;
    //     count.id = gato.name;
    
    //     span.innerHTML = gato.name;
    //     count.innerHTML = gato.count;
        
    //     document.body.appendChild(elem);
    //     document.body.appendChild(span);
    //     document.body.appendChild(count);
    // }
    
}


view.render();
