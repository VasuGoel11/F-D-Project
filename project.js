var i=0, totalPrice = 0
$(".b").click(function(){
    var id = $(this).attr('id');
    id = id.split('b');
    id = id[1]
    cart(id)
  })



function cart(id){
    var size = $('#size'+id).val().split('+')[0]
    var crust = $('#crust'+id).val().split('+')[0]
    console.log(crust)
    console.log(size)
    var img = $('#img'+id).attr('src')
    var price = $('#price'+id).text()
    price = parseInt(price)
    switch(size){
        case 'medium':
            price+=20
            break
        case 'large':
            price+=30    
            break
    }
    console.log(price)
    switch(crust){
        case 'cheese burst ':
            price+=20
            break
        case 'new hand tossed ':
            price+=30    
            break
    }
    console.log(price)
    totalPrice +=price

    
    pizza(id, size, crust, img, price)
}

function pizza(id, size, crust, img, price){
    var parent = $('.cart');
    var str = '<div id="pizza'+i+'" class="item">'+
    '<div>'+
        '<img class="item-img" src="'+img+'">'+
    '</div>'+
    '<div>'+
        '<p id="pricee'+i+'">Price ₹'+price+'</p>'+
        '<p>'+size+' and '+crust+'</p>'+
        '<button class="btn btn-danger buttonremove" id="buttonremove'+i+'">Remove</button>'+
    '</div>'+
'</div>'
    parent.append(str)
    i++
    $(".pp").text('Total Price: ₹'+totalPrice)
}


$(document).on('click', '.buttonremove', function()
{
    var butid = $(this).attr('id')
    butid = butid.split('buttonremove')
    butid = butid[1]
    var subtractPrice = $("#pricee"+butid).text().split('Price ₹')[1]
    console.log(subtractPrice);
    totalPrice-=subtractPrice
    console.log(totalPrice);
    $(".pp").text('Total Price: ₹'+totalPrice)
    $("#pizza"+butid).remove()
});

function myFunction(){
window.location="payment.html";
document.write('Please Wait...');
setTimeout('myFunction()',1000);
}

