import { SCALE_FACTOR } from "./constants";

export function  makePlayer(k) {
    return k.make([
        k.sprite("kriby"),
        k.area({ shape: new k.Rect(k.vec2(0, 1.5), 8, 5) }),
        k.anchor("center"),
        k.body({ jumpForce: 600 }),
        k.scale(SCALE_FACTOR),
        {
            isDead: false,
            speed: 600,
            keyControllers: [],
            setControls() {
                const jumpLogic = () => {
                    k.play("jump");
                    this.jump();
                };


                this.keyControllers.push(
                    k.onkeyPress("space", jumpLogic)
                );
                this.keyControllers.push(
                    k.onclick(jumpLogic)
                );
                this.inputControllers.push(
                    k.onGamepadButtonPress("south", jumpLogic)
                );
            },
            disableControls() {
                this.inputControllers.forEach((keyController )=> 
                    keyController.cancel()
            );
            },

        },
    ]);
}