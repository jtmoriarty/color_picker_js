(function( $ ) {
$.fn.colorPicker = function() {
	return this.each(function() {
		$(this).click(function(){
			$('#color-picker-pannel').toggle();
			
			if($('.color-btn').is('*')){

			}else{
				for(var r=0; r <= 16; r++){
					for(var g=0; g <= 16; g++){
						for(var b=0; b <= 16; b++){
							var subString = r.toString(16) + g.toString(16) + b.toString(16);
							if(subString.length < 4){
								$('#color-row').append("<span class=color-btn id='color-btn" + r.toString(16) + g.toString(16) + b.toString(16) + "' style='background-color: #" + r.toString(16) + g.toString(16) + b.toString(16) + "'></span>");
							}else{

							}
						}
					}
				}
			}

			$('.color-btn').mouseenter(function(){
				var color_id = $(this).attr('id');
				$('#' + color_id).css('margin-top', '-30px');
				$('#' + color_id).css('margin-left', '-30px');
				$('#' + color_id).css('height', '30px');
				$('#' + color_id).css('width', '30px');
				var color_hex_value = $('#' + color_id).css('background-color');
				$('#color-hex-display').text(color_hex_value);
			});

			$('.color-btn').mouseleave(function(){
				var color_id = $(this).attr('id');
				$('#' + color_id).css('margin-top', '0px');
				$('#' + color_id).css('margin-left', '0px');
				$('#' + color_id).css('height', '10px');
				$('#' + color_id).css('width', '10px');
			});
		
			$('.color-btn').click(function(){
				var color_id = $(this).attr('id');
				var color_hex_value = $('#' + color_id).css('background-color');
				$('#color-input').attr('value', 'color: ' + color_hex_value + ';');
			});
			});
		});
	};
})( jQuery );