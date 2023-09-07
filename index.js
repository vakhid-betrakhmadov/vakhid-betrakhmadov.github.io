function showMyIPAddress() {
  fetch("https://httpbin.org/ip")
    .then((response) => response.json())
    .then((json) => document.getElementById("ip").innerHTML = json.origin)
}