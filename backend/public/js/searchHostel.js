// const request = require('request');

// let hostels;
// const url = 'http://127.0.0.1:3000/api/v1/hostels';

// request(url, async (err, res, body) => {
//   if (err) console.log(err);

//   hostels = await JSON.parse(body).data.data;
//   showHostel(hostels);
// });

const searchBtn = document.getElementById('searchBtn');
// const location = document.getElementById('location');
// const searchResult = document.querySelector('.searchResult');
const searchValue = '';

// const showHostel = hostels => {
//   //   Filterring
//   //   hostels.filter(hostel =>
//   //     hostel.location.toLowerCase().includes(searchValue.toLowerCase())
//   //   );

//   hostels.forEach(hostel => {
//     // searchResult.innerHTML = hostel.location;
//     console.log(hostel.name);
//   });
// };

searchBtn.addEventListener('click', e => {
  e.preventDefault();

  searchValue = e.target.value;
  console.log(searchValue);
  //   searchValue = '';
});
