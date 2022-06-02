input.onButtonPressed(Button.A, function () {
    if (interval > 1) {
        interval += 0 - 1
    }
    basic.showString("I" + interval)
})

input.onButtonPressed(Button.B, function () {
    interval += 1
    basic.showString("I" + interval)
})

input.onButtonPressed(Button.AB, function () {
    water(watering_period)
})

function water(watering_period: number) {
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(watering_period * MINUTE)
    pins.digitalWritePin(DigitalPin.P2, 1)
}

let interval = 1
let watering_period = 1
let MINUTE = 60000
let HOUR = MINUTE * 60
led.setBrightness(9)

basic.forever(function () {
    basic.pause(interval * HOUR)
    water(watering_period)
})
