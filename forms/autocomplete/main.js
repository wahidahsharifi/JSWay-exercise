// Country list
const countryList = [
   "Afghanistan",
   "Albania",
   "Algeria",
   "Andorra",
   "Angola",
   "Anguilla",
   "Antarctica",
   "Antigua-and-Barbuda",
   "Argentina",
   "Armenia",
   "Aruba",
   "Australia",
   "Autria",
   "Azerbaïjan",
];

for(let i = 0; i < countryList.length; i++) {
   const suggestion = document.createElement('span')
   suggestion.textContent = countryList[i]
   suggestion.classList.add('suggestion')
   document.getElementById('suggestions').appendChild(suggestion)
}

const suggestions = document.getElementsByClassName('suggestion');
const suggestion = Array.from(suggestions)
suggestion.forEach(suggest => {
   suggest.addEventListener('click', e => {
      document.getElementById('country').value = e.target.textContent
   })
})
let country = document.getElementById('country')
country.addEventListener('change', () => {
   console.log(country.value)
})