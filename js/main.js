var nes;
$(function() {
    nes = new JSNES({
        'ui': $('#emulator').JSNESUI({
            "Roms": [
            	['Super Mario Bros', 'roms/Super Mario Bros.nes'],
            	['Super Mario Bros 2', 'roms/Super Mario Bros 2.nes'],
                ['Super Mario Bros 3', 'roms/Super Mario Bros 3.nes'],
                ['Legend of Zelda', 'roms/Legend of Zelda.nes'],
                ['Zelda 2 - The Adventure of Link', 'roms/Zelda 2 - The Adventure of Link.nes'],
                ['Kung Fu', 'roms/Kung Fu.nes']
            ]
        })
    });
});
