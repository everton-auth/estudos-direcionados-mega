/*
    Responsável por fazer toda a comunicação com o local Storage ou session storage
    Necessita ser feit ode forma reutilizavel para outras ocasiões.
*/

//key = chave de indexção pro meu banco de dados em sessão ou em local.
//session = Define se deve ser em sessão o salvamento de dados ou em local
//Define se deve ter algum requisito a ser seguido para enviar os dados para o banco de dados.
// variáveis com o '_' são variáveis locais
//função pai
function database(key,session){
    const _key = key
    const _session = session ? sessionStorage : localStorage    
    let _storage = new Array

    
    let _createDB = () => {

        // Se o DB não existir no local definido, ele cria um DB vazio
        if(!_session.getItem(_key)){
       
            // seta o DB inicial como vazio
            _session.setItem(_key,JSON.stringify([]))

        }

    }
    let _readDB= () => {


        // armazena o db na variavel        
        _storage = JSON.parse(_session.getItem(_key))


    }
    
    let _updateDB = () =>{
        _session.setItem(_key,JSON.stringify(_storage))
    }

    // inicio o createDB para criar o DB se ele não existir
    _createDB()

    //abro oque o meu return deve retornar
    return{

        //define como vou chamara a função dos meus valores de retorno
        // Lê os dados do DB escolhido 
        readData : () =>{
            //defino oque vou chamar
            _readDB()
        },

        //define como vou chamara a função dos meus valores de retorno
        // Salva os valores no DB

        saveData : (Data,excluir = false) => {
            // deve ser excluido? se sim, executa isso:
            if(excluir == true){

                // filtra no storage se o ID do dado recebido for diferente
                // do ID da Data, ele deixa no storage, se não for, ele cria
                // um array novo com os dados filtrados.
                _storage = _storage.filter(dado => dado.ID != Data.ID )
                
                //se não deve ser excluido, executa isso:
            }else{
                let objeto =  _storage.find(dado => dado.ID == Data.ID)

                // se o dado não existir, deve ser colocado no final do array 
                if(objeto == null){
                    _storage.push(Data)
                }
                // se o dado já existir, deve ser atualizado
                else{
                    //Resgata as chaves do Objeto
                    let keys = Object.keys(objeto)
                    //Percorre o objeto para redefinir os valores das chaves
                    keys.forEach(key =>{
                        objeto[key]= Data[key]
                    })
                }

            }
            // Atualiza o banco de dados enviando o array
            _updateDB()
        }
    }
}