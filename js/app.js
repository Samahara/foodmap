

function loadPage() {
  $('#modal1').modal();
  paintRestaurants(restaurants);
  /*$imageFood.click(selectImg);
  $input.keyup(restaurantFilter);*/
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



/*
function selectImg() {
  var $restaurant = event.target.dataset.name;
  var $dataRestaurant = data[$restaurant];

  var $name = $dataRestaurant['name'];
  var $adress = $dataRestaurant['adress'];
  var $special = $dataRestaurant['special-food'];
  var $service = $dataRestaurant['service'];

  infoModal($name,$adress,$special,$service);
  restaurantFilter($dataRestaurant);
}
function infoModal($name,$adress,$special,$service) {
  $restaurantName.text("");
  $especialFood.text("");
  $adressRestaurant.text("");

  $restaurantName.text($name);
  $especialFood.text($special);
  $adressRestaurant.text($adress);

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
  var $foodType = $dataRestaurant['food'];
  var $textInput = $input.val().toLowerCase();

  if($($input).val().trim().length > 0) {
    var filteredRestaurants = $dataRestaurant.filter(function($foodType) {
       console.log($foodType.toLowerCase().indexOf($textInput) >= 0)
    });
    filteredRestaurants.forEach(function($foodType){

    });
  } else {
    filteredRestaurants.forEach(function($foodType){

    });
  }

}
*/


$(document).ready(loadPage);
