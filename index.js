for(var i=0;i<document.querySelectorAll(".drum").length;i++)
    {
        document.querySelectorAll(".drum")[i].addEventListener("click",function(){
            var buttontext=this.innerHTML;
            Keypressed(buttontext);
    });}
    function Keypressed(key){
    
        switch(key)
            {
                case "w":var waud=new Audio("sounds/tom-1.mp3"); waud.play(); break;
                case "a":var waud=new Audio("sounds/tom-2.mp3"); waud.play(); break;
                case "s":var waud=new Audio("sounds/tom-3.mp3"); waud.play(); break;
                case "d":var waud=new Audio("sounds/tom-4.mp3"); waud.play(); break;
                case "j":var waud=new Audio("sounds/crash.mp3"); waud.play(); break;
                case "k":var waud=new Audio("sounds/kick-bass.mp3"); waud.play(); break;
                case "l":var waud=new Audio("sounds/snare.mp3"); waud.play(); break;
                
            }
            
        }
        
    document.addEventListener("keydown",function(event){
        Keypressed(event.key);
    });
