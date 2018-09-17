// Write your JS here

const hero = {
  name: 'Pope Francis',
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {
    type: 'sword',
    damage: 2
  }
};



function rest (heroObj) {
  heroObj.health = 10;
  return heroObj;
}

function pickUpItem (heroObj, weaponObj) {
  heroObj.inventory.push(weaponObj);
  return heroObj;
}

function equipWeapon (heroObj) {
  console.log(heroObj, 'before');
  if (heroObj.inventory.length) heroObj.weapon = heroObj.inventory[0];
  console.log(heroObj, 'after');
  return heroObj;
}

const app = {
  init: function () {
    document.getElementById('inn').onclick = function () {
      rest(hero);
    };

    document.getElementById('dagger').onclick = function () {
      pickUpItem(hero, {
        type: 'dagger',
        damage: 2
      });
    };

    document.getElementById('bag').onclick = function () {
      equipWeapon(hero);
    };
  }
};

app.init();