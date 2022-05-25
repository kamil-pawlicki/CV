console.log(`Hello Dear Visitor :)`);
console.log(`This site was create to make a little presentation of knowledge code elements. 
The website is not graphically consistent and not perfect, 
but it is intended to show that I understand the code and know how to use it. 
The website is INTERACTIVE and have differents elements of CSS and J-S. 
    Here are some TIPS:`);
console.log(
`1) This website is create in both languages Polish and English. You are able to change language in navigation in top right corner. For each language is different JS file !!!`
);

console.log(`2) Let's see what happens when you click on some article 
        --> When F12 dev tolls is closed then just slide mouse cousor`);

console.log(
`3) If my contact details is too small to read them, just click on it using mouse - then it goes bigger to read`
);

console.log(`4) Links in section Contacts are interactiv as well`);

console.log(`5) When screen size is change, the website will adapt and change parameters`);

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
