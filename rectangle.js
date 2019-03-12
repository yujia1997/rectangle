$(function() {
    var $width   = $('#rectangle-width'),
      $height  = $('#rectangle-height'),
      $calc    = $('#rectangle-calc'),
      blnValid = false;

$calc.click(function() {
      if(!blnValid) return;

          var width  = Number($width.val()),
          height = Number($height.val()),
          p      = roundFractional(width * 2 + height * 2, 2),
          a      = roundFractional(width * height, 2);

    $('#rectangle-perimeter').val(p);
        $('#rectangle-area').val(a);
          
});

$width.focusout(function() {
      blnValid = validate('#rectangle-width');
        
});
  
$height.focusout(function() {
      blnValid = validate('#rectangle-height');
        
});

