/**
 * Circle class
 */

class Circle {
    constructor(...arr) {              
        var count = 0
        var data = ['radius', 'color']
        for (var i of arr) {
            if (count === data.length) {
                break
            }
            this[data[count]] = i         
            count++
        }
    }
    get Radius() {              
        return this.radius
    }
    get Color() {               
        return this.color
    }
    set Radius(revised_radius) {                  
        if (Number.isInteger(revised_radius)) {
            this.radius = revised_radius
        }
    }
    set Color(revised_color) {                    
        this.color = revised_color
    }
    getArea() {                                                     
        return ((Math.PI) * (Math.pow(this.radius, 2))).toFixed(2)
    }
    circle_toString() {                                             
        return 'Circle Radius is ' + this.radius + ' & color is ' + this.color 
    }
}

circle_obj = new Circle(10, 'Black') 

console.log('\nCircle color before setter :', circle_obj.Color)
console.log('\nCircle radius before setter :', circle_obj.Radius)
console.log('\nCircle area before setter :', circle_obj.getArea())
console.log('\nCircle to string method before setter :', circle_obj.circle_toString())

circle_obj.Color = 'White'
circle_obj.Radius = 20

console.log('\nCircle color after setter :', circle_obj.Color)
console.log('\nCircle radius after setter :', circle_obj.Radius)
console.log('\nCircle area after setter :', circle_obj.getArea())
console.log('\nCircle to string method after setter :', circle_obj.circle_toString())