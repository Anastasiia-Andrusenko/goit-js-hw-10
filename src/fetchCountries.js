
const BASE = 'https://restcountries.com/v3.1/name/'

export function fetchCountries(name) {
  return fetch(`${BASE}${name}?fields=name,capital,population,flags,languages`).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}