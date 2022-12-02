let pizza = document.querySelector(".pitsa-hamiri");
let siri = document.getElementById("sbtn");
siri.addEventListener("click", (e) => {
  const sir = document.createElement("div");
  sir.classList.add("sir");
  sir.innerText = "";
  document.getElementById("main").appendChild(sir);
  const sir1 = document.createElement("div");
  sir1.classList.add("sir1");
  sir1.innerText = "";
  document.getElementById("main").appendChild(sir1);
  const sir2 = document.createElement("div");
  sir2.classList.add("sir2");
  sir2.innerText = "";
  document.getElementById("main").appendChild(sir2);
  const sir3 = document.createElement("div");
  sir3.classList.add("sir3");
  sir3.innerText = "";
  document.getElementById("main").appendChild(sir3);
  const sir4 = document.createElement("div");
  sir4.classList.add("sir4");

  document.getElementById("main").appendChild(sir4);
});
let kolbasa = document.getElementById("kbtn");
kolbasa.addEventListener("click", (e) => {
  const kolbasa = document.createElement("div");
  kolbasa.classList.add("kolbasa");
  kolbasa.innerText = "";
  document.getElementById("main").appendChild(kolbasa);
  const kolbasa1 = document.createElement("div");
  kolbasa1.classList.add("kolbasa1");
  kolbasa1.innerText = "";
  document.getElementById("main").appendChild(kolbasa1);
  const kolbasa2 = document.createElement("div");
  kolbasa2.classList.add("kolbasa2");
  kolbasa2.innerText = "";
  document.getElementById("main").appendChild(kolbasa2);
  const kolbasa3 = document.createElement("div");
  kolbasa3.classList.add("kolbasa3");
  kolbasa3.innerText = "";
  document.getElementById("main").appendChild(kolbasa3);
  const kolbasa4 = document.createElement("div");
  kolbasa4.classList.add("kolbasa4");

  document.getElementById("main").appendChild(kolbasa4);
});
let pamidor = document.getElementById("pbtn");
pamidor.addEventListener("click", (e) => {
  const pamidor = document.createElement("div");
  pamidor.classList.add("pamidor");
  pamidor.innerText = "";
  document.getElementById("main").appendChild(pamidor);
  const pamidor1 = document.createElement("div");
  pamidor1.classList.add("pamidor1");
  pamidor1.innerText = "";
  document.getElementById("main").appendChild(pamidor1);
  const pamidor2 = document.createElement("div");
  pamidor2.classList.add("pamidor2");
  pamidor2.innerText = "";
  document.getElementById("main").appendChild(pamidor2);
  const pamidor3 = document.createElement("div");
  pamidor3.classList.add("pamidor3");
  pamidor3.innerText = "";
  document.getElementById("main").appendChild(pamidor3);
  const pamidor4 = document.createElement("div");
  pamidor4.classList.add("pamidor4");

  document.getElementById("main").appendChild(pamidor4);
});
let qq = document.getElementById("qbtn");
qq.addEventListener("click", (e) => {
  const qq = document.createElement("div");
  qq.classList.add("qq");
  qq.innerText = "";
  document.getElementById("main").appendChild(qq);
  const qq1 = document.createElement("div");
  qq1.classList.add("qq1");
  qq1.innerText = "";
  document.getElementById("main").appendChild(qq1);
  const qq2 = document.createElement("div");
  qq2.classList.add("qq2");
  qq2.innerText = "";
  document.getElementById("main").appendChild(qq2);
  const qq3 = document.createElement("div");
  qq3.classList.add("qq3");
  qq3.innerText = "";
  document.getElementById("main").appendChild(qq3);
  const qq4 = document.createElement("div");
  qq4.classList.add("qq4");

  document.getElementById("main").appendChild(qq4);
});
let bodring = document.getElementById("bbtn");
bodring.addEventListener("click", (e) => {
  const bodring = document.createElement("div");
  bodring.classList.add("bodring");
  bodring.innerText = "";
  document.getElementById("main").appendChild(bodring);
  const bodring1 = document.createElement("div");
  bodring1.classList.add("bodring1");
  bodring1.innerText = "";
  document.getElementById("main").appendChild(bodring1);
  const bodring2 = document.createElement("div");
  bodring2.classList.add("bodring2");
  bodring2.innerText = "";
  document.getElementById("main").appendChild(bodring2);
  const bodring3 = document.createElement("div");
  bodring3.classList.add("bodring3");
  bodring3.innerText = "";
  document.getElementById("main").appendChild(bodring3);
  const bodring4 = document.createElement("div");
  bodring4.classList.add("bodring4");

  document.getElementById("main").appendChild(bodring4);
});
let ketchup = document.getElementById("cbtn");
ketchup.addEventListener("click", (e) => {
  const ketchup = document.createElement("div");
  ketchup.classList.add("ketchup");
  ketchup.innerText = "/|/";
  document.getElementById("main").appendChild(ketchup);
});
let mayanez = document.getElementById("mbtn");
mayanez.addEventListener("click", (e) => {
  hisob += 1;
  const mayanez = document.createElement("div");
  mayanez.classList.add("mayanez");
  mayanez.innerText = "}{}{";
  document.getElementById("main").appendChild(mayanez);
});

let big = document.getElementById("bigBtn");
big.addEventListener("click", (e) => {
  // for (let i = 1; i >= hisob; i++) {
  hisob += 1;
  // }
  //   var allElements = document.createElement("div");
  //   allElements.classList.add("pitsa-hamiri");
  //   document.getElementById("main").appendChild(allElements);
  let hamir = document.querySelector("main");
  hamir.style.transform = "scale(1.2)";
  hamir.style.marginTop = "4rem";
});
let otkaz = document.getElementById("otkaz");
otkaz.addEventListener("click", (e) => {
  let hamir = document.querySelector("main");
  //   var allElements = document.createElement("div");
  hamir.style.visibility = "hidden";
  //   document.getElementById("main").appendChild(allElements);
  //   hamir.style.transform = "scale(1.2)";
  //   hamir.style.marginTop = "4rem";
});
let qayta = document.getElementById("qayta");
qayta.addEventListener("click", (e) => {
  location.reload();
});

// let shot = `Buyurtma qiymati ${hisob}$`;
let hisob = 10;
// let alll = document.createElement("h2");
// alll.innerText = `${shot} boldi`;
// alll.style.fontSize = "200px";
document.querySelector(".hisob").textContent = `Buyurtma:  ${hisob}$ dollar`;

console.log(hisob);
