
let hádanéČíslo = 0
let tip = 1


        input.onButtonPressed(Button.A, function () {
    
    tip += 1
    if (tip > 10) {tip = 1}
    basic.showNumber(tip)
                            })

        input.onButtonPressed(Button.B, function () {
                                
            if (tip == hádanéČíslo) {
            basic.showIcon(IconNames.Yes) } 
            else if (tip > hádanéČíslo) {
            basic.showString("<")} 
            else {basic.showString(">")}
                basic.pause(700)
                basic.showNumber(tip)})

        input.onLogoEvent(TouchButtonEvent.Pressed, function () {
                                                                                
            hádanéČíslo = randint(1, 10)
            tip = 1
            basic.showString("Go!")})

                                                                                                
    hádanéČíslo = randint(1, 10)
    basic.showString("Go!")
