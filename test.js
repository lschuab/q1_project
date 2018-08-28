axios.get('http://jservice.io/api/clues?min_date=2003-04-27&max_date=2003-04-28')
.then(response => {
  console.log(response.data);
  for (let i = 0; i < 6; i++) {
    document.getElementById(`cat${i}`).insertAdjacentHTML('beforeend', `
      <span>
      ${response.data[i].category.title.toUpperCase()}
      </span>
    `);
  }
});
