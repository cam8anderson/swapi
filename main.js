let residentButton = document.querySelector("button");

const errCallback = (err) => console.log(err);

const residentsAlderaan = ({ data }) => {
  const residentsArray = data.results[0].residents;
  const residentContainer = document.querySelector(`main`);

  residentsArray.forEach((resident) => {
    axios
      .get(resident)
      .then(({ data }) => {
        console.log(data);
        const residentName = data.name;
        const H2Element = document.createElement("h2");
        H2Element.textContent = residentName;
        residentContainer.appendChild(H2Element);
      })
      .catch(errCallback);
  });
};

const clickButton = () => {
  console.log("button clicked");
  axios
    .get(`https://swapi.dev/api/planets/?search=alderaan`)
    .then(residentsAlderaan)
    .catch(errCallback);
};
residentButton.addEventListener("click", clickButton);
