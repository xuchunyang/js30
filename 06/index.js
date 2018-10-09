const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

function findMatches(query, cities) {
  const regex = new RegExp(query, 'gi');
  return cities.filter(({city, state}) => regex.test(city) || regex.test(state)).map(({city, state, population}) => {
    city = city.replace(regex, '<span class="hl">$&</span>');
    state = state.replace(regex, '<span class="hl">$&</span>');
    return {
      city,
      state,
      population
    };
  });
}

function displayMatches() {
  const matchArray = findMatches(input.value, cities);
  // console.log(cities);
  ul.innerHTML = matchArray.map(({city, state, population}) => {
    const nameHTML = `<span class="name">${city}, ${state}</span>`;
    const populationHTML = `<span class="population">${numberWithCommas(population)}</span>`;
    return `<li>${nameHTML}${populationHTML}</li>`;
  }).join('\n');
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const input = document.querySelector('input');
const ul = document.querySelector('ul')

input.addEventListener('keyup', displayMatches);
input.addEventListener('change', displayMatches);

input.addEventListener('keyup', (e) => {
  console.log('keyup:', e);
});


input.addEventListener('change', (e) => {
  console.log('change:', e);
  // e.preventDefault();
});
