const container = document.querySelector(".container");
let main = document.querySelector(".main");
const input = document.querySelector(".input");

const insertData = (key, value) => {
  const customDivForKey = document.createElement("div");
  customDivForKey.classList.add("column");
  customDivForKey.innerHTML = key;

  const customDivForValue = document.createElement("div");
  customDivForValue.classList.add("column");

  if (key === "Flag") {
    const img = document.createElement("img");
    img.src = value;
    customDivForValue.appendChild(img);
  } else if (key === "Google Maps") {
    const a = document.createElement("a");
    a.href = value;
    a.innerHTML = "Click Here to open Google Maps";
    a.target = "_blank";
    customDivForValue.appendChild(a);
  } else {
    customDivForValue.innerHTML = value;
  }
  const customDiv = document.createElement("div");
  customDiv.classList.add("row");
  customDiv.appendChild(customDivForKey);
  customDiv.appendChild(customDivForValue);
  main.appendChild(customDiv);
};

const getDataFromAPI = () => {
  let name = "bharat";

  if (input.value !== "") {
    name = input.value;
  }

  const request = new XMLHttpRequest();
  request.open("GET", "https://restcountries.com/v3.1/name/" + name);
  request.send();

  request.addEventListener("load", () => {
    const data = JSON.parse(request.responseText);

    container.removeChild(main);
    main = document.createElement("div");
    main.classList.add("main");
    container.appendChild(main);

    if (request.status !== 200) {
      main.innerHTML = `
        <div class="error">Invalid Country Name!</div>
        `;
      return;
    }

    data.forEach((country) => {
      insertData("Official Name", country.name.official);
      insertData("Capital City", country.capital);
      insertData("Flag", country.flags.png);
      insertData("Population", country.population);
      insertData("Area (km²)", country.area);
      insertData("Region", country.region);
      insertData("Subregion", country.subregion);
      insertData("Continent(s)", country.continents);
      insertData("Independent Country", country.independent);
      insertData("Landlocked", country.landlocked);
      insertData("UN Member", country.unMember);
      insertData("Time Zone(s)", country.timezones);
      insertData("Border Countries", country.borders);
      insertData("Languages", Object.values(country.languages));
      insertData(
        "Currencies",
        Object.values(Object.values(country.currencies)[0]),
      );
      insertData("Google Maps", country.maps.googleMaps);
    });
  });
};
