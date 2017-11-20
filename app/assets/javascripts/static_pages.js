document.addEventListener("DOMContentLoaded", ready); /* Erst wenn der DOMContent vollständig geladen ist, wird die Funktion ready und damit alle in in ihr enthaltenen Funktionen ausgeführt */
	function ready(){
	/* Place all the behaviors and hooks related to the matching controller here.
	# All this logic will automatically be available in application.js. */

		var icon = document.getElementsByClassName("icon");
		icon[0].addEventListener("click", toggleNav); /*Wichtig: Das direkte Einbinden von events im HTML funktioniert nicht (Reference Error ...not definded), sobald ich mit dem Event DOMContentLoaded und meine javascript innerhalb der Funktion ready geschrieben werden. Erklärung: Hierdurch werden alle Javascripte erst ausgeführt, wenn der DOM vollständig gelaen/erstellt worden ist. In dem Moment wo im HTML z.B. ein onclick Event auftaucht, versucht der Browser die zugehörige Funktion auszuführen. Diese ist allerdings noch nicht definiert, da ja noch nicht das gesamte HTML-Dokument bzw. der DOM erstellt und damit auch noch nicht das Javascript Dokument und die in ihm definierten Funktionen und Variablen ausgeführt wurden. */
		icon[0].addEventListener("click", menuIcon);

		/*Funktion zum Ein- u. Ausklappen der mobilen Navigation */
		function toggleNav(){
			var x = document.getElementById("myTopnav");
			if (x.className === "topnav"){
				x.className += " opened";
			} else {
				x.className = "topnav";
			}
		}

		/*Ändern des Menu Icons*/
		function menuIcon(){
			document.getElementsByClassName("icon")[0].classList.toggle("change");  /*MERKE: Die Methode toggle fügt einem Element eine Klasse zu oder löscht diese. Toggle funktioniert immer nur in Verbindung mit der property classList. Diese erstellt eine Liste aller Klassen des ausgewählten Elements. Mittels toggle wird anschließend dieser Liste eine Klasse namens "change" entweder hinzugefügt (falls noch nicht in der Klassenliste enthalten) oder entfernt (falls schon in der Klassenliste vorhanden)*/
		}

		/* Durchsichtiger Hintergrund im Header sobald gescrolled wird */
		window.addEventListener("scroll", headerOpacity);

		function headerOpacity(){
			var header = document.getElementById("kopfbereich");
			/* header.className liefert alle Klassen, die vorhanden sind als einen STRING. Die indexOf Methode schaut, ob und an welcher Stelle (Index) díe gesuchte Klasse "header_scrolled" im String auftaucht. Der Indexwert wird als Variable header gespeichert. Ein Wert von -1(siehe unten) bedeutet, dass der Suchbegriff nicht im String enthalten ist, 0 würde bedeutetn, dass der Suchbegriffe auf Indexposition 0 beginnt.*/
			var isThereAClass = header.className.indexOf("header-scrolled");
			/* Falls gescrollt wird und das Objekt header nicht die Klasse "header-scrolled" besitzt dann...*/
			if (isThereAClass === -1 && document.documentElement.scrollTop > 0 || document.body.scrollTop > 0){
				header.classList.toggle("header-scrolled");
			/*...falls der Scrollbalken auf Startposition steht und header die Klasse "header-scrolled" enthält, dann entferne die Klasse header-scrolled*/
			} else if (
				isThereAClass !== -1 && document.documentElement.scrollTop === 0 || document.body.scrollTop > 0){
					header.classList.toggle("header-scrolled");
				}	
		}

		/* Slideshow */ 
		/*manuell */
		var arrowNext = document.getElementsByClassName("next");
		arrowNext[0].addEventListener("click", nextSlide);

		var arrowPrev = document.getElementsByClassName("prev");
		arrowPrev[0].addEventListener("click", prevSlide);

		var slides = document.getElementsByClassName("mySlides");
		var slideIndex = 0;
		showSlides(slideIndex);

		function showSlides(slideIndex){
			slides[slideIndex].style.display = "block";
		}

		function nextSlide(){
		  slides[slideIndex].style.display = "none";
		  if (slideIndex < slides.length -1){
		  slideIndex += 1;}
		  else if (slideIndex === slides.length -1){
		  	slideIndex = 0;
		  }
		  console.log(slideIndex);
		  slides[slideIndex].style.display = "block";
		}

		function prevSlide(){
		  slides[slideIndex].style.display = "none";
		  if (slideIndex > 0){
		  	slideIndex -= 1;}
		  else {
		  	slideIndex = slides.length - 1;
			}
		  slides[slideIndex].style.display = "block";
		}

		/* automatisiert */
		setInterval(nextSlide, 6000); /*Mittels der Methode setIntervall lässt sich eine Funktion in entsprechenden Zeitintervallen ausführen/ wiederholen. */
	}











