$(function(){
  var $width = $('#width'),
      $height = $('#height'),       
      $btnCal = $('#calculate'),        
      $perimeter = $('#perimeter'),       
      $area = $('#area');       
      $widthValidate = $('#width-validate'),
      $heightValidate = $('#height-validate'),
      isPassValidate = false;

$width.focusout(function() {
      var result = validate($width.val());
          isPassValidate = result.isOK;
          if(!result.isOK) {
                  $widthValidate.html('宽度' + result.reason);
                        $width.select();
                            
          } else {
                  $widthValidate.html('');
                      
          }
            
});

$height.focusout(function() {
      var result = validate($height.val());
          isPassValidate = result.isOK;
          if(!result.isOK) {
                  $heightValidate.html('高度' + result.reason);
                        $height.select();
                            
          } else {
                  $heightValidate.html('');
                      
          }
            
});

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

