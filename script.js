let submitbutton = document.getElementById("submitbutton");
let userinput = document.getElementById("userinput");
let pricediv = document.getElementById("price");
let yuanprice = document.getElementById("yuanprice");
let usprice = document.getElementById("usprice");
let points;

function convertToCurrencies() {
  let salepoints = points / 20;
  let priceInYuan = salepoints * 0.2;
  let priceInEuro = priceInYuan * 0.13;
  let princeInDollars = priceInYuan * 0.14;
  let roundedEuNum = priceInEuro.toFixed(2);
  let roundedCHNum = priceInYuan.toFixed(2);
  let roundedUSANum = princeInDollars.toFixed(2);
  pricediv.innerHTML = "€ " + roundedEuNum;
  usprice.innerHTML = "$" + roundedUSANum;
  yuanprice.innerHTML = "¥" + roundedCHNum;
}

userinput.addEventListener("input", function () {
  let input = document.getElementById("userinput");
  points = input.value;
  convertToCurrencies();
});
