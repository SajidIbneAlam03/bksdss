var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i=0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML) {
            case "Rohan":
                var tom1 = new Audio("Music/rohan.mp3")
                tom1.play()
                break;
            case "Joy":
                        var tom2 = new Audio("Music/joy.mp3")
                        tom2.play()
                        break;
            case "Debu":
                            var tom3 = new Audio("Music/debu.mp3")
                            tom3.play()
                            break;

            default:
                
        }
});
}