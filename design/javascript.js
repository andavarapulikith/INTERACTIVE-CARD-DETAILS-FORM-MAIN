
$('#cardholder').focusout(() => {
    $('.name').text($('#cardholder').val().toUpperCase());
})




$('#cardnumber').focusin(() => {
    let k = true;
    $('.cant').text("");
    $("#cardnumber").css("border", "0.1rem solid black");
    
    $('#cardnumber').focusout(() => {
        let num = "";
         num = $('#cardnumber').val().toUpperCase();
        k = $.isNumeric(num);
        if(num.length>=12)
            $('.number').text(num[0] + num[1] + num[2] + num[3] + "  " + num[4] + num[5] + num[6] + num[7] + "  " + num[8] + num[9] + num[10] + num[11]);
        else if (num.length < 12)
        {
            
        }
        if (k == false) {
            $('.cant').text("Wrong Format,Numbers only")
            $("#cardnumber").css("border", "0.1rem solid red")
        }

    })
})
let k = true;
let month = "";
$('#expdatemm').focusin(() => {
    
    k = true;
    $('.expiryblank').text("");
    
    $("#expdatemm").css("border", "0.1rem solid black");
    
    $('#expdatemm').focusout(() => {
        month = $('#expdatemm').val();
        $('.date').text($('#expdatemm').val() + "/00");
        if (month == '')
        $('.date').text("00" + "/00");
        
        if (month == '') {
            k = false;
            $('.expiryblank').text("Cant be blank")
            $("#expdatemm").css("border", "0.1rem solid red")
            
        }
        else
            k = true;
    })

})

$('#expdateyy').focusin(() => {
    if (k == true)
    {
        $('.expiryblank').text("");
    
        $("#expdateyy").css("border", "0.1rem solid black");
    }
    
    $('#expdateyy').focusout(() => {
        let year = $('#expdateyy').val();
        $('.date').text(month +"/"+ $('#expdateyy').val() );
        if (year == '')
        $('.date').text(month + "/00");
        
        if (year == '') {
            k = false;
            $('.expiryblank').text("Can't be blank")
            $("#expdateyy").css("border", "0.1rem solid red")
            
        }
        else
            k = true;
    })

})


$('#cvc').focusin(() => {
    let k = true;
    $('.cvcblank').text("");
    $("#cvc").css("border", "0.1rem solid black");
    
    $('#cvc').focusout(() => {
        let numb = $('#cvc').val();
        
        $('.num').text(numb);
        if (numb=='') {
            $('.cvcblank').text("Can't be blank");
            $("#cvc").css("border", "0.1rem solid red");
        }

    })
})

var submit = document.querySelector(".anyone");
var continued = document.querySelector(".third");
var prev= document.querySelector(".second");

var confirmed = document.querySelector(".confirm");

confirmed.addEventListener("click", () => {
    continued.style.zIndex = 2;
    prev.style.zIndex = -1;
    
})



