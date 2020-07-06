function onlyNumbers(e,type)
{
   var keynum;
   var keychar;
   var numcheck;
   if(window.event) // IE
   {
      keynum = e.keyCode;
   }
   else if(e.which) // Netscape/Firefox/Opera
   {
      keynum = e.which;
   }
   keychar = String.fromCharCode(keynum);
   numcheck = /\d/;

   switch (keynum)
   {
      case 8:    //backspace
      case 9:    //tab
      case 35:   //end
      case 36:   //home
      case 37:   //left arrow
      case 38:   //right arrow
      case 39:   //insert
      case 45:   //delete
      case 46:   //0
      case 48:   //1
      case 49:   //2
      case 50:   //3
      case 51:   //4
      case 52:   //5
      case 54:   //6
      case 55:   //7
      case 56:   //8
      case 57:   //9
      case 96:   //0
      case 97:   //1
      case 98:   //2
      case 99:   //3
      case 100:  //4
      case 101:  //5
      case 102:  //6
      case 103:  //7
      case 104:  //8
      case 105:  //9
         result2 = true;
         break;
      case 109: // dash -
         if (type == 'phone')
         {
            result2 = true;
         }
         else
         {
         result2 = false;
         }
      break;
      default:
         result2 = numcheck.test(keychar);
         break;
   }

   return result2;
}


jQuery(function () {
                // var counter = 599;
                var one = 0;
                var ten = 0;
                var hundered = 6;
                var intervalId = setInterval(function () {
                    time();
                }, .7);
                function time() {
                    one--;
                    if (one == -1) {
                        ten = ten - 1;
                        one = 0 + 9;
                    }
                    if (ten == -1) {
                        hundered = hundered - 1;
                        ten = 0 + 9;
                    }
                    var wholeNum = hundered + '' + ten + '' + one;
                    if (wholeNum == 250) {
                        clearInterval(intervalId);
                    }
                    $('.timer').html('<span>' + hundered + '</span><span>' + ten + '</span><span>' + one + '</span>');
                }
                var min = 0;
                var second = 00;
                var zeroPlaceholder = 0;
                var counterId = setInterval(function () {
                    countDown();
                }, 1000);
                function countUp() {
                    second++;
                    if (second == 59) {
                        second = 00;
                        min = min + 1;
                    }
                    if (second == 10) {
                        zeroPlaceholder = '';
                    } else {
                        if (second == 00) {
                            zeroPlaceholder = 0;
                        }
                        jQuery('.count-up').html(min + ':' + zeroPlaceholder + second);
                    }
                }
                var min1 = 9;
                var second1 = 59;
                var zeroPlaceholder1 = 0;
                function countDown() {
                    second1--;
                    if (min1 > 0) {
                        if (second1 == -1) {
                            second1 = 59;
                            min1 = min1 - 1;
                        }
                        if (second1 >= 10) {
                            zeroPlaceholder1 = '';
                        } else if (second1 < 10) {
                            zeroPlaceholder1 = 0;
                        } else {
                            if (second1 == 00) {
                                zeroPlaceholder1 = 0;
                            }
                        }
                        jQuery('.count-up').html(min1 + ':' + zeroPlaceholder1 + second1);
                    } else {
                        jQuery('.count-up').html('0:00');
                    }
                }
            });


function addremoveclass(id)
{
    $(".tabed_area p").removeClass('active');
    $("#post_" + id + "").addClass('active');
    $('.tab_cont').hide();
    $('#tab' + id + '').show();
    $('#custom_product').val(id);
    $('#checkout_form').attr('action','./step2.php?product_id='+id)
}

function valueChanged()
{
    if ($('#box1').is(":checked")){
      $('#billingSameAsShipping').val('YES');
        $(".billing_add").hide();
        $("#billing_street_address").removeAttr('required');
        $("#billing_city").removeAttr('required');
        $("#billing_state").removeAttr('required');
        $("#billing_postcode").removeAttr('required');
    }
    else{
        $(".billing_add").show();
             $('#billingSameAsShipping').val('NO');
             $("#billing_street_address").prop('required',true);
        $("#billing_city").prop('required',true);
        $("#billing_state").prop('required',true);
        $("#billing_postcode").prop('required',true);
      }
}



  $(document).ready(function () {
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 100, // distance to the element when triggering the animation (default is 0)
        mobile: false        // trigger animations on mobile devices (true is default)
    });
    wow.init();
});
