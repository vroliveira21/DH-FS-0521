let pets = [
{
    nome: 'Yoshi',
    nomeDono: 'Victor',
    Idade: 7,
    Tipo: 'Cachorro',
    raca: 'Akita Inu',
    peso: 40,
    genero: 'Macho',
    cor: 'ruivo',
    vacinado: true,
    },  
    {
        nome: 'Cindi',
        nomeDono: 'Caio',
        Idade: 6,
        Tipo: 'Gato',
        raca: 'Persa',
        peso: 5,
        genero: 'Fêmea',
        cor: 'Branco',
        vacinado: true,
    },
    {
        nome: 'Pituco',
        nomeDono: 'César',
        Idade: 8,
        Tipo: 'Ave',
        raca: 'Agaponis',
        peso: 0.5,
        genero: 'Fêmea',
        cor: 'Verde',
        vacinado: false,
    },
]

const listarPets = () => 
{
    for(let i=0; i < pets.length; i++){
        console.log('Nome: '+ pets[i].nome)
    } 
}
//listarPets();

function cadastrarPet (arrayPets, objetoPet){
    if (typeof objetoPet == 'object')
    return arrayPets.push(objetoPet)
}

let novoPet = {
    nome: 'Jhonny',
        nomeDono: 'Doido',
        Idade: 8,
        Tipo: 'Elefante',
        raca: 'Agaponis',
        peso: 1000,
        genero: 'Macho',
        cor: 'Cinza',
        vacinado: true,
}

cadastrarPet(pets, novoPet)

listarPets()

function validaDados(objeto){
    return (
        objeto.nome &&
        objeto.nomeDono &&
        objeto.Idade &&
        objeto.Tipo &&
        objeto.raca &&
        objeto.peso &&
        objeto.genero &&
        objeto.cor &&
        objeto.vacinado
    )
}

