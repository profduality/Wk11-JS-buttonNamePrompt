const button = document.querySelector('button');

button.onclick = function() {
  let name = prompt('What is your favorite animal?');
  let ready = name.toLowerCase(); //Converts the string to lowercase so anyway the user types it will work in the sentence which the page returns.
  alert('The ' + ready + ' is a very cool favorite animal!'); //Uses the lowercase string in a basic sentence.
}