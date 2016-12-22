$(function() {

///////// TABS /////////////

  var $text = $('#text');
  var $style = $('#style');
  var $script = $('#script');

  var $one = $('.one');
  var $two = $('.two');
  var $three = $('.three');

  $text.on('click', function() {
    $one.css({
      display: 'block'
    });
    $two.css({
      display: 'none'
    });
    $three.css({
      display: 'none'
    });
    $text.css({
      borderBottom: '5px solid #e6e6e6'
    });
    $style.css({
      borderBottom: 'none'
    });
    $script.css({
      borderBottom: 'none'
    })
  });

  $style.on('click', function() {
    $one.css({
      display: 'none'
    });
    $two.css({
      display: 'block'
    });
    $three.css({
      display: 'none'
    });
    $text.css({
      borderBottom: 'none'
    });
    $style.css({
      borderBottom: '5px solid #e6e6e6'
    });
    $script.css({
      borderBottom: 'none'
    })
  });

  $script.on('click', function() {
    $one.css({
      display: 'none'
    });
    $two.css({
      display: 'none'
    });
    $three.css({
      display: 'block'
    });
    $text.css({
      borderBottom: 'none'
    });
    $style.css({
      borderBottom: 'none'
    });
    $script.css({
      borderBottom: '5px solid #e6e6e6'
    })
  });

///////// FORM /////////////

var $firstname = $('.firstname');
var $lastname = $('.lastname');
var $address = $('.address');

var $firstnameHelp = $('.firstnameHelp');
var $lastnameHelp = $('.lastnameHelp');
var $addressHelp = $('.addressHelp');

var $button = $('button');

function over1() {
  $firstnameHelp.animate({
    opacity: 0.7
  }, 100)};

function out1() {
  $firstnameHelp.animate({
    opacity: 0
  }, 100)};


function over2() {
  $lastnameHelp.animate({
    opacity: 0.7
  }, 100)};

function out2() {
  $lastnameHelp.animate({
    opacity: 0
  }, 100)};


function over3() {
  $addressHelp.animate({
    opacity: 0.7
  }, 100)};

function out3() {
  $addressHelp.animate({
    opacity: 0
  }, 100)};

$firstname.hover(over1, out1);
$lastname.hover(over2, out2);
$address.hover(over3, out3);

$firstname.focus(over1);
$firstname.focusout(out1);
$lastname.focus(over2);
$lastname.focusout(out2);
$address.focus(over3);
$address.focusout(out3);

$button.click(function() {
  over1();
  over2();
  over3();
});

});
