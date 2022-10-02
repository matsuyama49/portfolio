
$(function(){
  var flg = null;
  var check_access = function () {
    // ★sessionStorageの値を判定
    if (sessionStorage.getItem('access_flg')) {
      // 2回目以降
      flg = 1;
    } else {
      // 1回目
      sessionStorage.setItem('access_flg', true);
      flg = 0
    }
    return flg;
  }
 
  var $i = check_access();
  if($i == 0){
    // 1回目アクセスの処理
    $(".loader").delay(3000).fadeOut('slow');
    $(".circles-to-rhombuses-spinner").delay(2000).fadeOut('slow');
  }else{
    // 2回目アクセスの処理
    $(".loader").css("display","none")
    $(".circles-to-rhombuses-spinner").css("display","none");
  }
});


(function($) {
  function generateBarGraph(wrapper) {
    // Set Up Values Array
    var values = [];

    // Get Values and save to Array
    $(wrapper + ' .bar').each(function(index, el) {
      values.push($(this).data('value'));
    });

    // Get Max Value From Array
    var max_value = Math.max.apply(Math, values);

    // Set width of bar to percent of max value
    $(wrapper + ' .bar').each(function(index, el) {
      var bar = $(this),
          value = bar.data('value'),
          percent = Math.ceil((value / max_value) * 100);

      // Set Width & Add Class
      bar.width(percent + '%');
      bar.addClass('in');
    });
  }

  // Generate the bar graph on window load...
  $(window).on('load', function(event) {
    generateBarGraph('#dashboard-stats');
  });
})(jQuery); // Fully reference jQuery after this point.