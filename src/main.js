import { appWindow } from '@tauri-apps/api/window';
import kaplay from 'kaplay'
import { makeBackground } from './utils';

const k = kaplay({
    width: 1280,
    height: 720,
    letterbox: true,
    global: false,
    scale: 2,
});

k.loadSprite("kriby","./kriby.png");
k.loadSprite("obstacles","./obstacles.png");
k.loadSprite("background","./background.png");
k.loadSprite("clouds","./clouds.png");

k.loadSound("jump","./jump.wav");
k.loadSound("hurt","./hurt.wav");
k.loadSound("confirm","./confirm.wav");

addEventListener("keydown", async (key) => {
    if (key.code == "F11") {
        if (await appWindow.isFullscreen()) {
            await appWindow.setFullscreen(false);
            return;
        } 
        appWindow.setFullscreen(true);
    }
});
    

   

k.scene("start", async () => {
    makeBackground(k);

})

k.scene("main", async () => {
    
})

k.go("start");