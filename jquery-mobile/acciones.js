// JavaScript Document
$(document).ready(function(e) {
    $('#principal').height($('#page').height()); //calcular el alto de la pantalla del dispositivo 
	        document.addEventListener("deviceready",function(){
			//pregarga el sonido
			audio=windows.plugins.LowLatencyAudio;
			audio.preloadFX('perro','audio/perro.mp3',function(){},function(e){alert('Error'+e);});
			audio.preloadFX('pajaro','audio/pajaro.mp3',function(){},function(e){alert('Error'+e);});
			audio.preloadFX('gato','audio/gato.mp3',function(){},function(e){alert('Error'+e);});
			audio.preloadFX('gallo','audio/gallo.mp3',function(){},function(e){alert('Error'+e);});
			audio.preloadFX('caballo','audio/caballo.mp3',function(){},function(e){alert('Error'+e);});
			audio.preloadFX('borrego','audio/borrego.mp3',function(){},function(e){alert('Error'+e);});
			
			audio.preloadFX('aguila','audio/aguila.mp3',function(){},function(e){alert('Error'+e);});
			audio.preloadFX('elefante','audio/elefante.mp3',function(){},function(e){alert('Error'+e);});
			audio.preloadFX('hiena','audio/hiena.mp3',function(){},function(e){alert('Error'+e);});
			audio.preloadFX('leon','audio/leon.mp3',function(){},function(e){alert('Error'+e);});
			audio.preloadFX('lobo','audio/lobo.mp3',function(){},function(e){alert('Error'+e);});
			audio.preloadFX('tigre','audio/tigre.mp3',function(){},function(e){alert('Error'+e);});
			
			
			//reproducir las notas
			$('.nota').bind('touchstart',function(){$(this).addClass('tacada');
	audio.play($(this).attr('id'));});
	        $('.nota').bind('touchend',function(){$(this).removeClass('tocada');});
			
			
			},false);  //deviceready
}); //ready