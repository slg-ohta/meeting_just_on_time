// jQuery snippet for changing HTML from into JSON
(function ($) {
    $.fn.serializeFormJSON = function () {

        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
})(jQuery);

$('#submit').click(function(e) {
    // prevent default submiting form
    e.preventDefault();
    
    // serialize data to JSON
	var data = $('#row1').serializeFormJSON();
    console.log(data);
    $.ajax({
       	url: 'https://sheetsu.com/apis/04fbd25d',
       	data: data,
        dataType: 'json',
        type: 'POST',
        
        // place for handling successful response
        // showing (redirecting to) something like /thanks.html
        //page could be a good idea
        success: function(data) {
    	   	console.log(data);
            var data = $('#row2').serializeFormJSON();
            $.ajax({
                url: 'https://sheetsu.com/apis/04fbd25d',
                data: data,
                dataType: 'json',
                type: 'POST',
                
                // place for handling successful response
                // showing (redirecting to) something like /thanks.html
                //page could be a good idea
                success: function(data) {
                    console.log(data);
                },
                
                // handling error response
                error: function(data) {
                    console.log(data);
                }
            });

        },
        
        // handling error response
        error: function(data) {
        	console.log(data);
        }
    });


    
    return false;
});