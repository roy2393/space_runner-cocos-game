cc.game.onStart = function(){
    cc.view.setDesignResolutionSize(480, 320, cc.ResolutionPolicy.
   SHOW_ALL);
   cc.LoaderScene.preload(gameResources, function () {
    cc.director.runScene(new gameScene());
    }, this);
   };
cc.game.run();