/** categories menu **/
$(function() {
    $(".toggle-menu").mouseenter(function() {
        let menu_id = $(this).attr("data-menu-id");
        $(menu_id).addClass("visible_menu");
    });
    $(".toggle-menu").mouseleave(function() {
        let menu_id = $(this).attr("data-menu-id");
        $(menu_id).removeClass("visible_menu");
    });
});

// custom input type file
$(document).ready(function() {
    bsCustomFileInput.init()
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});



$(function() {
    $(".btn-show-more").click(function() {
        let state = $(this).attr("data-state");
        if(state == 'full') {
            $(this).parent('.vacancy').removeClass('vacancy-full');
            $(this).parent('.vacancy').addClass('vacancy-short');
            $(this).attr("data-state", "short");
            $(this).text("Развернуть");
        } else if(state == 'short') {
            $(this).parent('.vacancy').removeClass('vacancy-short');
            $(this).parent('.vacancy').addClass('vacancy-full');
            $(this).attr("data-state", "full");
            $(this).text("Свернуть");
        }
    });
});

/* ввод значений кнопками "+" и "-" */
$(function () {
  $(".quantity-arrow-plus").click(function() {
    var num = $(this).prev(".quantity-num");
    var num_val = num.val();
    num.val(+num_val+1);
  });
  $(".quantity-arrow-minus").click(function() {
    var num = $(this).next(".quantity-num");
    var num_val = num.val();
    if (num_val>1) {
      num.val(+num_val-1);
    }
  });
});


$(function () {
  $(".order_mini").click(function() {
    $(".order_details").removeClass("od_show");
    $(this).next(".order_details").addClass("od_show");
  });
});


var el = document.getElementById('date');
el.onchange = function() {
    if (el.value === '') {
        el.classList.add("empty");
    } else {
        el.classList.remove("empty");
    }
}


