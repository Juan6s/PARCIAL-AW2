import { recipe } from "../../components/recipe.js";
import { traerIngredientes } from "../../api/ing.api.js";
import { traerRecetas } from "../../api/recipe.api.js";
import { agregarRecetas } from "../../api/recipe.api.js";

const btnAdd = document.getElementById("add");
const btnCancel = document.getElementById("cancel");
const btnCreate = document.getElementById("create");

const arrIng = [];

btnCreate.addEventListener("click", async () => {
  const listaIngredientes = await traerIngredientes();

  const name = document.getElementById("name").value;
  const ingredientes = arrIng.map((ing) => {
    const ingrediente = listaIngredientes.find((i) => {
      return i.nombre === ing.ing;
    });
    return {
      idIngrediente: ingrediente.id,
      cantidad: ing.quantity,
    };
  });
  console.log(ingredientes)

  await agregarRecetas(name, ingredientes);
  await listarRecetas();
});

btnAdd.addEventListener("click", () => {
  const quantity = document.getElementById("quantity").value;
  const ing = document.getElementById("ing").value;
  const li = document.createElement("li");

  arrIng.push({ quantity, ing });
  li.textContent = `${ing}: ${quantity}`;
  document.getElementById("list").appendChild(li);
});

btnCancel.addEventListener("click", () => {
  arrIng.splice(0, arrIng.length);
  document.getElementById("list").innerHTML = "";
});

window.addEventListener("load", async function () {
  const ingredientes = await traerIngredientes();
  

  ingredientes.forEach((ingrediente) => {
    const option = document.createElement("option");
    option.value = `${ingrediente.nombre}`;
    option.innerHTML = `${ingrediente.nombre}`;
    document.getElementById("ing").appendChild(option);
  });
  listarRecetas();
 
});


async function listarRecetas(){
  const recetas = await traerRecetas();
  document.getElementById("listRecipe").innerHTML = ""

  recetas.forEach((receta) => {
    const ingredientes = receta.ingredientes.map((ingrediente) => {
      return {
        name: ingrediente.nombre,
        quantity: ingrediente.cantidad,
      };
    });

    const recetaHTML = recipe(receta.nombre, ingredientes);
    document.getElementById("listRecipe").innerHTML += recetaHTML;
  });
}