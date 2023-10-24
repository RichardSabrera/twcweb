
//OBTENER NOSOTROS
axios.get('https://lappapiwebtwc.azurewebsites.net/api/SiteWeb/Us')
    .then((respuesta) => {

        $("#usText").text(respuesta.data[0].description);

    }).catch(() => {

        console.log('No funcionas')
    })

axios.get('https://lappapiwebtwc.azurewebsites.net/api/SiteWeb/Purpose')
    .then((respuesta) => {

        $("#idPurpose").text(respuesta.data[0].description);

    }).catch(() => {

        console.log('No funcionas')
    })

//OBTENER BANNER
axios.get('https://lappapiwebtwc.azurewebsites.net/API/SiteWeb/BANNER')
    .then((respuesta) => {

        //GENERAMOS CARRUSEL
        var carouselInner = $(".carousel-inner");
        var carouselIndicators = $(".carousel-indicators");

        // Itera sobre los datos de la API y genera los elementos del carousel
        respuesta.data.forEach(function (item, index) {
            // Crea el elemento del carousel
            var carouselItem = $("<div>").addClass("carousel-item");

            // Si es el primer elemento, añade la clase 'active'
            if (index === 0) {
                carouselItem.addClass("active");
            }

            // Crea la imagen y establece el atributo 'src' con el valor de 'image' de la API
            var image = $("<img>").addClass("d-block w-100").attr("src", "data:image/png;base64," + item.image);

            // Agrega la imagen al elemento del carousel
            carouselItem.append(image);

            // Agrega el elemento del carousel al elemento 'carouselInner'
            carouselInner.append(carouselItem);

            // Crea el indicador del carousel
            var indicator = $("<button>")
                .attr("type", "button")
                .attr("data-bs-target", "#carouselExampleIndicators")
                .attr("data-bs-slide-to", index)
                .attr("aria-label", "Slide " + (index + 1));

            // Si es el primer indicador, añade la clase 'active'
            if (index === 0) {
                indicator.addClass("active");
            }

            // Agrega el indicador al elemento 'carouselIndicators'
            carouselIndicators.append(indicator);
        });
    }).catch(() => {

        console.log('No funcionas')
    })
