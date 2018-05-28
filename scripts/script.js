var filesToLoad = [];
var loadedJSON = [];
var pages = [
  "<div class='row landing-page'>      <div class='col-4'>        <h1 class='bold-heading title'>Business Name</h1>      </div>      <div class='col-4'></div>      <div class='col-4'></div>    </div>    <div class='row'>      <div id='byoBtn' class='col-6 card'>        <div class='card-container'>          <div class='card-header'>            <h1 class='bold-heading'>Build Your Own</h1>          </div>          <div id='customBox' class='card-body box'></div>        </div>      </div>      <div id='preBtn' class='col-6 card'>        <div class='card-container'>          <div class='card-header'>            <h1 class='bold-heading'>Pre-Built Pizza</h1>          </div>          <div id='preBuiltBox' class='card-body box'></div>        </div>      </div>    </div>",
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
  console.log("in json init ", filenameToLoad);
  loadJSON(filenameToLoad, function (responseText) {
    if (filenameToLoad.toString() == "scripts/start.json") {
      var startInfo = JSON.parse(responseText);
      //console.log(startInfo);
      var customImg = document.getElementById("customBox");
      var preBuiltImg = document.getElementById("preBuiltBox");
      var custimgList = "";
      var preimgList = "";
      for (let i = 0; i < startInfo.length; i++) {
        if (startInfo[i].name == "Custom") {
          startInfo[i].images.forEach(element => {
            if (element != startInfo[i].images[startInfo[i].images.length - 1]) {
              custimgList += "url('" + element + "'), ";
            } else {
              custimgList += "url('" + element + "') no-repeat center";
            }
          });
        }
        if (startInfo[i].name == "Pre-Built") {
          startInfo[i].images.forEach(element => {
            if (element != startInfo[i].images[startInfo[i].images.length - 1]) {
              preimgList += "url('" + element + "'), ";
            } else {
              preimgList += "url('" + element + "') no-repeat center";
            }
          });
        }
      }
      customImg.style.background = custimgList;
      customImg.style.backgroundSize = "contain";
      preBuiltImg.style.background = preimgList;
      preBuiltImg.style.backgroundSize = "contain";
    }
  });

}

function elementsInit() {
  var allElements = document.body.getElementsByTagName("*");
  for (let i = 0; i < allElements.length; i++) {
    if (allElements[i].classList.contains("landing-page")) {
      landingPageInit();
    }
    if (allElements[i].classList.contains("preBuilt-page")) {
      preBuiltPageInit();
    }
    if (allElements[i].classList.contains("size-page")) {
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
  console.log("currentPage ", currentPage);
  switch (pageNum) {
    case 0:
      filenameToLoad = "scripts/start.json";
      break;
    case 1:
      filenameToLoad = "scripts/pre-built-pizzas.json";
      break;
    case 2:
      filenameToLoad = "scripts/sizes.json";
      break;
    case 3:
      filenameToLoad = "scrips/crusts.json";
      break;
    case 4:
      filenameToLoad = "scripts/sauces.json";
      break;
    case 5:
      filenameToLoad = "scripts/cheeses.json";
      break;
    case 6:
      filenameToLoad = "scripts/toppings.json";
      break;
    default:
      filenameToLoad = "scripts/start.json";
      break;
  }
  //set html
  document.getElementById("pizza").innerHTML = pages[pageNum];
  //set event listeners
  elementsInit();
  //load json data
  setTimeout(init(), 3000);
}

function landingPageInit() {
  var customBtn = document.getElementById("byoBtn");
  var preBuiltBtn = document.getElementById("preBtn");

  customBtn.addEventListener('click', customClick);
  preBuiltBtn.addEventListener('click', preClick);
}

function customClick(evt) {
  changePage(2);
}

function preClick(evt) {
  changePage(1);
}

function sizesPageInit() {
  console.log("in sizes init");
  var nextBtn = document.getElementById("nextBtn");
  var backBtn = document.getElementById("backBtn");

  nextBtn.addEventListener('click', next);
  backBtn.addEventListener('click', back);

  var small = document.getElementById("smallPizza");
  var med = document.getElementById("mediumPizza");
  var large = document.getElementById("largePizza");
  var xl = document.getElementById("xLPizza");

  small.addEventListener('click', function () {
    var med = document.getElementById("mediumPizza");
    var large = document.getElementById("largePizza");
    var xl = document.getElementById("xLPizza");
    if (med.classList.contains("selected")) {
      med.className = med.className.replace(" selected", "");
    }
    if (large.classList.contains("selected")) {
      large.className = large.className.replace(" selected", "");
    }
    if (xl.classList.contains("selected")) {
      xl.className = xl.className.replace(" selected", " ");
    }
    small.className = small.className + " selected";
    currentSize = "S";
    console.log("size ", currentSize);
    calculateCost();
  });
  med.addEventListener('click', function () {
    var small = document.getElementById("smallPizza");
    var large = document.getElementById("largePizza");
    var xl = document.getElementById("xLPizza");
    if (small.classList.contains("selected")) {
      small.className = small.className.replace(" selected", "");
    }
    if (large.classList.contains("selected")) {
      large.className = small.className.replace(" selected", "");
    }
    if (xl.classList.contains("selected")) {
      xl.className = xl.className.replace(" selected", "");
    }
    med.className = med.className + " selected";
    currentSize = "M";
    console.log("size ", currentSize);
    calculateCost();
  });
  large.addEventListener('click', function () {
    var small = document.getElementById("smallPizza");
    var med = document.getElementById("mediumPizza");
    var xl = document.getElementById("xLPizza");
    if (small.classList.contains("selected")) {
      small.className = small.className.replace(" selected", "");
    }
    if (med.classList.contains("selected")) {
      med.className = med.className.replace(" selected", "");
    }
    if (xl.classList.contains("selected")) {
      xl.className = xl.className.replace(" selected", "");
    }
    large.classList += " selected";
    currentSize = "L";
    console.log("size ", currentSize);
    calculateCost();
  });
  xl.addEventListener('click', function () {
    var small = document.getElementById("smallPizza");
    var med = document.getElementById("mediumPizza");
    var large = document.getElementById("largePizza");
    if (small.classList.contains("selected")) {
      small.className = small.className.replace(" selected", "");
    }
    if (med.classList.contains("selected")) {
      med.className = med.className.replace(" selected", "");
    }
    if (large.classList.contains("selected")) {
      large.className = large.className.replace(" selected", "");
    }
    xl.classList += " selected";
    currentSize = "XL";
    console.log("size ", currentSize);
    calculateCost();
  });
}

function back(evt) {
  var back = 0;
  if (currentPage != 2) {
    back = currentPage - 1;
  }
  console.log("back ", back);
  changePage(back);
}

function next(evt) {
  var next = currentPage + 1;
  console.log("next ", next);
  changePage(next);
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

changePage(0);

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
  if (currentToppings.length > 4) {
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