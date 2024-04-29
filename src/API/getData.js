function getData() {
  return fetch('http://localhost:8000')
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      return data; // Retornar los datos para que puedan ser capturados externamente
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
      throw error; // Lanzar el error para que pueda ser manejado externamente
    });
}

export default getData;