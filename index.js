const daftarMenu = [
  {
    nama : "Ayam Taliwang",
    gambar : 'ayam_taliwang.png',
    href: "#ayam_taliwang"
  },
  {
    nama : "Bubur Manado",
    gambar : 'bubur_manado.png',
    href: "#bubur_manado"
  },
  {
    nama : "Ikan Kembung Kuah Asam",
    gambar : 'ikan_asam.png',
    href: "#ikan_asam"
  },
  {
    nama : "Pepes Ikan Patin/Dori",
    gambar : 'pepes_ikan.png',
    href: "#pepes_ikan"
  },
]

const cardsContainer = document.getElementById("menu-cards-container")

// create Cards
for (let i = 0; i < daftarMenu.length; i++){
  const dish = daftarMenu[i]

  const cardItem = document.createElement("div")
  cardItem.classList.add("card")

  //Image
  const img = document.createElement("img")
  img.src = "assets/images/" + dish.gambar
  img.alt = dish.nama

  //Name
  const cardInfo = document.createElement("div")
  cardInfo.classList.add("card-info")
  const dishName = document.createElement("p")
  dishName.innerHTML = dish.nama
  cardInfo.appendChild(dishName)

  //Link
  const cardLink = document.createElement("a")
  cardLink.href = dish.href
  cardLink.classList.add("card-link")

  // Add to card
  cardItem.appendChild(img)
  cardItem.appendChild(cardInfo)
  cardItem.appendChild(cardLink)
  cardsContainer.appendChild(cardItem)
}