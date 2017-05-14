var Ennemy = function(layer, health, posX, posY, width, height, color, incX, incY){
       
        
        var incXrec = null;
        var incYrec = null;
        this.layer = layer;
        this.health = health;
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.color = color;
        this.incX = incX;
        this.incY = incY;  
    };

Ennemy.prototype.display = function (){
    game.display.drawRectangleInLayer(this.layer, this.width, this.height, this.color, this.posX, this.posY);
};
    
//    conasse : document.getElementById("audiotag1"),
//    twoPI : 2*Math.PI,
//    
//   ennemy : { 
//    
//    health : 10,
//    //posX : Math.floor((Math.random() * 600) + 0),
//    posX : 400,
//    posY : 0,
//    width : 10,
//    height : 10,
//    color : "#ADADAD",
//    incX : 1,
//    incY : 1,
//    incXrec : null,
//    incYrec : null,
//    angle :null,
//    rsAngle : null,
//    reAngle : null,
//    condition : false,
//   },
//    
//    init : function() {
//  
//        this.displayEnnemy();
//   
//    },
//    
//    
//     displayEnnemy : function(){
//        game.display.drawRectangleInLayer(game.ennemyLayer, this.ennemy.width, this.ennemy.height, this.ennemy.color, this.ennemy.posX, this.ennemy.posY);
//    },
    
    Ennemy.prototype.move = function(){  
      this.incXrec = this.incX;
      this.incYrec = this.incY;
         
//          if(this.health > 0){ 
            if (this.posX < game.fish.posX+game.fish.width && this.posX > game.fish.posX){
                this.incX = 0;
            } 
            else{
            if(this.posX > game.fish.posX){
                this.posX = (this.posX - this.incX);
            }
            else{
                this.posX = (this.posX + this.incX);
             }
           }
           if(this.posY < game.fish.posY+game.fish.height && this.posY > game.fish.posY){
              this.incY = 0;
            }
              else{
            if(this.posY > game.fish.posY){
                this.posY -= this.incY;
            }
            else{
                this.posY += this.incY;
            }           
                }           
//              }
        this.incX = this.incXrec;
        this.incY = this.incYrec;
    };
    
    Ennemy.prototype.shieldCollision = function(){

       var x;
       var y;
       var angle;
       var rsAngle;
       var reAngle;
       var twoPI = 2*Math.PI; 
       var condition = false;
       var connasse = document.getElementById("connasse");
        
     x = (this.posX+this.width/2)-(game.fish.posX+game.fish.width/2);
     y = (this.posY+this.height/2)-(game.fish.posY+game.fish.height/2);
     
     if(x > 0 && y >= 0){
         angle = Math.atan(y/x);         
     }else if (x > 0 && y < 0){
         angle = Math.atan(y/x)+twoPI;
     }else if (x < 0){
         angle = Math.atan(y/x)+twoPI/2;
     }
     
      if(game.sAngle < 0){
         rsAngle = game.sAngle + twoPI;         
     }else{
         rsAngle = game.sAngle;
     }
       if(game.eAngle < 0){
         reAngle = game.eAngle + twoPI;
     }else{
         reAngle = game.eAngle;
     }
     
     if(rsAngle > reAngle){
         condition = angle < rsAngle && angle > reAngle;
     }else if(this.posY > game.fish.posY){
         condition = angle < rsAngle && angle < reAngle;
     }else{
         condition = angle > rsAngle && angle > reAngle;
     }

  if(game.radiusShield > Math.sqrt(Math.pow(x, 2)+Math.pow(y,2)) && game.radiusShield-10 < Math.sqrt(Math.pow(x, 2)+Math.pow(y,2)) &&condition){
        
         connasse.play();
         
      
     }    
   }; 
    
    Ennemy.prototype.fishCollision = function(){
      if (this.posX < game.fish.posX+game.fish.width && this.posX > game.fish.posX && this.posY < game.fish.posY+game.fish.height && this.posY > game.fish.posY){
//          this.health --;
            game.fish.health --;
            game.display.drawRectangleInLayer(game.ennemyLayer, 20, 20, "#FFA500  ", game.fish.posX, game.fish.posY);
      }
  };
