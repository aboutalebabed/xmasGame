$(document).ready(function () {

    $("#settingViewAs3D").change(function () {
        if ($("#settingViewAs3D").prop('checked')){
            $("#gameContainer").attr('class','viewAs3D');
        }else{
            $("#gameContainer").attr('class','');
        }
    });







});