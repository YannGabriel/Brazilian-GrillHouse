

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
