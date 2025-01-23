// Initialize the map
const map = L.map("map").setView([51.505, -0.09], 13); // Default center: London

// Add OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Marker form submission
const markerForm = document.getElementById("marker-form");
markerForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission from refreshing the page

  const noteInput = document.getElementById("note");
  const note = noteInput.value.trim();

  if (note === "") {
    alert("Please enter a note before adding a marker!");
    return;
  }

  // Add a marker to the map at the current center
  const marker = L.marker(map.getCenter())
    .addTo(map)
    .bindPopup(`<b>Note:</b> ${note}`)
    .openPopup();

  // Clear the input field
  noteInput.value = "";
});

// Allow users to click on the map to set the center
map.on("click", (e) => {
  const { lat, lng } = e.latlng;
  map.setView([lat, lng], 13);
  alert(`Map center updated to: Latitude ${lat}, Longitude ${lng}`);
});
