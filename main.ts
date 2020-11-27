controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += -140
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 4 b 
    b d d c d 5 5 b 5 4 4 4 4 4 b . 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 7))
tiles.setTilemap(tiles.createTilemap(hex`1000100006030303030303030303030303030305010603030508080808080806030305010101080801060303030303040808010101010808010203050808080808080101010108080108080106030508080801010101080801080801010801080808010107040808020303040108010806030401070303050806030304080108010605010108080108010808080801080101010101080801080603030303040801010101010808010801010603050603040101010108080108010101080102030304010101080801080101010802030303030401010808010001010203030303030508010108080203040203030303030304080102030303030303030303030303030304`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . 2 2 . . . . . . . . 2 2 . . 
    . . 2 2 . . . . 2 2 2 2 2 2 . . 
    . . 2 2 . 2 2 . . . . 2 2 2 . . 
    . . 2 2 . 2 2 . . 2 . 2 2 2 . . 
    . . 2 2 . . . . . 2 . 2 . . . . 
    . . . . 2 . . . . 2 . 2 . . . . 
    . 2 2 . 2 . 2 2 2 2 . 2 . . . . 
    . 2 2 . 2 . . . . . . 2 . . . . 
    . 2 2 . 2 . . . . . . . . . . . 
    . 2 2 . 2 . . . 2 . . . . . . . 
    . 2 2 . 2 . . . 2 . . . . . . . 
    . 2 2 . 2 . . . . . . . . . 2 . 
    . 2 2 . . . . . . . . . . . 2 . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn3,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn1,sprites.vehicle.roadIntersection2,sprites.castle.saplingOak], TileScale.Sixteen))
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 80, 0)
