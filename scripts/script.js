var filesToLoad = [];
var loadedJSON = [];
var pages = [
  "<div class='row landing-page'>      <div class='col-4'>        <h1 class='bold-heading title'>Order Online</h1>      </div>      <div class='col-4'></div>      <div class='col-4'></div>    </div>    <div class='row'>      <div id='byoBtn' class='col-6 card'>        <div class='card-container'>          <div class='card-header'>            <h1 class='bold-heading'>Build Your Own</h1>          </div>          <div id='customBox' class='card-body box'></div>        </div>      </div>      <div id='preBtn' class='col-6 card'>        <div class='card-container'>          <div class='card-header'>            <h1 class='bold-heading'>Pre-Built Pizza</h1>          </div>          <div id='preBuiltBox' class='card-body box'></div>        </div>      </div>    </div>",
  "<div class='row preBuilt-page'>      <div class='col-4'>        <h1 class='bold-heading title'>Pre-Built Options</h1>      </div>      <div class='col-4'></div>      <div class='col-4'></div>    </div>    <div class='row'>      <div class='col-4'>        <div id='pb_0' class='popup pizza-box'>          <span id='pbD_0' class='popup-content'></span>        </div>      </div>      <div class='col-4'>        <div id='pb_1' class='popup pizza-box'>          <span id='pbD_1' class='popup-content'></span>        </div>      </div>      <div class='col-4'>        <div id='pb_2' class='popup pizza-box'>          <span id='pbD_2' class='popup-content'></span>        </div>      </div>    </div>    <div class='row'>      <div class='col-4'>        <div id='pb_3' class='popup pizza-box'>          <span id='pbD_3' class='popup-content'></span>        </div>      </div>      <div class='col-4'>        <div id='pb_4' class='popup pizza-box'>          <span id='pbD_4' class='popup-content'></span>        </div>      </div>	  <div class='col-4'>	  <div id='pb_5' class='popup pizza-box'>          <span id='pbD_5' class='popup-content'></span>        </div>      </div>    </div>    <div class='row button-row'>      <div class='col-2'>        <div id='backBtn' class='btn-basic'>Back</div>      </div>      <div class='col-10'></div>           <div class='col-1'>        <div id='nextBtn' class='btn-basic'>Next</div>      </div>    </div>",
  "<div class='row size-page'>      <div class='col-4'>        <h1 class='bold-heading title'>Choose your size</h1>      </div>      <div class='col-4'></div>      <div class='col-4'></div>    </div>    <div class='row'>      <div class='col-3 size-container'>        <div id='smallPizza' class='size-box'>S        </div>      </div>      <div class='col-3 size-container'>        <div id='mediumPizza' class='size-box'>M        </div>      </div>      <div class='col-3 size-container'>        <div id='largePizza' class='size-box'>L        </div>      </div>      <div class='col-3 size-container'>        <div id='xLPizza' class='size-box'>XL        </div>      </div>    </div>    <div class='row button-row'>      <div class='col-2'>        <div id='backBtn' class='btn-basic'>Back</div>      </div>      <div class='col-10'></div>      <div class='col-1'>        <div id='nextBtn' class='btn-basic'>Next</div>      </div>    </div>",
  "<div class='row crust-page'>      <div class='col-4'>        <h1 class='bold-heading title'>Choose your crust          <span id='deal' class='badge'>Special Deal</span>        </h1>      </div>      <div class='col-4'></div>      <div class='col-4'></div>    </div>    <div class='row'>      <div class='col-4'>        <div id='pizzaViewContainer'>          <div id='pizzaView' class='pizza-box box'></div>        </div>        <div>          <div class='size-display'>	    <div id='smSize' class='size-bar'>S</div>            <div id='medSize' class='size-bar'>M</div>            <div id='lgSize' class='size-bar'>L</div>            <div id='xlSize' class='size-bar'>XL</div>          </div>        </div>      </div>      <div class='col-4'>        <div class='list-container'>          <div id='crustList'>            <div id='thin-crust' class='btn-basic bold-heading crustOpt'>Thin</div>          </div>          <div id='crustList'>            <div id='thick-crust' class='btn-basic bold-heading crustOpt'>Thick</div>          </div>          <div id='crustList'>            <div id='stuffed-crust' class='btn-basic bold-heading crustOpt'>Stuffed</div>          </div>	  <div id='crustList'>            <div id='pretzel-crust' class='btn-basic bold-heading crustOpt'>Pretzel</div>          </div>          </div>      </div>      <div class='col-4'>        <div class='ingredient-div'>          <h3>Your Pizza</h3>          <div id='ingred-list' class='list-div'>          </div>	  <h4 id='total'>Total: $0.00</h4>          <div id='addBtn' class='btn-modal' data-modal='modalLight'>Add to Order</div>          <div id='modalLight' class='modal modal-light'>            <div class='modal-content'>              <div class='modal-header'>                <span class='close'>&times;</span>              </div>              <div class='modal-body'>                <h1 class='bold-heading'>Thank you for your order!</h1>              </div>              <div class='modal-footer'>              </div>            </div>          </div>        </div>      </div>    </div>    <div class='row button-row'>      <div class='col-1 backBtn'>        <div id='backBtn' class='btn-basic'>Back</div>      </div>      <div class='col-10'></div>      <div class='col-1 nextBtn'>        <div id='nextBtn' class='btn-basic'>Next</div>      </div>    </div>",
  "<div class='row sauce-page'>      <div class='col-4'>        <h1 class='bold-heading title'>Choose your sauce          <span id='deal' class='badge'>Special Deal</span>        </h1>      </div>      <div class='col-4'></div>      <div class='col-4'></div>    </div>    <div class='row'>      <div class='col-4'>        <div id='pizzaViewContainer'>          <div id='pizzaView' class='pizza-box box'></div>        </div>        <div>          <div class='size-display'>            <div id='smSize' class='size-bar'>S</div>            <div id='medSize' class='size-bar'>M</div>            <div id='lgSize' class='size-bar'>L</div>            <div id='xlSize' class='size-bar'>XL</div>          </div>        </div>      </div>      <div class='col-4'>        <div class='list-container'>          <div id='sauceList'>            <div id='mar-sauce' class='btn-basic bold-heading crustOpt'>Marinara</div>          </div>          <div id='sauceList'>            <div id='creamy-sauce' class='btn-basic bold-heading crustOpt'>Creamy Garlic Parmesan</div>          </div>          <div id='sauceList'>            <div id='bbq-sauce' class='btn-basic bold-heading crustOpt'>Barbecue</div>          </div>	        <div id='sauceList'>            <div id='buff-sauce' class='btn-basic bold-heading crustOpt'>Buffalo</div>          </div>          </div>      </div>      <div class='col-4'>        <div class='ingredient-div'>          <h3>Your Pizza</h3>          <div id='ingred-list' class='list-div'>          </div>          <h4 id='total'>Total: $0.00</h4>          <div id='addBtn' class='btn-modal' data-modal='modalLight'>Add to Order</div>          <div id='modalLight' class='modal modal-light'>            <div class='modal-content'>              <div class='modal-header'>                <span class='close'>&times;</span>              </div>              <div class='modal-body'>                <h1 class='bold-heading'>Thank you for your order!</h1>              </div>              <div class='modal-footer'>              </div>            </div>          </div>        </div>      </div>    </div>    <div class='row button-row'>      <div class='col-1 backBtn'>        <div id='backBtn' class='btn-basic'>Back</div>      </div>      <div class='col-10'></div>      <div class='col-1 nextBtn'>        <div id='nextBtn' class='btn-basic'>Next</div>      </div>    </div>",
  "<div class='row cheese-page'>          <div class='col-4'>            <h1 class='bold-heading title'>Choose your cheese              <span id='deal' class='badge'>Special Deal</span>            </h1>          </div>          <div class='col-4'></div>          <div class='col-4'></div>        </div>        <div class='row'>          <div class='col-4'>            <div id='pizzaViewContainer'>              <div id='pizzaView' class='pizza-box box'></div>            </div>            <div>              <div class='size-display'>                <div id='smSize' class='size-bar'>S</div>                <div id='medSize' class='size-bar'>M</div>                <div id='lgSize' class='size-bar'>L</div>                <div id='xlSize' class='size-bar'>XL</div>              </div>            </div>          </div>          <div class='col-4'>            <div class='list-container'>              <div id='cheeseList'>                <div id='ched-cheese' class='btn-basic bold-heading crustOpt'>Cheddar</div>              </div>              <div id='cheeseList'>                <div id='moz-cheese' class='btn-basic bold-heading crustOpt'>Mozzarella</div>              </div>              <div id='cheeseList'>                <div id='four-cheese' class='btn-basic bold-heading crustOpt'>Four Cheese</div>              </div>              <div id='cheeseList'>                <div id='provo-cheese' class='btn-basic bold-heading crustOpt'>Provolone</div>              </div>            </div>          </div>          <div class='col-4'>            <div class='ingredient-div'>              <h3>Your Pizza</h3>              <div id='ingred-list' class='list-div'>              </div>              <h4 id='total'>Total: $0.00</h4>              <div id='addBtn' class='btn-modal' data-modal='modalLight'>Add to Order</div>              <div id='modalLight' class='modal modal-light'>                <div class='modal-content'>                  <div class='modal-header'>                    <span class='close'>&times;</span>                  </div>                  <div class='modal-body'>                    <h1 class='bold-heading'>Thank you for your order!</h1>                  </div>                  <div class='modal-footer'>                  </div>                </div>              </div>            </div>          </div>        </div>        <div class='row button-row'>          <div class='col-1 backBtn'>            <div id='backBtn' class='btn-basic'>Back</div>          </div>          <div class='col-10'></div>          <div class='col-1 nextBtn'>            <div id='nextBtn' class='btn-basic'>Next</div>          </div>        </div>  </div>",
  "<div class='row toppings-page'>      <div class='col-4'>        <h1 class='bold-heading title'>Choose your toppings          <span id='deal' class='badge'>Special Deal</span>        </h1>      </div>      <div class='col-4'></div>      <div class='col-4'></div>    </div>    <div class='row'>      <div class='col-4'>        <div id='pizzaViewContainer'>          <div id='pizzaView' class='pizza-box box'></div>        </div>        <div>          <div class='size-display'>            <div id='smSize' class='size-bar'>S</div>            <div id='medSize' class='size-bar'>M</div>            <div id='lgSize' class='size-bar'>L</div>            <div id='xlSize' class='size-bar'>XL</div>          </div>        </div>      </div>      <div class='col-4'>        <div class='list-container'>          <h5 class='topping-section'>Meats</h5>          <div class='meats-container list-div'>            <div class='toppingLabel'>              <div id='pepperoni' class='topping-button btn-basic crustOpt'>Pepperoni</div>              <div id='pepperoni-x' class='exes'>&times;</div>            </div>            <div id='pepperoni-options' class='topping-options'>              <div class='topping-side'>                <div id='pepperoni-left' class='btn-small crustOpt'>Left</div>                <div id='pepperoni-full' class='btn-small crustOpt'>Full</div>                <div id='pepperoni-right' class='btn-small crustOpt'>Right</div>              </div>              <div class='topping-plus'>                <div id='pepperoni-extra' class='btn-small crustOpt'>Extra</div>                <div id='pepperoni-double' class='btn-small crustOpt'>Double</div>              </div>            </div>            <div class='toppingLabel'>              <div id='sausage' class='topping-button btn-basic crustOpt'>Sausage</div>              <div id='sausage-x' class='exes'>&times;</div>            </div>            <div id='sausage-options' class='topping-options'>              <div class='topping-side'>                <div id='sausage-left' class='btn-small crustOpt'>Left</div>                <div id='sausage-full' class='btn-small crustOpt'>Full</div>                <div id='sausage-right' class='btn-small crustOpt'>Right</div>              </div>              <div class='topping-plus'>                <div id='sausage-extra' class='btn-small crustOpt'>Extra</div>                <div id='sausage-double' class='btn-small crustOpt'>Double</div>              </div>            </div>            <div class='toppingLabel'>              <div id='canadianbacon' class='topping-button btn-basic crustOpt'>Canadian Bacon</div>              <div id='canadianbacon-x' class='exes'>&times;</div>            </div>            <div id='canadianbacon-options' class='topping-options'>              <div class='topping-side'>                <div id='canadianbacon-left' class='btn-small crustOpt'>Left</div>                <div id='canadianbacon-full' class='btn-small crustOpt'>Full</div>                <div id='canadianbacon-right' class='btn-small crustOpt'>Right</div>              </div>              <div class='topping-plus'>                <div id='canadianbacon-extra' class='btn-small crustOpt'>Extra</div>                <div id='canadianbacon-double' class='btn-small crustOpt'>Double</div>              </div>            </div>            <div class='toppingLabel'>              <div id='beef' class='topping-button btn-basic crustOpt'>Beef</div>              <div id='beef-x' class='exes'>&times;</div>            </div>            <div id='beef-options' class='topping-options'>              <div class='topping-side'>                <div id='beef-left' class='btn-small crustOpt'>Left</div>                <div id='beef-full' class='btn-small crustOpt'>Full</div>                <div id='beef-right' class='btn-small crustOpt'>Right</div>              </div>              <div class='topping-plus'>                <div id='beef-extra' class='btn-small crustOpt'>Extra</div>                <div id='beef-double' class='btn-small crustOpt'>Double</div>              </div>            </div>            <div class='toppingLabel'>              <div id='bacon' class='topping-button btn-basic crustOpt'>Bacon</div>              <div id='bacon-x' class='exes'>&times;</div>            </div>            <div id='bacon-options' class='topping-options'>              <div class='topping-side'>                <div id='bacon-left' class='btn-small crustOpt'>Left</div>                <div id='bacon-full' class='btn-small crustOpt'>Full</div>                <div id='bacon-right' class='btn-small crustOpt'>Right</div>              </div>              <div class='topping-plus'>                <div id='bacon-extra' class='btn-small crustOpt'>Extra</div>                <div id='bacon-double' class='btn-small crustOpt'>Double</div>              </div>            </div>          </div>            <h5 class='topping-section'>Vegetables</h5>          <div class='veg-container list-div'>              <div class='toppingLabel'>                <div id='olives' class='topping-button btn-basic crustOpt'>Olives</div>                <div id='olives-x' class='exes'>&times;</div>              </div>              <div id='olives-options' class='topping-options'>                <div class='topping-side'>                  <div id='olives-left' class='btn-small crustOpt'>Left</div>                  <div id='olives-full' class='btn-small crustOpt'>Full</div>                  <div id='olives-right' class='btn-small crustOpt'>Right</div>                </div>                <div class='topping-plus'>                  <div id='olives-extra' class='btn-small crustOpt'>Extra</div>                  <div id='olives-double' class='btn-small crustOpt'>Double</div>                </div>              </div>              <div class='toppingLabel'>                <div id='onions' class='topping-button btn-basic crustOpt'>Onions</div>                <div id='onions-x' class='exes'>&times;</div>              </div>              <div id='onions-options' class='topping-options'>                <div class='topping-side'>                  <div id='onions-left' class='btn-small crustOpt'>Left</div>                  <div id='onions-full' class='btn-small crustOpt'>Full</div>                  <div id='onions-right' class='btn-small crustOpt'>Right</div>                </div>                <div class='topping-plus'>                  <div id='onions-extra' class='btn-small crustOpt'>Extra</div>                  <div id='onions-double' class='btn-small crustOpt'>Double</div>                </div>              </div>              <div class='toppingLabel'>                <div id='mushrooms' class='topping-button btn-basic crustOpt'>Mushrooms</div>                <div id='mushrooms-x' class='exes'>&times;</div>              </div>              <div id='mushrooms-options' class='topping-options'>                <div class='topping-side'>                  <div id='mushrooms-left' class='btn-small crustOpt'>Left</div>                  <div id='mushrooms-full' class='btn-small crustOpt'>Full</div>                  <div id='mushrooms-right' class='btn-small crustOpt'>Right</div>                </div>                <div class='topping-plus'>                  <div id='mushrooms-extra' class='btn-small crustOpt'>Extra</div>                  <div id='mushrooms-double' class='btn-small crustOpt'>Double</div>                </div>              </div>              <div class='toppingLabel'>                <div id='spinach' class='topping-button btn-basic crustOpt'>Spinach</div>                <div id='spinach-x' class='exes'>&times;</div>              </div>              <div id='spinach-options' class='topping-options'>                <div class='topping-side'>                  <div id='spinach-left' class='btn-small crustOpt'>Left</div>                  <div id='spinach-full' class='btn-small crustOpt'>Full</div>                  <div id='spinach-right' class='btn-small crustOpt'>Right</div>                </div>                <div class='topping-plus'>                  <div id='spinach-extra' class='btn-small crustOpt'>Extra</div>                  <div id='spinach-double' class='btn-small crustOpt'>Double</div>                </div>              </div>              <div class='toppingLabel'>                <div id='bellpeppers' class='topping-button btn-basic crustOpt'>Bell Peppers</div>                <div id='bellpeppers-x' class='exes'>&times;</div>              </div>              <div id='bellpeppers-options' class='topping-options'>                <div class='topping-side'>                  <div id='bellpeppers-left' class='btn-small crustOpt'>Left</div>                  <div id='bellpeppers-full' class='btn-small crustOpt'>Full</div>                  <div id='bellpeppers-right' class='btn-small crustOpt'>Right</div>                </div>                <div class='topping-plus'>                  <div id='bellpeppers-extra' class='btn-small crustOpt'>Extra</div>                  <div id='bellpeppers-double' class='btn-small crustOpt'>Double</div>                </div>              </div>            </div>          </div>      </div>      <div class='col-4'>        <div class='ingredient-div'>          <h3>Your Pizza</h3>          <div id='ingred-list' class='list-div'>          </div>          <h4 id='total'>Total: $0.00</h4>          <div id='addBtn' class='btn-modal' data-modal='modalLight'>Add to Order</div>          <div id='modalLight' class='modal modal-light'>            <div class='modal-content'>              <div class='modal-header'>                <span class='close'>&times;</span>              </div>              <div class='modal-body'>                <h1 class='bold-heading'>Thank you for your order!</h1>              </div>              <div class='modal-footer'>              </div>            </div>          </div>        </div>      </div>    </div>    <div class='row button-row'>      <div class='col-1 backBtn'>        <div id='backBtn' class='btn-basic'>Back</div>      </div>      <div class='col-10'></div>      <div class='col-1 nextBtn'>        <div id='nextBtn' class='btn-basic'>Next</div>      </div>    </div>",
  "<div class='row'>      <div class='col-12 finalPage'>        <h1>Review Order</h1>      </div>    </div>    <div class='row'>	<div class='col-6'>        <div id='pizzaViewContainer' class='final-page-pv-cont'>          <div id='pizzaView' class='pizza-box box'></div>        </div>      </div>      <div class='col-6'>          <div class='ingredient-div'>              <h3>Your Pizza</h3>              <div id='ingred-list' class='list-div'>              </div>              <h4 id='total'>Total: $0.00</h4>              <div id='addBtn' class='btn-modal' data-modal='modalLight'>Add to Order</div>              <div id='modalLight' class='modal modal-light'>                <div class='modal-content'>                  <div class='modal-header'>                    <span class='close'>&times;</span>                  </div>                  <div class='modal-body'>                    <h1 class='bold-heading'>Thank you for your order!</h1>                  </div>                  <div class='modal-footer'>                  </div>                </div>              </div>            </div>      </div>    </div>"
];
var preBuiltMobile =
  "<div class='row preBuilt-page'>      <div class='col-4'>        <h1 class='bold-heading title'>Pre-Built Options</h1>      </div>      <div class='col-4'></div>      <div class='col-4'></div>    </div>    <div class='row'>      <div class='col-2 pb-row'>        <div id='pb_0' class='pizza-box'>         </div>		<p id='pbD_0' class='pizza-desc'></p>      </div>      <div class='col-2 pb-row'>        <div id='pb_1' class='pizza-box'>        </div>		<p id='pbD_1' class='pizza-desc'></p>      </div>      <div class='col-2 pb-row'>        <div id='pb_2' class='pizza-box'>        </div>		<p id='pbD_2' class='pizza-desc'></p>      </div>      <div class='col-2 pb-row'>        <div id='pb_3' class='pizza-box'>        </div>		<p id='pbD_3' class='pizza-desc'></p>      </div>      <div class='col-2 pb-row'>        <div id='pb_4' class='pizza-box'>        </div>		<p id='pbD_4' class='pizza-desc'></p>      </div>      <div class='col-2 pb-row'>	  <div id='pb_5' class='pizza-box'>        </div>		<p id='pbD_5' class='pizza-desc'></p>	  </div>    </div>    <div class='row button-row'>      <div class='col-2'>        <div id='backBtn' class='btn-basic'>Back</div>      </div>      <div class='col-10'></div>           <div class='col-1'>        <div id='nextBtn' class='btn-basic'>Next</div>      </div>    </div>";
var currentPage = 0;
var isModal = false;
var isMobile = false;
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
var canadianBaconImgs = [
  "assets/toppings/canadianbacon/canadianbacon-full.png",
  "assets/toppings/canadianbacon/canadianbacon-full-extra.png",
  "assets/toppings/canadianbacon/canadianbacon-full-double.png",
  "assets/toppings/canadianbacon/canadianbacon-left.png",
  "assets/toppings/canadianbacon/canadianbacon-left-extra.png",
  "assets/toppings/canadianbacon/canadianbacon-left-double.png",
  "assets/toppings/canadianbacon/canadianbacon-right.png",
  "assets/toppings/canadianbacon/canadianbacon-right-extra.png",
  "assets/toppings/canadianbacon/canadianbacon-full-double.png"
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

var isPreBuilt = false;

function loadJSON(filename, callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");

  xobj.open("GET", filename, true);
  xobj.onreadystatechange = function() {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

function init(response) {
  loadJSON(filenameToLoad, function(responseText) {
    if (filenameToLoad.toString() == "scripts/start.json") {
      var startInfo = JSON.parse(responseText);
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
    if (filenameToLoad.toString() == "none") {
      console.log("no file needed");
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
      saucePageInit();
      isModal = true;
      modalInit();
    }
    if (allElements[i].classList.contains("cheese-page")) {
      cheesePageInit();
      isModal = true;
      modalInit();
    }
    if (allElements[i].classList.contains("toppings-page")) {
      toppingsPageInit();
      isModal = true;
      modalInit();
    }
    if (allElements[i].classList.contains("finalPage")) {
      finalPageInit();
      isModal = true;
      modalInit();
    }
  }
}

function changePage(pageNum) {
  currentPage = pageNum;
  switch (pageNum) {
    case 0:
      currentCrust = "";
      currentSauce = "";
      currentCheese = "";
      currentToppings = [];
      currentPizzaImgs = [];
      toppingImgs = [];
      totalPrice = "";
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
    case 7:
      filenameToLoad = "none";
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

function setInitialSizeButtons() {
  var small = document.getElementById("smallPizza");
  var med = document.getElementById("mediumPizza");
  var large = document.getElementById("largePizza");
  var xl = document.getElementById("xLPizza");

  small.addEventListener("click", sizeClick);
  med.addEventListener("click", sizeClick);
  large.addEventListener("click", sizeClick);
  xl.addEventListener("click", sizeClick);

  switch (currentSize) {
    case "S":
      small.className = small.className + " selected";
      break;
    case "M":
      med.className = med.className + " selected";
      break;
    case "L":
      large.className = large.className + " selected";
      break;
    case "XL":
      xl.className = xl.className + " selected";
      break;
  }
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

  console.log(currentSize);
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

function setCrustButtons() {
  var thin = document.getElementById("thin-crust");
  var thick = document.getElementById("thick-crust");
  var stuffed = document.getElementById("stuffed-crust");
  var pretzel = document.getElementById("pretzel-crust");
  thin.addEventListener("click", crustClick);
  thick.addEventListener("click", crustClick);
  stuffed.addEventListener("click", crustClick);
  pretzel.addEventListener("click", crustClick);

  switch (currentCrust) {
    case "Thin":
      thin.className += thin.className + " selectedCrust";
      break;
    case "Thick":
      thick.className += thick.className + " selectedCrust";
      break;
    case "Stuffed":
      stuffed.className += stuffed.className + " selectedCrust";
      break;
    case "Pretzel":
      pretzel.className += pretzel.className + " selectedCrust";
      break;
  }
}

function setSauceButtons() {
  var marinara = document.getElementById("mar-sauce");
  var creamy = document.getElementById("creamy-sauce");
  var bbq = document.getElementById("bbq-sauce");
  var buffalo = document.getElementById("buff-sauce");

  marinara.addEventListener("click", sauceClick);
  creamy.addEventListener("click", sauceClick);
  bbq.addEventListener("click", sauceClick);
  buffalo.addEventListener("click", sauceClick);

  switch (currentSauce) {
    case "Marinara":
      marinara.className += marinara.className + " selectedCrust";
      break;
    case "Creamy Garlic Parmesan":
      creamy.className += creamy.className + " selectedCrust";
      break;
    case "Barbeque":
      bbq.className += bbq.className + " selectedCrust";
      break;
    case "Buffalo":
      buffalo.className += buffalo.className + " selectedCrust";
      break;
  }
}

function setCheeseButtons() {
  var cheddar = document.getElementById("ched-cheese");
  var four = document.getElementById("four-cheese");
  var provolone = document.getElementById("provo-cheese");
  var mozzarella = document.getElementById("moz-cheese");
  cheddar.addEventListener("click", cheeseClick);
  four.addEventListener("click", cheeseClick);
  provolone.addEventListener("click", cheeseClick);
  mozzarella.addEventListener("click", cheeseClick);

  switch (currentCheese) {
    case "Cheddar":
      cheddar.className += cheddar.className + " selectedCrust";
      break;
    case "Four Cheese":
      four.className += four.className + " selectedCrust";
      break;
    case "Provolone":
      provolone.className += provolone.className + " selectedCrust";
      break;
    case "Mozzarella":
      mozzarella.className += mozzarella.className + " selectedCrust";
      break;
  }
}

function setToppingSideButtons() {
  var pepperoniLeft = document.getElementById("pepperoni-left");
  var pepperoniFull = document.getElementById("pepperoni-full");
  var pepperoniRight = document.getElementById("pepperoni-right");
  var sausageLeft = document.getElementById("sausage-left");
  var sausageFull = document.getElementById("sausage-full");
  var sausageRight = document.getElementById("sausage-right");
  var canadianBaconLeft = document.getElementById("canadianbacon-left");
  var canadianBaconFull = document.getElementById("canadianbacon-full");
  var canadianBaconRight = document.getElementById("canadianbacon-right");
  var beefLeft = document.getElementById("beef-left");
  var beefFull = document.getElementById("beef-full");
  var beefRight = document.getElementById("beef-right");
  var baconLeft = document.getElementById("bacon-left");
  var baconFull = document.getElementById("bacon-full");
  var baconRight = document.getElementById("bacon-right");
  pepperoniRight.addEventListener("click", rightClick);
  sausageRight.addEventListener("click", rightClick);
  canadianBaconRight.addEventListener("click", rightClick);
  beefRight.addEventListener("click", rightClick);
  baconRight.addEventListener("click", rightClick);
  pepperoniFull.addEventListener("click", fullClick);
  sausageFull.addEventListener("click", fullClick);
  canadianBaconFull.addEventListener("click", fullClick);
  beefFull.addEventListener("click", fullClick);
  baconFull.addEventListener("click", fullClick);
  pepperoniLeft.addEventListener("click", leftClick);
  sausageLeft.addEventListener("click", leftClick);
  canadianBaconLeft.addEventListener("click", leftClick);
  beefLeft.addEventListener("click", leftClick);
  baconLeft.addEventListener("click", leftClick);
  var onionsLeft = document.getElementById("onions-left");
  var onionsFull = document.getElementById("onions-full");
  var onionsRight = document.getElementById("onions-right");
  var olivesLeft = document.getElementById("olives-left");
  var olivesFull = document.getElementById("olives-full");
  var olivesRight = document.getElementById("olives-right");
  var bellPeppersLeft = document.getElementById("bellpeppers-left");
  var bellPeppersFull = document.getElementById("bellpeppers-full");
  var bellPeppersRight = document.getElementById("bellpeppers-right");
  var spinachLeft = document.getElementById("spinach-left");
  var spinachFull = document.getElementById("spinach-full");
  var spinachRight = document.getElementById("spinach-right");
  var mushroomsLeft = document.getElementById("mushrooms-left");
  var mushroomsFull = document.getElementById("mushrooms-full");
  var mushroomsRight = document.getElementById("mushrooms-right");
  onionsRight.addEventListener("click", rightClick);
  olivesRight.addEventListener("click", rightClick);
  bellPeppersRight.addEventListener("click", rightClick);
  spinachRight.addEventListener("click", rightClick);
  mushroomsRight.addEventListener("click", rightClick);
  onionsFull.addEventListener("click", fullClick);
  olivesFull.addEventListener("click", fullClick);
  bellPeppersFull.addEventListener("click", fullClick);
  spinachFull.addEventListener("click", fullClick);
  mushroomsFull.addEventListener("click", fullClick);
  onionsLeft.addEventListener("click", leftClick);
  olivesLeft.addEventListener("click", leftClick);
  bellPeppersLeft.addEventListener("click", leftClick);
  spinachLeft.addEventListener("click", leftClick);
  mushroomsLeft.addEventListener("click", leftClick);

  for (let i = 0; i < currentToppings.length; i++) {
    var topping = currentToppings[i].toString();
    var name = topping.split("-");
    var btn = document.getElementById(name[0] + "-full");
    btn.className = btn.className + " selectedCrust";
  }
}

function setToppingButtons() {
  var pep = document.getElementById("pepperoni");
  var sausage = document.getElementById("sausage");
  var beef = document.getElementById("beef");
  var canadianBacon = document.getElementById("canadianbacon");
  var bacon = document.getElementById("bacon");
  var olives = document.getElementById("olives");
  var mushrooms = document.getElementById("mushrooms");
  var onions = document.getElementById("onions");
  var bellPeppers = document.getElementById("bellpeppers");
  var spinach = document.getElementById("spinach");

  pep.addEventListener("click", toppingLabelClick);
  sausage.addEventListener("click", toppingLabelClick);
  beef.addEventListener("click", toppingLabelClick);
  canadianBacon.addEventListener("click", toppingLabelClick);
  bacon.addEventListener("click", toppingLabelClick);
  olives.addEventListener("click", toppingLabelClick);
  mushrooms.addEventListener("click", toppingLabelClick);
  onions.addEventListener("click", toppingLabelClick);
  bellPeppers.addEventListener("click", toppingLabelClick);
  spinach.addEventListener("click", toppingLabelClick);

  for (let i = 0; i < currentToppings.length; i++) {
    var topping = currentToppings[i].toString();
    var name = topping.split("-");
    var label = document.getElementById(name[0]);
    label.className = label.className + " selectedCrust";
    var ex = document.getElementById(name[0] + "-x");
    ex.style.display = "block";
  }

  setToppingSideButtons();
  setToppingPlusButtons();
  setToppingRemoveButtons();
}

function setToppingPlusButtons() {
  var pepExtra = document.getElementById("pepperoni-extra");
  var sausageExtra = document.getElementById("sausage-extra");
  var canadianBaconExtra = document.getElementById("canadianbacon-extra");
  var baconExtra = document.getElementById("bacon-extra");
  var beefExtra = document.getElementById("beef-extra");
  var mushroomsExtra = document.getElementById("mushrooms-extra");
  var olivesExtra = document.getElementById("olives-extra");
  var onionsExtra = document.getElementById("onions-extra");
  var spinachExtra = document.getElementById("spinach-extra");
  var bellPeppersExtra = document.getElementById("bellpeppers-extra");

  var pepDouble = document.getElementById("pepperoni-double");
  var sausageDouble = document.getElementById("sausage-double");
  var canadianBaconDouble = document.getElementById("canadianbacon-double");
  var baconDouble = document.getElementById("bacon-double");
  var beefDouble = document.getElementById("beef-double");
  var mushroomsDouble = document.getElementById("mushrooms-double");
  var olivesDouble = document.getElementById("olives-double");
  var onionsDouble = document.getElementById("onions-double");
  var spinachDouble = document.getElementById("spinach-double");
  var bellPeppersDouble = document.getElementById("bellpeppers-double");

  pepExtra.addEventListener("click", extraClick);
  sausageExtra.addEventListener("click", extraClick);
  canadianBaconExtra.addEventListener("click", extraClick);
  baconExtra.addEventListener("click", extraClick);
  beefExtra.addEventListener("click", extraClick);
  mushroomsExtra.addEventListener("click", extraClick);
  olivesExtra.addEventListener("click", extraClick);
  onionsExtra.addEventListener("click", extraClick);
  spinachExtra.addEventListener("click", extraClick);
  bellPeppersExtra.addEventListener("click", extraClick);

  pepDouble.addEventListener("click", doubleClick);
  sausageDouble.addEventListener("click", doubleClick);
  canadianBaconDouble.addEventListener("click", doubleClick);
  baconDouble.addEventListener("click", doubleClick);
  beefDouble.addEventListener("click", doubleClick);
  mushroomsDouble.addEventListener("click", doubleClick);
  olivesDouble.addEventListener("click", doubleClick);
  onionsDouble.addEventListener("click", doubleClick);
  spinachDouble.addEventListener("click", doubleClick);
  bellPeppersDouble.addEventListener("click", doubleClick);
}

function setToppingRemoveButtons() {
  var pep = document.getElementById("pepperoni-x");
  var sausage = document.getElementById("sausage-x");
  var beef = document.getElementById("beef-x");
  var canadianBacon = document.getElementById("canadianbacon-x");
  var bacon = document.getElementById("bacon-x");
  var olives = document.getElementById("olives-x");
  var mushrooms = document.getElementById("mushrooms-x");
  var onions = document.getElementById("onions-x");
  var bellPeppers = document.getElementById("bellpeppers-x");
  var spinach = document.getElementById("spinach-x");

  pep.addEventListener("click", removeClick);
  sausage.addEventListener("click", removeClick);
  beef.addEventListener("click", removeClick);
  canadianBacon.addEventListener("click", removeClick);
  bacon.addEventListener("click", removeClick);
  olives.addEventListener("click", removeClick);
  mushrooms.addEventListener("click", removeClick);
  onions.addEventListener("click", removeClick);
  bellPeppers.addEventListener("click", removeClick);
  spinach.addEventListener("click", removeClick);
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
  changePage(2);
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
  changePage(1);
}

function preBuiltPageInit() {
  if (
    currentCrust != null &&
    currentSauce != null &&
    currentCheese != null &&
    currentToppings.length > 0
  ) {
    setNavButtons();
  }
  var backBtn = document.getElementById("backBtn");
  backBtn.addEventListener("click", back);

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
  setNavButtons();
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
  switch (id) {
    case "pb_0":
      currentCrust = "Thick";
      currentCheese = "Four Cheese";
      currentSauce = "Marinara";
      calculateCost();
      break;
    case "pb_1":
      currentCrust = "Thick";
      currentCheese = "Mozzarella";
      currentSauce = "Marinara";
      toppingImgs = [
        "assets/toppings/pepperoni/pepperoni-full.png",
        "assets/toppings/sausage/sausage-full.png",
        "assets/toppings/canadianbacon/canadianbacon-full.png",
        "assets/toppings/bacon/bacon-full.png",
        "assets/toppings/beef/beef-full.png"
      ];
      currentToppings = [
        "pepperoni-full",
        "sausage-full",
        "canadianbacon-full",
        "bacon-full",
        "beef-full"
      ];
      calculateCost();
      break;
    case "pb_2":
      currentCrust = "Thick";
      currentCheese = "Mozzarella";
      currentSauce = "Marinara";
      toppingImgs = ["assets/toppings/pepperoni/pepperoni-full.png"];
      currentToppings = ["pepperoni-full"];
      calculateCost();
      break;
    case "pb_3":
      currentCrust = "Thick";
      currentCheese = "Mozzarella";
      currentSauce = "Marinara";
      toppingImgs = [
        "assets/toppings/mushrooms/mushrooms-full.png",
        "assets/toppings/olives/olives-full.png",
        "assets/toppings/onions/onions-full.png",
        "assets/toppings/bellpeppers/bellpeppers-full.png",
        "assets/toppings/spinach/spinach-full.png"
      ];
      currentToppings = [
        "mushrooms-full",
        "olives-full",
        "onions-full",
        "bellpeppers-full",
        "spinach-full"
      ];
      calculateCost();
      break;
    case "pb_4":
      currentCrust = "Thin";
      currentCheese = "Mozzarella";
      currentSauce = "Marinara";
      toppingImgs = [
        "assets/toppings/onions/onions-full.png",
        "assets/toppings/bellpeppers/bellpeppers-full.png",
        "assets/toppings/mushrooms/mushrooms-full.png",
        "assets/toppings/pepperoni/pepperoni-full.png",
        "assets/toppings/sausage/sausage-full.png",
        "assets/toppings/beef/beef-full.png"
      ];
      currentToppings = [
        "onions-full",
        "bellpeppers-full",
        "mushrooms-full",
        "pepperoni-full",
        "sausage-full",
        "beef-full"
      ];
      calculateCost();
      break;
    case "pb_5":
      currentCrust = "Thin";
      currentCheese = "Mozzarella";
      currentSauce = "Marinara";
      toppingImgs = [
        "assets/toppings/onions/onions-full.png",
        "assets/toppings/bellpeppers/bellpeppers-full.png",
        "assets/toppings/sausage/sausage-full.png"
      ];
      currentToppings = ["onions-full", "bellpeppers-full", "sausage-full"];
      calculateCost();
      break;
  }
}

function preBuiltFinish(evt) {
  changePage(7);
}

//SIZES
function sizesPageInit() {
  setInitialSizeButtons();
  calculateCost();

  if (currentSize != null && isPreBuilt == false) {
    setNavButtons();
  } else if (currentSize != null && isPreBuilt == true) {
    var nextBtn = document.getElementById("nextBtn");
    var backBtn = document.getElementById("backBtn");

    nextBtn.addEventListener("click", next);
    backBtn.addEventListener("click", back);
  }

  var backBtn = document.getElementById("backBtn");
  backBtn.addEventListener("click", back);
}

function sizeClick(evt) {
  if (isPreBuilt == true) {
    var nextBtn = document.getElementById("nextBtn");
    var backBtn = document.getElementById("backBtn");

    nextBtn.addEventListener("click", next);
    backBtn.addEventListener("click", back);
  } else {
    setNavButtons();
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

function setSelectedSize(id) {
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
}

//CRUST
function crustPageInit() {
  if (isPreBuilt == true) {
    getCrustImg();
    getSauceImg();
    getCheeseImg();
  }
  updatePizzaView();
  updateListView();

  if (currentCrust != null) {
    setNavButtons();
  }
  var backBtn = document.getElementById("backBtn");
  backBtn.addEventListener("click", back);

  setSizeButtons();
  setCrustButtons();

  calculateCost();
}

function crustClick(evt) {
  setNavButtons();
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
  getCrustImg();
  updateListView();
}

//SAUCE
function saucePageInit() {
  updatePizzaView();
  updateListView();
  if (currentSauce != null) {
    setNavButtons();
  }
  var backBtn = document.getElementById("backBtn");
  backBtn.addEventListener("click", back);

  setSizeButtons();
  setSauceButtons();

  calculateCost();
}

function sauceClick(evt) {
  setNavButtons();
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

function setSelectedSauce(id) {
  switch (id) {
    case "mar-sauce":
      currentSauce = "Marinara";
      calculateCost();
      break;
    case "creamy-sauce":
      currentSauce = "Creamy Garlic Parmesan";
      calculateCost();
      break;
    case "bbq-sauce":
      currentSauce = "Barbeque";
      calculateCost();
      break;
    case "buff-sauce":
      currentSauce = "Buffalo";
      calculateCost();
      break;
  }
  getSauceImg();
  updateListView();
}

//CHEESE
function cheesePageInit() {
  updatePizzaView();
  updateListView();

  if (currentCheese != null) {
    setNavButtons();
  }
  var backBtn = document.getElementById("backBtn");
  backBtn.addEventListener("click", back);

  setSizeButtons();
  setCheeseButtons();

  calculateCost();
}

function cheeseClick(evt) {
  setNavButtons();
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

function setSelectedCheese(id) {
  switch (id) {
    case "ched-cheese":
      currentCheese = "Cheddar";
      calculateCost();
      break;
    case "four-cheese":
      currentCheese = "Four Cheese";
      calculateCost();
      break;
    case "provo-cheese":
      currentCheese = "Provolone";
      calculateCost();
      break;
    case "moz-cheese":
      currentCheese = "Mozzarella";
      calculateCost();
      break;
  }
  getCheeseImg();
  updateListView();
}

//TOPPINGS
function toppingsPageInit() {
  updatePizzaView();
  updateListView();
  setNavButtons();
  setSizeButtons();
  setToppingButtons();
  calculateCost();
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
  setNavButtons();
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
  setNavButtons();
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
  setNavButtons();
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
  setNavButtons();
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
  setNavButtons();
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
    //console.log("topping", topping, "name", name);
    var str = currentToppings[topping].toString();
    if (str == "canadianbacon") {
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

//FINAL PAGE
function finalPageInit() {
  if (isPreBuilt == true) {
    getCrustImg();
    getSauceImg();
    getCheeseImg();
  }
  updatePizzaView();
  updateListView();
  calculateCost();
}

//HELPER FUNCTIONS
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
        if (name == "canadianbacon" || name[0] == "canadianbacon") {
          toppingName = "canadian bacon";
        } else if (name == "bellpeppers" || name[0] == "bellpeppers") {
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
}

function updatePizzaView() {
  var pizzaView = document.getElementById("pizzaView");

  var imgList = "";

  if (toppingImgs.length > 0) {
    for (let j = 0; j < toppingImgs.length; j++) {
      imgList += "url('" + toppingImgs[j] + "'), ";

      // if (j != toppingImgs.length - 1) {
      //   imgList += "url('" + toppingImgs[j] + "'), ";
      // } else {
      //   imgList += "url('" + toppingImgs[j] + "') no-repeat center";
      // }
    }
  }
  for (let i = 0; i < currentPizzaImgs.length; i++) {
    if (currentPizzaImgs.length > 1 && i != currentPizzaImgs.length - 1) {
      imgList += "url('" + currentPizzaImgs[i] + "'), ";
    } else {
      imgList += "url('" + currentPizzaImgs[i] + "') no-repeat center";

      // if (toppingImgs.length == 0) {
      //   imgList += "url('" + currentPizzaImgs[i] + "') no-repeat center";
      // } else {
      //   imgList += "url('" + currentPizzaImgs[i] + "'), ";
      // }
    }
  }
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
  if (currentPizzaImgs.length == 0) {
    currentPizzaImgs.push(crustImg);
  } else {
    var crustIndex = currentPizzaImgs.length - 1;
    currentPizzaImgs.splice(crustIndex, 1, crustImg);
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
    if (topping.includes("canadianbacon")) {
      for (let i = 0; i < canadianBaconImgs.length; i++) {
        var str = canadianBaconImgs[i].toString();
        if (str.includes(topping)) {
          toppingImg = canadianBaconImgs[i];
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

function back(evt) {
  var back = 0;
  if (currentPage != 2) {
    back = currentPage - 1;
  }
  changePage(back);
}

function next(evt) {
  var next = currentPage + 1;
  changePage(next);
}

function modalInit() {
  if (isModal == true) {
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
        currentSize = null;
        currentCrust = null;
        currentSauce = null;
        currentCheese = null;
        currentToppings = [];
        currentPizzaImgs = [];
        toppingImgs = [];
        totalPrice = null;
        changePage(0);
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
  } else {
    isSpecialDeal = false;
    totalPrice += currentToppings.length * 1.0;
  }

  if (isSpecialDeal && currentPage > 2) {
    if (currentPage != 7) {
      var badge = document.getElementById("deal");
      badge.style.display = "block";
    }
  }
  totalPrice = totalPrice.toFixed(2);
  if (currentPage > 2) {
    var total = document.getElementById("total");
    total.innerHTML = "Total: $" + totalPrice;
  }
}

function checkMobile() {
  if (screen.width <= 810) {
    pages.splice(1, 1, preBuiltMobile);
  }
}

changePage(0);
