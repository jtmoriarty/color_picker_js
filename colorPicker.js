<script>
// ## COLOR PICKER ##
	for(r=0; r < 17; r++){
		for(g=0; g < 17; g++){
			for(b=0; b < 17; b++){
				if(r>9 || g>9 || b>9){
					r=r.toString(16);
					g=g.toString(16);
					b=b.toString(16);
				}
				$('#color_row').append("<span class=color_picker_btn id='color_picker_btn" + r + g + b + "' style='background-color: #" + r + g + b + "'></span>");
			}
		}
	}

	$('#font_color_pannel').toggle();

		$('.color_picker_btn').click(function(){
			var color_id = $(this).attr('id');
			var color_hex_value = $('#' + color_id).css('background-color');
			var css_value = $('#page_style_css').attr('value');
			$('#page_style_css').attr('value', css_value + 'color: ' + color_hex_value + ';');
		});

		$('.color_picker_btn').mouseenter(function(){
			var color_id = $(this).attr('id');
			$('#' + color_id).css('margin-top', '-40px');
			$('#' + color_id).css('margin-left', '-30px');
			$('#' + color_id).css('height', '40px');
			$('#' + color_id).css('width', '40px');
			var color_hex_value = $('#' + color_id).css('background-color');
			$('#color_hex_display').text(color_hex_value);
		});

		$('.color_picker_btn').mouseleave(function(){
			var color_id = $(this).attr('id');
			$('#' + color_id).css('margin-top', '0px');
			$('#' + color_id).css('margin-left', '0px');
			$('#' + color_id).css('height', '10px');
			$('#' + color_id).css('width', '10px');
		});
		</script>