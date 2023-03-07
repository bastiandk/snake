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
let snake_3x = 1e+21
let snake_3y = 1e+21
let snake_2x = -100000000000000000000
let snake_2y = -100000000000000000000
let tæller = 0
let eat1_x = randint(0, 4)
let eat1_y = randint(0, 4)
runt = 0
let snake_1x = 2
let snake_1y = 3
led.plot(snake_1x, snake_1y)
led.plot(eat1_x, eat1_y)
loops.everyInterval(1000, function () {
    if (tæller >= 2) {
        led.unplot(snake_3x, snake_3y)
        snake_3x = snake_2x
        snake_3y = snake_2y
    }
    if (tæller >= 1) {
        led.unplot(snake_2x, snake_2y)
        snake_2x = snake_1x
        snake_2y = snake_1y
    }
    if (runt == 1) {
        led.unplot(snake_1x, snake_1y)
        snake_1x = snake_1x - 1
    } else if (runt == 0) {
        led.unplot(snake_1x, snake_1y)
        snake_1y = snake_1y - 1
    } else if (runt == -1) {
        led.unplot(snake_1x, snake_1y)
        snake_1x = snake_1x + 1
    } else {
        led.unplot(snake_1x, snake_1y)
        snake_1y = snake_1y + 1
    }
    led.plot(snake_1x, snake_1y)
    led.plot(snake_2x, snake_2y)
    led.plot(snake_3x, snake_3y)
})
basic.forever(function () {
    if (snake_1x > 4) {
        basic.showString("u")
    }
    if (eat1_x < 0) {
        basic.showString("u")
    }
    if (eat1_y > 4) {
        basic.showString("u")
    }
    if (eat1_y < 0) {
        basic.showString("u")
    }
    if (eat1_x == snake_1x && (eat1_y == snake_1y && tæller == 0)) {
        if (runt == 1) {
            music.playMelody("- - C5 B - - - - ", 120)
            snake_2x = snake_1x + 1
            snake_2y = snake_1y
        } else if (runt == 0) {
            music.playMelody("B - - - A - - - ", 120)
            snake_2y = snake_1y - 1
            snake_2x = snake_1x
        } else if (runt == -1) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            snake_2x = snake_1x - 1
            snake_2y = snake_1y
        } else {
            music.playMelody("- - - - D - - B ", 120)
            snake_2y = snake_1y - 1
            snake_2x = snake_1x
        }
        led.plot(snake_2x, snake_2y)
        tæller = 1
        eat1_x = randint(0, 4)
        eat1_y = randint(0, 4)
        led.plot(eat1_x, eat1_y)
    }
    if (eat1_x == snake_1x && (eat1_y == snake_1y && tæller == 1)) {
        if (runt == 1) {
            music.playMelody("- - C5 B - - - - ", 120)
            snake_3x = snake_2x + 1
            snake_3y = snake_2y
        } else if (runt == 0) {
            music.playMelody("B - - - A - - - ", 120)
            snake_3x = snake_2x - 1
            snake_3y = snake_2y
        } else if (runt == -1) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            snake_3x = snake_2x - 1
            snake_3y = snake_2y
        } else {
            music.playMelody("- - - - D - - B ", 120)
            snake_3x = snake_2x - 1
            snake_3y = snake_2y
        }
        led.plot(snake_3x, snake_3y)
        tæller = 2
    }
})
