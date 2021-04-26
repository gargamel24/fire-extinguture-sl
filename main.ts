controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    water = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 8 8 6 6 6 . . . . 
        . . . 8 8 8 8 6 6 6 6 6 6 . . . 
        . . 6 8 8 8 8 8 8 8 9 9 6 6 . . 
        . . 8 8 8 8 8 8 8 8 9 9 8 6 . . 
        . 6 8 8 8 8 8 8 8 8 8 8 8 6 6 . 
        . 6 8 8 8 8 8 8 6 6 6 6 8 6 6 . 
        . 6 6 8 8 8 8 6 6 6 6 6 6 6 6 . 
        . 6 8 8 8 8 8 6 6 6 6 6 6 6 6 . 
        . . 6 8 8 8 8 6 6 6 6 6 8 6 . . 
        . . 6 8 8 8 8 8 6 6 6 8 6 6 . . 
        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
        . . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, extinguisher, 50, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy()
    water.destroy()
    water.startEffect(effects.spray)
    fire_ball.destroy()
    fire_ball.startEffect(effects.fire)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    info.changeLifeBy(-1)
})
let fire_ball: Sprite = null
let water: Sprite = null
let extinguisher: Sprite = null
extinguisher = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f . . . . . . . . . . . . . 
    . . . f . . . . . . . . . . . . 
    . . . . f . . . . . . . . . . . 
    . f f . . f f f f f . . . . . . 
    . . . 2 2 2 2 2 2 f . . . . . . 
    . . . 2 2 2 2 2 2 . f f f f . f 
    . . . 2 2 2 2 2 2 . . . . . f . 
    . . . 1 1 1 1 1 1 . . . . . . . 
    . . . 1 1 1 1 1 1 . . . . . . . 
    . . . 2 2 2 2 2 2 . . . . . . . 
    . . . 2 2 2 2 2 2 . . . . . . . 
    . . . 2 2 2 2 2 2 . . . . . . . 
    . . . 2 2 2 2 2 2 . . . . . . . 
    . . . 2 2 2 2 2 2 . . . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(7)
extinguisher.setPosition(11, 50)
controller.moveSprite(extinguisher)
info.setLife(300)
extinguisher.setStayInScreen(true)
// on every 2 second, creat fire
game.onUpdateInterval(50, function () {
    fire_ball = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 4 . . . 
        . . 4 4 4 4 4 2 2 2 4 4 4 4 . . 
        . . 4 4 4 4 4 2 2 2 4 2 5 4 . . 
        . 4 2 2 2 4 2 2 2 2 2 5 5 4 4 . 
        . 4 2 2 2 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 2 4 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 4 2 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 2 2 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 2 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    fire_ball.setPosition(160, randint(0, 120))
    fire_ball.setVelocity(randint(-120, -50), 0)
})
