$.get('template.hbs', function(data){
    var template = Handlebars.compile(data);

    $.get('products.json', function(data){
        var html= template(data);

        $('.row1').append(html);
    })
})