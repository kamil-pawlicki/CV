console.log(`Witaj drogi odbiorco :)`
);
console.log(`Ta strona została stworzona z myślą o zaprezentowaniu znajomości poszczególnych 
elementów kodowania. Nie jest dopracowana graficznie ani dopieszczona, ma na celu 
pokazać, że rozumiem kod, polecenia i umiem je wykorzystać. Strona jest INTERAKTYWNA 
 i posiada różne elementy CSS i J-S. 
 Oto kilka wskazówek:`);
console.log(`1) Ta strona jest dostępna w dwóch językach Polskim oraz Angielskim. 
 Zmienić język możesz w nawigacji w górnym prawym rogu. Do każdego języka jest osobny plik JS !!!`
);
console.log(`2) Sprawdźmy co się stanie gdy klikniesz w jakiś artykuł 
        --> Gdy narzędzie deweloperskie F12 jest wyłączone, wtedy poprostu najedź kursorem myszki`);
console.log(`3) Jeśli moje dane kontaktowe są za małe do przeczytania, to kliknij w nie by powiększyć`
);
console.log(`4) Linki w sekcji Kontakty również są interaktywne`);
console.log(`5) Kiedy zmienisz rozdzielczość ekranu strona będzię się dostosowywać zmieniając parametry`
);
{
  const button = document.querySelector(".mail--js");

  console.log(button);

  const myClick = () => {
    const button = document.querySelector(".mail--js");
    button.innerHTML = "<h2>k.l.pawlicki@gmail.com</h2>";
  };
  button.addEventListener("click", myClick);
}
{
  const button = document.querySelector(".phone--js");
  const myNextClick = () => {
    const button = document.querySelector(".phone--js");
    button.innerHTML = "<h2>tel : (+48) 782-188-757</h2>";
  };
  button.addEventListener("click", myNextClick);
}
