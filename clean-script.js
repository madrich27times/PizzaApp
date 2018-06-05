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
  "Canadian Bacon",
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

var currentSize = "XL";
var currentCrust;
var currentSauce;
var currentCheese;

//buildStartPage();
//buildFinalPage();
//buildSizesPage();
//buildCrustPage();
//buildSaucePage();
//buildCheesePage();
//buildToppingsPage();

changePage("size");

function changePage(pageName) {
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
  buildPreBuiltRow();
  buildButtonRow();
}

function buildSizesPage() {
  buildHeaderRow("size-page", "Choose your size");
  buildMiddleRow("size");
  buildButtonRow();
}

function buildCrustPage() {
  buildHeaderRow("crust-page", "Choose your crust");
  buildMiddleRow("crust");
  buildButtonRow();
}

function buildSaucePage() {
  buildHeaderRow("sauce-page", "Choose your sauce");
  buildMiddleRow("sauce");
  buildButtonRow();
}

function buildCheesePage() {
  buildHeaderRow("cheese-page", "Choose your cheese");
  buildMiddleRow("cheese");
  buildButtonRow();
}

function buildToppingsPage() {
  buildHeaderRow("toppings-page", "Choose your toppings");
  buildMiddleRow("toppings");
  buildButtonRow();
}

function buildFinalPage() {
  buildHeaderRow("finalPage", "Review Order");
  buildMiddleRow("final");
  modalInit();
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

function buildMiddleRow(pageName) {
  var row;
  if (pageName == "size" || pageName == "final" || pageName == "start") {
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
    if (sizeArr[i].innerHTML.toString() == currentSize) {
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
  card2.addEventListener("click", customClick);
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

function buildPreBuiltRow(){
  var row = document.createElement("div");
  row.className = "row";
  for (let i = 0; i < preBuiltNames.length; i++){
    var name;
    if (/\s/.test(i)) {
      name = i.replace(/\s/g, "");
    } 
    else {
      name = i;
    }
    var col = document.createElement('div');
    col.setAttribute('class', 'col-4');
    var pizzaDiv = document.createElement('div');
    pizzaDiv.setAttribute('id', i);
    pizzaDiv.setAttribute('class', 'popup pizza-box');
    var descName = i + "-desc";
    var descSpan = document.createElement('span');
    descSpan.setAttribute('id', descName);
    descSpan.setAttribute('class', 'popup-content');
    row.appendChild(col);
    col.appendChild(pizzaDiv);
    pizzaDiv.appendChild(descSpan);
    col.addEventListener('click', preBuiltClick);
  }
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

//add event listeners here
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
      cheeseButtons[i].className = cheeseButtons[i].className + " selected";
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

function customClick(evt) {
  console.log(this.id);
  changePage("size");
}

function preClick(evt) {
  console.log(this.id);
  changePage("prebuilt");
}

function preBuiltClick(evt){
  console.log(this.id);
}

function sizeClick(evt) {
  console.log(this.id);
}

function crustClick(evt) {
  console.log(this.id);
}

function sauceClick(evt) {
  console.log(this.id);
}

function cheeseClick(evt) {
  console.log(this.id);
}

function toppingLabelClick(evt) {
  console.log(this.id);
}

function removeClick(evt) {
  console.log(this.id);
}

function leftClick(evt) {
  console.log(this.id);
}

function fullClick(evt) {
  console.log(this.id);
}

function rightClick(evt) {
  console.log(this.id);
}

function doubleClick(evt) {
  console.log(this.id);
}

function extraClick(evt) {
  console.log(this.id);
}

function modalInit() {
  var modalBtns = document.getElementsByClassName("btn-modal");
  var close = document.getElementsByClassName("close");

  for (let i = 0; i < modalBtns.length; i++) {
    modalBtns[i].addEventListener("click", function() {
      var modal = modalBtns[i].getAttribute("data-modal");
      document.getElementById(modal).style.display = "block";
    });
  }
  for (let j = 0; j < close.length; j++) {
    close[j].addEventListener("click", function() {
      var modal = close[j].closest(".modal");
      modal.style.display = "none";
      // currentSize = null;
      // currentCrust = null;
      // currentSauce = null;
      // currentCheese = null;
      // currentToppings = [];
      // currentPizzaImgs = [];
      // toppingImgs = [];
      // totalPrice = null;
      // changePage(0);
    });
  }
}
