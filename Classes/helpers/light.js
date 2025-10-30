export class LightSwitch {
    
    switchOn() {
        if(this.isLightOn) {
            console.log("Nope, can't do that it's already on")
        } else {
            this.isLightOn = true;
            console.log("On")
        }
    }

    switchOff(){
        if(!this.isLightOn) {
            console.log("Nope, can't do that it's already off")
        } else {
            this.isLightOn = false;
            console.log("Off")
        }
    }
}
