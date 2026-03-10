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
    -100
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
        if (!(Modes[Lvl] == 2)) {
            mySprite.ay = ays[Lvl]
        } else {
            mySprite.vy = vys[Lvl]
        }
        mySprite.vx = vxs[Lvl]
        game.splash("Level:" + Lvl, Tipe[Lvl])
    } else {
        game.reset()
    }
}
let _new = 0
let vxs: number[] = []
let vys: number[] = []
let ays: number[] = []
let Modes: number[] = []
let Tipe: string[] = []
let Levels: tiles.TileMapData[] = []
let mySprite: Sprite = null
let Lvl = 0
music.play(music.createSong(hex`0078000408020600001c00010a006400f401640000040000000000000000000000000005000004180000000400012c10001400012720002400012930003400012501001c000f05001202c102c20100040500280000006400280003140006020004180000000400012c10001400012720002400012930003400012504001c00100500640000041e000004000000000000000000000000000a040004300000000400012c08000c00012c10001400012718001c00012720002400012928002c00012930003400012538003c00012505001c000f0a006400f4010a0000040000000000000000000000000000000002300000000400012c08000c00012c10001400012718001c00012720002400012928002c00012930003400012538003c00012507001c00020a006400f401640000040000000000000000000000000000000003600000000400012c04000800012a08000c00012c0c001000012a10001400012714001800012518001c0001271c002000012520002400012924002800012728002c0001292c003000012730003400012534003800012438003c0001253c004000012409010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80060000000010001040400050001060800090001040c000d0001061000110001041400150001061800190001041c001d0001062000210001042400250001062800290001042c002d0001063000310001043400350001063800390001043c003d000106`), music.PlaybackMode.LoopingInBackground)
Lvl = game.askForNumber("0-4", 1)
mySprite = sprites.create(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
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
            mySprite.vy = vys[Lvl]
        } else {
            mySprite.vy = vys[Lvl] * -1
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
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico14`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico15`)) {
        spriteFx.setRotation(mySprite, 0)
        _new = 2
        Modes[Lvl] = _new
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico16`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico17`)) {
        spriteFx.setRotation(mySprite, 0)
        _new = 1
        Modes[Lvl] = _new
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico18`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico19`)) {
        spriteFx.setRotation(mySprite, 0)
        _new = 0
        Modes[Lvl] = _new
    }
    if (Modes[Lvl] == 2) {
        mySprite.ay = 0
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico14`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico15`)) {
        spriteFx.setRotation(mySprite, 0)
        _new = 2
        Modes[Lvl] = _new
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico16`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico17`)) {
        spriteFx.setRotation(mySprite, 0)
        _new = 1
        Modes[Lvl] = _new
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico18`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico19`)) {
        spriteFx.setRotation(mySprite, 0)
        _new = 0
        Modes[Lvl] = _new
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico14`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico15`)) {
        spriteFx.setRotation(mySprite, 0)
        _new = 2
        Modes[Lvl] = _new
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico16`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico17`)) {
        spriteFx.setRotation(mySprite, 0)
        _new = 1
        Modes[Lvl] = _new
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico18`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico19`)) {
        spriteFx.setRotation(mySprite, 0)
        _new = 0
        Modes[Lvl] = _new
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico14`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico15`)) {
        spriteFx.setRotation(mySprite, 0)
        _new = 2
        Modes[Lvl] = _new
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico16`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico17`)) {
        spriteFx.setRotation(mySprite, 0)
        _new = 1
        Modes[Lvl] = _new
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico18`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico19`)) {
        spriteFx.setRotation(mySprite, 0)
        _new = 0
        Modes[Lvl] = _new
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico14`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico15`)) {
        spriteFx.setRotation(mySprite, 0)
        _new = 2
        Modes[Lvl] = _new
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico16`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico17`)) {
        spriteFx.setRotation(mySprite, 0)
        _new = 1
        Modes[Lvl] = _new
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico18`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico19`)) {
        spriteFx.setRotation(mySprite, 0)
        _new = 0
        Modes[Lvl] = _new
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico14`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico15`)) {
        spriteFx.setRotation(mySprite, 0)
        _new = 2
        Modes[Lvl] = _new
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico16`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico17`)) {
        spriteFx.setRotation(mySprite, 0)
        _new = 1
        Modes[Lvl] = _new
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico18`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`miMosaico19`)) {
        spriteFx.setRotation(mySprite, 0)
        _new = 0
        Modes[Lvl] = _new
    }
})
game.onUpdate(function () {
    if (Modes[Lvl] == 0) {
        mySprite.setImage(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `)
        if (!(mySprite.isHittingTile(CollisionDirection.Bottom) || mySprite.isHittingTile(CollisionDirection.Bottom))) {
            spriteFx.rotate(mySprite, 5)
        } else {
            spriteFx.setRotation(mySprite, 0)
        }
    } else if (Modes[Lvl] == 2) {
        mySprite.setImage(img`
            7 7 . . . . . . . . . . . . 
            7 7 7 7 . . . . . . . . . . 
            7 7 7 7 7 7 . . . . . . . . 
            7 7 7 7 7 7 7 7 . . . . . . 
            7 7 7 7 7 7 7 7 7 7 . . . . 
            7 7 7 7 7 7 7 7 7 7 7 7 . . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 . . 
            7 7 7 7 7 7 7 7 7 7 . . . . 
            7 7 7 7 7 7 7 7 . . . . . . 
            7 7 7 7 7 7 . . . . . . . . 
            7 7 7 7 . . . . . . . . . . 
            7 7 . . . . . . . . . . . . 
            `)
        if (controller.anyButton.isPressed()) {
            spriteFx.setRotation(mySprite, 315)
        } else {
            spriteFx.setRotation(mySprite, 45)
        }
    }
})
