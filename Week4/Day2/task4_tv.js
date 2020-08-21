
class Tv {
  /**
   *constructor has properties like brand , channel, inches, on_off, volume with defualt values fro some properties
   */ 
   constructor(brand, channel = 1, inches, on_or_off, volume = 50) {
        this.brand = brand
        this.channel = channel
        if (this.channel >= 0 && this.channel <= 50) { 
            
            this.channel = channel
        }
        else {
            this.channel = 1
        }
        this.inches = inches
        this.on_or_off = on_or_off
        this.volume = volume
       
        if (this.volume > 100) {  
            this.volume = 100
        }
        else if (this.volume < 0) {
            this.volume = 0
        }
        else {
            this.volume = volume
        }
    }
    get status() {    
        return this.brand + " at channel " + this.channel + " , volume  " + this.volume
    }
    set tv_Volume(n) { 
        if (n > 100) {
            this.volume = 100
        }
        else if (n < 0) {
            this.volume = 0
        }
        else {
            this.volume = n
        }
    }
    set tv_Channel(n) { 
        if (n >= 0 && n <= 50) {
            this.channel = n
        }
    }
    setdefalt() {
        this.volume = 50
        this.channel = 1
    }
}
class Led extends Tv { 
    constructor(brand, channel = 1, inches, on_or_off, volume = 50, screen_thickness, energy_usage, life_span, refresh_rate) { // passing arguments, first passing base class arguments followed by derived class
        super(brand, channel, inches, on_or_off, volume) 
        this.screen_thickness = screen_thickness
        this.energy_usage = energy_usage
        this.life_span = life_span
        this.refresh_rate = refresh_rate
    }
    get viewangle() { 
        return 'Hirizontal 180 degrees \n vertical 90 degrees'
    }
    get backlight() { 
        return 'led backlight'
    }
    get status() {
        return super.status + " specifications are as below \n screen_thickness is : " + this.screen_thickness + " \n energy_usage is : " + this.energy_usage + '\n life_span is : ' + this.life_span + '\n refresh_rate is : ' + this.refresh_rate
    }
}
class Plasma extends Tv {
    constructor(brand, channel = 1, inches, on_or_off, volume = 50, screen_thickness, energy_usage, life_span, refresh_rate) {
        super(brand, channel, inches, on_or_off, volume)
        this.screen_thickness = screen_thickness
        this.energy_usage = energy_usage
        this.life_span = life_span
        this.refresh_rate = refresh_rate
    }
    get viewangle() {
        return 'Hirizontal 120 degrees \n vertical 100 degrees'
    }
    get backlight() {
        return 'cold-cathode florescent lamps'
    }
    get status() {
        return super.status + " specifications are as below \n screen_thickness is : " + this.screen_thickness + " \n energy_usage is : " + this.energy_usage + '\n life_span is : ' + this.life_span + '\n refresh_rate is : ' + this.refresh_rate
    }
}