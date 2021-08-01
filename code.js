var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8ddeea9d-c85a-4b41-adfe-cd2f5484c3fa","bab81dcf-adb5-4b49-8484-294dd332902e","e12cf870-9727-451f-9d10-8713833bfb5b","e85c510d-b1bd-4e83-afa9-a6c3cf50863b"],"propsByKey":{"8ddeea9d-c85a-4b41-adfe-cd2f5484c3fa":{"name":"ba","sourceUrl":"assets/api/v1/animation-library/gamelab/5YUyTyvvcRaIEyA1Fy3tOZxpBJD8ZdEj/category_backgrounds/tennis_court.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"5YUyTyvvcRaIEyA1Fy3tOZxpBJD8ZdEj","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5YUyTyvvcRaIEyA1Fy3tOZxpBJD8ZdEj/category_backgrounds/tennis_court.png"},"bab81dcf-adb5-4b49-8484-294dd332902e":{"name":"tb","sourceUrl":"assets/api/v1/animation-library/gamelab/j.BvyKc65wMMqZSB1GWQZm.J8DQG6ukA/category_sports/tennisball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"j.BvyKc65wMMqZSB1GWQZm.J8DQG6ukA","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/j.BvyKc65wMMqZSB1GWQZm.J8DQG6ukA/category_sports/tennisball.png"},"e12cf870-9727-451f-9d10-8713833bfb5b":{"name":"pr","sourceUrl":"assets/v3/animations/i2QfCMD29y3u6ANGXSpsK13MwG4s6KSna58LHmDOJ30/e12cf870-9727-451f-9d10-8713833bfb5b.png","frameSize":{"x":409,"y":612},"frameCount":1,"looping":true,"frameDelay":4,"version":"diAFhYytNFN0batrJNnuvzsKgoqMkfxN","loadedFromSource":true,"saved":true,"sourceSize":{"x":409,"y":612},"rootRelativePath":"assets/v3/animations/i2QfCMD29y3u6ANGXSpsK13MwG4s6KSna58LHmDOJ30/e12cf870-9727-451f-9d10-8713833bfb5b.png"},"e85c510d-b1bd-4e83-afa9-a6c3cf50863b":{"name":"cr","sourceUrl":"assets/v3/animations/i2QfCMD29y3u6ANGXSpsK13MwG4s6KSna58LHmDOJ30/e85c510d-b1bd-4e83-afa9-a6c3cf50863b.png","frameSize":{"x":409,"y":612},"frameCount":1,"looping":true,"frameDelay":4,"version":"FCCFF35u25vyOMnGIoYPsfEhTELuX7zD","loadedFromSource":true,"saved":true,"sourceSize":{"x":409,"y":612},"rootRelativePath":"assets/v3/animations/i2QfCMD29y3u6ANGXSpsK13MwG4s6KSna58LHmDOJ30/e85c510d-b1bd-4e83-afa9-a6c3cf50863b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creating sprites and background

var  score=0;
var  Score=0;

var ba = createSprite(200,200);
ba.setAnimation("ba");

var cr = createSprite(198,46);
cr.setAnimation("cr");
cr.scale=0.1;

var pr = createSprite(200, 296);
pr.setAnimation("pr");
pr.scale=0.1;

var tb = createSprite(195,174);
tb.setAnimation("tb");
tb.scale=0.05;



function draw() {
drawSprites();
textSize(22);
stroke("black");
text("score: " + score,306,341);
text("Score: " + Score,80,84);
//background("white");

//to move the sprites and to start press space

if (keyDown("left")) {
    pr.x=pr.x-10;
  }
  if (keyDown("right")) {
    pr.x=pr.x +10;
  }

 cr.x=tb.x; 

if (keyDown("space")){
      tb.velocityX = (-3);
      tb.velocityY = (3);
  }
  if (tb.isTouching(pr)){
  score++;}
  
  if (tb.isTouching(cr)){
  Score++;}
  
  //to bounceOff sprites
  
  createEdgeSprites();
 tb.bounceOff(cr);
 tb.bounceOff(pr);
 tb.bounceOff(edges);
 cr.bounceOff(edges);
 pr.bounceOff(edges);
 
 
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
