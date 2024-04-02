// Schritt 1: HTML-Dokument-Objekte (DOM) bekommen
let loginBtn = document.getElementById('login-btn'); // Findet den Button mit der ID 'login-btn' und speichert ihn in der Variable 'loginBtn'.
let loginForm = document.querySelector('.login-form'); // Findet das erste Element mit der Klasse 'login-form' und speichert es in 'loginForm'.

// Ein 'click' Event-Listener wird dem Login-Button hinzugefügt.
loginBtn.addEventListener('click', function() {
    // Wenn der Login-Button geklickt wird, wechselt die Anzeige der Login-Form zwischen 'block' und 'none' (zeigen und verstecken).
    loginForm.style.display = loginForm.style.display === 'block' ? 'none' : 'block';
});

// Ein 'submit' Event-Listener wird dem Formular mit der ID 'loginForm' hinzugefügt.
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Verhindert, dass das Formular auf normale Weise abgeschickt wird.
    // Zeigt eine Alert-Box mit der Nachricht 'Login-Versuch!'.
    alert('Login-Versuch!');
});

// Schritt 1: Alle 'see-more'-Buttons finden.
let seeMoreButtons = document.querySelectorAll('.see-more');

// Schritt 2: Jeden 'see-more'-Button durchgehen und ihm ein Klick-Event hinzufügen.
seeMoreButtons.forEach(function(button) {
    button.onclick = function() {
        // Bei Klick wird der Nutzer zur Wikipedia-Seite über den Jaguar weitergeleitet.
        window.location.href = 'https://de.wikipedia.org/wiki/Jaguar';
    };
});

// Alle 'see-more1'-Buttons finden.
let seeMore1Buttons = document.querySelectorAll('.see-more1');

// Klickevent für jeden 'see-more1'-Button hinzufügen.
seeMore1Buttons.forEach(function(button) {
    button.onclick = function() {
        // Bei Klick wird der Nutzer zur Wikipedia-Seite über Elefanten weitergeleitet.
        window.location.href = 'https://de.wikipedia.org/wiki/Elefanten';
    };
});

// Alle 'see-more2'-Buttons finden.
let seeMore2Buttons = document.querySelectorAll('.see-more2');

// Klickevent für jeden 'see-more2'-Button hinzufügen.
seeMore2Buttons.forEach(function(button) {
    button.onclick = function() {
        // Bei Klick wird der Nutzer zur Wikipedia-Hauptseite weitergeleitet.
        window.location.href = 'https://de.wikipedia.org/wiki/L%C3%B6we';
    };
});
let seeMore3Buttons = document.querySelectorAll('.see-more3');

// Klickevent für jeden 'see-more2'-Button hinzufügen.
seeMore3Buttons.forEach(function(button) {
    button.onclick = function() {
        // Bei Klick wird der Nutzer zur Wikipedia-Hauptseite weitergeleitet.
        window.location.href = 'https://de.wikipedia.org/wiki/Elch';
    };
});

// Elemente für die Steuerung des Karussells finden.
let nextDom = document.getElementById('next'); // Button für das nächste Bild
let prevDom = document.getElementById('prev'); // Button für das vorherige Bild

// Hauptcontainer für das Karussell und die Elemente innerhalb davon finden.
let carouselDom = document.querySelector('.carousel'); // Hauptcontainer des Karussells
let SliderDom = carouselDom.querySelector('.carousel .list'); // Container für die Slides
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail'); // Container für die Thumbnails
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item'); // Alle Thumbnail-Elemente
let timeDom = document.querySelector('.carousel .time'); // Element für die Laufzeit-Anzeige

// Das erste Thumbnail-Element wird an das Ende der Thumbnail-Liste angehängt.
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
// Variablen für die Laufzeiten des Karussells.
let timeRunning = 3000; // Zeit, nach der die nächste Funktion ausgeführt wird
let timeAutoNext = 7000; // Zeit, nach der automatisch zum nächsten Bild gewechselt wird

// Klickevent für den 'Nächste'-Button.
nextDom.onclick = function(){
    showSlider('next'); // Funktion 'showSlider' mit dem Parameter 'next' aufrufen.
};

// Klickevent für den 'Vorherige'-Button.
prevDom.onclick = function(){
    showSlider('prev'); // Funktion 'showSlider' mit dem Parameter 'prev' aufrufen.
};
// Timeout-Variablen für die automatischen Übergänge und Resets.
let runTimeOut; // Timeout für das Zurücksetzen der Klasse
let runNextAuto = setTimeout(() => {
    next.click(); // Automatischer Klick auf den 'Nächste'-Button nach Ablauf der Zeit 'timeAutoNext'.
}, timeAutoNext);

// Die Funktion 'showSlider', welche für das Wechseln der Slides zuständig ist.
function showSlider(type){
    // Alle Slide- und Thumbnail-Elemente innerhalb des Karussells finden.
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    // Logik für den Slide-Wechsel.
    if(type === 'next'){
        // Wenn 'next' geklickt wurde, wird das erste Slide-Element an das Ende angehängt.
        SliderDom.appendChild(SliderItemsDom[0]);
        // Das erste Thumbnail-Element wird ebenfalls an das Ende der Liste gesetzt.
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        // Die Klasse 'next' wird hinzugefügt, um die Animation für den nächsten Slide zu starten.
        carouselDom.classList.add('next');
    }else{
        // Wenn 'prev' geklickt wurde, wird das letzte Slide-Element an den Anfang gesetzt.
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        // Das letzte Thumbnail-Element wird an den Anfang der Liste gesetzt.
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        // Die Klasse 'prev' wird hinzugefügt, um die Animation für den vorherigen Slide zu starten.
        carouselDom.classList.add('prev');
    }
    // Timeout, um die Klasse 'next' oder 'prev' nach der Animation zu entfernen.
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        // Entfernt die Klassen 'next' und 'prev' nach Ablauf der Zeit 'timeRunning'.
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    // Timeout, um zum nächsten Slide zu wechseln.
    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click(); // Automatischer Klick auf den 'Nächste'-Button nach Ablauf der Zeit 'timeAutoNext'.
    }, timeAutoNext)
}
