exports.signo = function(m,d){

	let day = parseInt(d);

	if (day >= 1 || day <= 31) {
		switch (m) {
			case '1':
				if (day < 21) {
					horoscopo = "capricornio";
				}else{
					horoscopo = "acuario";
				}
			break;

			case '2':
				if (day < 20) {
					horoscopo = "acuario";
				}else{
					horoscopo = "piscis";
				}
			break;
		
			case '3':
				if (day < 21) {
					horoscopo = "piscis";
				}else{
					horoscopo = "aries";
				}
				break;
		
			case '4':
				if (day < 21) {
					horoscopo = "aries";
				}else{
					horoscopo = "tauro";
				}
			break;

			case '5':
				if (day < 20) {
					horoscopo = "tauro";
				}else{
					horoscopo = "géminis";
				}
			break;
		
			case '6':
				if (day < 22) {
					horoscopo = "géminis";
				}else {
					horoscopo = "cáncer";
				}
			break;
		
			case '7':
				if (day < 22) {
					horoscopo = "cáncer";
				}else {
					horoscopo = "Leo";
				}
			break;
		
			case '8':
				if (day < 24) {
					horoscopo = "leo";
				}else {
					horoscopo = "virgo";
				}
				break;

			case '9':
				if (day < 23) {
					horoscopo = "virgo";
				}else {
					horoscopo = "libra";
				}break;
		
			case '10':
				if (day < 23) {
					horoscopo = "libra";
				}else {
					horoscopo = "escorpio";
				}
			break;
		
			case '11':
				if (day < 23) {
					horoscopo = "escorpio";
				}else {
					horoscopo = "sagitario";
				}
			break;
		
			case '12':
				if (day < 21) {
					horoscopo = "sagitario";
				}else {
					horoscopo = "capricornio";
				}
			break;
		
			default:
				horoscopo = "Ingrese un dia valido";
			break;
		}
		return horoscopo;
	}else{
		return "Ingrese un dia valido...";
	}
}