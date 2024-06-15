import { traerIngredientes, agregarIngrediente } from "../../api/ing.api.js"

const btnCreate = document.getElementById("create")

btnCreate.addEventListener('click',async ()=>{
    const name = document.getElementById("name").value
    console.log(name)
    await agregarIngrediente(name)
    await recargarIngredientes();
    
})

window.addEventListener('load', async function() {
    /*Llenar lista con los ingredientes existentes*/
    
    await recargarIngredientes();
})


async function recargarIngredientes(){
    const ingredientes = await traerIngredientes();
    document.getElementById('list').innerHTML =""
    ingredientes.forEach(ingrediente => {
        const li = document.createElement('li')
        li.textContent = `${ingrediente.nombre}`
        document.getElementById('list').appendChild(li)
    });
}