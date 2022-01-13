    
    
    
    const alterarVisibilidade = () => {
        var elemento = document.getElementById("Senha");

        if(elemento.getAttribute('type') == "password"){
            elemento.setAttribute('type','text');
    }else{
        elemento.setAttribute('type', 'password');
        }

    }