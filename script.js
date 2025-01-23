
const map = L.map("map").setView([13.0827, 80.2707], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "",
}).addTo(map);


const markerForm = document.getElementById("marker-form");
markerForm.addEventListener("submit", (e) => {
  e.preventDefault(); 
  const noteInput = document.getElementById("note");
  const note = noteInput.value.trim();

  if (note === "") {
    alert("Please enter a note before adding a marker!");
    return;
  }

  const marker = L.marker(map.getCenter())
    .addTo(map)
    .bindPopup(`<b>Note:</b> ${note}`)
    .openPopup();


  noteInput.value = "";
});


map.on("click", (e) => {
  const { lat, lng } = e.latlng;
  map.setView([lat, lng], 13);
  alert(`Map center updated to: Latitude ${lat}, Longitude ${lng}`);
});
