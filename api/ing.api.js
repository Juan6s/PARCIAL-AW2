export async function traerIngredientes() {
  const response = await fetch("http://localhost:3000/ingredientes");

  const ingredientes = await response.json();
  return ingredientes;
}

export async function agregarIngrediente(nombre) {
  const response = await fetch("http://localhost:3000/ingredientes", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre }),
  });

  await response
}
