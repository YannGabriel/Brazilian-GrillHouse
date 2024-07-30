

const list = document.getElementById('list')

function steakMenu() {
  const steaks = `
    <li class='item'>
      <h3 class="name">Ribeye</h3>
      <span class="price">$35.99</span>
    </li>
    <li class='item'>
      <h3 class="name">Filet Mignon</h3>
      <span class="price">$45.99</span>
    </li>
    <li class='item'>
      <h3 class="name">T-Bone</h3>
      <span class="price">$30.99</span>
    </li>
    <li class='item'>
      <h3 class="name">Porterhouse</h3>
      <span class="price">$42.99</span>
    </li>
    <li class='item'>
      <h3 class="name">Sirloin</h3>
      <span class="price">$28.99</span>
    </li>
    <li class='item'>
      <h3 class="name">Flank Steak</h3>
      <span class="price">$18.99</span>
    </li>
    <li class='item'>
      <h3 class="name">Skirt Steak</h3>
      <span class="price">$22.99</span>
    </li>
    <li class='item'>
      <h3 class="name">New York Strip</h3>
      <span class="price">$34.99</span>
    </li>
    <li class='item'>
      <h3 class="name">Brisket</h3>
      <span class="price">$29.99</span>
    </li>
    <li class='item'>
      <h3 class="name">Chuck Roast</h3>
      <span class="price">$24.99</span>
    </li>
    <li class='item'>
      <h3 class="name">Tri-Tip</h3>
      <span class="price">$27.99</span>
    </li>
    <li class='item'>
      <h3 class="name">Short Ribs</h3>
      <span class="price">$31.99</span>
    </li>
    <li class='item'>
      <h3 class="name">Flat Iron</h3>
      <span class="price">$25.99</span>
    </li>
    <li class='item'>
      <h3 class="name">Top Round</h3>
      <span class="price">$21.99</span>
    </li>
    <li class='item'>
      <h3 class="name">Bottom Round</h3>
      <span class="price">$20.99</span>
    </li>
    <li class='item'>
      <h3 class="name">Tenderloin</h3>
      <span class="price">$44.99</span>
    </li>
    <li class='item'>
      <h3 class="name">Hanger Steak</h3>
      <span class="price">$23.99</span>
    </li>
    <li class='item'>
      <h3 class="name">Denver Steak</h3>
      <span class="price">$26.99</span>
    </li>
    <li class='item'>
      <h3 class="name">Tomahawk</h3>
      <span class="price">$55.99</span>
    </li>
    <li class='item'>
      <h3 class="name">Picanha</h3>
      <span class="price">$32.99</span>
    </li>
    <li class='item'>
      <h3 class="name">Rump Steak</h3>
      <span class="price">$19.99</span>
    </li>
    <li class='item'>
      <h3 class="name">Rib Roast</h3>
      <span class="price">$38.99</span>
    </li>
    <li class='item'>
      <h3 class="name">Prime Rib</h3>
      <span class="price">$40.99</span>
    </li>
    <li class='item'>
      <h3 class="name">Shortloin</h3>
      <span class="price">$36.99</span>
    </li>
    <li class='item'>
      <h3 class="name">Standing Rib Roast</h3>
      <span class="price">$39.99</span>
    </li>
    <li class='item'>
      <h3 class="name">Oxtail</h3>
      <span class="price">$17.99</span>
    </li>
    <li class='item'>
      <h3 class="name">Veal Cutlet</h3>
      <span class="price">$25.99</span>
    </li>
    <li class='item'>
      <h3 class="name">Veal Chop</h3>
      <span class="price">$28.99</span>
    </li>
    <li class='item'>
      <h3 class="name">Beef Shank</h3>
      <span class="price">$18.99</span>
    </li>
    <li class='item'>
      <h3 class="name">Lamb Chop</h3>
      <span class="price">$26.99</span>
    </li>
  `

  list.innerHTML = steaks
}


function drinkMenu() {
  const drinks = `
   <li class='item'>
      <h3 class="name">BlueBarry Drink</h3>
      <span class="price">$15.99</span>
    </li>
    <li class='item'>
  <h3 class="name">Tropical Breeze</h3>
  <span class="price">$12.99</span>
</li>
<li class='item'>
  <h3 class="name">Mango Delight</h3>
  <span class="price">$13.49</span>
</li>
<li class='item'>
  <h3 class="name">Citrus Twist</h3>
  <span class="price">$11.99</span>
</li>
<li class='item'>
  <h3 class="name">Peach Paradise</h3>
  <span class="price">$14.29</span>
</li>
<li class='item'>
  <h3 class="name">Berry Bliss</h3>
  <span class="price">$15.49</span>
</li>
<li class='item'>
  <h3 class="name">Pineapple Punch</h3>
  <span class="price">$13.99</span>
</li>
<li class='item'>
  <h3 class="name">Lemonade Splash</h3>
  <span class="price">$10.99</span>
</li>
<li class='item'>
  <h3 class="name">Strawberry Fields</h3>
  <span class="price">$14.59</span>
</li>
<li class='item'>
  <h3 class="name">Coconut Cooler</h3>
  <span class="price">$12.49</span>
</li>
<li class='item'>
  <h3 class="name">Raspberry Rush</h3>
  <span class="price">$15.79</span>
</li>
<li class='item'>
  <h3 class="name">Apple Breeze</h3>
  <span class="price">$13.29</span>
</li>
<li class='item'>
  <h3 class="name">Watermelon Wave</h3>
  <span class="price">$14.99</span>
</li>
<li class='item'>
  <h3 class="name">Kiwi Kiss</h3>
  <span class="price">$11.49</span>
</li>
<li class='item'>
  <h3 class="name">Grape Escape</h3>
  <span class="price">$13.79</span>
</li>
<li class='item'>
  <h3 class="name">Orange Sunset</h3>
  <span class="price">$12.29</span>
</li>
<li class='item'>
  <h3 class="name">Cherry Charm</h3>
  <span class="price">$14.19</span>
</li>
<li class='item'>
  <h3 class="name">Lime Light</h3>
  <span class="price">$11.59</span>
</li>
<li class='item'>
  <h3 class="name">Papaya Passion</h3>
  <span class="price">$13.89</span>
</li>
<li class='item'>
  <h3 class="name">Banana Breeze</h3>
  <span class="price">$15.39</span>
</li>

    `

  list.innerHTML = drinks
}


function preparedMeals () {
  const dishes = `
  <li class='item'>
  <h3 class="name">Grilled Chicken Plate</h3>
  <span class="price">$18.99</span>
</li>
<li class='item'>
  <h3 class="name">Beef Steak Plate</h3>
  <span class="price">$22.49</span>
</li>
<li class='item'>
  <h3 class="name">Salmon Fillet Plate</h3>
  <span class="price">$24.99</span>
</li>
<li class='item'>
  <h3 class="name">Vegetarian Delight Plate</h3>
  <span class="price">$17.99</span>
</li>
<li class='item'>
  <h3 class="name">Pasta Primavera Plate</h3>
  <span class="price">$19.99</span>
</li>
<li class='item'>
  <h3 class="name">Shrimp Scampi Plate</h3>
  <span class="price">$21.99</span>
</li>
<li class='item'>
  <h3 class="name">BBQ Ribs Plate</h3>
  <span class="price">$23.49</span>
</li>
<li class='item'>
  <h3 class="name">Turkey Breast Plate</h3>
  <span class="price">$20.99</span>
</li>
<li class='item'>
  <h3 class="name">Lamb Chops Plate</h3>
  <span class="price">$25.99</span>
</li>
<li class='item'>
  <h3 class="name">Pork Tenderloin Plate</h3>
  <span class="price">$21.49</span>
</li>
<li class='item'>
  <h3 class="name">Seafood Medley Plate</h3>
  <span class="price">$26.99</span>
</li>
<li class='item'>
  <h3 class="name">Tofu Stir-fry Plate</h3>
  <span class="price">$18.49</span>
</li>
<li class='item'>
  <h3 class="name">Duck Breast Plate</h3>
  <span class="price">$24.49</span>
</li>
<li class='item'>
  <h3 class="name">Chicken Alfredo Plate</h3>
  <span class="price">$19.49</span>
</li>
<li class='item'>
  <h3 class="name">Stuffed Peppers Plate</h3>
  <span class="price">$17.49</span>
</li>
`

list.innerHTML = dishes
}

