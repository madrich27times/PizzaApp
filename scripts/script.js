var filesToLoad = [];
var loadedJSON = [];
var pages = [
  "<div class='row landing-page'>      <div class='col-4'>        <h1 class='bold-heading title'>Business Name</h1>      </div>      <div class='col-4'></div>      <div class='col-4'></div>    </div>    <div class='row'>      <div id='byoBtn' class='col-6 card'>        <div class='card-container'>          <div class='card-header'>            <h1 class='bold-heading'>Build Your Own</h1>          </div>          <div class='card-body box'>Pizza Image</div>        </div>      </div>      <div id='preBtn' class='col-6 card'>        <div class='card-container'>          <div class='card-header'>            <h1 class='bold-heading'>Pre-Built Pizza</h1>          </div>          <div class='card-body box'>Pizza Image</div>        </div>      </div>    </div>",
  "<div class='row preBuilt-page'>      <div class='col-4'>        <h1 class='bold-heading title'>Pre-Built Options</h1>      </div>      <div class='col-4'></div>      <div class='col-4'></div>    </div>    <div class='row'>      <div class='col-4'>        <div class='popup box'>Pizza Image          <span class='popup-content'>Pizza Description</span>        </div>      </div>      <div class='col-4'>        <div class='popup box'>Pizza Image          <span class='popup-content'>Pizza Description</span>        </div>      </div>      <div class='col-4'>        <div class='popup box'>Pizza Image          <span class='popup-content'>Pizza Description</span>        </div>      </div>    </div>    <div class='row'>      <div class='col-6'>        <div class='popup box'>Pizza Image          <span class='popup-content'>Pizza Description</span>        </div>      </div>      <div class='col-6'>        <div class='popup box'>Pizza Image          <span class='popup-content'>Pizza Description</span>        </div>      </div>    </div>    <div class='row button-row'>      <div class='col-2'>        <div id='backBtn' class='btn-basic'>Back</div>      </div>      <div class='col-10'></div>           <div class='col-1'>        <div id='nextBtn' class='btn-basic'>Next</div>      </div>    </div>",
  "<div class='row size-page'>      <div class='col-4'>        <h1 class='bold-heading title'>Choose your size</h1>      </div>      <div class='col-4'></div>      <div class='col-4'></div>    </div>    <div class='row'>      <div class='col-3 size-container'>        <div id='smallPizza' class='size-box'>S        </div>      </div>      <div class='col-3 size-container'>        <div id='mediumPizza' class='size-box'>M        </div>      </div>      <div class='col-3 size-container'>        <div id='largePizza' class='size-box'>L        </div>      </div>      <div class='col-3 size-container'>        <div id='xLPizza' class='size-box'>XL        </div>      </div>    </div>    <div class='row button-row'>      <div class='col-2'>        <div id='backBtn' class='btn-basic'>Back</div>      </div>      <div class='col-10'></div>      <div class='col-1'>        <div id='nextBtn' class='btn-basic'>Next</div>      </div>    </div>"
];
var currentPage = 0;
var isPopup = false;
var isModal = false;
var isDropdownList = false;

var currentCrust;
var currentSauce;
var currentCheese;
var currentSize;
var currentToppings = [];
var isSpecialDeal = false;
var totalPrice;
var filenameToLoad;

function loadJSON(filename, callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");

  xobj.open("GET", filename, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

function init(response) {
  loadJSON(filenameToLoad, function (responseText) {
    if (filenameToLoad.toString() == "start.json") {
      //load elements for landing page
    }
  });

}

function elementsInit() {
  //add event listeners here
  var allElements = document.body.getElementsByTagName("*");
  for (let i = 0; i < allElements.length; i++) {
    if (allElements[i].classList.contains("landing-page")) {
      landingPageInit();
    }
    if (allElements[i].classList.contains("preBuilt-page")) {
      preBuiltPageInit();
    }
    if (allElements[i].classList.contains("sizes-page")) {
      sizesPageInit();
    }
    if (allElements[i].classList.contains("crust-page")) {
      crustPageInit();
    }
    if (allElements[i].classList.contains("sauce-page")) {
      saucePageInit();
    }
    if (allElements[i].classList.contains("cheese-page")) {
      cheesePageInit();
    }
    if (allElements[i].classList.contains("toppings-page")) {
      toppingsPageInit();
    }
    if (allElements[i].classList.contains("modal")) {
      isModal = true;
      modalInit();
    }
    if (allElements[i].classList.contains("popup")) {
      isPopup = true;
      popupInit();
    }
    if (allElements[i].classList.contains("dropdown-list")) {
      isDropdownList = true;
      dropdownListInit();
    }
  }
}

function changePage(pageNum) {
  console.log("pageNum ", pageNum);
  currentPage = pageNum;
  switch (pageNum) {
    case 0:
      filenameToLoad = "start.json";
      break;
    case 1:
      filenameToLoad = "pre-built-pizzas.json";
      break;
    case 2:
      filenameToLoad = "sizes.json";
      break;
    case 3:
      filenameToLoad = "crusts.json";
      break;
    case 4:
      filenameToLoad = "sauces.json";
      break;
    case 5:
      filenameToLoad = "cheeses.json";
      break;
    case 6:
      filenameToLoad = "toppings.json";
      break;
    default:
      filenameToLoad = "start.json";
      break;
  }
  document.getElementById("pizza").innerHTML = pages[pageNum];
  //event listeners
  //loadJSON w/ index
}

function back() {
  var back = currentPage - 1;
  changePage(back);
}

function next() {
  var next = currentPage + 1;
  changePage(next);
}

function buildStartPage() {
  var container = document.getElementById("pizza");

  var titleRow = document.createElement("div");
  titleRow.className = "row";

  var col1 = document.createElement("div");
  div.className = "col-4";
  var titleHeader = document.createElement("h1");
  titleHeader.className = "bold-heading";
  titleHeader.classList += " title";
  titleHeader.innerHTML = "Buiness Name";
  col1.appendChild(titleHeader);
  titleRow.appendChild(col1);

  var col2 = document.createElement("div");
  col2.className = "col-4";
  titleRow.appendChild(col2);

  var col3 = document.createElement("div");
  col3.className = "col-4";
  titleRow.appendChild(col3);

  var col3 = document.createElement("div");
  col3.className = "col-4";
  titleRow.appendChild(col3);
  container.appendChild(titleRow);

  var contentRow = document.createElement("div");
  contentRow.className = "row";

  var conCol1 = document.createElement("div");
  conCol1.className = "col-6";
  conCol1.classList += " card";
  conCol1.id = "byoBtn";
  var cardContainer1 = document.createElement("div");
  cardContainer1.className = "card-container";
  var cardHeader1 = document.createElement("div");
  cardHeader1.className = "card-header";
  var cardHeading1 = document.createElement("h1");
  cardHeading1.className = "bold-heading";
  cardHeading1.innerHTML = "Build Your Own";
  cardHeader1.appendChild(cardHeading1);
  cardContainer1.appendChild(cardHeader1);
  var cardBody1 = document.createElement("div");
  cardBody1.className = "card-body";
  cardBody1.classList += " box";
  var BYOImg = document.createElement("img");
  BYOImg.src = "images/";
  cardBody1.appendChild(BYOImg);
  cardContainer1.appendChild(cardBody1);
  conCol1.appendChild(cardContainer1);
  contentRow.appendChild(conCol1);

  var conCol2 = document.createElement("div");
  conCol2.className = "col-6";
  conCol2.classList += " card";
  conCol2.id = "preBtn";
  var cardContainer2 = document.createElement("div");
  cardContainer2.className = "card-container";
  var cardHeader2 = document.createElement("div");
  cardHeader2.className = "card-header";
  var cardHeading2 = document.createElement("h1");
  cardHeading2.className = "bold-heading";
  cardHeading2.innerHTML = "Pre-Built Pizza";
  cardHeader2.appendChild(cardHeading2);
  cardContainer2.appendChild(cardHeader2);
  var cardBody2 = document.createElement("div");
  cardBody2.className = "card-body";
  cardBody2.classList += " box";
  var PBImg = document.createElement("img");
  PBimg.src = "images/";
  cardBody2.appendChild(PBImg);
  cardContainer2.appendChild(cardBody2);
  conCol2.appendChild(cardContainer2);
  contentRow.appendChild(conCol2);

  container.appendChild(contentRow);

}

function modalInit() {
  if (isModal == true) {
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
      });
    }
  }
}

function popupInit() {
  if (isPopup == true) {
    var popups = document.getElementsByClassName("popup");
    for (let i = 0; i < popups.length; i++) {
      popups[i].addEventListener("click", function () {
        var popupContent = this.firstElementChild;
        if (popupContent.style.visibility == "visible") {
          popupContent.style.visibility = "hidden";
        } else {
          popupContent.style.visibility = "visible";
        }
      });
    }
  }
}

function dropdownListInit() {
  if (isDropdownList == true) {
    var dropdownLists = document.getElementsByClassName("dropdown-list");
    for (let i = 0; i < dropdownLists.length; i++) {
      dropdownLists[i].addEventListener("click", function () {
        var content = document.getElementsByClassName("dropdown-list-contents");
        if (content[i].style.visibility == "visible") {
          content[i].style.visibility = "hidden";
        } else {
          content[i].style.visibility = "visible";
        }
      });
    }
  }
}

// var runJSON = setTimeout(init(), 3000);
//changePage(0);
// var isPopup = true;
// popupInit();
var isDropdownList = true;
dropdownListInit();

function calculateCost(){
  totalPrice = 0;
  switch (currentSize){
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
  if(currentToppings.length > 4){
    isSpecialDeal = true;
    var temp = currentToppings.length - 5;
    totalPrice += 3.00;
    totalPrice += temp * 1.00;
  } else {
    isSpecialDeal = false;
    totalPrice += currentToppings.length * 1.00;
  }
  totalPrice = totalPrice.toFixed(2);
  console.log(totalPrice);
}
calculateCost();