$(document).ready(function($){

	//-- calendar

	var $calendar = $("#calendar");
	var $toolbar = $(".fc-toolbar");
	if($calendar.length){
		$calendar.fullCalendar({
	        googleCalendarApiKey: 'AIzaSyCDxXdciZb0hTHVWlNA_ZHYNy08Tojv0as',
	        events: {
	            googleCalendarId: 'g0lb1hgrjbpcf3bgeesla4ej6g@group.calendar.google.com',
	            className: 'gcal-event' // an option!
	        },
			buttonText: {
	        	today:    'Hoy',
			    month:    'Mes',
			    week:     'Semana',
			    day:      'Dia'
	        },
			monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
	    	monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],	
			dayNames: ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'],
			dayNamesShort: ['Dom','Lun','Mar','Mie','Jue','Vie','Sab']
	    });

		$calendar.find("button.fc-button").addClass("cmCalendarButtons");
	}

});