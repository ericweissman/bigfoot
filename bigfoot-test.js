var assert = require('chai').assert;
var Bigfoot = require('./bigfoot.js');


describe('Bigfoot', function() {
    it.skip('should be a function and instantiate a Bigfoot', function() {
      var bigfoot = new Bigfoot();
      assert.isFunction(Bigfoot);
      assert.isObject(bigfoot);
    });

    it.skip('should have a name', function() {
      var bigfoot = new Bigfoot('Harry');
      assert.equal(bigfoot.name, 'Harry');
    });

    it.skip('should start off being extremely hairy', function() {
      var bigfoot = new Bigfoot('Large Marge');
      assert.equal(bigfoot.hair, true);
    });

    it.skip('should have its own unique scent', function() {
      var bigfoot = new Bigfoot('Sir Nigel', 'damp garbage');
      assert.equal(bigfoot.scent, 'damp garbage');
    });

    it.skip('should start off not having snacked', function() {
      var bigfoot = new Bigfoot('Lady Grey', 'lavander');
      assert.equal(bigfoot.appetite, 'starving!');
      assert.equal(bigfoot.caloriesConsumed, 0);
      bigfoot.munch();
      bigfoot.munch();
      assert.equal(bigfoot.appetite, 'starving!');
      assert.equal(bigfoot.caloriesConsumed, 2000);
    });

    function feedingFrenzy(timesEaten, bigfoot) {
      for (var i = 0; i < timesEaten; i++) {
        bigfoot.munch();
      };
    };

    it.skip('should feel some type of way after getting a haircut and have a brand new style', function() {
      var bigfoot = new Bigfoot('Young Ders', 'hotdog juice');
      assert.equal(bigfoot.mood, 'meh');
      bigfoot.makeover('combover', 'weak sauce');
      assert.equal(bigfoot.hair, 'combover');
      assert.equal(bigfoot.mood, 'weak sauce');
      bigfoot.makeover('mullet', 'extreme');
      assert.equal(bigfoot.mood, 'extreme');
      assert.equal(bigfoot.hair, 'mullet');
    });

    it.skip('should be able to steal clothes to complete its look', function() {
      var bigfoot = new Bigfoot('Fluff McCutcheon', 'baby kittens');
      var rackOfClothes = ['jorts', 'throwback jersey', 'tophat', 'tube socks'];
      assert.deepEqual(bigfoot.wardrobe, []);
      bigfoot.shoppingSpree(rackOfClothes);
      assert.deepEqual(bigfoot.wardrobe.length, 4);
      assert.deepEqual(bigfoot.wardrobe[0], 'tube socks');
    });

    it.skip('should feel content if it eats over 10000 calories', function() {
      var bigfoot = new Bigfoot('Big Country', 'old folks home');
      feedingFrenzy(10, bigfoot);
      assert.equal(bigfoot.caloriesConsumed, 10000);
      assert.equal(bigfoot.appetite, 'starving!');
      bigfoot.munch();
      assert.equal(bigfoot.appetite, 'content.');
      assert.equal(bigfoot.caloriesConsumed, 11000);
    });


    it.skip('should feel queasy if it eats over 20000 calories', function() {
      var bigfoot = new Bigfoot('Sven', 'eggs benedict');
      assert.equal(bigfoot.appetite, 'starving!');
      feedingFrenzy(20, bigfoot);
      assert.equal(bigfoot.appetite, 'queasy :(');
    });

  });
