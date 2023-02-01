let contador = 0;
let inputTarefa = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");


function addTarefa(){
     let valorInput = inputTarefa.value;

     if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
        
        ++contador;
        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <span id="icone_${contador}" class="material-symbols-outlined circleOpen">
                trip_origin
                </span>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><span class="material-symbols-outlined">
                delete
                </span></button>
        </div>

    </div>`;

        main.innerHTML += novoItem;

        //Zerando campo
        inputTarefa.value = "";
        inputTarefa.focus();

     }
}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    //console.log(classe);

    if(classe=="item"){
        item.classList.add('clicado');

        var icone = document.getElementById('icone_'+id);

        icone.innerHTML = "";
        icone.innerHTML = "check_circle";
        //icone.classList.remove('circleOpen');
        //icone.setAttribute('id','itemFeito');

        item.parentNode.appendChild(item);

    }else{
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_'+id);

        icone.innerHTML = "";
        icone.innerHTML = "trip_origin";
        //icone.classList.remove('circleOpen');
        //icone.setAttribute('id','itemFeito');
    }
}


inputTarefa.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})