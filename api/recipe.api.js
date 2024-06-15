export async function traerRecetas() {
    const response = await fetch("http://localhost:3000/recetas");
  
    const recetas = await response.json();
    return recetas;
  }
  
  export async function agregarRecetas(nombre, ingredientes) {
    const response = await fetch("http://localhost:3000/recetas", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, ingredientes}),
    });
  
    await response
  }
  