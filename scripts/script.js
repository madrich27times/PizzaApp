var container = document.getElementById("pizza");
var sizeButtonNames = ["S", "M", "L", "XL"];
var sizeButtons = [];
var crustButtonNames = ["Thin", "Thick", "Stuffed", "Pretzel"];
var crustButtons = [];
var sauceButtonNames = [
  "Marinara",
  "Creamy Garlic Parmesan",
  "Barbeque",
  "Buffalo"
];
var sauceButtons = [];
var cheeseButtonNames = ["Cheddar", "Mozzarella", "Four Cheese", "Provolone"];
var cheeseButtons = [];
var meatButtonNames = [
  "Pepperoni",
  "Sausage",
  "Ham",
  "Beef",
  "Bacon"
];
var meatLabelButtons = [];
var meatExButtons = [];
var meatLeftButtons = [];
var meatFullButtons = [];
var meatRightButtons = [];
var meatExtraButtons = [];
var meatDoubleButtons = [];
var vegButtonNames = [
  "Olives",
  "Onions",
  "Mushrooms",
  "Spinach",
  "Bell Peppers"
];
var vegLabelButtons = [];
var vegExButtons = [];
var vegLeftButtons = [];
var vegFullButtons = [];
var vegRightButtons = [];
var vegExtraButtons = [];
var vegDoubleButtons = [];
var preBuiltData;
var currentCrust = null;
var currentSauce = null;
var currentCheese = null;
var currentSize = null;
var isSpecialDeal = false;
var totalPrice = null;
var filenameToLoad = null;
var currentPizzaImgs = [];
var currentToppings = [];
var toppingImgs = [];
var isPreBuilt = false;
var request = new XMLHttpRequest();

var pepperoniImgs = [
  "assets/toppings/pepperoni/pepperoni-full.png",
  "assets/toppings/pepperoni/pepperoni-full-extra.png",
  "assets/toppings/pepperoni/pepperoni-full-double.png",
  "assets/toppings/pepperoni/pepperoni-left.png",
  "assets/toppings/pepperoni/pepperoni-left-extra.png",
  "assets/toppings/pepperoni/pepperoni-left-double.png",
  "assets/toppings/pepperoni/pepperoni-right.png",
  "assets/toppings/pepperoni/pepperoni-right-extra.png",
  "assets/toppings/pepperoni/pepperoni-right-double.png"
];
var sausageImgs = [
  "assets/toppings/sausage/sausage-full.png",
  "assets/toppings/sausage/sausage-full-extra.png",
  "assets/toppings/sausage/sausage-full-double.png",
  "assets/toppings/sausage/sausage-left.png",
  "assets/toppings/sausage/sausage-left-extra.png",
  "assets/toppings/sausage/sausage-left-double.png",
  "assets/toppings/sausage/sausage-right.png",
  "assets/toppings/sausage/sausage-right-extra.png",
  "assets/toppings/sausage/sausage-right-double.png"
];
var hamImgs = [
  "assets/toppings/ham/ham-full.png",
  "assets/toppings/ham/ham-full-extra.png",
  "assets/toppings/ham/ham-full-double.png",
  "assets/toppings/ham/ham-left.png",
  "assets/toppings/ham/ham-left-extra.png",
  "assets/toppings/ham/ham-left-double.png",
  "assets/toppings/ham/ham-right.png",
  "assets/toppings/ham/ham-right-extra.png",
  "assets/toppings/ham/ham-full-double.png"
];
var baconImgs = [
  "assets/toppings/bacon/bacon-full.png",
  "assets/toppings/bacon/bacon-full-extra.png",
  "assets/toppings/bacon/bacon-full-double.png",
  "assets/toppings/bacon/bacon-left.png",
  "assets/toppings/bacon/bacon-left-extra.png",
  "assets/toppings/bacon/bacon-left-double.png",
  "assets/toppings/bacon/bacon-right.png",
  "assets/toppings/bacon/bacon-right-extra.png",
  "assets/toppings/bacon/bacon-right-double.png"
];
var beefImgs = [
  "assets/toppings/beef/beef-full.png",
  "assets/toppings/beef/beef-full-extra.png",
  "assets/toppings/beef/beef-full-double.png",
  "assets/toppings/beef/beef-left.png",
  "assets/toppings/beef/beef-left-extra.png",
  "assets/toppings/beef/beef-left-double.png",
  "assets/toppings/beef/beef-right.png",
  "assets/toppings/beef/beef-right-extra.png",
  "assets/toppings/beef/beef-right-double.png"
];
var mushroomImgs = [
  "assets/toppings/mushrooms/mushrooms-full.png",
  "assets/toppings/mushrooms/mushrooms-full-extra.png",
  "assets/toppings/mushrooms/mushrooms-full-double.png",
  "assets/toppings/mushrooms/mushrooms-left.png",
  "assets/toppings/mushrooms/mushrooms-left-extra.png",
  "assets/toppings/mushrooms/mushrooms-left-double.png",
  "assets/toppings/mushrooms/mushrooms-right.png",
  "assets/toppings/mushrooms/mushrooms-right-extra.png",
  "assets/toppings/mushrooms/mushrooms-right-double.png"
];
var oliveImgs = [
  "assets/toppings/olives/olives-full.png",
  "assets/toppings/olives/olives-full-extra.png",
  "assets/toppings/olives/olives-full-double.png",
  "assets/toppings/olives/olives-left.png",
  "assets/toppings/olives/olives-left-extra.png",
  "assets/toppings/olives/olives-left-double.png",
  "assets/toppings/olives/olives-right.png",
  "assets/toppings/olives/olives-right-extra.png",
  "assets/toppings/olives/olives-right-double.png"
];
var onionImgs = [
  "assets/toppings/onions/onions-full.png",
  "assets/toppings/onions/onions-full-extra.png",
  "assets/toppings/onions/onions-full-double.png",
  "assets/toppings/onions/onions-left.png",
  "assets/toppings/onions/onions-left-extra.png",
  "assets/toppings/onions/onions-left-double.png",
  "assets/toppings/onions/onions-right.png",
  "assets/toppings/onions/onions-right-extra.png",
  "assets/toppings/onions/onions-right-double.png"
];
var bellPepperImgs = [
  "assets/toppings/bellpeppers/bellpeppers-full.png",
  "assets/toppings/bellpeppers/bellpeppers-full-extra.png",
  "assets/toppings/bellpeppers/bellpeppers-full-double.png",
  "assets/toppings/bellpeppers/bellpeppers-left.png",
  "assets/toppings/bellpeppers/bellpeppers-left-extra.png",
  "assets/toppings/bellpeppers/bellpeppers-left-double.png",
  "assets/toppings/bellpeppers/bellpeppers-right.png",
  "assets/toppings/bellpeppers/bellpeppers-right-extra.png",
  "assets/toppings/bellpeppers/bellpeppers-right-double.png"
];
var spinachImgs = [
  "assets/toppings/spinach/spinach-full.png",
  "assets/toppings/spinach/spinach-full-extra.png",
  "assets/toppings/spinach/spinach-full-double.png",
  "assets/toppings/spinach/spinach-left.png",
  "assets/toppings/spinach/spinach-left-extra.png",
  "assets/toppings/spinach/spinach-left-double.png",
  "assets/toppings/spinach/spinach-right.png",
  "assets/toppings/spinach/spinach-right-extra.png",
  "assets/toppings/spinach/spinach-right-double.png"
];

loadData();
changePage("start");

function loadData() {
  request.open('GET', 'scripts/pre-built-pizzas.json');
  request.onload = loadComplete;
  request.send();
}

function loadComplete(evt) {
  preBuiltData = JSON.parse(request.responseText);
  //console.log(preBuiltData);
}

function changePage(pageName) {
  var container = document.getElementById('pizza');
  container.innerHTML = "";
  switch (pageName) {
    case "start":
      buildStartPage();
      break;
    case "prebuilt":
      buildPreBuiltPage();
      break;
    case "size":
      buildSizesPage();
      break;
    case "crust":
      buildCrustPage();
      break;
    case "sauce":
      buildSaucePage();
      break;
    case "cheese":
      buildCheesePage();
      break;
    case "toppings":
      buildToppingsPage();
      break;
    case "final":
      buildFinalPage();
      break;
  }
}

function buildStartPage() {
  buildHeaderRow("landing-page", "Order Online");
  buildMiddleRow("start");
}

function buildPreBuiltPage() {
  buildHeaderRow("preBuilt-page", "Pre-Built Options");
  buildMiddleRow("prebuilt");
  buildButtonRow();
  var backBtn = document.getElementById("backBtn");
  backBtn.addEventListener("click", function () {
    changePage("start");
  });
  console.log(preBuiltData);
}

function buildSizesPage() {
  buildHeaderRow("size-page", "Choose your size");
  buildMiddleRow("size");
  buildButtonRow();
  var nextBtn = document.getElementById("nextBtn");
  var backBtn = document.getElementById("backBtn");
  if (currentSize != null && isPreBuilt == false) {
    backBtn.addEventListener("click", function () {
      changePage("start");
    });
    nextBtn.addEventListener("click", function () {
      changePage("crust");
    });
  } else if (currentSize != null && isPreBuilt == true) {
    backBtn.addEventListener("click", function () {
      changePage("prebuilt");
    });
    nextBtn.addEventListener("click", function () {
      changePage("crust");
    });
  } else {
    backBtn.addEventListener("click", function () {
      changePage("start");
    });
  }
  calculateCost();
}

function buildCrustPage() {
  buildHeaderRow("crust-page", "Choose your crust");
  buildMiddleRow("crust");
  buildButtonRow();
  console.log(isPreBuilt);
  if (isPreBuilt == true) {
    getCrustImg();
    getSauceImg();
    getCheeseImg();
  }
  updatePizzaView();
  updateListView();
  var nextBtn = document.getElementById("nextBtn");
  var backBtn = document.getElementById("backBtn");
  backBtn.addEventListener("click", function () {
    changePage("size");
  });
  if (currentCrust != null) {
    nextBtn.addEventListener("click", function () {
      changePage("sauce");
    });
  }
  calculateCost();
  if (isSpecialDeal) {
    var badge = document.getElementById("deal");
    badge.style.display = "block";
  }
  var total = document.getElementById("total");
  total.innerHTML = "Total: $" + totalPrice;
}

function buildSaucePage() {
  buildHeaderRow("sauce-page", "Choose your sauce");
  buildMiddleRow("sauce");
  buildButtonRow();
  updatePizzaView();
  updateListView();
  var nextBtn = document.getElementById("nextBtn");
  var backBtn = document.getElementById("backBtn");
  backBtn.addEventListener("click", function () {
    changePage("crust");
  });
  if (currentSauce != null) {
    nextBtn.addEventListener("click", function () {
      changePage("cheese");
    });
  }
  calculateCost();
  if (isSpecialDeal) {
    var badge = document.getElementById("deal");
    badge.style.display = "block";
  }
  var total = document.getElementById("total");
  total.innerHTML = "Total: $" + totalPrice;
}

function buildCheesePage() {
  buildHeaderRow("cheese-page", "Choose your cheese");
  buildMiddleRow("cheese");
  buildButtonRow();
  updatePizzaView();
  updateListView();
  var nextBtn = document.getElementById("nextBtn");
  var backBtn = document.getElementById("backBtn");
  backBtn.addEventListener("click", function () {
    changePage("sauce");
  });
  if (currentCheese != null) {
    nextBtn.addEventListener("click", function () {
      changePage("toppings");
    });
  }
  calculateCost();
  if (isSpecialDeal) {
    var badge = document.getElementById("deal");
    badge.style.display = "block";
  }
  var total = document.getElementById("total");
  total.innerHTML = "Total: $" + totalPrice;
}

function buildToppingsPage() {
  buildHeaderRow("toppings-page", "Choose your toppings");
  buildMiddleRow("toppings");
  buildButtonRow();
  updatePizzaView();
  updateListView();
  var nextBtn = document.getElementById("nextBtn");
  var backBtn = document.getElementById("backBtn");
  backBtn.addEventListener("click", function () {
    changePage("cheese");
  });
  nextBtn.addEventListener("click", function () {
    changePage("final");
  });
  calculateCost();
  if (isSpecialDeal) {
    var badge = document.getElementById("deal");
    badge.style.display = "block";
  }
  var total = document.getElementById("total");
  total.innerHTML = "Total: $" + totalPrice;

  for (let i = 0; i < currentToppings.length; i++) {
    var topping = currentToppings[i].toString();
    var name = topping.split("-");
    console.log("name", name);
    var label = document.getElementById(name[0]);
    label.className = label.className + " selectedCrust";
    var ex = document.getElementById(name[0] + "-x");
    ex.style.display = "block";
  }

}

function buildFinalPage() {
  buildHeaderRow("finalPage", "Review Order");
  buildMiddleRow("final");
  modalInit();
  if (isPreBuilt == true) {
    getCrustImg();
    getSauceImg();
    getCheeseImg();
  }
  updatePizzaView();
  updateListView();
  var total = document.getElementById("total");
  total.innerHTML = "Total: $" + totalPrice;
}

function buildHeaderRow(pageNameClass, pageTitle) {
  var row = document.createElement("div");
  row.className = "row";
  row.classList += " " + pageNameClass;
  //first column
  var col1 = document.createElement("div");
  col1.className = "col-4";
  var heading = document.createElement("h1");
  heading.className = "bold-heading";
  heading.classList += " title";
  heading.innerHTML = pageTitle;
  var span = document.createElement("span");
  span.id = "deal";
  span.className = "badge";
  span.innerHTML = "Special Deal";
  heading.appendChild(span);
  col1.appendChild(heading);
  row.appendChild(col1);
  //second column
  var col2 = document.createElement("div");
  col2.className = "col-4";
  row.appendChild(col2);
  //third column
  var col3 = document.createElement("div");
  col3.className = "col-4";
  row.appendChild(col3);
  container.appendChild(row);
}

function buildPreBuiltRow() {
  var row;
  var preBuiltNames = [];
  for (let i = 0; i < preBuiltData.length; i++) {
    preBuiltNames.push(i.name);
  }
  row = document.createElement("div");
  row.className = "row preBuiltBox";
  for (let i = 0; i < preBuiltNames.length; i++) {
    var imgs = "";  
    var name = preBuiltData[i].name;
    if (/\s/.test(name)) {
      name = name.replace(/\s/g, "");
    }
    var col = document.createElement('div');
    col.setAttribute('class', 'col-4');
    var pizzaDiv = document.createElement('div');
    pizzaDiv.setAttribute('id', name);
    pizzaDiv.setAttribute('class', 'popup pizza-box');
    var descName = name + "-desc";
    var descSpan = document.createElement('span');
    descSpan.setAttribute('id', descName);
    descSpan.setAttribute('class', 'popup-content');
    row.appendChild(col);
    col.appendChild(pizzaDiv);
    pizzaDiv.appendChild(descSpan);
    pizzaDiv.addEventListener('click', preBuiltClick);
    descSpan.innerHTML = preBuiltData[i].desc;
    preBuiltData[i].images.forEach(element => {
      if (element != preBuiltData[i].images[preBuiltData[i].images.length - 1]) {
        imgs += "url('" + element + "'), ";
      } else {
        imgs += "url('" + element + "') no-repeat center";
      }
    });
    pizzaDiv.style.background = imgs;
    pizzaDiv.style.backgroundSize = "contain";
  }
  return row;
}

function buildMiddleRow(pageName) {
  var row;
  if (pageName == "size" || pageName == "prebuilt" || pageName == "final" || pageName == "start") {
    row = buildOptionsColumn(pageName);
  } else {
    row = document.createElement("div");
    row.className = "row";
    var col1 = buildPizzaViewColumn();
    var col2 = buildOptionsColumn(pageName);
    var col3 = buildIngredientListColumn(pageName);
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
  }
  container.appendChild(row);
}

function buildPizzaViewColumn() {
  var col = document.createElement("div");
  col.className = "col-4";
  var pizzaContainer = document.createElement("div");
  pizzaContainer.id = "pizzaViewContainer";
  var pizzaImg = document.createElement("div");
  pizzaImg.id = "pizzaView";
  pizzaImg.classList += " pizza-box box";
  pizzaContainer.appendChild(pizzaImg);
  col.appendChild(pizzaContainer);

  var sizeContDiv = document.createElement("div");
  var sizeContainer = document.createElement("div");
  sizeContainer.className = "size-display";

  var sizeArr = ["smSize", "medSize", "lgSize", "xlSize"];
  for (let i = 0; i < sizeArr.length; i++) {
    var div = document.createElement("div");
    div.id = sizeArr[i];
    div.className = "size-bar";
    if (sizeArr[i] == "smSize") {
      div.innerHTML = "S";
    } else if (sizeArr[i] == "medSize") {
      div.innerHTML = "M";
    } else if (sizeArr[i] == "lgSize") {
      div.innerHTML = "L";
    } else {
      div.innerHTML = "XL";
    }
    div.addEventListener("click", buildingSizeClick);
    if (div.innerHTML == currentSize) {
      div.className = div.className + " selected";
    }
    sizeContainer.appendChild(div);
  }
  sizeContDiv.appendChild(sizeContainer);
  col.appendChild(sizeContDiv);
  return col;
}

function buildOptionsColumn(pageName) {
  var col;
  switch (pageName) {
    case "start":
      col = buildStartMidRow();
      break;
    case "prebuilt":
      col = buildPreBuiltRow();
      break;
    case "size":
      col = buildSizeMidRow();
      break;
    case "crust":
      col = buildCrustMidColumn();
      break;
    case "sauce":
      col = buildSauceMidColumn();
      break;
    case "cheese":
      col = buildCheeseMidColumn();
      break;
    case "toppings":
      col = buildToppingsMidColumn();
      break;
    case "final":
      col = buildFinalMidRow();
      break;
  }
  return col;
}

function buildStartMidRow() {
  var row = document.createElement("div");
  row.className = "row";
  //byo card
  var card1 = document.createElement("div");
  card1.id = "byoBtn";
  card1.className = "col-6";
  card1.classList += " card";
  card1.addEventListener("click", customClick);
  var cardContainer1 = document.createElement("div");
  cardContainer1.className = "card-container";
  var cardHeading1 = document.createElement("div");
  cardHeading1.className = "card-header";
  var heading1 = document.createElement("h1");
  heading1.className = "bold-heading";
  heading1.innerHTML = "Build Your Own";
  cardHeading1.appendChild(heading1);
  cardContainer1.appendChild(cardHeading1);
  var box1 = document.createElement("div");
  box1.id = "customBox";
  box1.className = "card-body";
  box1.classList += " box";
  cardContainer1.appendChild(box1);
  card1.appendChild(cardContainer1);
  row.appendChild(card1);
  //pre-built card
  var card2 = document.createElement("div");
  card2.id = "preBtn";
  card2.className = "col-6";
  card2.classList += " card";
  card2.addEventListener("click", preClick);
  var cardContainer2 = document.createElement("div");
  cardContainer2.className = "card-container";
  var cardHeading2 = document.createElement("div");
  cardHeading2.className = "card-header";
  var heading2 = document.createElement("h2");
  heading2.className = "bold-heading";
  heading2.innerHTML = "Pre-Built Pizza";
  cardHeading2.appendChild(heading2);
  cardContainer2.appendChild(cardHeading2);
  var box2 = document.createElement("div");
  box2.id = "preBuiltBox";
  box2.className = "card-body";
  box2.classList += " box";
  cardContainer2.appendChild(box2);
  card2.appendChild(cardContainer2);
  row.appendChild(card2);
  return row;
}

function buildSizeMidRow() {
  var row = document.createElement("div");
  row.className = "row";
  sizeButtons = buildButtons(sizeButtonNames, "size-box", null, sizeClick);
  for (let i = 0; i < sizeButtonNames.length; i++) {
    var col = document.createElement("div");
    col.className = "col-3";
    col.classList += " size-container";
    if (sizeButtons[i].innerHTML.toString() == currentSize) {
      sizeButtons[i].className = sizeButtons[i].className + " selected";
    }
    col.appendChild(sizeButtons[i]);
    row.appendChild(col);
  }
  return row;
}

function buildIngredientListColumn(pageName) {
  var col = document.createElement("div");
  col.className = "col-4";
  var ingredDiv = document.createElement("div");
  ingredDiv.className = "ingredient-div";
  var heading = document.createElement("h3");
  heading.innerHTML = "Your Pizza";
  ingredDiv.appendChild(heading);
  var ingredList = document.createElement("div");
  ingredList.id = "ingred-list";
  ingredList.className = "list-div";
  ingredDiv.appendChild(ingredList);
  var total = document.createElement("h4");
  total.id = "total";
  total.innerHTML = "Total: $0.00";
  ingredDiv.appendChild(total);
  col.appendChild(ingredDiv);
  return col;
}

function buildFinalMidRow() {
  var row = document.createElement("div");
  row.className = "row";
  //pizz view
  var col1 = document.createElement("div");
  col1.className = "col-6";
  var pizzaContainer = document.createElement("div");
  pizzaContainer.id = "pizzaViewContainer";
  pizzaContainer.className = "final-page-pv-cont";
  var pizzaImg = document.createElement("div");
  pizzaImg.id = "pizzaView";
  pizzaImg.classList += " pizza-box box";
  pizzaContainer.appendChild(pizzaImg);
  col1.appendChild(pizzaContainer);
  row.appendChild(col1);
  //ingredients list
  var col2 = document.createElement("div");
  col2.className = "col-6";
  var ingredDiv = document.createElement("div");
  ingredDiv.className = "ingredient-div";
  var heading = document.createElement("h3");
  heading.innerHTML = "Your Pizza";
  ingredDiv.appendChild(heading);
  var ingredList = document.createElement("div");
  ingredList.id = "ingred-list";
  ingredList.className = "list-div";
  ingredDiv.appendChild(ingredList);
  var total = document.createElement("h4");
  total.id = "total";
  total.innerHTML = "Total: $0.00";
  ingredDiv.appendChild(total);
  var modalBtn = document.createElement("div");
  modalBtn.id = "addBtn";
  modalBtn.className = "btn-modal";
  modalBtn.innerHTML = "Add to Order";
  ingredDiv.appendChild(modalBtn);
  modalBtn.setAttribute("data-modal", "modalLight");
  var modal = buildModal();
  ingredDiv.appendChild(modal);
  col2.appendChild(ingredDiv);
  row.appendChild(col2);
  return row;
}

function buildModal() {
  var modal = document.createElement("div");
  modal.id = "modalLight";
  modal.className = "modal";
  modal.classList += " modal-light";
  var content = document.createElement("div");
  content.className = "modal-content";
  var header = document.createElement("div");
  header.className = "modal-header";
  var span = document.createElement("span");
  span.className = "close";
  span.innerHTML = "&times;";
  header.appendChild(span);
  content.appendChild(header);
  var body = document.createElement("div");
  body.className = "modal-body";
  var modalHeading = document.createElement("h1");
  modalHeading.className = "bold-heading";
  modalHeading.innerHTML = "Thank you for your order!";
  body.appendChild(modalHeading);
  content.appendChild(body);
  var footer = document.createElement("div");
  footer.className = "modal-footer";
  content.appendChild(footer);
  modal.appendChild(content);
  return modal;
}

function buildButtonRow() {
  var row = document.createElement("div");
  row.className = "row";
  row.classList += " button-row";
  //back btn
  var col1 = document.createElement("div");
  col1.className = "col-1";
  col1.classList += " backBtn";
  var back = document.createElement("div");
  back.className = "btn-basic";
  back.id = "backBtn";
  back.innerHTML = "Back";
  col1.appendChild(back);
  row.appendChild(col1);
  //empty col
  var col2 = document.createElement("div");
  col2.className = "col-10";
  row.appendChild(col2);
  //next btn
  var col3 = document.createElement("div");
  col3.className = "col-1";
  col3.classList += " nextBtn";
  var next = document.createElement("div");
  next.className = "btn-basic";
  next.id = "nextBtn";
  next.innerHTML = "Next";
  col3.appendChild(next);
  row.appendChild(col3);
  container.appendChild(row);
}

function buildCrustMidColumn() {
  var col = document.createElement("div");
  col.className = "col-4";
  var listCont = document.createElement("div");
  listCont.className = "list-container";
  crustButtons = buildButtons(
    crustButtonNames,
    "btn-basic",
    " bold-heading crustOpt",
    crustClick,
    null
  );
  for (let i = 0; i < crustButtons.length; i++) {
    var div = document.createElement("div");
    div.id = "crustList";
    if (crustButtons[i].innerHTML.toString() == currentCrust) {
      crustButtons[i].className = crustButtons[i].className + " selectedCrust";
    }
    div.appendChild(crustButtons[i]);
    listCont.appendChild(div);
  }
  col.appendChild(listCont);
  return col;
}

function buildSauceMidColumn() {
  var col = document.createElement("div");
  col.className = "col-4";
  var listCont = document.createElement("div");
  listCont.className = "list-container";
  sauceButtons = buildButtons(
    sauceButtonNames,
    "btn-basic",
    " bold-heading crustOpt",
    sauceClick,
    null
  );
  for (let i = 0; i < sauceButtons.length; i++) {
    var div = document.createElement("div");
    div.id = "sauceList";
    if (sauceButtons[i].innerHTML.toString() == currentSauce) {
      sauceButtons[i].className = sauceButtons[i].className + " selectedCrust";
    }
    div.appendChild(sauceButtons[i]);
    listCont.appendChild(div);
  }
  col.appendChild(listCont);
  return col;
}

function buildCheeseMidColumn() {
  var col = document.createElement("div");
  col.className = "col-4";
  var listCont = document.createElement("div");
  listCont.className = "list-container";
  cheeseButtons = buildButtons(
    cheeseButtonNames,
    "btn-basic",
    " bold-heading crustOpt",
    cheeseClick,
    null
  );
  for (let i = 0; i < cheeseButtons.length; i++) {
    var div = document.createElement("div");
    div.id = "cheeseList";
    if (cheeseButtons[i].innerHTML.toString() == currentCheese) {
      cheeseButtons[i].className = cheeseButtons[i].className + " selectedCrust";
    }
    div.appendChild(cheeseButtons[i]);
    listCont.appendChild(div);
  }
  col.appendChild(listCont);
  return col;
}

function buildToppingsMidColumn() {
  var col = document.createElement("div");
  col.className = "col-4";
  var listCont = document.createElement("div");
  listCont.className = "list-container";
  //meats
  var meatHeading = document.createElement("h5");
  meatHeading.className = "topping-section";
  meatHeading.innerHTML = "Meats";
  listCont.appendChild(meatHeading);
  var meatList = buildMeatList();
  listCont.appendChild(meatList);
  //veg
  var vegHeading = document.createElement("h5");
  vegHeading.className = "topping-section";
  vegHeading.innerHTML = "Vegetables";
  listCont.appendChild(vegHeading);
  var vegList = buildVegList();
  listCont.appendChild(vegList);
  col.appendChild(listCont);

  return col;
}

function buildMeatList() {
  meatLabelButtons = buildButtons(
    meatButtonNames,
    "btn-basic",
    " topping-button crustOpt",
    toppingLabelClick,
    null
  );
  meatExButtons = buildButtons(
    meatButtonNames,
    "exes",
    null,
    removeClick,
    null
  );
  meatLeftButtons = buildButtons(
    meatButtonNames,
    "btn-small",
    " crustOpt",
    leftClick,
    "left"
  );
  meatFullButtons = buildButtons(
    meatButtonNames,
    "btn-small",
    " crustOpt",
    fullClick,
    "full"
  );
  meatRightButtons = buildButtons(
    meatButtonNames,
    "btn-small",
    " crustOpt",
    rightClick,
    "right"
  );
  meatExtraButtons = buildButtons(
    meatButtonNames,
    "btn-small",
    " crustOpt",
    extraClick,
    "extra"
  );
  meatDoubleButtons = buildButtons(
    meatButtonNames,
    "btn-small",
    " crustOpt",
    doubleClick,
    "double"
  );

  var meatList = document.createElement("div");
  meatList.className = "meats-container";
  meatList.classList += " list-div";
  for (let i = 0; i < meatButtonNames.length; i++) {
    var label = document.createElement("div");
    label.className = "toppingLabel";
    label.appendChild(meatLabelButtons[i]);
    label.appendChild(meatExButtons[i]);
    meatList.appendChild(label);
    var options = document.createElement("div");
    var name = meatButtonNames[i].toString().toLowerCase();
    if (/\s/.test(name)) {
      name = name.replace(/\s/g, "");
    }
    options.id = name + "-options";
    options.className = "topping-options";
    var sideBtns = document.createElement("div");
    sideBtns.className = "topping-side";
    sideBtns.appendChild(meatLeftButtons[i]);
    sideBtns.appendChild(meatFullButtons[i]);
    sideBtns.appendChild(meatRightButtons[i]);
    options.appendChild(sideBtns);
    var plusBtns = document.createElement("div");
    plusBtns.className = "topping-plus";
    plusBtns.appendChild(meatExtraButtons[i]);
    plusBtns.appendChild(meatDoubleButtons[i]);
    options.appendChild(plusBtns);
    meatList.appendChild(options);
  }

  return meatList;
}

function buildVegList() {
  vegLabelButtons = buildButtons(
    vegButtonNames,
    "btn-basic",
    " topping-button crustOpt",
    toppingLabelClick,
    null
  );
  vegExButtons = buildButtons(vegButtonNames, "exes", null, removeClick, null);
  vegLeftButtons = buildButtons(
    vegButtonNames,
    "btn-small",
    " crustOpt",
    leftClick,
    "left"
  );
  vegFullButtons = buildButtons(
    vegButtonNames,
    "btn-small",
    " crustOpt",
    fullClick,
    "full"
  );
  vegRightButtons = buildButtons(
    vegButtonNames,
    "btn-small",
    " crustOpt",
    rightClick,
    "right"
  );
  vegExtraButtons = buildButtons(
    vegButtonNames,
    "btn-small",
    " crustOpt",
    extraClick,
    "extra"
  );
  vegDoubleButtons = buildButtons(
    vegButtonNames,
    "btn-small",
    " crustOpt",
    doubleClick,
    "double"
  );

  var vegList = document.createElement("div");
  vegList.className = "veg-container";
  vegList.classList += " list-div";
  for (let i = 0; i < vegButtonNames.length; i++) {
    var label = document.createElement("div");
    label.className = "toppingLabel";
    label.appendChild(vegLabelButtons[i]);
    label.appendChild(vegExButtons[i]);
    vegList.appendChild(label);
    var options = document.createElement("div");
    var name = vegButtonNames[i].toString().toLowerCase();
    if (/\s/.test(name)) {
      name = name.replace(/\s/g, "");
    }
    options.id = name + "-options";
    options.className = "topping-options";
    var sideBtns = document.createElement("div");
    sideBtns.className = "topping-side";
    sideBtns.appendChild(vegLeftButtons[i]);
    sideBtns.appendChild(vegFullButtons[i]);
    sideBtns.appendChild(vegRightButtons[i]);
    options.appendChild(sideBtns);
    var plusBtns = document.createElement("div");
    plusBtns.className = "topping-plus";
    plusBtns.appendChild(vegExtraButtons[i]);
    plusBtns.appendChild(vegDoubleButtons[i]);
    options.appendChild(plusBtns);
    vegList.appendChild(options);
  }
  return vegList;
}

function buildButtons(nameArray, className, classesList, clickFunction, side) {
  var buttonArray = [];
  for (let i = 0; i < nameArray.length; i++) {
    var item = nameArray[i];
    buttonArray[i] = document.createElement("div");
    if (side != null && side != "") {
      buttonArray[i].innerHTML = side;
    } else if (className == "exes") {
      buttonArray[i].innerHTML = "&times;";
    } else {
      buttonArray[i].innerHTML = nameArray[i];
    }
    buttonArray[i].className = className;
    if (classesList != null && classesList != "") {
      buttonArray[i].classList += classesList;
    }
    var id;
    if (nameArray == sizeButtonNames) {
      id = getId("size", item, className, classesList, side);
    } else if (nameArray == crustButtonNames) {
      id = getId("crust", item, className, classesList, side);
    } else if (nameArray == sauceButtonNames) {
      id = getId("sauce", item, className, classesList, side);
    } else if (nameArray == cheeseButtonNames) {
      id = getId("cheese", item, className, classesList, side);
    } else {
      id = getId("toppings", item, className, classesList, side);
    }
    buttonArray[i].id = id;
    buttonArray[i].addEventListener("click", clickFunction);
  }
  return buttonArray;
}

function getId(type, item, className, classesList, side) {
  var id;
  switch (type) {
    case "size":
      id = getSizeId(item);
      break;
    case "crust":
      id = getCrustId(item);
      break;
    case "sauce":
      id = getSauceId(item);
      break;
    case "cheese":
      id = getCheeseId(item);
      break;
    case "toppings":
      id = getToppingId(item, className, classesList, side);
      break;
  }
  return id;
}

function getSizeId(item) {
  var id;
  var prefix;
  var suffix = "Pizza";
  if (item == "S") {
    prefix = "small";
  } else if (item == "M") {
    prefix = "medium";
  } else if (item == "L") {
    prefix = "large";
  } else {
    prefix = "xL";
  }
  id = prefix + suffix;
  return id;
}

function getCrustId(item) {
  var id;
  var prefix = item.toString().toLowerCase();
  var suffix = "-crust";
  id = prefix + suffix;
  return id;
}

function getSauceId(item) {
  var id;
  var prefix;
  var suffix = "-sauce";
  if (item == "Marinara") {
    prefix = "mar";
  } else if (item == "Creamy Garlic Parmesan") {
    prefix = "creamy";
  } else if (item == "Barbeque") {
    prefix = "bbq";
  } else {
    prefix = "buff";
  }
  id = prefix + suffix;
  return id;
}

function getCheeseId(item) {
  var id;
  var prefix;
  var suffix = "-cheese";
  if (item == "Cheddar") {
    prefix = "ched";
  } else if (item == "Mozzarella") {
    prefix = "moz";
  } else if (item == "Four Cheese") {
    prefix = "four";
  } else {
    prefix = "provo";
  }
  id = prefix + suffix;
  return id;
}

function getToppingId(item, className, classesList, side) {
  var id;
  var prefix = item.toString().toLowerCase();
  if (/\s/.test(prefix)) {
    prefix = prefix.replace(/\s/g, "");
  }
  if (
    classesList != null &&
    classesList.toString().includes("topping-button")
  ) {
    id = prefix;
  }
  if (className == "exes") {
    id = prefix + "-x";
  }
  if (side != null && side != "") {
    id = prefix + "-" + side;
  }
  return id;
}

function setSelectedPizza(id) {
  toppingImgs = [];
  for (let i = 0; i < preBuiltData.length; i++) {
    var tempName = preBuiltData[i].name;
    if (/\s/.test(tempName)) {
      tempName = tempName.replace(/\s/g, "");
    }
    if (id == tempName) {
      currentCheese = preBuiltData[i].cheese;
      currentCrust = preBuiltData[i].crust;
      currentSauce = preBuiltData[i].sauce;
      toppingImgs = preBuiltData[i].toppingsImages;
      // for (img in preBuiltData[i].images) {
      //   if (!img.toString().includes("crust") && !img.toString().includes("sauce") && !img.toString().includes("cheese")){
      //     toppingImgs.push(preBuiltData[i].images[img]);
      //   }
      // }
      // console.log("topping imgs in SetSelectedPizza", toppingImgs);
      // var whatever = preBuiltData[i].images;
      // whatever.pop();
      // whatever.pop();
      // whatever.pop();
      // console.log(preBuiltData);
      // toppingImgs = whatever;
      currentToppings = preBuiltData[i].toppings;
      calculateCost();
    }
  }
}

function customClick(evt) {
  isPreBuilt = false;
  currentSize = null;
  currentCrust = null;
  currentSauce = null;
  currentCheese = null;
  currentToppings = [];
  currentPizzaImgs = [];
  toppingImgs = [];
  totalPrice = null;
  changePage("size");
}

function preClick(evt) {
  isPreBuilt = true;
  currentSize = null;
  currentCrust = null;
  currentSauce = null;
  currentCheese = null;
  currentToppings = [];
  currentPizzaImgs = [];
  toppingImgs = [];
  totalPrice = null;
  changePage("prebuilt");
}

function sizeClick(evt) {
  var nextBtn = document.getElementById("nextBtn");
  var backBtn = document.getElementById("backBtn");
  if (isPreBuilt == true) {
    nextBtn.addEventListener("click", function () {
      changePage("crust");
    });
    backBtn.addEventListener("click", function () {
      changePage("prebuilt");
    });
  } else {
    nextBtn.addEventListener("click", function () {
      changePage("crust");
    });
    backBtn.addEventListener("click", function () {
      changePage("start");
    });
  }
  var allElements = document.body.getElementsByTagName("*");
  for (let i = 0; i < allElements.length; i++) {
    if (allElements[i].classList.contains("selected")) {
      allElements[i].className = allElements[i].className.replace(
        " selected",
        ""
      );
    }
  }
  this.className = this.className + " selected";
  setSelectedSize(this.id);
}

function preBuiltClick(evt) {
  var nextBtn = document.getElementById("nextBtn");
  var backBtn = document.getElementById("backBtn");
  nextBtn.addEventListener("click", function () {
    changePage("size");
  });
  backBtn.addEventListener("click", function () {
    changePage("start");
  });
  console.log("click id", this.id);
  var allElements = document.body.getElementsByTagName("*");
  for (let i = 0; i < allElements.length; i++) {
    if (allElements[i].classList.contains("selected-box")) {
      allElements[i].className = allElements[i].className.replace(
        " selected-box",
        ""
      );
    }
  }
  this.className = this.className + " selected-box";
  setSelectedPizza(this.id);
}

function buildingSizeClick(evt) {
  var allElements = document.body.getElementsByTagName("*");
  for (let i = 0; i < allElements.length; i++) {
    if (allElements[i].classList.contains("selected")) {
      allElements[i].className = allElements[i].className.replace(
        " selected",
        ""
      );
    }
  }
  this.className = this.className + " selected";
  buildingSetSize(this.id);
}

function crustClick(evt) {
  var nextBtn = document.getElementById("nextBtn");
  var backBtn = document.getElementById("backBtn");
  nextBtn.addEventListener("click", function () {
    changePage("sauce");
  });
  backBtn.addEventListener("click", function () {
    changePage("size");
  });
  var allElements = document.body.getElementsByTagName("*");
  for (let i = 0; i < allElements.length; i++) {
    if (allElements[i].classList.contains("selectedCrust")) {
      allElements[i].className = allElements[i].className.replace(
        " selectedCrust",
        ""
      );
    }
  }
  this.className = this.className + " selectedCrust";
  setSelectedCrust(this.id);
}

function sauceClick(evt) {
  var nextBtn = document.getElementById("nextBtn");
  var backBtn = document.getElementById("backBtn");
  nextBtn.addEventListener("click", function () {
    changePage("cheese");
  });
  backBtn.addEventListener("click", function () {
    changePage("crust");
  });
  var allElements = document.body.getElementsByTagName("*");
  for (let i = 0; i < allElements.length; i++) {
    if (allElements[i].classList.contains("selectedCrust")) {
      allElements[i].className = allElements[i].className.replace(
        " selectedCrust",
        ""
      );
    }
  }
  this.className = this.className + " selectedCrust";
  setSelectedSauce(this.id);
}

function cheeseClick(evt) {
  var nextBtn = document.getElementById("nextBtn");
  var backBtn = document.getElementById("backBtn");
  nextBtn.addEventListener("click", function () {
    changePage("toppings");
  });
  backBtn.addEventListener("click", function () {
    changePage("sauce");
  });
  var allElements = document.body.getElementsByTagName("*");
  for (let i = 0; i < allElements.length; i++) {
    if (allElements[i].classList.contains("selectedCrust")) {
      allElements[i].className = allElements[i].className.replace(
        " selectedCrust",
        ""
      );
    }
  }
  this.className = this.className + " selectedCrust";
  setSelectedCheese(this.id);
}

function toppingLabelClick(evt) {
  var currentX = document.getElementById(this.id + "-x");
  var currentOptions = document.getElementById(this.id + "-options");
  this.className = this.className + " selectedCrust";
  var toppingOptions = document.getElementsByClassName("topping-options");
  for (let i = 0; i < toppingOptions.length; i++) {
    toppingOptions[i].style.display = "none";
  }
  currentX.style.display = "block";
  currentOptions.style.display = "block";
}

function removeClick(evt) {
  //remove currently selected topping from list
  var currentX = document.getElementById(this.id);
  var toppingName = this.id.toString().split("-");
  var name = toppingName[0];
  var topToRemove = document.getElementById(name);
  topToRemove.className = topToRemove.className.replace(" selectedCrust", "");
  currentX.style.display = "none";

  var left = document.getElementById(name + "-left");
  var right = document.getElementById(name + "-right");
  var full = document.getElementById(name + "-full");
  var double = document.getElementById(name + "-double");
  var extra = document.getElementById(name + "-extra");

  var options = document.getElementById(name + "-options");
  options.style.display = "none";

  if (left.classList.contains("selectedCrust")) {
    left.className = left.className.replace(" selectedCrust", "");
  }
  if (right.classList.contains("selectedCrust")) {
    right.className = right.className.replace(" selectedCrust", "");
  }
  if (full.classList.contains("selectedCrust")) {
    full.className = full.className.replace(" selectedCrust", "");
  }
  if (extra.classList.contains("selectedCrust")) {
    extra.className = extra.className.replace(" selectedCrust", "");
  }
  if (double.classList.contains("selectedCrust")) {
    double.className = double.className.replace(" selectedCrust", "");
  }

  removeTopping(toppingName[0]);
}

function rightClick(evt) {
  var nextBtn = document.getElementById("nextBtn");
  var backBtn = document.getElementById("backBtn");
  nextBtn.addEventListener("click", function () {
    changePage("final");
  });
  backBtn.addEventListener("click", function () {
    changePage("cheese");
  });
  var toppingString = this.id.toString().split("-");
  var toppingName = toppingString[0];

  var left = document.getElementById(toppingName + "-left");
  var right = document.getElementById(toppingName + "-right");
  var full = document.getElementById(toppingName + "-full");
  var double = document.getElementById(toppingName + "-double");
  var extra = document.getElementById(toppingName + "-extra");
  var isSelected = false;
  var name;
  if (left.classList.contains("selectedCrust")) {
    left.className = left.className.replace(" selectedCrust", "");
  }
  if (full.classList.contains("selectedCrust")) {
    full.className = full.className.replace(" selectedCrust", "");
  }
  if (!right.classList.contains("selectedCrust")) {
    right.className = right.className + " selectedCrust";
    name = toppingName + "-right";
    isSelected = true;
  }

  if (isSelected == true) {
    if (extra.classList.contains("selectedCrust")) {
      name += "-extra";
    }
    if (double.classList.contains("selectedCrust")) {
      name += "-double";
    }
  }
  setSelectedTopping(name);
}

function leftClick(evt) {
  var nextBtn = document.getElementById("nextBtn");
  var backBtn = document.getElementById("backBtn");
  nextBtn.addEventListener("click", function () {
    changePage("final");
  });
  backBtn.addEventListener("click", function () {
    changePage("cheese");
  });
  var toppingString = this.id.toString().split("-");
  var toppingName = toppingString[0];

  var left = document.getElementById(toppingName + "-left");
  var right = document.getElementById(toppingName + "-right");
  var full = document.getElementById(toppingName + "-full");
  var double = document.getElementById(toppingName + "-double");
  var extra = document.getElementById(toppingName + "-extra");
  var isSelected = false;
  var name;
  if (right.classList.contains("selectedCrust")) {
    right.className = right.className.replace(" selectedCrust", "");
  }
  if (full.classList.contains("selectedCrust")) {
    full.className = full.className.replace(" selectedCrust", "");
  }
  if (!left.classList.contains("selectedCrust")) {
    left.className = left.className + " selectedCrust";
    name = toppingName + "-left";
    isSelected = true;
  }

  if (isSelected == true) {
    if (extra.classList.contains("selectedCrust")) {
      name += "-extra";
    }
    if (double.classList.contains("selectedCrust")) {
      name += "-double";
    }
  }
  setSelectedTopping(name);
}

function fullClick(evt) {
  var nextBtn = document.getElementById("nextBtn");
  var backBtn = document.getElementById("backBtn");
  nextBtn.addEventListener("click", function () {
    changePage("final");
  });
  backBtn.addEventListener("click", function () {
    changePage("cheese");
  });
  var toppingString = this.id.toString().split("-");
  var toppingName = toppingString[0];

  var left = document.getElementById(toppingName + "-left");
  var right = document.getElementById(toppingName + "-right");
  var full = document.getElementById(toppingName + "-full");
  var double = document.getElementById(toppingName + "-double");
  var extra = document.getElementById(toppingName + "-extra");
  var isSelected = false;
  var name;

  if (right.classList.contains("selectedCrust")) {
    right.className = right.className.replace(" selectedCrust", "");
  }
  if (left.classList.contains("selectedCrust")) {
    left.className = left.className.replace(" selectedCrust", "");
  }
  if (!full.classList.contains("selectedCrust")) {
    full.className = full.className + " selectedCrust";
    name = toppingName + "-full";
    isSelected = true;
  }

  if (isSelected == true) {
    if (extra.classList.contains("selectedCrust")) {
      name += "-extra";
    }
    if (double.classList.contains("selectedCrust")) {
      name += "-double";
    }
  }
  setSelectedTopping(name);
}

function extraClick(evt) {
  var toppingString = this.id.toString().split("-");
  var toppingName = toppingString[0];
  var left = document.getElementById(toppingName + "-left");
  var right = document.getElementById(toppingName + "-right");
  var full = document.getElementById(toppingName + "-full");
  var double = document.getElementById(toppingName + "-double");
  var extra = document.getElementById(toppingName + "-extra");

  var isSelected = false;

  //if double is selected
  if (double.classList.contains("selectedCrust")) {
    double.className = double.className.replace(" selectedCrust", "");
    extra.className = extra.className + " selectedCrust";
    isSelected = true;
  } else {
    //if extra is already selected, deselect it
    if (extra.classList.contains("selectedCrust")) {
      extra.className = extra.className.replace(" selectedCrust", "");
    } else {
      extra.className = extra.className + " selectedCrust";
      isSelected = true;
    }
  }

  var name = "";
  if (isSelected == true) {
    if (left.classList.contains("selectedCrust")) {
      name = toppingName + "-left-extra";
    }
    if (right.classList.contains("selectedCrust")) {
      name = toppingName + "-right-extra";
    }
    if (full.classList.contains("selectedCrust")) {
      name = toppingName + "-full-extra";
    }
    setSelectedTopping(name);
  }
}

function doubleClick(evt) {
  var toppingString = this.id.toString().split("-");

  var toppingName = toppingString[0];
  var left = document.getElementById(toppingName + "-left");
  var right = document.getElementById(toppingName + "-right");
  var full = document.getElementById(toppingName + "-full");

  var double = document.getElementById(toppingName + "-double");
  var extra = document.getElementById(toppingName + "-extra");

  var isSelected = false;
  //if extra is selected
  if (extra.classList.contains("selectedCrust")) {
    extra.className = extra.className.replace(" selectedCrust", "");
    double.className = double.className + " selectedCrust";
    isSelected = true;
  } else {
    //if double is already selected, deselect it
    if (double.classList.contains("selectedCrust")) {
      double.className = double.className.replace(" selectedCrust", "");
    } else {
      double.className = double.className + " selectedCrust";
      isSelected = true;
    }
  }
  var name = "";
  if (isSelected == true) {
    if (left.classList.contains("selectedCrust")) {
      name = toppingName + "-left-double";
    }
    if (right.classList.contains("selectedCrust")) {
      name = toppingName + "-right-double";
    }
    if (full.classList.contains("selectedCrust")) {
      name = toppingName + "-full-double";
    }
    setSelectedTopping(name);
  }
}

function setSelectedSize(id) {
  for (let i = 0; i < sizeButtons.length; i++) {
    if (id == sizeButtons[i].id) {
      currentSize = sizeButtons[i].innerHTML;
    }
  }
  calculateCost();
}

function buildingSetSize(id) {
  switch (id) {
    case "smSize":
      currentSize = "S";
      calculateCost();
      break;
    case "medSize":
      currentSize = "M";
      calculateCost();
      break;
    case "lgSize":
      currentSize = "L";
      calculateCost();
      break;
    case "xlSize":
      currentSize = "XL";
      calculateCost();
      break;
  }
  console.log(currentSize);
}

function setSelectedCrust(id) {
  for (let i = 0; i < crustButtons.length; i++) {
    if (id == crustButtons[i].id) {
      currentCrust = crustButtons[i].innerHTML;
    }
  }
  console.log(currentPizzaImgs);
  calculateCost();
  getCrustImg();
  updateListView();
}

function setSelectedSauce(id) {
  for (let i = 0; i < sauceButtons.length; i++) {
    if (id == sauceButtons[i].id) {
      currentSauce = sauceButtons[i].innerHTML;
    }
  }
  calculateCost();
  getSauceImg();
  updateListView();
}

function setSelectedCheese(id) {
  for (let i = 0; i < cheeseButtons.length; i++) {
    if (id == cheeseButtons[i].id) {
      currentCheese = cheeseButtons[i].innerHTML;
    }
  }
  calculateCost();
  getCheeseImg();
  updateListView();
}

function setSelectedTopping(name) {
  var toppingType = name.split("-");
  var match = false;
  var index;
  if (currentToppings.length > 0) {
    for (var i in currentToppings) {
      var temp = currentToppings[i].toString();
      var type = toppingType[0].toString();
      if (temp.includes(type)) {
        match = true;
        index = i;
      }
    }
    if (match == true) {
      currentToppings.splice(index, 1, name);
    } else {
      currentToppings.unshift(name);
    }
  } else {
    currentToppings.push(name);
  }
  calculateCost();
  getToppingImg();
  updateListView();
}

function removeTopping(name) {
  for (topping in currentToppings) {
    var str = currentToppings[topping].toString();
    if (str == "ham") {
      currentToppings.splice(topping, 1);
    } else {
      if (str.includes(name)) {
        currentToppings.splice(topping, 1);
      }
    }
  }
  for (img in toppingImgs) {
    var imgStr = toppingImgs[img].toString();
    if (imgStr.includes(name)) {
      toppingImgs.splice(img, 1);
    }
  }
  updatePizzaView();
  updateListView();
  calculateCost();
}

function updateListView() {
  var list = document.getElementById("ingred-list");
  while (list.hasChildNodes()) {
    list.removeChild(list.lastChild);
  }
  if (currentCrust != null && currentCrust != "") {
    var label = document.createElement("h5");
    label.className = "pizza-component";
    label.innerHTML = currentCrust + " Crust";
    list.appendChild(label);
  }
  if (currentSauce != null && currentSauce != "") {
    var label = document.createElement("h5");
    label.className = "pizza-component";
    label.innerHTML = currentSauce;
    list.appendChild(label);
  }
  if (currentCheese != null && currentCheese != "") {
    var label = document.createElement("h5");
    label.className = "pizza-component";
    label.innerHTML = currentCheese;
    list.appendChild(label);
  }
  if (currentToppings.length > 0) {
    for (let i = 0; i < currentToppings.length; i++) {
      if (currentToppings[i] != null) {
        var str = currentToppings[i].toString();
        var name = str.split("-");
        var toppingName;
        if (name == "bellpeppers" || name[0] == "bellpeppers") {
          toppingName = "bell peppers";
        } else {
          toppingName = name[0];
        }
        var label = document.createElement("h5");
        label.className = "pizza-component";
        label.innerHTML = toppingName;
        list.appendChild(label);
      }
    }
  }
  calculateCost();
  var total = document.getElementById("total");
  total.innerHTML = "Total: $" + totalPrice;
  if (isSpecialDeal) {
    var badge = document.getElementById("deal");
    badge.style.display = "block";
  }
  else {
    var badge = document.getElementById("deal");
    badge.style.display = "none";
  }
}

function updatePizzaView() {
  var pizzaView = document.getElementById("pizzaView");
  var imgList = "";
  if (toppingImgs.length > 0) {
    for (let j = 0; j < toppingImgs.length; j++) {
      imgList += "url('" + toppingImgs[j] + "'), ";
    }
  }
  console.log("list w/ toppings", imgList);
  console.log("update pizza", currentPizzaImgs);
  for (let i = 0; i < currentPizzaImgs.length; i++) {
    if (currentPizzaImgs.length > 0 && i != currentPizzaImgs.length - 1) {
      imgList += "url('" + currentPizzaImgs[i] + "'), ";
    } else {
      imgList += "url('" + currentPizzaImgs[i] + "') no-repeat center";
    }
  }
  console.log("list w/ everything", imgList);
  pizzaView.style.background = imgList;
  pizzaView.style.backgroundSize = "contain";
}

function getCrustImg() {
  var crustImg = "";
  switch (currentCrust) {
    case "Thin":
      crustImg = "assets/crust/crust-thin.png";
      break;
    case "Thick":
      crustImg = "assets/crust/crust-thick.png";
      break;
    case "Stuffed":
      crustImg = "assets/crust/crust-stuffed.png";
      break;
    case "Pretzel":
      crustImg = "assets/crust/crust-pretzel.png";
      break;
  }
  console.log("outisde if", currentPizzaImgs);
  if (currentPizzaImgs.length == 0) {
    currentPizzaImgs.push(crustImg);
  } else {
    var crustIndex = currentPizzaImgs.length - 1;
    currentPizzaImgs.splice(crustIndex, 1, crustImg);
    console.log(currentPizzaImgs);
  }
  updatePizzaView();
}

function getSauceImg() {
  var sauceImg = "";
  switch (currentSauce) {
    case "Marinara":
      sauceImg = "assets/sauce/sauce-marinara.png";
      break;
    case "Creamy Garlic Parmesan":
      sauceImg = "assets/sauce/sauce-creamygarlicparmesan.png";
      break;
    case "Barbeque":
      sauceImg = "assets/sauce/sauce-barbecue.png";
      break;
    case "Buffalo":
      sauceImg = "assets/sauce/sauce-buffalo.png";
      break;
  }
  if (currentPizzaImgs.length == 1) {
    currentPizzaImgs.unshift(sauceImg);
  } else {
    var sauceIndex = currentPizzaImgs.length - 2;
    currentPizzaImgs.splice(sauceIndex, 1, sauceImg);
  }
  updatePizzaView();
}

function getCheeseImg() {
  var cheeseImg = "";
  switch (currentCheese) {
    case "Mozzarella":
      cheeseImg = "assets/cheese/cheese-mozzarella.png";
      break;
    case "Cheddar":
      cheeseImg = "assets/cheese/cheese-cheddar.png";
      break;
    case "Provolone":
      cheeseImg = "assets/cheese/cheese-provolone.png";
      break;
    case "Four Cheese":
      cheeseImg = "assets/cheese/cheese-fourcheese.png";
      break;
  }
  if (currentPizzaImgs.length == 2) {
    currentPizzaImgs.unshift(cheeseImg);
  } else {
    var sauceIndex = currentPizzaImgs.length - 3;
    currentPizzaImgs.splice(sauceIndex, 1, cheeseImg);
  }
  updatePizzaView();
}

function getToppingImg() {
  var toppingImg = "";
  toppingImgs = [];
  for (var i in currentToppings) {
    var topping = currentToppings[i].toString();
    if (topping.includes("pepperoni")) {
      for (let i = 0; i < pepperoniImgs.length; i++) {
        var str = pepperoniImgs[i].toString();
        if (str.includes(topping)) {
          toppingImg = pepperoniImgs[i];
          break;
        }
      }
    }
    if (topping.includes("sausage")) {
      for (let i = 0; i < sausageImgs.length; i++) {
        var str = sausageImgs[i].toString();
        if (str.includes(topping)) {
          toppingImg = sausageImgs[i];
          break;
        }
      }
    }
    if (topping.includes("ham")) {
      for (let i = 0; i < hamImgs.length; i++) {
        var str = hamImgs[i].toString();
        if (str.includes(topping)) {
          toppingImg = hamImgs[i];
          break;
        }
      }
    }
    if (topping.includes("bacon")) {
      for (let i = 0; i < baconImgs.length; i++) {
        var str = baconImgs[i].toString();
        if (str.includes(topping)) {
          toppingImg = baconImgs[i];
          break;
        }
      }
    }
    if (topping.includes("beef")) {
      for (let i = 0; i < beefImgs.length; i++) {
        var str = beefImgs[i].toString();
        if (str.includes(topping)) {
          toppingImg = beefImgs[i];
          break;
        }
      }
    }
    if (topping.includes("mushrooms")) {
      for (let i = 0; i < mushroomImgs.length; i++) {
        var str = mushroomImgs[i].toString();
        if (str.includes(topping)) {
          toppingImg = mushroomImgs[i];
          break;
        }
      }
    }
    if (topping.includes("olives")) {
      for (let i = 0; i < oliveImgs.length; i++) {
        var str = oliveImgs[i].toString();
        if (str.includes(topping)) {
          toppingImg = oliveImgs[i];
          break;
        }
      }
    }
    if (topping.includes("bellpeppers")) {
      for (let i = 0; i < bellPepperImgs.length; i++) {
        var str = bellPepperImgs[i].toString();
        if (str.includes(topping)) {
          toppingImg = bellPepperImgs[i];
          break;
        }
      }
    }
    if (topping.includes("onions")) {
      for (let i = 0; i < onionImgs.length; i++) {
        var str = onionImgs[i].toString();
        if (str.includes(topping)) {
          toppingImg = onionImgs[i];
          break;
        }
      }
    }
    if (topping.includes("spinach")) {
      for (let i = 0; i < spinachImgs.length; i++) {
        var str = spinachImgs[i].toString();
        if (str.includes(topping)) {
          toppingImg = spinachImgs[i];
          break;
        }
      }
    }
    toppingImgs.push(toppingImg);
  }
  updatePizzaView();
}

function calculateCost() {
  totalPrice = 0;
  switch (currentSize) {
    case "XL":
      totalPrice += 13.99;
      break;
    case "L":
      totalPrice += 11.99;
      break;
    case "M":
      totalPrice += 9.99;
      break;
    case "S":
      totalPrice += 7.99;
      break;
  }
  if (currentToppings.length > 5) {
    isSpecialDeal = true;
    var temp = currentToppings.length - 5;
    totalPrice += 3.0;
    totalPrice += (temp - 1) * 1.0;
  } else {
    isSpecialDeal = false;
    totalPrice += (currentToppings.length - 1) * 1.0;
  }
  console.log(isSpecialDeal);
  totalPrice = totalPrice.toFixed(2);
}

function modalInit() {
  var modalBtns = document.getElementsByClassName("btn-modal");
  var close = document.getElementsByClassName("close");

  for (let i = 0; i < modalBtns.length; i++) {
    modalBtns[i].addEventListener("click", function () {
      var modal = modalBtns[i].getAttribute("data-modal");
      document.getElementById(modal).style.display = "block";
    });
  }
  for (let j = 0; j < close.length; j++) {
    close[j].addEventListener("click", function () {
      var modal = close[j].closest(".modal");
      modal.style.display = "none";
      currentSize = null;
      currentCrust = null;
      currentSauce = null;
      currentCheese = null;
      currentToppings = [];
      currentPizzaImgs = [];
      toppingImgs = [];
      totalPrice = null;
      changePage("start");
    });
  }
}