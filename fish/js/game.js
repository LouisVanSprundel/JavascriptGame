
var game = {
//    x : document.getElementById("audiotag1"),
    twoPI : 2*Math.PI,
    speedFish : 2,
    speedEnnemy :1,
    offsetX : 100,
    offsetY : 100,
    offsetAir : 100,
    ennemyLayer : null,
    aquaLayer : null,
    borderLayerL : null,
    borderLayerR : null,
    borderLayerD : null,
    fishLayer : null,   
    aquaWidth : 1000,
    aquaHigh : 600,
    aquaColor : "#07BDF5",
    color : "#ADADAD",
    radiusShield : 30,   
    incL : 0,
    incR : 0,
    sAngle : 1.75*Math.PI,
    eAngle : 1.25*Math.PI,   
    angle : false,
//    AngleEnnemy:null,  
//    test1 : null,
//    test2 : null,
     border : {
        color :"#000000",
        widthLayer : 5,
        borderLeftLayer : null,
        borderDLayer : null,
     },
        
    
    fish : {
        health : 1000,
        name : "Kayne",
        width : 20,
        height : 20,
        color : "#FF3D47",
        posX : 495,
        posY : 295,
        incX : (Math.random()),
        incY : (Math.random()),
        dirX : Math.random() < 0.5 ? true : false,
        dirY : Math.random() < 0.5 ? true : false,
        
     },  
    
//    ennemy : {
//        health : 10,
//        posX : Math.floor((Math.random() * 700) + 0),
//       // posX : 519,
//        posY : 0,
//        width : 10,
//        height : 10,
//        color : "#ADADAD",
//        incX : 1,
//        incY : 1,
//        incXrec : null,
//        incYrec : null,
//    
//    },
    
    init : function() {
    this.borderLayerL = game.display.createLayer("LeftBorder", this.border.widthLayer, this.aquaHigh+10, undefined, 2, this.border.color, this.offsetX-5, this.offsetY+this.offsetAir-10);   
    this.borderLayerR = game.display.createLayer("RightBorder", this.border.widthLayer, this.aquaHigh+10, undefined, 2, this.border.color, this.offsetX+this.aquaWidth, this.offsetY+this.offsetAir-10); 
    this.borderLayerD = game.display.createLayer("Downborder", this.aquaWidth+10, this.border.widthLayer, undefined, 2, this.border.color, this.offsetX-5, this.offsetY+this.aquaHigh+this.offsetAir);
 
    this.ennemyLayer = game.display.createLayer("ennemy", this.aquaWidth, this.aquaHigh + this.offsetAir, undefined, 3, null, this.offsetX, this.offsetY);
    this.aquaLayer = game.display.createLayer("Aqua", this.aquaWidth, this.aquaHigh, undefined, 2, this.aquaColor, this.offsetX, this.offsetY+this.offsetAir);
   
    this.displayFish();
//    this.displayEnnemy();
    this.displayShield(this.ennemyLayer, this.fish.posX+this.fish.width/2, this.fish.posY+this.fish.height/2, this.radiusShield, this.sAngle, this.eAngle, true);
    },
    
     displayFish : function() {
      game.display.drawRectangleInLayer(this.ennemyLayer, this.fish.width, this.fish.height, this.fish.color, this.fish.posX, this.fish.posY);
    },
        
     moveFish : function(){
          if( this.fish.dirX == true){
          this.fish.posX += this.fish.incX;
         }
         else{
          this.fish.posX -= this.fish.incX;
         }
        if ( this.fish.posX > (this.aquaWidth - 2*this.fish.width) || this.fish.posX < this.fish.width ) {
            this.fish.incX = -this.fish.incX;
        }
        else{
        if( this.fish.dirY == true){
          this.fish.posY += this.fish.incY;
        }
         else{
          this.fish.posY -= this.fish.incY;
         }
        if ( this.fish.posY > this.aquaHigh - 2*this.fish.height + this.offsetAir   || this.fish.posY < this.fish.height + this.offsetAir ) {
            this.fish.incY = -this.fish.incY;
        }   
      }
        this.displayFish();
    
    },
    
     displayShield : function(Layer,x,y,r,sAngle,eAngle,counterclockwise ){
      
      game.display.drawCircle(Layer,x,y,r,sAngle,eAngle,counterclockwise);
    },
    
//    displayEnnemy : function(){
//        game.display.drawRectangleInLayer(this.ennemyLayer, this.ennemy.width, this.ennemy.height, this.ennemy.color, this.ennemy.posX, this.ennemy.posY);
//    },
//    
//    moveEnnemy : function(){  
//      this.ennemy.incXrec = this.ennemy.incX;
//      this.ennemy.incYrec = this.ennemy.incY;
//         
//          if(this.ennemy.health > 0){ 
//            if (this.ennemy.posX < this.fish.posX+this.fish.width && this.ennemy.posX > this.fish.posX){
//                this.ennemy.incX = 0;
//            } 
//            else{
//            if(this.ennemy.posX > this.fish.posX){
//                this.ennemy.posX -= this.ennemy.incX;
//            }
//            else{
//                this.ennemy.posX += this.ennemy.incX
//             }
//            }
//           if(this.ennemy.posY < this.fish.posY+this.fish.height && this.ennemy.posY > this.fish.posY){
//              this.ennemy.incY = 0;
//            }
//              else{
//            if(this.ennemy.posY > this.fish.posY){
//                this.ennemy.posY -= this.ennemy.incY;
//            }
//            else{
//                this.ennemy.posY += this.ennemy.incY
//            }           
//                }
//            this.displayEnnemy();
//              }
//        this.ennemy.incX = this.ennemy.incXrec;
//        this.ennemy.incY = this.ennemy.incYrec;
//    },
//    
//  collision : function(){
//      if (this.ennemy.posX < this.fish.posX+this.fish.width && this.ennemy.posX > this.fish.posX && this.ennemy.posY < this.fish.posY+this.fish.height && this.ennemy.posY > this.fish.posY){
//          //this.ennemy.health --;
//          this.fish.health --;
//          //game.display.drawRectangleInLayer(this.ennemyLayer, 50, 50, "#FFA500  ", this.ennemy.posX, this.ennemy.posY);
//      }
//  },
    

    
// ShieldCollision : function(){
//
//       var x;
//       var y;
//       
//     x = (this.ennemy.posX+this.ennemy.width/2)-(this.fish.posX+this.fish.width/2);
//     y = (this.ennemy.posY+this.ennemy.height/2)-(this.fish.posY+this.fish.height/2);
//     
//     if(x > 0 && y >= 0){
//         this.AngleEnnemy = Math.atan(y/x);
//         
//     }else if (x > 0 && y < 0){
//         this.AngleEnnemy = Math.atan(y/x)+this.twoPI;
//     }else if (x < 0){
//         this.AngleEnnemy = Math.atan(y/x)+this.twoPI/2;
//     }
//     
//      if(this.sAngle < 0){
//         this.test1 = this.sAngle + this.twoPI;
//     }else{
//         this.test1 = this.sAngle;
//     }
//       if(this.eAngle < 0){
//         this.test2 = this.eAngle + this.twoPI;
//     }else{
//         this.test2 = this.eAngle;
//     }
//     
//     if(this.test1 > this.test2){
//         this.angle = this.AngleEnnemy <this.test1 && this.AngleEnnemy >this.test2;
//     }else if(this.ennemy.posY > this.fish.posY){
//         this.angle = this.AngleEnnemy <this.test1 && this.AngleEnnemy <this.test2;
//     }else{
//         this.angle = this.AngleEnnemy >this.test1 && this.AngleEnnemy >this.test2;
//     }
//
//  if(this.radiusShield > Math.sqrt(Math.pow(x, 2)+Math.pow(y,2)) && this.radiusShield-10 < Math.sqrt(Math.pow(x, 2)+Math.pow(y,2)) &&this.angle){
//        
//         this.x.play();
//      
//     }
//
//
//
//     
//   },  

 
};