$(document).ready(function(){
    disableBlack()
    disableRed()

    $('#comments-carousel').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
});

function setRedColor() {
    disableBlue()
    disableBlack()
    activateRed()
}

function setBlueColor() {
    disableBlack()
    disableRed()
    activateBlue()
}

function setBlackColor() {
    disableBlue()
    disableRed()
    activateBlack()
}

function disableBlue() {
    $("#style-blue").attr("disabled", "disabled");
    $("#watch-big-blue").hide();
    $("#watch-big-2-blue").hide();
    $("#youtube-video-blue").hide();
}

function disableRed() {
    $("#style-red").attr("disabled", "disabled");
    $("#watch-big-red").hide();
    $("#watch-big-2-red").hide();
    $("#youtube-video-red").hide();
}

function disableBlack() {
    $("#style-black").attr("disabled", "disabled");
    $("#watch-big-black").hide();
    $("#watch-big-2-black").hide();
    $("#youtube-video-black").hide();
}

function activateBlue() {
    $("#style-blue").removeAttr('disabled');
    $("#watch-big-blue").show();
    $("#watch-big-2-blue").show();
    $("#youtube-video-blue").show();
}

function activateRed() {
    $("#style-red").removeAttr('disabled');
    $("#watch-big-red").show();
    $("#watch-big-2-red").show();
    $("#youtube-video-red").show();
}

function activateBlack() {
    $("#style-black").removeAttr('disabled');
    $("#watch-big-black").show();
    $("#watch-big-2-black").show();
    $("#youtube-video-black").show();
}
