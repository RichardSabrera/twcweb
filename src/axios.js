
//OBTENER NOSOTROS
axios.get('https://localhost:7167/api/SiteWeb/Us')
.then((respuesta) => {
    console.log(respuesta.data)
}).catch(() => {

    console.log('No funcionas')
})