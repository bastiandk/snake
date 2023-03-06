input.onButtonPressed(Button.A, function () {
    runt = runt - 1
    if (runt < -2) {
        runt = 1
    }
})
input.onButtonPressed(Button.B, function () {
    runt = runt + 1
    if (runt > 1) {
        runt = -2
    }
})
let runt = 0
let eat1_x = randint(0, 4)
let eat1_y = randint(0, 4)
runt = 0
let snake_1x = 2
let snake_1y = 2
led.plot(snake_1x, snake_1y)
led.plot(eat1_x, eat1_y)
loops.everyInterval(1000, function () {
    if (runt == 1) {
        led.unplot(snake_1x, snake_1y)
        snake_1x = snake_1x - 1
        led.plot(snake_1x, snake_1y)
    } else if (runt == 0) {
        led.unplot(snake_1x, snake_1y)
        snake_1y = snake_1y - 1
        led.plot(snake_1x, snake_1y)
    } else if (runt == -1) {
        led.unplot(snake_1x, snake_1y)
        snake_1x = snake_1x + 1
        led.plot(snake_1x, snake_1y)
    } else {
        led.unplot(snake_1x, snake_1y)
        snake_1y = snake_1y + 1
        led.plot(snake_1x, snake_1y)
    }
})
basic.forever(function () {
    if (eat1_x == snake_1x && eat1_y == snake_1y) {
        if (runt == 1) {
        	
        } else if (runt == 0) {
        	
        } else if (runt == -1) {
        	
        } else {
        	
        }
    }
})
