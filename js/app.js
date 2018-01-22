/*Variables reutilizables*/
var $input = $('#icon_prefix');
var $restaurantName = $('.restaurantName');
var $especialFood = $('.especialFood');
var $adressRestaurant = $('.adressRestaurant');
var $serviceButton = $('.service');
var $imageFood = $('.food-photo');
var $order = $('.buttonOrder');
var $service2Button = $('.service2');
var $foodContainer = $('#food_container');

function loadPage() {
  $('#modal1').modal();
  $imageFood.click(selectImg);
  $input.keyup(restaurantFilter);
}

function selectImg() {
  var $restaurant = event.target.dataset.name;
  var $dataRestaurant = data[$restaurant];

  var $name = $dataRestaurant['name'];
  var $adress = $dataRestaurant['adress'];
  var $special = $dataRestaurant['special-food'];
  var $service = $dataRestaurant['service'];

  infoModal($name,$adress,$special,$service);
}

function infoModal($name,$adress,$special,$service) {
  $restaurantName.text("");
  $especialFood.text("");
  $adressRestaurant.text("");

  $restaurantName.text($name);
  $especialFood.text($special);
  $adressRestaurant.text($adress);

  if( $service === false) {
    $serviceButton.hide();
    $service2Button.show();
    $order.hide();
  } else {
    $serviceButton.show();
    $service2Button.hide();
    $order.show();
  }
}

function restaurantFilter() {
  $input.val().toLowerCase();
  $foodContainer.empty();
}

$(document).ready(loadPage);
