var $input = $('#icon_prefix');

function loadPage() {
  $('#modal1').modal();
  paintRestaurants(restaurants);
  $input.keyup(restaurantFilter);
}

function paintRestaurants(array) {
  /* Plantilla html */
  var template = '<div class="photo-food">' +
                    '<img src="__src__" class="modal-trigger food-photo" data-src="__src__" data-name="__name__" data-adress="__adress__" data-food="__food__" data-special-food="__special-food__" data-service="__service__" href="#modal1" alt="Photo food">' +
                  '</div>';

  var finalTemplate = "";
  /* Dando atributos a los elementos */
  array.forEach(function(restaurants) {
    var $imageFood = $('<img />');
    $imageFood.attr('src', restaurants['photo']);

    finalTemplate += template.replace("__src__", restaurants.photo)
                             .replace("__name__", restaurants.name)
                             .replace("__adress__", restaurants.adress)
                             .replace("__food__", restaurants.food)
                             .replace("__service__", restaurants.service)
                             .replace("__special-food__", restaurants['special-food']);
  });

  $('#main_food_container').html(finalTemplate);

}

function selectImg() {

  // Llamando a la data con jQuery
  var $name = $(this).data('name');
  var $adress = $(this).data('adress');
  var $special = $(this).data('special-food');
  var $service = $(this).data('service');

  // Pasandole a la siguiente función la data para mintarla en el modal
  infoModal($name, $adress, $special, $service);
}

function infoModal($name, $adress, $special, $service) {
  
  // Limpiando el texto del modal
  $('.restaurantName').text("");
  $('.specialFood').text("");
  $('.adressRestaurant').text("");

  // Agregando la información de cada restaurante
  $('.restaurantName').text($name);
  $('.specialFood').text($special);
  $('.adressRestaurant').text($adress);

  var $serviceButton = $('.service');
  var $service2Button = $('.service2');
  var $order = $('.buttonOrder')

  if($service === false) {
    $serviceButton.hide();
    $service2Button.show();
    $order.hide();
  } else {
    $serviceButton.show();
    $service2Button.hide();
    $order.show();
  }
}

function restaurantFilter($dataRestaurant) {

  if($input.val().trim().length > 0) {
    var textInput = $input.val().toLowerCase();
    var filteredRestaurants = restaurants.filter(function(restaurants) {
       return restaurants.food.toLowerCase().indexOf(textInput) >= 0;
    });

    paintRestaurants(filteredRestaurants);

  } else {

    $('#main_food_container').empty();
		paintRestaurants(restaurants);
  }

}

$(document).on('click', '.photo-food img', selectImg);
$(document).ready(loadPage);
