function Level () {
    Levels = [
    tilemap`nivel1`,
    tilemap`nivel2`,
    tilemap`nivel5`,
    tilemap`nivel3`,
    tilemap`nivel6`
    ]
    Tipe = [
    "Tutorial",
    "Easy",
    "Medium",
    "What?",
    "Medium"
    ]
    Modes = [
    0,
    0,
    1,
    3,
    2
    ]
    ays = [
    600,
    600,
    600,
    400,
    500
    ]
    vys = [
    -200,
    -200,
    -200,
    -200,
    -15
    ]
    vxs = [
    100,
    100,
    -200,
    0,
    100
    ]
    if (Lvl < Levels.length) {
        if (Modes[Lvl] == 3) {
            controller.moveSprite(mySprite, 100, 0)
        } else {
            controller.moveSprite(mySprite, 0, 0)
        }
        tiles.setCurrentTilemap(Levels[Lvl])
        tiles.placeOnRandomTile(mySprite, assets.tile`miMosaico8`)
        tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`transparency16`)
        mySprite.ay = ays[Lvl]
        mySprite.vx = vxs[Lvl]
        game.splash("Level:" + Lvl, Tipe[Lvl])
    } else {
        game.reset()
    }
}
let vxs: number[] = []
let vys: number[] = []
let ays: number[] = []
let Modes: number[] = []
let Tipe: string[] = []
let Levels: tiles.TileMapData[] = []
let mySprite: Sprite = null
let Lvl = 0
Lvl = 0
mySprite = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
Level()
game.onUpdate(function () {
    if (Modes[Lvl] == 0) {
        if (mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico0`) && controller.anyButton.isPressed()) {
            mySprite.vy += vys[Lvl]
        }
    } else if (Modes[Lvl] == 2) {
        if (controller.anyButton.isPressed()) {
            mySprite.vy += vys[Lvl]
        }
    } else if (Modes[Lvl] == 3) {
        if ((controller.up.isPressed() || controller.A.isPressed()) && mySprite.isHittingTile(CollisionDirection.Bottom)) {
            mySprite.vy += vys[Lvl]
        }
    }
    if ((mySprite.isHittingTile(CollisionDirection.Bottom) || mySprite.isHittingTile(CollisionDirection.Top)) && (controller.anyButton.isPressed() || mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico1`))) {
        if (Modes[Lvl] == 0) {
            mySprite.vy += vys[Lvl]
        } else if (Modes[Lvl] == 1) {
            mySprite.ay = mySprite.ay * -1
        }
    }
    if (mySprite.isHittingTile(CollisionDirection.Right) || mySprite.isHittingTile(CollisionDirection.Left)) {
        if (!(Modes[Lvl] == 3)) {
            Level()
        }
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico10`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico12`)) {
        Level()
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico9`)) {
        Lvl += 1
        Level()
    }
})
