
//OBTENER NOSOTROS
$('#loader').show();

all();

$('#loader').hide();

function all() {
    $.ajax({
        url: 'https://zealous-bay-083bf620f.4.azurestaticapps.net/api/SiteWeb/GetCargarTodo',
        method: 'GET',
        success: function (respuesta) {

            $("#usText").text(respuesta.appUs[0].description);
            $("#idPurpose").text(respuesta.appPurpose[0].description);

            var carouselInner = $(".carousel-inner");
            var carouselIndicators = $(".carousel-indicators");

            respuesta.appbanner.forEach(function (item, index) {
                var carouselItem = $("<div>").addClass("carousel-item");
                if (index === 0) {
                    carouselItem.addClass("active");
                }
                var image = $("<img>").addClass("d-block w-100").attr("src", "data:image/png;base64," + item.image);
                carouselItem.append(image);
                carouselInner.append(carouselItem);

                var indicator = $("<button>")
                    .attr("type", "button")
                    .attr("data-bs-target", "#carouselExampleIndicators")
                    .attr("data-bs-slide-to", index)
                    .attr("aria-label", "Slide " + (index + 1));
                if (index === 0) {
                    indicator.addClass("active");
                }
                carouselIndicators.append(indicator);
            });

        },
        error: function () {
            console.log('No funcionas');
        }
    });
}


function US() {
    $.ajax({
        url: 'https://localhost:7167/api/SiteWeb/Us',
        method: 'GET',
        success: function (respuesta) {
            $("#usText").text(respuesta[0].description);
        },
        error: function () {
            console.log('No funcionas');
        }
    });
}

function Purpose() {
    $.ajax({
        url: 'https://localhost:7167/api/SiteWeb/Purpose',
        method: 'GET',
        success: function (respuesta) {
            $("#idPurpose").text(respuesta[0].description);
        },
        error: function () {
            console.log('No funcionas');
        }
    });
}

function BANNER() {
    $.ajax({
        url: 'https://localhost:7167/api/SiteWeb/BANNER',
        method: 'GET',
        success: function (respuesta) {
            var carouselInner = $(".carousel-inner");
            var carouselIndicators = $(".carousel-indicators");

            respuesta.forEach(function (item, index) {
                var carouselItem = $("<div>").addClass("carousel-item");
                if (index === 0) {
                    carouselItem.addClass("active");
                }
                var image = $("<img>").addClass("d-block w-100").attr("src", "data:image/png;base64," + item.image);
                carouselItem.append(image);
                carouselInner.append(carouselItem);

                var indicator = $("<button>")
                    .attr("type", "button")
                    .attr("data-bs-target", "#carouselExampleIndicators")
                    .attr("data-bs-slide-to", index)
                    .attr("aria-label", "Slide " + (index + 1));
                if (index === 0) {
                    indicator.addClass("active");
                }
                carouselIndicators.append(indicator);
            });
        },
        error: function () {
            console.log('No funcionas');
        }
    });
}