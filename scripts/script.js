var filesToLoad = [];
var loadedJSON = [];
var pages = [
  "<div class='row landing-page'>      <div class='col-4'>        <h1 class='bold-heading title'>Order Online</h1>      </div>      <div class='col-4'></div>      <div class='col-4'></div>    </div>    <div class='row'>      <div id='byoBtn' class='col-6 card'>        <div class='card-container'>          <div class='card-header'>            <h1 class='bold-heading'>Build Your Own</h1>          </div>          <div id='customBox' class='card-body box'></div>        </div>      </div>      <div id='preBtn' class='col-6 card'>        <div class='card-container'>          <div class='card-header'>            <h1 class='bold-heading'>Pre-Built Pizza</h1>          </div>          <div id='preBuiltBox' class='card-body box'></div>        </div>      </div>    </div>",
  "<div class='row preBuilt-page'>      <div class='col-4'>        <h1 class='bold-heading title'>Pre-Built Options</h1>      </div>      <div class='col-4'></div>      <div class='col-4'></div>    </div>    <div class='row'>      <div class='col-4'>        <div id='pb_0' class='popup pizza-box'>          <span id='pbD_0' class='popup-content'></span>        </div>      </div>      <div class='col-4'>        <div id='pb_1' class='popup pizza-box'>          <span id='pbD_1' class='popup-content'></span>        </div>      </div>      <div class='col-4'>        <div id='pb_2' class='popup pizza-box'>          <span id='pbD_2' class='popup-content'></span>        </div>      </div>    </div>    <div class='row'>      <div class='col-4'>        <div id='pb_3' class='popup pizza-box'>          <span id='pbD_3' class='popup-content'></span>        </div>      </div>      <div class='col-4'>        <div id='pb_4' class='popup pizza-box'>          <span id='pbD_4' class='popup-content'></span>        </div>      </div>	  <div class='col-4'>	  <div id='pb_5' class='popup pizza-box'>          <span id='pbD_5' class='popup-content'></span>        </div>      </div>    </div>    <div class='row button-row'>      <div class='col-2'>        <div id='backBtn' class='btn-basic'>Back</div>      </div>      <div class='col-10'></div>           <div class='col-1'>        <div id='nextBtn' class='btn-basic'>Next</div>      </div>    </div>",
  "<div class='row size-page'>      <div class='col-4'>        <h1 class='bold-heading title'>Choose your size</h1>      </div>      <div class='col-4'></div>      <div class='col-4'></div>    </div>    <div class='row'>      <div class='col-3 size-container'>        <div id='smallPizza' class='size-box'>S        </div>      </div>      <div class='col-3 size-container'>        <div id='mediumPizza' class='size-box'>M        </div>      </div>      <div class='col-3 size-container'>        <div id='largePizza' class='size-box'>L        </div>      </div>      <div class='col-3 size-container'>        <div id='xLPizza' class='size-box'>XL        </div>      </div>    </div>    <div class='row button-row'>      <div class='col-2'>        <div id='backBtn' class='btn-basic'>Back</div>      </div>      <div class='col-10'></div>      <div class='col-1'>        <div id='nextBtn' class='btn-basic'>Next</div>      </div>    </div>",
  "<div class='row crust-page'>      <div class='col-4'>        <h1 class='bold-heading title'>Choose your crust          <span class='badge'>Special Deal</span>        </h1>      </div>      <div class='col-4'></div>      <div class='col-4'></div>    </div>    <div class='row'>      <div class='col-4'>        <div id='pizzaViewContainer'>          <div id='pizzaView' class='pizza-box box'></div>        </div>        <div>          <div class='size-display'>	    <div id='smSize' class='size-bar'>S</div>            <div id='medSize' class='size-bar'>M</div>            <div id='lgSize' class='size-bar'>L</div>            <div id='xlSize' class='size-bar'>XL</div>          </div>        </div>      </div>      <div class='col-4'>        <div class='list-container'>          <div id='crustList'>            <div id='thin-crust' class='btn-basic bold-heading crustOpt'>Thin</div>          </div>          <div id='crustList'>            <div id='thick-crust' class='btn-basic bold-heading crustOpt'>Thick</div>          </div>          <div id='crustList'>            <div id='stuffed-crust' class='btn-basic bold-heading crustOpt'>Stuffed</div>          </div>	  <div id='crustList'>            <div id='pretzel-crust' class='btn-basic bold-heading crustOpt'>Pretzel</div>          </div>          </div>      </div>      <div class='col-4'>        <div class='ingredient-div'>          <h3>Your Pizza</h3>          <div id='ingred-list' class='list-div'>          </div>	  <h4 id='total'>Total: $0.00</h4>          <div id='addBtn' class='btn-modal' data-modal='modalLight'>Add to Order</div>          <div id='modalLight' class='modal modal-light'>            <div class='modal-content'>              <div class='modal-header'>                <span class='close'>&times;</span>              </div>              <div class='modal-body'>                <h1 class='bold-heading'>Thank you for your order!</h1>              </div>              <div class='modal-footer'>              </div>            </div>          </div>        </div>      </div>    </div>    <div class='row button-row'>      <div class='col-1 backBtn'>        <div id='backBtn' class='btn-basic'>Back</div>      </div>      <div class='col-10'></div>      <div class='col-1 nextBtn'>        <div id='nextBtn' class='btn-basic'>Next</div>      </div>    </div>",
  "<div class='row sauce-page'>      <div class='col-4'>        <h1 class='bold-heading title'>Choose your sauce          <span id='deal' class='badge'>Special Deal</span>        </h1>      </div>      <div class='col-4'></div>      <div class='col-4'></div>    </div>    <div class='row'>      <div class='col-4'>        <div id='pizzaViewContainer'>          <div id='pizzaView' class='pizza-box box'></div>        </div>        <div>          <div class='size-display'>            <div id='smSize' class='size-bar'>S</div>            <div id='medSize' class='size-bar'>M</div>            <div id='lgSize' class='size-bar'>L</div>            <div id='xlSize' class='size-bar'>XL</div>          </div>        </div>      </div>      <div class='col-4'>        <div class='list-container'>          <div id='sauceList'>            <div id='mar-sauce' class='btn-basic bold-heading crustOpt'>Marinara</div>          </div>          <div id='sauceList'>            <div id='creamy-sauce' class='btn-basic bold-heading crustOpt'>Creamy Garlic Parmesan</div>          </div>          <div id='sauceList'>            <div id='bbq-sauce' class='btn-basic bold-heading crustOpt'>Barbecue</div>          </div>	        <div id='sauceList'>            <div id='buff-sauce' class='btn-basic bold-heading crustOpt'>Buffalo</div>          </div>          </div>      </div>      <div class='col-4'>        <div class='ingredient-div'>          <h3>Your Pizza</h3>          <div id='ingred-list' class='list-div'>          </div>          <h4 id='total'>Total: $0.00</h4>          <div id='addBtn' class='btn-modal' data-modal='modalLight'>Add to Order</div>          <div id='modalLight' class='modal modal-light'>            <div class='modal-content'>              <div class='modal-header'>                <span class='close'>&times;</span>              </div>              <div class='modal-body'>                <h1 class='bold-heading'>Thank you for your order!</h1>              </div>              <div class='modal-footer'>              </div>            </div>          </div>        </div>      </div>    </div>    <div class='row button-row'>      <div class='col-1 backBtn'>        <div id='backBtn' class='btn-basic'>Back</div>      </div>      <div class='col-10'></div>      <div class='col-1 nextBtn'>        <div id='nextBtn' class='btn-basic'>Next</div>      </div>    </div>",
  "<div class='row cheese-page'>          <div class='col-4'>            <h1 class='bold-heading title'>Choose your cheese              <span id='deal' class='badge'>Special Deal</span>            </h1>          </div>          <div class='col-4'></div>          <div class='col-4'></div>        </div>        <div class='row'>          <div class='col-4'>            <div id='pizzaViewContainer'>              <div id='pizzaView' class='pizza-box box'></div>            </div>            <div>              <div class='size-display'>                <div id='smSize' class='size-bar'>S</div>                <div id='medSize' class='size-bar'>M</div>                <div id='lgSize' class='size-bar'>L</div>                <div id='xlSize' class='size-bar'>XL</div>              </div>            </div>          </div>          <div class='col-4'>            <div class='list-container'>              <div id='cheeseList'>                <div id='ched-cheese' class='btn-basic bold-heading crustOpt'>Cheddar</div>              </div>              <div id='cheeseList'>                <div id='moz-cheese' class='btn-basic bold-heading crustOpt'>Mozzarella</div>              </div>              <div id='cheeseList'>                <div id='four-cheese' class='btn-basic bold-heading crustOpt'>Four Cheese</div>              </div>              <div id='cheeseList'>                <div id='provo-cheese' class='btn-basic bold-heading crustOpt'>Provolone</div>              </div>            </div>          </div>          <div class='col-4'>            <div class='ingredient-div'>              <h3>Your Pizza</h3>              <div id='ingred-list' class='list-div'>              </div>              <h4 id='total'>Total: $0.00</h4>              <div id='addBtn' class='btn-modal' data-modal='modalLight'>Add to Order</div>              <div id='modalLight' class='modal modal-light'>                <div class='modal-content'>                  <div class='modal-header'>                    <span class='close'>&times;</span>                  </div>                  <div class='modal-body'>                    <h1 class='bold-heading'>Thank you for your order!</h1>                  </div>                  <div class='modal-footer'>                  </div>                </div>              </div>            </div>          </div>        </div>        <div class='row button-row'>          <div class='col-1 backBtn'>            <div id='backBtn' class='btn-basic'>Back</div>          </div>          <div class='col-10'></div>          <div class='col-1 nextBtn'>            <div id='nextBtn' class='btn-basic'>Next</div>          </div>        </div>  </div>",
  "<div class='row toppings-page'>      <div class='col-4'>        <h1 class='bold-heading title'>Choose your toppings          <span id='deal' class='badge'>Special Deal</span>        </h1>      </div>      <div class='col-4'></div>      <div class='col-4'></div>    </div>    <div class='row'>      <div class='col-4'>        <div id='pizzaViewContainer'>          <div id='pizzaView' class='pizza-box box'></div>        </div>        <div>          <div class='size-display'>            <div id='smSize' class='size-bar'>S</div>            <div id='medSize' class='size-bar'>M</div>            <div id='lgSize' class='size-bar'>L</div>            <div id='xlSize' class='size-bar'>XL</div>          </div>        </div>      </div>      <div class='col-4'>        <div class='list-container'>          <h5 class='topping-section'>Meats</h5>          <div class='meats-container list-div'>            <div class='toppingLabel'>              <div id='pepperoni' class='topping-button btn-basic crustOpt'>Pepperoni</div>              <div id='pepperoni-x' class='exes'>&times;</div>            </div>            <div class='topping-options'>              <div class='topping-side'>                <div id='pepperoni-left' class='btn-small crustOpt'>Left</div>                <div id='pepperoni-full' class='btn-small crustOpt'>Full</div>                <div id='pepperoni-right' class='btn-small crustOpt'>Right</div>              </div>              <div class='topping-plus'>                <div id='pepperoni-extra' class='btn-small crustOpt'>Extra</div>                <div id='pepperoni-double' class='btn-small crustOpt'>Double</div>              </div>            </div>            <div class='toppingLabel'>              <div id='sausage' class='topping-button btn-basic crustOpt'>Sausage</div>              <div id='sausage-x' class='exes'>&times;</div>            </div>            <div class='topping-options'>              <div class='topping-side'>                <div id='sausage-left' class='btn-small crustOpt'>Left</div>                <div id='sausage-full' class='btn-small crustOpt'>Full</div>                <div id='sausage-right' class='btn-small crustOpt'>Right</div>              </div>              <div class='topping-plus'>                <div id='sausage-extra' class='btn-small crustOpt'>Extra</div>                <div id='sausage-double' class='btn-small crustOpt'>Double</div>              </div>            </div>            <div class='toppingLabel'>              <div id='canadianbacon' class='topping-button btn-basic crustOpt'>Canadian Bacon</div>              <div id='canadianbacon-x' class='exes'>&times;</div>            </div>            <div class='topping-options'>              <div class='topping-side'>                <div id='canadianbacon-left' class='btn-small crustOpt'>Left</div>                <div id='canadianbacon-full' class='btn-small crustOpt'>Full</div>                <div id='canadianbacon-right' class='btn-small crustOpt'>Right</div>              </div>              <div class='topping-plus'>                <div id='canadianbacon-extra' class='btn-small crustOpt'>Extra</div>                <div id='canadianbacon-double' class='btn-small crustOpt'>Double</div>              </div>            </div>            <div class='toppingLabel'>              <div id='beef' class='topping-button btn-basic crustOpt'>Beef</div>              <div id='beef-x' class='exes'>&times;</div>            </div>            <div class='topping-options'>              <div class='topping-side'>                <div id='beef-left' class='btn-small crustOpt'>Left</div>                <div id='beef-full' class='btn-small crustOpt'>Full</div>                <div id='beef-right' class='btn-small crustOpt'>Right</div>              </div>              <div class='topping-plus'>                <div id='beef-extra' class='btn-small crustOpt'>Extra</div>                <div id='beef-double' class='btn-small crustOpt'>Double</div>              </div>            </div>            <div class='toppingLabel'>              <div id='bacon' class='topping-button btn-basic crustOpt'>Bacon</div>              <divid='bacon-x' class='exes'>&times;</div>			  </div>            <div class='topping-options'>              <div class='topping-side'>                <div id='bacon-left' class='btn-small crustOpt'>Left</div>                <div id='bacon-full' class='btn-small crustOpt'>Full</div>                <div id='bacon-right' class='btn-small crustOpt'>Right</div>              </div>              <div class='topping-plus'>                <div id='bacon-extra' class='btn-small crustOpt'>Extra</div>                <div id='bacon-double' class='btn-small crustOpt'>Double</div>              </div>            </div>          </div>          <h5 class='topping-section'>Vegetables</h5>          <div class='veg-container list-div'>            <div class='toppingLabel'>              <div id='olives' class='topping-button btn-basic crustOpt'>Olives</div>              <div id='olives-x' class='exes'>&times;</div>            </div>            <div class='topping-options'>              <div class='topping-side'>                <div id='olives-left' class='btn-small crustOpt'>Left</div>                <div id='olives-full' class='btn-small crustOpt'>Full</div>                <div id='olives-right' class='btn-small crustOpt'>Right</div>              </div>              <div class='topping-plus'>                <div id='olives-extra' class='btn-small crustOpt'>Extra</div>                <div id='olives-double' class='btn-small crustOpt'>Double</div>              </div>            </div>            <div class='toppingLabel'>              <div id='onions' class='topping-button btn-basic crustOpt'>Onions</div>              <div id='onions-x' class='exes'>&times;</div>            </div>            <div class='topping-options'>              <div class='topping-side'>                <div id='onions-left' class='btn-small crustOpt'>Left</div>                <div id='onions-full' class='btn-small crustOpt'>Full</div>                <div id='onions-right' class='btn-small crustOpt'>Right</div>              </div>              <div class='topping-plus'>                <div id='onions-extra' class='btn-small crustOpt'>Extra</div>                <div id='onions-double' class='btn-small crustOpt'>Double</div>              </div>            </div>            <div class='toppingLabel'>              <div id='mushrooms' class='topping-button btn-basic crustOpt'>Mushrooms</div>              <div id='mushrooms-x' class='exes'>&times;</div>            </div>            <div class='topping-options'>              <div class='topping-side'>                <div id='mushrooms-left' class='btn-small crustOpt'>Left</div>                <div id='mushrooms-full' class='btn-small crustOpt'>Full</div>                <div id='mushrooms-right' class='btn-small crustOpt'>Right</div>              </div>              <div class='topping-plus'>                <div id='mushrooms-extra' class='btn-small crustOpt'>Extra</div>                <div id='mushrooms-double' class='btn-small crustOpt'>Double</div>              </div>            </div>            <div class='toppingLabel'>              <div id='spinach' class='topping-button btn-basic crustOpt'>Spinach</div>              <div id='spinach-x' class='exes'>&times;</div>            </div>            <div class='topping-options'>              <div class='topping-side'>                <div id='spinach-left' class='btn-small crustOpt'>Left</div>                <div id='spinach-full' class='btn-small crustOpt'>Full</div>                <div id='spinach-right' class='btn-small crustOpt'>Right</div>              </div>              <div class='topping-plus'>                <div id='spinach-extra' class='btn-small crustOpt'>Extra</div>                <div id='spinach-double' class='btn-small crustOpt'>Double</div>              </div>            </div>            <div class='toppingLabel'>              <div id='bellpeppers' class='topping-button btn-basic crustOpt'>Bell Peppers</div>              <div id='bellpeppers-x' class='exes'>&times;</div>            </div>            <div class='topping-options'>              <div class='topping-side'>                <div id='bellpeppers-left' class='btn-small crustOpt'>Left</div>                <div id='bellpeppers-full' class='btn-small crustOpt'>Full</div>                <div id='bellpeppers-right' class='btn-small crustOpt'>Right</div>              </div>              <div class='topping-plus'>                <div id='bellpeppers-extra' class='btn-small crustOpt'>Extra</div>                <div id='bellpeppers-double' class='btn-small crustOpt'>Double</div>              </div>            </div>          </div>        </div>      </div>      <div class='col-4'>        <div class='ingredient-div'>          <h3>Your Pizza</h3>          <div id='ingred-list' class='list-div'>          </div>          <h4 id='total'>Total: $0.00</h4>          <div id='addBtn' class='btn-modal' data-modal='modalLight'>Add to Order</div>          <div id='modalLight' class='modal modal-light'>            <div class='modal-content'>              <div class='modal-header'>                <span class='close'>&times;</span>              </div>              <div class='modal-body'>                <h1 class='bold-heading'>Thank you for your order!</h1>              </div>              <div class='modal-footer'>              </div>            </div>          </div>        </div>      </div>    </div>    <div class='row button-row'>      <div class='col-1 backBtn'>        <div id='backBtn' class='btn-basic'>Back</div>      </div>      <div class='col-10'></div>      <div class='col-1 nextBtn'>        <div id='nextBtn' class='btn-basic'>Next</div>      </div>    </div>"
];
var preBuiltMobile =
  "<div class='row preBuilt-page'>      <div class='col-4'>        <h1 class='bold-heading title'>Pre-Built Options</h1>      </div>      <div class='col-4'></div>      <div class='col-4'></div>    </div>    <div class='row'>      <div class='col-2 pb-row'>        <div id='pb_0' class='pizza-box'>         </div>		<p id='pbD_0' class='pizza-desc'></p>      </div>      <div class='col-2 pb-row'>        <div id='pb_1' class='pizza-box'>        </div>		<p id='pbD_1' class='pizza-desc'></p>      </div>      <div class='col-2 pb-row'>        <div id='pb_2' class='pizza-box'>        </div>		<p id='pbD_2' class='pizza-desc'></p>      </div>      <div class='col-2 pb-row'>        <div id='pb_3' class='pizza-box'>        </div>		<p id='pbD_3' class='pizza-desc'></p>      </div>      <div class='col-2 pb-row'>        <div id='pb_4' class='pizza-box'>        </div>		<p id='pbD_4' class='pizza-desc'></p>      </div>      <div class='col-2 pb-row'>	  <div id='pb_5' class='pizza-box'>        </div>		<p id='pbD_5' class='pizza-desc'></p>	  </div>    </div>    <div class='row button-row'>      <div class='col-2'>        <div id='backBtn' class='btn-basic'>Back</div>      </div>      <div class='col-10'></div>           <div class='col-1'>        <div id='nextBtn' class='btn-basic'>Next</div>      </div>    </div>";
var currentPage = 0;
var isModal = false;
var isMobile = false;

var currentCrust;
var currentSauce;
var currentCheese;
var currentSize;
var isSpecialDeal = false;
var totalPrice;
var filenameToLoad;

var currentPizzaImgs = [];

var currentToppings = [];
var toppingImgs = [];

var pepperoniImgs = ["assets/toppings/pepperoni/pepperoni-full.png", "assets/toppings/pepperoni/pepperoni-full-extra.png", "assets/toppings/pepperoni/pepperoni-full-double.png", "assets/toppings/pepperoni/pepperoni-left.png", "assets/toppings/pepperoni/pepperoni-left-extra.png", "assets/toppings/pepperoni/pepperoni-left-double.png", "assets/toppings/pepperoni/pepperoni-right.png", "assets/toppings/pepperoni/pepperoni-right-extra.png", "assets/toppings/pepperoni/pepperoni-right-double.png"];
var sausageImgs = ["assets/toppings/sausage/sausage-full.png", "assets/toppings/sausage/sausage-full-extra.png", "assets/toppings/sausage/sausage-full-double.png", "assets/toppings/sausage/sausage-left.png", "assets/toppings/sausage/sausage-left-extra.png", "assets/toppings/sausage/sausage-left-double.png", "assets/toppings/sausage/sausage-right.png", "assets/toppings/sausage/sausage-right-extra.png", "assets/toppings/sausage/sausage-right-double.png"];
var canadianBaconImgs = ["assets/toppings/canadianbacon/canadianbacon-full.png", "assets/toppings/canadianbacon/canadianbacon-full-extra.png", "assets/toppings/canadianbacon/canadianbacon-full-double.png", "assets/toppings/canadianbacon/canadianbacon-left.png", "assets/toppings/canadianbacon/canadianbacon-left-extra.png", "assets/toppings/canadianbacon/canadianbacon-left-double.png", "assets/toppings/canadianbacon/canadianbacon-right.png", "assets/toppings/canadianbacon/canadianbacon-right-extra.png", "assets/toppings/canadianbacon/canadianbacon-full-double.png"];
var baconImgs = ["assets/toppings/bacon/bacon-full.png", "assets/toppings/bacon/bacon-full-extra.png", "assets/toppings/bacon/bacon-full-double.png", "assets/toppings/bacon/bacon-left.png", "assets/toppings/bacon/bacon-left-extra.png", "assets/toppings/bacon/bacon-left-double.png", "assets/toppings/bacon/bacon-right.png", "assets/toppings/bacon/bacon-right-extra.png", "assets/toppings/bacon/bacon-right-double.png"];
var beefImgs = ["assets/toppings/beef/beef-full.png", "assets/toppings/beef/beef-full-extra.png", "assets/toppings/beef/beef-full-double.png", "assets/toppings/beef/beef-left.png", "assets/toppings/beef/beef-left-extra.png", "assets/toppings/beef/beef-left-double.png", "assets/toppings/beef/beef-right.png", "assets/toppings/beef/beef-right-extra.png", "assets/toppings/beef/beef-right-double.png"];
var mushroomImgs = ["assets/toppings/mushrooms/mushrooms-full.png", "assets/toppings/mushrooms/mushrooms-full-extra.png", "assets/toppings/mushrooms/mushrooms-full-double.png", "assets/toppings/mushrooms/mushrooms-left.png", "assets/toppings/mushrooms/mushrooms-left-extra.png", "assets/toppings/mushrooms/mushrooms-left-double.png", "assets/toppings/mushrooms/mushrooms-right.png", "assets/toppings/mushrooms/mushrooms-right-extra.png", "assets/toppings/mushrooms/mushrooms-right-double.png"];
var oliveImgs = ["assets/toppings/olives/olives-full.png", "assets/toppings/olives/olives-full-extra.png", "assets/toppings/olives/olives-full-double.png", "assets/toppings/olives/olives-left.png", "assets/toppings/olives/olives-left-extra.png", "assets/toppings/olives/olives-left-double.png", "assets/toppings/olives/olives-right.png", "assets/toppings/olives/olives-right-extra.png", "assets/toppings/olives/olives-right-double.png"];
var onionImgs = ["assets/toppings/onions/onions-full.png", "assets/toppings/onions/onions-full-extra.png", "assets/toppings/onions/onions-full-double.png", "assets/toppings/onions/onions-left.png", "assets/toppings/onions/onions-left-extra.png", "assets/toppings/onions/onions-left-double.png", "assets/toppings/onions/onions-right.png", "assets/toppings/onions/onions-right-extra.png", "assets/toppings/onions/onions-right-double.png"];
var bellPepperImgs = ["assets/toppings/bellpeppers/bellpeppers-full.png", "assets/toppings/bellpeppers/bellpeppers-full-extra.png", "assets/toppings/bellpeppers/bellpeppers-full-double.png", "assets/toppings/bellpeppers/bellpeppers-left.png", "assets/toppings/bellpeppers/bellpeppers-left-extra.png", "assets/toppings/bellpeppers/bellpeppers-left-double.png", "assets/toppings/bellpeppers/bellpeppers-right.png", "assets/toppings/bellpeppers/bellpeppers-right-extra.png", "assets/toppings/bellpeppers/bellpeppers-right-double.png"];
var spinachImgs = ["assets/toppings/spinach/spinach-full.png", "assets/toppings/spinach/spinach-full-extra.png", "assets/toppings/spinach/spinach-full-double.png", "assets/toppings/spinach/spinach-left.png", "assets/toppings/spinach/spinach-left-extra.png", "assets/toppings/spinach/spinach-left-double.png", "assets/toppings/spinach/spinach-right.png", "assets/toppings/spinach/spinach-right-extra.png", "assets/toppings/spinach/spinach-right-double.png"];

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
  thin.addEventListener('click', crustClick);
  thick.addEventListener('click', crustClick);
  stuffed.addEventListener('click', crustClick);
  pretzel.addEventListener('click', crustClick);

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

  marinara.addEventListener('click', sauceClick);
  creamy.addEventListener('click', sauceClick);
  bbq.addEventListener('click', sauceClick);
  buffalo.addEventListener('click', sauceClick);

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
  cheddar.addEventListener('click', cheeseClick);
  four.addEventListener('click', cheeseClick);
  provolone.addEventListener('click', cheeseClick);
  mozzarella.addEventListener('click', cheeseClick);

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

  pep.addEventListener('click', toppingLabelClick);
  sausage.addEventListener('click', toppingLabelClick);
  beef.addEventListener('click', toppingLabelClick);
  canadianBacon.addEventListener('click', toppingLabelClick);
  bacon.addEventListener('click', toppingLabelClick);
  olives.addEventListener('click', toppingLabelClick);
  mushrooms.addEventListener('click', toppingLabelClick);
  onions.addEventListener('click', toppingLabelClick);
  bellPeppers.addEventListener('click', toppingLabelClick);
  spinach.addEventListener('click', toppingLabelClick);
}

function toppingLabelClick(evt) {
  this.className = this.className + " selectedCrust";
  var toppingOptions = document.getElementsByClassName("topping-options");
  for (let i = 0; i < toppingOptions.length; i++) {
    toppingOptions[i].style.display = "none";
  }
  console.log(this.id + '-x');
  var currentX = document.getElementById(this.id + '-x');
  currentX.style.display = "block";
}

function customClick(evt) {
  changePage(2);
}

function preClick(evt) {
  changePage(1);
}

function preBuiltPageInit() {
  //console.log("in pre-built init");
  if (currentCrust != null && currentSauce != null && currentCheese != null && currentToppings.length > 0) {
    setNavButtons();
  }

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

//SIZES
function sizesPageInit() {
  //console.log("in sizes init");
  setInitialSizeButtons();
  calculateCost();

  if (currentSize != null) {
    setNavButtons();
  }
}

function sizeClick(evt) {
  setNavButtons();
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

//CRUST
function crustPageInit() {
  console.log("crust page init");
  updatePizzaView();
  updateListView();

  if (currentCrust != null) {
    setNavButtons();
  }
  setSizeButtons();
  setCrustButtons();

  calculateCost();
}

function crustClick(evt) {
  setNavButtons();
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

//SAUCE
function saucePageInit() {
  console.log("sauce page init");
  updatePizzaView();
  updateListView();
  if (currentSauce != null) {
    setNavButtons();
  }
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
  console.log("sauce:", currentSauce);
  getSauceImg();
  updateListView();
}

//CHEESE
function cheesePageInit() {
  console.log("cheese page init");
  updatePizzaView();
  updateListView();

  if (currentCheese != null) {
    setNavButtons();
  }
  setSizeButtons();
  setCheeseButtons();

  calculateCost();
}

function cheeseClick(evt) {
  setNavButtons();
  var allElements = document.body.getElementsByTagName("*");
  for (let i = 0; i < allElements.length; i++) {
    if (allElements[i].classList.contains("selectedCrust")) {
      allElements[i].className = allElements[i].className.replace(" selectedCrust", "");
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
  console.log(currentCheese);
  getCheeseImg();
  updateListView();
}

//TOPPINGS
function toppingsPageInit() {
  console.log("toppings page init");
  updatePizzaView();
  updateListView();

  if (currentToppings.length > 0) {
    setNavButtons();
  }
  setSizeButtons();
  setToppingButtons();

  calculateCost();
}

function toppingsClick(evt) {
  //set selected label of topping name

}

function removeClick(evt) {
  //remove currently selected topping from list
}

function rightClick(evt) {
  setNavButtons();
  //set selected
}

function leftClick(evt) {
  setNavButtons();
}

function fullClick(evt) {
  setNavButtons();
}

function extraClick(evt) {
  setNavButtons();
}

function doubleClick(evt) {
  setNavButtons();
}

function setToppingName(id) {
  var name = "";

  setSelectedTopping(name);
}

function setSelectedTopping(name) {
  currentToppings.unshift(name);
  calculateCost();
  console.log(currentToppings);
  getToppingImg();
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
    if (currentPizzaImgs.length > 1 && (i != currentPizzaImgs.length - 1)) {
      imgList += "url('" + currentPizzaImgs[i] + "'), ";
    } else {
      if (toppingImgs.length == 0) {
        imgList += "url('" + currentPizzaImgs[i] + "') no-repeat center";
      } else {
        imgList += "url('" + currentPizzaImgs[i] + "'), ";
      }
    }
  }
  if (toppingImgs.length > 0) {
    for (let j = 0; j < toppingImgs.length; j++) {
      if (j != toppingImgs.length - 1) {
        imgList += "url('" + toppingImgs[j] + "'), ";
      } else {
        imgList += "url('" + toppingImgs[j] + "') no-repeat center";
      }
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
  if (currentPizzaImgs.length == 0) {
    currentPizzaImgs.push(crustImg);
  } else {
    var crustIndex = currentPizzaImgs.length - 1;
    currentPizzaImgs.splice(crustIndex, 1, crustImg);
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

  console.log(currentPizzaImgs);
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
  console.log(currentPizzaImgs);
  updatePizzaView();
}

function getToppingImg() {
  var toppingImg = "";
  var lastTopping = currentToppings[0];
  if (lastTopping.contains("pepperoni")) {
    for (let i = 0; i < pepperoniImgs.length; i++) {
      if (pepperoniImgs[i].toString().contains(lastTopping)) {
        toppingImg = pepperoniImgs[i];
        break;
      }
    }
  }
  if (lastTopping.contains("sausage")) {
    for (let i = 0; i < sausageImgs.length; i++) {
      if (sausageImgs[i].toString().contains(lastTopping)) {
        toppingImg = sausageImgs[i];
        break;
      }
    }
  }
  if (lastTopping.contains("canadianbacon")) {
    for (let i = 0; i < canadianBaconImgs.length; i++) {
      if (canadianBaconImgs[i].toString().contains(lastTopping)) {
        toppingImg = canadianBaconImgs[i];
        break;
      }
    }
  }
  if (lastTopping.contains("bacon")) {
    for (let i = 0; i < baconImgs.length; i++) {
      if (baconImgs[i].toString().contains(lastTopping)) {
        toppingImg = baconImgs[i];
        break;
      }
    }
  }
  if (lastTopping.contains("beef")) {
    for (let i = 0; i < beefImgs.length; i++) {
      if (beefImgs[i].toString().contains(lastTopping)) {
        toppingImg = beefImgs[i];
        break;
      }
    }
  }
  if (lastTopping.contains("mushrooms")) {
    for (let i = 0; i < mushroomImgs.length; i++) {
      if (mushroomImgs[i].toString().contains(lastTopping)) {
        toppingImg = mushroomImgs[i];
        break;
      }
    }
  }
  if (lastTopping.contains("olives")) {
    for (let i = 0; i < oliveImgs.length; i++) {
      if (oliveImgs[i].toString().contains(lastTopping)) {
        toppingImg = oliveImgs[i];
        break;
      }
    }
  }
  if (lastTopping.contains("bellpeppers")) {
    for (let i = 0; i < bellPepperImgs.length; i++) {
      if (bellPepperImgs[i].toString().contains(lastTopping)) {
        toppingImg = bellPepperImgs[i];
        break;
      }
    }
  }
  if (lastTopping.contains("spinach")) {
    for (let i = 0; i < spinachImgs.length; i++) {
      if (spinachImgs[i].toString().contains(lastTopping)) {
        toppingImg = spinachImgs[i];
        break;
      }
    }
  }
  if (toppingImgs.length == 1) {
    toppingImgs.unshift(toppingImg);
  } else {
    var toppingIndex = toppingImgs.length - 1;
    toppingImgs.splice(toppingIndex, 1, toppingImg);
  }
  updatePizzaView();
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

//changePage(0);