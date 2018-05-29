var filesToLoad = [];
var loadedJSON = [];
var pages = [
  "<div class='row landing-page'>      <div class='col-4'>        <h1 class='bold-heading title'>Order Online</h1>      </div>      <div class='col-4'></div>      <div class='col-4'></div>    </div>    <div class='row'>      <div id='byoBtn' class='col-6 card'>        <div class='card-container'>          <div class='card-header'>            <h1 class='bold-heading'>Build Your Own</h1>          </div>          <div id='customBox' class='card-body box'></div>        </div>      </div>      <div id='preBtn' class='col-6 card'>        <div class='card-container'>          <div class='card-header'>            <h1 class='bold-heading'>Pre-Built Pizza</h1>          </div>          <div id='preBuiltBox' class='card-body box'></div>        </div>      </div>    </div>",
  "<div class='row preBuilt-page'>      <div class='col-4'>        <h1 class='bold-heading title'>Pre-Built Options</h1>      </div>      <div class='col-4'></div>      <div class='col-4'></div>    </div>    <div class='row'>      <div class='col-4'>        <div id='pb_0' class='popup pizza-box'>          <span id='pbD_0' class='popup-content'></span>        </div>      </div>      <div class='col-4'>        <div id='pb_1' class='popup pizza-box'>          <span id='pbD_1' class='popup-content'></span>        </div>      </div>      <div class='col-4'>        <div id='pb_2' class='popup pizza-box'>          <span id='pbD_2' class='popup-content'></span>        </div>      </div>    </div>    <div class='row'>      <div class='col-4'>        <div id='pb_3' class='popup pizza-box'>          <span id='pbD_3' class='popup-content'></span>        </div>      </div>      <div class='col-4'>        <div id='pb_4' class='popup pizza-box'>          <span id='pbD_4' class='popup-content'></span>        </div>      </div>	  <div class='col-4'>	  <div id='pb_5' class='popup pizza-box'>          <span id='pbD_5' class='popup-content'></span>        </div>      </div>    </div>    <div class='row button-row'>      <div class='col-2'>        <div id='backBtn' class='btn-basic'>Back</div>      </div>      <div class='col-10'></div>           <div class='col-1'>        <div id='nextBtn' class='btn-basic'>Next</div>      </div>    </div>",
  "<div class='row size-page'>      <div class='col-4'>        <h1 class='bold-heading title'>Choose your size</h1>      </div>      <div class='col-4'></div>      <div class='col-4'></div>    </div>    <div class='row'>      <div class='col-3 size-container'>        <div id='smallPizza' class='size-box'>S        </div>      </div>      <div class='col-3 size-container'>        <div id='mediumPizza' class='size-box'>M        </div>      </div>      <div class='col-3 size-container'>        <div id='largePizza' class='size-box'>L        </div>      </div>      <div class='col-3 size-container'>        <div id='xLPizza' class='size-box'>XL        </div>      </div>    </div>    <div class='row button-row'>      <div class='col-2'>        <div id='backBtn' class='btn-basic'>Back</div>      </div>      <div class='col-10'></div>      <div class='col-1'>        <div id='nextBtn' class='btn-basic'>Next</div>      </div>    </div>",
  "<div class='row crust-page'>      <div class='col-4'>        <h1 class='bold-heading title'>Choose your crust          <span class='badge'>Special Deal</span>        </h1>      </div>      <div class='col-4'></div>      <div class='col-4'></div>    </div>    <div class='row'>      <div class='col-4'>        <div id='pizzaViewContainer'>          <div id='pizzaView' class='pizza-box box'></div>        </div>        <div>          <div class='size-display'>	    <div id='smSize' class='size-bar'>S</div>            <div id='medSize' class='size-bar'>M</div>            <div id='lgSize' class='size-bar'>L</div>            <div id='xlSize' class='size-bar'>XL</div>          </div>        </div>      </div>      <div class='col-4'>        <div class='list-container'>          <div id='crustList'>            <div id='thin-crust' class='btn-basic bold-heading crustOpt'>Thin</div>          </div>          <div id='crustList'>            <div id='thick-crust' class='btn-basic bold-heading crustOpt'>Thick</div>          </div>          <div id='crustList'>            <div id='stuffed-crust' class='btn-basic bold-heading crustOpt'>Stuffed</div>          </div>	  <div id='crustList'>            <div id='pretzel-crust' class='btn-basic bold-heading crustOpt'>Pretzel</div>          </div>          </div>      </div>      <div class='col-4'>        <div class='ingredient-div'>          <h3>Your Pizza</h3>          <div id='ingred-list' class='list-div'>          </div>	  <h4 id='total'>Total: $0.00</h4>          <div id='addBtn' class='btn-modal' data-modal='modalLight'>Add to Order</div>          <div id='modalLight' class='modal modal-light'>            <div class='modal-content'>              <div class='modal-header'>                <span class='close'>&times;</span>              </div>              <div class='modal-body'>                <h1 class='bold-heading'>Thank you for your order!</h1>              </div>              <div class='modal-footer'>              </div>            </div>          </div>        </div>      </div>    </div>    <div class='row button-row'>      <div class='col-1 backBtn'>        <div id='backBtn' class='btn-basic'>Back</div>      </div>      <div class='col-10'></div>      <div class='col-1 nextBtn'>        <div id='nextBtn' class='btn-basic'>Next</div>      </div>    </div>",
  "<div class='row sauce-page'>      <div class='col-4'>        <h1 class='bold-heading title'>Choose your sauce          <span id='deal' class='badge'>Special Deal</span>        </h1>      </div>      <div class='col-4'></div>      <div class='col-4'></div>    </div>    <div class='row'>      <div class='col-4'>        <div id='pizzaViewContainer'>          <div id='pizzaView' class='pizza-box box'></div>        </div>        <div>          <div class='size-display'>            <div id='smSize' class='size-bar'>S</div>            <div id='medSize' class='size-bar'>M</div>            <div id='lgSize' class='size-bar'>L</div>            <div id='xlSize' class='size-bar'>XL</div>          </div>        </div>      </div>      <div class='col-4'>        <div class='list-container'>          <div id='sauceList' class='dropdown-list' tabindex='1'>            <span class='bold-heading'>Marinara</span>            <ul class='dropdown-list-contents light-heading'>              <li id='mar-light'>                Light              </li>              <li id='mar-reg'>                Regular              </li>              <li id='mar-extra'>                Extra              </li>            </ul>          </div>          <div id='sauceList' class='dropdown-list' tabindex='1'>            <span class='bold-heading'>Creamy Garlic Parmesan</span>            <ul class='dropdown-list-contents light-heading'>              <li id='creamy-light'>                Light              </li>              <li id='creamy-reg'>                Regular              </li>              <li id='creamy-extra'>                Extra              </li>            </ul>          </div>          <div id='sauceList' class='dropdown-list' tabindex='1'>            <span class='bold-heading'>Barbeque</span>            <ul class='dropdown-list-contents light-heading'>              <li id='bbq-light'>                Light              </li>              <li id='bbq-reg'>                Regular              </li>              <li id='bbq-extra'>                Extra              </li>            </ul>          </div>          <div id='sauceList' class='dropdown-list' tabindex='1'>            <span class='bold-heading'>Buffalo</span>            <ul class='dropdown-list-contents light-heading'>              <li id='buff-light'>                Light              </li>              <li id='buff-reg'>                Regular              </li>              <li id='buff-extra'>                Extra              </li>            </ul>          </div>          </div>      </div>      <div class='col-4'>        <div class='ingredient-div'>          <h3>Your Pizza</h3>          <div id='ingred-list' class='list-div'>          </div>          <h4 id='total'>Total: $0.00</h4>          <div id='addBtn' class='btn-modal' data-modal='modalLight'>Add to Order</div>          <div id='modalLight' class='modal modal-light'>            <div class='modal-content'>              <div class='modal-header'>                <span class='close'>&times;</span>              </div>              <div class='modal-body'>                <h1 class='bold-heading'>Thank you for your order!</h1>              </div>              <div class='modal-footer'>              </div>            </div>          </div>        </div>      </div>    </div>    <div class='row button-row'>      <div class='col-1 backBtn'>        <div id='backBtn' class='btn-basic'>Back</div>      </div>      <div class='col-10'></div>      <div class='col-1 nextBtn'>        <div id='nextBtn' class='btn-basic'>Next</div>      </div>    </div>"
];
var preBuiltMobile =
  "<div class='row preBuilt-page'>      <div class='col-4'>        <h1 class='bold-heading title'>Pre-Built Options</h1>      </div>      <div class='col-4'></div>      <div class='col-4'></div>    </div>    <div class='row'>      <div class='col-2 pb-row'>        <div id='pb_0' class='pizza-box'>         </div>		<p id='pbD_0' class='pizza-desc'></p>      </div>      <div class='col-2 pb-row'>        <div id='pb_1' class='pizza-box'>        </div>		<p id='pbD_1' class='pizza-desc'></p>      </div>      <div class='col-2 pb-row'>        <div id='pb_2' class='pizza-box'>        </div>		<p id='pbD_2' class='pizza-desc'></p>      </div>      <div class='col-2 pb-row'>        <div id='pb_3' class='pizza-box'>        </div>		<p id='pbD_3' class='pizza-desc'></p>      </div>      <div class='col-2 pb-row'>        <div id='pb_4' class='pizza-box'>        </div>		<p id='pbD_4' class='pizza-desc'></p>      </div>      <div class='col-2 pb-row'>	  <div id='pb_5' class='pizza-box'>        </div>		<p id='pbD_5' class='pizza-desc'></p>	  </div>    </div>    <div class='row button-row'>      <div class='col-2'>        <div id='backBtn' class='btn-basic'>Back</div>      </div>      <div class='col-10'></div>           <div class='col-1'>        <div id='nextBtn' class='btn-basic'>Next</div>      </div>    </div>";
var currentPage = 0;
var isPopup = false;
var isModal = false;
var isDropdownList = false;
var isMobile = false;

var currentCrust;
var currentSauce;
var currentCheese;
var currentSize;
var currentToppings = [];
var isSpecialDeal = false;
var totalPrice;
var filenameToLoad;

var currentPizzaImgs = [];
var currentListContents = [currentCheese, currentSauce, currentCrust];

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
  console.log("in json init", filenameToLoad);
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
            if (
              element != startInfo[i].images[startInfo[i].images.length - 1]
            ) {
              custimgList += "url('" + element + "'), ";
            } else {
              custimgList += "url('" + element + "') no-repeat center";
            }
          });
        }
        if (startInfo[i].name == "Pre-Built") {
          startInfo[i].images.forEach(element => {
            if (
              element != startInfo[i].images[startInfo[i].images.length - 1]
            ) {
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
    if (filenameToLoad.toString() == "scripts/pre-built-pizzas.json") {
      var pbInfo = JSON.parse(responseText);
      //console.log(pbInfo)k;
      var fourCheese = document.getElementById("pb_0");
      var cheeseDesc = document.getElementById("pbD_0");
      var meat = document.getElementById("pb_1");
      var meatDesc = document.getElementById("pbD_1");
      var pep = document.getElementById("pb_2");
      var pepDesc = document.getElementById("pbD_2");
      var veg = document.getElementById("pb_3");
      var vegDesc = document.getElementById("pbD_3");
      var supreme = document.getElementById("pb_4");
      var supremeDesc = document.getElementById("pbD_4");
      var italian = document.getElementById("pb_5");
      var italianDesc = document.getElementById("pbD_5");
      var cheeseImgs = "";
      var meatImgs = "";
      var pepImgs = "";
      var vegImgs = "";
      var supremeImgs = "";
      var italianImgs = "";
      for (let i = 0; i < pbInfo.length; i++) {
        if (pbInfo[i].name == "Four Cheese") {
          cheeseDesc.innerHTML = pbInfo[i].desc;
          pbInfo[i].images.forEach(element => {
            if (element != pbInfo[i].images[pbInfo[i].images.length - 1]) {
              cheeseImgs += "url('" + element + "'), ";
            } else {
              cheeseImgs += "url('" + element + "') no-repeat center";
            }
          });
        }
        if (pbInfo[i].name == "Meat Lovers") {
          meatDesc.innerHTML = pbInfo[i].desc;
          pbInfo[i].images.forEach(element => {
            if (element != pbInfo[i].images[pbInfo[i].images.length - 1]) {
              meatImgs += "url('" + element + "'), ";
            } else {
              meatImgs += "url('" + element + "') no-repeat center";
            }
          });
        }
        if (pbInfo[i].name == "Pepperoni") {
          pepDesc.innerHTML = pbInfo[i].desc;
          pbInfo[i].images.forEach(element => {
            if (element != pbInfo[i].images[pbInfo[i].images.length - 1]) {
              pepImgs += "url('" + element + "'), ";
            } else {
              pepImgs += "url('" + element + "') no-repeat center";
            }
          });
        }
        if (pbInfo[i].name == "Veggie Lovers") {
          vegDesc.innerHTML = pbInfo[i].desc;
          pbInfo[i].images.forEach(element => {
            if (element != pbInfo[i].images[pbInfo[i].images.length - 1]) {
              vegImgs += "url('" + element + "'), ";
            } else {
              vegImgs += "url('" + element + "') no-repeat center";
            }
          });
        }
        if (pbInfo[i].name == "Supreme") {
          supremeDesc.innerHTML = pbInfo[i].desc;
          pbInfo[i].images.forEach(element => {
            if (element != pbInfo[i].images[pbInfo[i].images.length - 1]) {
              supremeImgs += "url('" + element + "'), ";
            } else {
              supremeImgs += "url('" + element + "') no-repeat center";
            }
          });
        }
        if (pbInfo[i].name == "Italian") {
          italianDesc.innerHTML = pbInfo[i].desc;
          pbInfo[i].images.forEach(element => {
            if (element != pbInfo[i].images[pbInfo[i].images.length - 1]) {
              italianImgs += "url('" + element + "'), ";
            } else {
              italianImgs += "url('" + element + "') no-repeat center";
            }
          });
        }
      }
      fourCheese.style.background = cheeseImgs;
      fourCheese.style.backgroundSize = "contain";
      meat.style.background = meatImgs;
      meat.style.backgroundSize = "contain";
      pep.style.background = pepImgs;
      pep.style.backgroundSize = "contain";
      veg.style.background = vegImgs;
      veg.style.backgroundSize = "contain";
      supreme.style.background = supremeImgs;
      supreme.style.backgroundSize = "contain";
      italian.style.background = italianImgs;
      italian.style.backgroundSize = "contain";
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
      isModal = true;
      modalInit();
    }
    if (allElements[i].classList.contains("sauce-page")) {
      isDropdownList = true;
      dropdownListInit();
      isModal = true;
      modalInit();
      saucePageInit();
    }
    if (allElements[i].classList.contains("cheese-page")) {
      isDropdownList = true;
      dropdownListInit();
      isModal = true;
      modalInit();
      cheesePageInit();
    }
    if (allElements[i].classList.contains("toppings-page")) {
      isDropdownList = true;
      dropdownListInit();
      isModal = true;
      modalInit();
      toppingsPageInit();
    }
    if (allElements[i].classList.contains("popup")) {
      isPopup = true;
      //popupInit();
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
      filenameToLoad = "scripts/crusts.json";
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
  //check for mobile layout
  checkMobile();
  //set event listeners
  elementsInit();
  //load json data
  setTimeout(init(), 3000);
}

function landingPageInit() {
  var customBtn = document.getElementById("byoBtn");
  var preBuiltBtn = document.getElementById("preBtn");

  customBtn.addEventListener("click", customClick);
  preBuiltBtn.addEventListener("click", preClick);
}

function setNavButtons() {
  var nextBtn = document.getElementById("nextBtn");
  var backBtn = document.getElementById("backBtn");

  nextBtn.addEventListener("click", next);
  backBtn.addEventListener("click", back);
}

function setSizeButtons() {
  var smSize = document.getElementById("smSize");
  var medSize = document.getElementById("medSize");
  var lgSize = document.getElementById("lgSize");
  var xlSize = document.getElementById("xlSize");

  smSize.addEventListener("click", buildingSizeClick);
  medSize.addEventListener("click", buildingSizeClick);
  lgSize.addEventListener("click", buildingSizeClick);
  xlSize.addEventListener("click", buildingSizeClick);

  switch (currentSize) {
    case "S":
      smSize.className = smSize.className + " selected";
      break;
    case "M":
      medSize.className = medSize.className + " selected";
      break;
    case "L":
      lgSize.className = lgSize.className + " selected";
      break;
    case "XL":
      xlSize.className = xlSize.className + " selected";
      break;
  }
}


function customClick(evt) {
  changePage(2);
}

function preClick(evt) {
  changePage(1);
}

function preBuiltPageInit() {
  //console.log("in pre-built init");
  setNavButtons();

  var fourCheese = document.getElementById("pb_0");
  var meat = document.getElementById("pb_1");
  var pep = document.getElementById("pb_2");
  var veg = document.getElementById("pb_3");
  var supreme = document.getElementById("pb_4");
  var italian = document.getElementById("pb_5");

  fourCheese.addEventListener("click", preBuiltClick);
  meat.addEventListener("click", preBuiltClick);
  pep.addEventListener("click", preBuiltClick);
  veg.addEventListener("click", preBuiltClick);
  supreme.addEventListener("click", preBuiltClick);
  italian.addEventListener("click", preBuiltClick);
}

function preBuiltClick(evt) {
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

function setSelectedPizza(id) {
  console.log(id);
  switch (id) {
    case "pb_0":
      currentCrust = "Thick";
      currentCheese = "Four-Cheese";
      currentSauce = "Marinara";
      calculateCost();
      break;
    case "pb_1":
      currentCrust = "Thick";
      currentCheese = "Mozzarella";
      currentSauce = "Marinara";
      currentToppings = [
        "Pepperoni",
        "Sausage",
        "Canadian Bacon",
        "Bacon",
        "Beef"
      ];
      calculateCost();
      break;
    case "pb_2":
      currentCrust = "Thick";
      currentCheese = "Mozzarella";
      currentSauce = "Marinara";
      currentToppings = ["Pepperoni"];
      calculateCost();
      break;
    case "pb_3":
      currentCrust = "Thick";
      currentCheese = "Mozzarella";
      currentSauce = "Marinara";
      currentToppings = [
        "Mushrooms",
        "Olives",
        "Onions",
        "Bell Pepper",
        "Spinach"
      ];
      calculateCost();
      break;
    case "pb_4":
      currentCrust = "Thin";
      currentCheese = "Mozzarella";
      currentSauce = "Marinara";
      currentToppings = [
        "Onion",
        "Bell Pepper",
        "Mushroom",
        "Pepperoni",
        "Sausage",
        "Beef"
      ];
      calculateCost();
      break;
    case "pb_5":
      currentCrust = "Thin";
      currentCheese = "Mozzarella";
      currentSauce = "Marinara";
      currentToppings = ["Onion", "Bell Pepper", "Sausage"];
      calculateCost();
      break;
  }
  console.log(
    `Crust: ${currentCrust} Sauce: ${currentSauce} Cheese: ${currentCheese} Toppings: ${currentToppings}`
  );
}

function sizesPageInit() {
  //console.log("in sizes init");
  setNavButtons();

  var small = document.getElementById("smallPizza");
  var med = document.getElementById("mediumPizza");
  var large = document.getElementById("largePizza");
  var xl = document.getElementById("xLPizza");

  small.addEventListener("click", sizeClick);
  med.addEventListener("click", sizeClick);
  large.addEventListener("click", sizeClick);
  xl.addEventListener("click", sizeClick);
}

function sizeClick(evt) {
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

function setSelectedSize(id) {
  //console.log(id);
  switch (id) {
    case "smallPizza":
      currentSize = "S";
      calculateCost();
      break;
    case "mediumPizza":
      currentSize = "M";
      calculateCost();
      break;
    case "largePizza":
      currentSize = "L";
      calculateCost();
      break;
    case "xLPizza":
      currentSize = "XL";
      calculateCost();
      break;
  }
  console.log("size:", currentSize);
}

function crustPageInit() {
  console.log("crust page init");
  updatePizzaView();
  updateListView();

  setNavButtons();
  setSizeButtons();

  var thin = document.getElementById("thin-crust");
  var thick = document.getElementById("thick-crust");
  var stuffed = document.getElementById("stuffed-crust");
  var pretzel = document.getElementById("pretzel-crust");
  thin.addEventListener('click', crustClick);
  thick.addEventListener('click', crustClick);
  stuffed.addEventListener('click', crustClick);
  pretzel.addEventListener('click', crustClick);
}

function crustClick(evt) {
  var allElements = document.body.getElementsByTagName("*");
  for (let i = 0; i < allElements.length; i++) {
    if (allElements[i].classList.contains("selectedCrust")) {
      allElements[i].className = allElements[i].className.replace(" selectedCrust", "");
    }
  }
  this.className = this.className + " selectedCrust";
  setSelectedCrust(this.id);
}

function setSelectedCrust(id) {
  switch (id) {
    case "thin-crust":
      currentCrust = "Thin";
      calculateCost();
      break;
    case "thick-crust":
      currentCrust = "Thick";
      calculateCost();
      break;
    case "stuffed-crust":
      currentCrust = "Stuffed";
      calculateCost();
      break;
    case "pretzel-crust":
      currentCrust = "Pretzel";
      calculateCost();
      break;
  }
  console.log("crust: ", currentCrust);
  getCrustImg();
  updateListView();
}

function saucePageInit() {
  console.log("sauce page init");
  updatePizzaView();
  updateListView();

  setNavButtons();
  setSizeButtons();

  var marinaraLight = document.getElementById("mar-light");
  var marinaraReg = document.getElementById("mar-reg");
  var marinaraExtra = document.getElementById("mar-extra");
  var creamyLight = document.getElementById("creamy-light");
  var creamyReg = document.getElementById("creamy-reg");
  var creamyExtra = document.getElementById("creamy-extra");
  var bbqLight = document.getElementById("bbq-light");
  var bbqReg = document.getElementById("bbq-reg");
  var bbqExtra = document.getElementById("bbq-extra");
  var buffaloLight = document.getElementById("buff-light");
  var buffaloReg = document.getElementById("buff-reg");
  var buffaloExtra = document.getElementById("buff-extra");

  marinaraLight.addEventListener('click', sauceClick);
  marinaraReg.addEventListener('click', sauceClick);
  marinaraExtra.addEventListener('click', sauceClick);
  creamyLight.addEventListener('click', sauceClick);
  creamyReg.addEventListener('click', sauceClick);
  creamyExtra.addEventListener('click', sauceClick);
  bbqLight.addEventListener('click', sauceClick);
  bbqReg.addEventListener('click', sauceClick);
  bbqExtra.addEventListener('click', sauceClick);
  buffaloLight.addEventListener('click', sauceClick);
  buffaloReg.addEventListener('click', sauceClick);
  buffaloExtra.addEventListener('click', sauceClick);
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
  console.log("size:", currentSize);
}

function sauceClick(evt) {
  console.log("sauce clicked");
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
  setSauce(this.id);
}

function setSauce(id) {
  switch (id) {
    case "mar-light":
      currentSauce = "Marinara";
      calculateCost();
      break;
    case "mar-reg":
      currentSauce = "Marinara";
      calculateCost();
      break;
    case "mar-extra":
      currentSauce = "Marinara";
      calculateCost();
      break;
    case "creamy-light":
      currentSauce = "Creamy Garlic Parmesan";
      calculateCost();
      break;
    case "creamy-reg":
      currentSauce = "Creamy Garlic Parmesan";
      calculateCost();
      break;
    case "creamy-extra":
      currentSauce = "Creamy Garlic Parmesan";
      calculateCost();
      break;
    case "bbq-light":
      currentSauce = "Barbeque";
      calculateCost();
      break;
    case "bbq-reg":
      currentSauce = "Barbeque";
      calculateCost();
      break;
    case "bbq-extra":
      currentSauce = "Barbeque";
      calculateCost();
      break;
    case "buff-light":
      currentSauce = "Buffalo";
      calculateCost();
      break;
    case "buff-reg":
      currentSauce = "Buffalo";
      calculateCost();
      break;
    case "buff-extra":
      currentSauce = "Buffalo";
      calculateCost();
      break;
  }
  console.log("sauce:", currentSauce);
  getSauceImg();
  updateListView();
}

function updateListView() {
  var list = document.getElementById("ingred-list");
  while (list.hasChildNodes()) {
    list.removeChild(list.lastChild);
  }
  if (currentCrust != null) {
    var label = document.createElement("h5");
    label.className = "pizza-component";
    label.innerHTML = currentCrust + " Crust";
    list.appendChild(label);
  }
  if (currentSauce != null) {
    var label = document.createElement("h5");
    label.className = "pizza-component";
    label.innerHTML = currentSauce;
    list.appendChild(label);
  }
  if (currentCheese != null) {
    var label = document.createElement("h5");
    label.className = "pizza-component";
    label.innerHTML = currentCheese;
    list.appendChild(label);
  }
  if (currentToppings.length > 0) {
    for (let i = 0; i < currentToppings.length; i++) {
      if (currentToppings[i] != null) {
        var label = document.createElement("h5");
        label.className = "pizza-component";
        label.innerHTML = currentToppings[i];
        list.appendChild(label);
      }
    }
  }
}

function updatePizzaView() {
  var pizzaView = document.getElementById("pizzaView");

  var imgList = "";
  for (let i = 0; i < currentPizzaImgs.length; i++) {
    if (currentPizzaImgs.length > 1 && (currentPizzaImgs[i] != currentPizzaImgs[i].length - 1)) {
      imgList += "url('" + currentPizzaImgs[i] + "'), ";
    } else {
      imgList += "url('" + currentPizzaImgs[i] + "') no-repeat center";
    }
  }
  console.log("imgs", imgList);
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
  if (currentPizzaImgs.length > 0) {
    currentPizzaImgs.splice(0, 1, crustImg);
  } else {
    currentPizzaImgs.push(crustImg);
  }
  console.log(currentPizzaImgs);
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
      sauceImg = "assets/sauce/barbecue.png";
      break;
    case "Buffalo":
      sauceImg = "assets/sauce/buffalo.png";
      break;
  }
  if (currentPizzaImgs.length > 0) {
    currentPizzaImgs.splice(0, 1, crustImg);
  } else {
    currentPizzaImgs.unshift(sauceImg);
  }
  updatePizzaView();
}

function getCheeseImg() {

}

function getToppingImg() {

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
  console.log("modal init");
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
        changePage(0);
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
      console.log("dropdown init");
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
    totalPrice += 3.0;
    totalPrice += temp * 1.0;
    console.log("special deal!");
  } else {
    isSpecialDeal = false;
    totalPrice += currentToppings.length * 1.0;
  }

  if (isSpecialDeal && currentPage > 2) {
    var badge = document.getElementById("deal");
    badge.style.display = "block";
  }
  totalPrice = totalPrice.toFixed(2);
  console.log("total: $", totalPrice);
  if (currentPage > 2) {
    var total = document.getElementById("total");
    total.innerHTML = "Total: $" + totalPrice;
  }
}

function checkMobile() {
  if (screen.width <= 810) {
    console.log("mobile detected");
    pages.splice(1, 1, preBuiltMobile);
  }
}

changePage(3);