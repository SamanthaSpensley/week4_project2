$(document).ready(function(){
$('#submitBtn').click(function(){
    var value = $('.textInput').val();
    $('<h3>' + value + '</h3>').insertAfter('button');
}); 
    
//2  
$('.chex input').change(function(){
    $('h2').toggleClass('hidden');
});
    
//3
$('.table-striped > tbody:last').append('<tr><td>Jelly</td><td>17</td><td>Hangry</td>')
    
// or $('tbody').append('<tr><td>Jelly</td><td>17</td><td>Hangry</td>')   

//4
$('tbody').children().each(function(){
    var hunger = $(this).children("td:nth-child(3)");
    if($(hunger).text()==='Content'){
        $(hunger).css("color", "#629632"); 
    }
    else{
        $(hunger).css("color", "#CD2626");
    }
});

//5
$('.btn-warning').click(function(){
    $('tbody').children().each(function(){
        var heavy = $(this).children("td:nth-child(2)");
        if($(heavy).text()<10){
            $(this).hide();
        }
    })
});
    
//6
$('.btn-success').click(function(){
    $('tbody').children().each(function(){
       var name = $(this).children('td:nth-child(1)');
        $(name).text($(name).text().toLocaleUpperCase());    
    })
});
    
//7
$('.btn-primary').click(function(){
    $('tbody').toggle();
})

});
