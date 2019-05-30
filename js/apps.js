/* 
Model
Optopus
View
*/

var model = {

    gatoActual: null,
    gatitos: [
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
        img: 'img/cat_5.png',
    }
    ]

}



var optopus = {
    
    count_img: function(){ //cuenta los click de la imgen
        var img = document.getElementById('cat-img');
        img.addEventListener('click',function(){
        console.log(model.gatitos[model.currentCat - 1].count);
        model.gatitos[model.currentCat - 1].count = model.gatitos[model.currentCat - 1].count + 1;
        return view.render();
        }, false)
        
    },

    currentCat: function(){
        
        for (gato of model.gatitos) {
            var num = gato.id;
            var elem = document.getElementById(gato.id);
            elem.textContent = gato.name; //crea los nombres wey

            elem.addEventListener('click', (function(numCopy) { //este puto for guarda la id del <li> actual
                return function() {
                    model.currentCat = numCopy;
                    modelo = model.currentCat;
                    view.render();
                };
            })(num));
        }//final del for
        }



}



var view = {

    createList: function(){ // crea la lista
        var ula = document.getElementById('list');

        for (gatos of model.gatitos){
            var list = document.createElement('li');
            list.id = gatos.id;
            list.textContent = gatos.name;
            ula.appendChild(list);
        }//final del for

    },

    render: function(){
        document.getElementById('cat-name').textContent = model.gatitos[modelo - 1].name;
        document.getElementById('cat-count').textContent = model.gatitos[modelo - 1].count;
        document.getElementById('cat-img').src = model.gatitos[modelo - 1].img;
    }







}

view.createList();
optopus.currentCat();
optopus.count_img();





