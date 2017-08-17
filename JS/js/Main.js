var Main = function(game) {
};


Main.prototype = {
    create:function() {

        word = "Hello, World!";
        words = word.length / 5.0;
        done = false;
        displayWords = this.game.add.text(this.world.centerX, this.world.centerY, word);
        displayWords.anchor.setTo(0.5, 0.5);
        showPressed = this.game.add.text(this.world.centerX + 100, this.world.centerY + 100, " ");
        showPressed.anchor.setTo(0.5, 0.5);

        this.defineKeys();
        start_time = new Date().getTime() / 1000;
    },
    update: function() {
        this.keyPress();
    },
    keyPress: function() {
        this.letterKeys();
        this.numberKeys();
        this.punctuationKeys();
        this.winGame();
    },
    letterKeys: function() {
        if (aKey.isDown)
        {
            showPressed.setText("Pressed A");
            if(aKey.shiftKey) {
                word = this.checkInput(word, 'A');
            } else
                word = this.checkInput(word, 'a');
            displayWords.setText(word);
        }
        else if (bKey.isDown)
        {
            showPressed.setText("Pressed B");
            if(bKey.shiftKey) {
                word = this.checkInput(word, 'B');
            } else
                word = this.checkInput(word, 'b');
            displayWords.setText(word);
        }
        else if (cKey.isDown)
        {
            showPressed.setText("Pressed C");
            if(cKey.shiftKey) {
                word = this.checkInput(word, 'C');
            } else
                word = this.checkInput(word, 'c');
            displayWords.setText(word);
        }
        else if (dKey.isDown)
        {
            showPressed.setText("Pressed D");
            if(dKey.shiftKey) {
                word = this.checkInput(word, 'D');
            } else
                word = this.checkInput(word, 'd');
            displayWords.setText(word);
        }
        else if (eKey.isDown)
        {
            showPressed.setText("Pressed E");
            if(eKey.shiftKey) {
                word = this.checkInput(word, 'E');
            } else
                word = this.checkInput(word, 'e');
            displayWords.setText(word);
        }
        else if (fKey.isDown)
        {
            showPressed.setText("Pressed F");
            if(fKey.shiftKey) {
                word = this.checkInput(word, 'F');
            } else
                word = this.checkInput(word, 'f');
            displayWords.setText(word);
        }
        else if (gKey.isDown)
        {
            showPressed.setText("Pressed G");
            if(gKey.shiftKey) {
                word = this.checkInput(word, 'G');
            } else
                word = this.checkInput(word, 'g');
            displayWords.setText(word);
        }
        else if (hKey.isDown)
        {
            showPressed.setText("Pressed H");
            if(hKey.shiftKey) {
                word = this.checkInput(word, 'H');
            } else
                word = this.checkInput(word, 'h');
            displayWords.setText(word);
        }
        else if (iKey.isDown)
        {
            showPressed.setText("Pressed I");
            if(iKey.shiftKey) {
                word = this.checkInput(word, 'I');
            } else
                word = this.checkInput(word, 'i');
            displayWords.setText(word);
        }
        else if (jKey.isDown)
        {
            showPressed.setText("Pressed J");
            if(jKey.shiftKey) {
                word = this.checkInput(word, 'J');
            } else
                word = this.checkInput(word, 'j');
            displayWords.setText(word);
        }
        else if (kKey.isDown)
        {
            showPressed.setText("Pressed K");
            if(kKey.shiftKey) {
                word = this.checkInput(word, 'K');
            } else
                word = this.checkInput(word, 'k');
            displayWords.setText(word);
        }
        else if (lKey.isDown)
        {
            showPressed.setText("Pressed L");
            if(lKey.shiftKey) {
                word = this.checkInput(word, 'L');
            } else
                word = this.checkInput(word, 'l');
            displayWords.setText(word);
        }
        else if (mKey.isDown)
        {
            showPressed.setText("Pressed M");
            if(mKey.shiftKey) {
                word = this.checkInput(word, 'M');
            } else
                word = this.checkInput(word, 'm');
            displayWords.setText(word);
        }
        else if (nKey.isDown)
        {
            showPressed.setText("Pressed N");
            if(nKey.shiftKey) {
                word = this.checkInput(word, 'N');
            } else
                word = this.checkInput(word, 'n');
            displayWords.setText(word);
        }
        else if (oKey.isDown)
        {
            showPressed.setText("Pressed O");
            if(oKey.shiftKey) {
                word = this.checkInput(word, 'O');
            } else
                word = this.checkInput(word, 'o');
            displayWords.setText(word);
        }
        else if (pKey.isDown)
        {
            showPressed.setText("Pressed P");
            if(pKey.shiftKey) {
                word = this.checkInput(word, 'P');
            } else
                word = this.checkInput(word, 'p');
            displayWords.setText(word);
        }
        else if (qKey.isDown)
        {
            showPressed.setText("Pressed Q");
            if(qKey.shiftKey) {
                word = this.checkInput(word, 'Q');
            } else
                word = this.checkInput(word, 'q');
            displayWords.setText(word);
        }
        else if (rKey.isDown)
        {
            showPressed.setText("Pressed R");
            if(rKey.shiftKey) {
                word = this.checkInput(word, 'R');
            } else
                word = this.checkInput(word, 'r');
            displayWords.setText(word);
        }
        else if (sKey.isDown)
        {
            showPressed.setText("Pressed S");
            if(sKey.shiftKey) {
                word = this.checkInput(word, 'S');
            } else
                word = this.checkInput(word, 's');
            displayWords.setText(word);
        }
        else if (tKey.isDown)
        {
            showPressed.setText("Pressed T");
            if(tKey.shiftKey) {
                word = this.checkInput(word, 'T');
            } else
                word = this.checkInput(word, 't');
            displayWords.setText(word);
        }
        else if (uKey.isDown)
        {
            showPressed.setText("Pressed U");
            if(uKey.shiftKey) {
                word = this.checkInput(word, 'U');
            } else
                word = this.checkInput(word, 'u');
            displayWords.setText(word);
        }
        else if (vKey.isDown)
        {
            showPressed.setText("Pressed V");
            if(vKey.shiftKey) {
                word = this.checkInput(word, 'V');
            } else
                word = this.checkInput(word, 'v');
            displayWords.setText(word);
        }
        else if (wKey.isDown)
        {
            showPressed.setText("Pressed W");
            if(wKey.shiftKey) {
                word = this.checkInput(word, 'W');
            } else
                word = this.checkInput(word, 'w');
            displayWords.setText(word);
        }
        else if (xKey.isDown)
        {
            showPressed.setText("Pressed X");
            if(xKey.shiftKey) {
                word = this.checkInput(word, 'X');
            } else
                word = this.checkInput(word, 'x');
            displayWords.setText(word);
        }
        else if (yKey.isDown)
        {
            showPressed.setText("Pressed Y");
            if(yKey.shiftKey) {
                word = this.checkInput(word, 'Y');
            } else
                word = this.checkInput(word, 'y');
            displayWords.setText(word);
        }
        else if (zKey.isDown)
        {
            showPressed.setText("Pressed Z");
            if(zKey.shiftKey) {
                word = this.checkInput(word, "Z");
            } else
                word = this.checkInput(word, 'z');
            displayWords.setText(word);
        }
    },
    numberKeys: function() {
        if (oneKey.isDown) {
            if(oneKey.shiftKey) {
                showPressed.setText("Pressed !");
                word = this.checkInput(word, '!');
            } else {
                showPressed.setText("Pressed 1");
                word = this.checkInput(word, '1');
            }
            displayWords.setText(word);
        }
    },
    punctuationKeys: function(){
        if (spaceKey.isDown)
        {
            showPressed.setText("Pressed Space");
            word = this.checkInput(word, ' ');
            displayWords.setText(word);
        }
        else if (commaKey.isDown) {
            showPressed.setText("Pressed ,");
            word = this.checkInput(word, ',');
            displayWords.setText(word);
        }
    },
    winGame: function() {
        if (word === "") {
            winner = this.add.text(100, 100, "Winner!");
            winner.anchor.setTo(0.5, 0.5);
            end_time = new Date().getTime() / 1000;
            elapsed_time = end_time - start_time;
            elapsed_time = elapsed_time.toFixed(2);
            wpm = (words / (elapsed_time / 60));
            wpm = wpm.toFixed(2);
            this.state.start("Finished", true, false, elapsed_time, wpm)
        }
    },
    checkInput: function(word, letter) {
        if(word.charAt(0) === letter) {
            return word.slice(1);
        }
        else
            return word;
    },

    defineKeys: function() {
        //Lowercase Letters
        aKey = this.input.keyboard.addKey(Phaser.Keyboard.A);
        bKey = this.input.keyboard.addKey(Phaser.Keyboard.B);
        cKey = this.input.keyboard.addKey(Phaser.Keyboard.C);
        dKey = this.input.keyboard.addKey(Phaser.Keyboard.D);
        eKey = this.input.keyboard.addKey(Phaser.Keyboard.E);
        fKey = this.input.keyboard.addKey(Phaser.Keyboard.F);
        gKey = this.input.keyboard.addKey(Phaser.Keyboard.G);
        hKey = this.input.keyboard.addKey(Phaser.Keyboard.H);
        iKey = this.input.keyboard.addKey(Phaser.Keyboard.I);
        jKey = this.input.keyboard.addKey(Phaser.Keyboard.J);
        kKey = this.input.keyboard.addKey(Phaser.Keyboard.K);
        lKey = this.input.keyboard.addKey(Phaser.Keyboard.L);
        mKey = this.input.keyboard.addKey(Phaser.Keyboard.M);
        nKey = this.input.keyboard.addKey(Phaser.Keyboard.N);
        oKey = this.input.keyboard.addKey(Phaser.Keyboard.O);
        pKey = this.input.keyboard.addKey(Phaser.Keyboard.P);
        qKey = this.input.keyboard.addKey(Phaser.Keyboard.Q);
        rKey = this.input.keyboard.addKey(Phaser.Keyboard.R);
        sKey = this.input.keyboard.addKey(Phaser.Keyboard.S);
        tKey = this.input.keyboard.addKey(Phaser.Keyboard.T);
        uKey = this.input.keyboard.addKey(Phaser.Keyboard.U);
        vKey = this.input.keyboard.addKey(Phaser.Keyboard.V);
        wKey = this.input.keyboard.addKey(Phaser.Keyboard.W);
        xKey = this.input.keyboard.addKey(Phaser.Keyboard.X);
        yKey = this.input.keyboard.addKey(Phaser.Keyboard.Y);
        zKey = this.input.keyboard.addKey(Phaser.Keyboard.Z);

        //Punctuation
        commaKey = this.input.keyboard.addKey(Phaser.Keyboard.COMMA);
        periodKey = this.input.keyboard.addKey(Phaser.Keyboard.PERIOD);

        //Numbers (With shift will correlate to more punctuation)
        oneKey = this.input.keyboard.addKey(Phaser.Keyboard.ONE);

        //Other Keys
        spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    }

};

/*
function update() {
    keyPress();
}

function keyPress() {
    letterKeys();
    numberKeys();
    punctuationKeys();
    winthis();
}

function letterKeys() {
    if (aKey.isDown)
    {
        showPressed.setText("Pressed A");
        if(aKey.shiftKey) {
            word = this.checkInput(word, 'A');
        } else
            word = this.checkInput(word, 'a');
        displayWords.setText(word);
    }
    else if (bKey.isDown)
    {
        showPressed.setText("Pressed B");
        if(bKey.shiftKey) {
            word = this.checkInput(word, 'B');
        } else
            word = this.checkInput(word, 'b');
        displayWords.setText(word);
    }
    else if (cKey.isDown)
    {
        showPressed.setText("Pressed C");
        if(cKey.shiftKey) {
            word = this.checkInput(word, 'C');
        } else
            word = this.checkInput(word, 'c');
        displayWords.setText(word);
    }
    else if (dKey.isDown)
    {
        showPressed.setText("Pressed D");
        if(dKey.shiftKey) {
            word = this.checkInput(word, 'D');
        } else
            word = this.checkInput(word, 'd');
        displayWords.setText(word);
    }
    else if (eKey.isDown)
    {
        showPressed.setText("Pressed E");
        if(eKey.shiftKey) {
            word = this.checkInput(word, 'E');
        } else
            word = this.checkInput(word, 'e');
        displayWords.setText(word);
    }
    else if (fKey.isDown)
    {
        showPressed.setText("Pressed F");
        if(fKey.shiftKey) {
            word = this.checkInput(word, 'F');
        } else
            word = this.checkInput(word, 'f');
        displayWords.setText(word);
    }
    else if (gKey.isDown)
    {
        showPressed.setText("Pressed G");
        if(gKey.shiftKey) {
            word = this.checkInput(word, 'G');
        } else
            word = this.checkInput(word, 'g');
        displayWords.setText(word);
    }
    else if (hKey.isDown)
    {
        showPressed.setText("Pressed H");
        if(hKey.shiftKey) {
            word = this.checkInput(word, 'H');
        } else
            word = this.checkInput(word, 'h');
        displayWords.setText(word);
    }
    else if (iKey.isDown)
    {
        showPressed.setText("Pressed I");
        if(iKey.shiftKey) {
            word = this.checkInput(word, 'I');
        } else
            word = this.checkInput(word, 'i');
        displayWords.setText(word);
    }
    else if (jKey.isDown)
    {
        showPressed.setText("Pressed J");
        if(jKey.shiftKey) {
            word = this.checkInput(word, 'J');
        } else
            word = this.checkInput(word, 'j');
        displayWords.setText(word);
    }
    else if (kKey.isDown)
    {
        showPressed.setText("Pressed K");
        if(kKey.shiftKey) {
            word = this.checkInput(word, 'K');
        } else
            word = this.checkInput(word, 'k');
        displayWords.setText(word);
    }
    else if (lKey.isDown)
    {
        showPressed.setText("Pressed L");
        if(lKey.shiftKey) {
            word = this.checkInput(word, 'L');
        } else
            word = this.checkInput(word, 'l');
        displayWords.setText(word);
    }
    else if (mKey.isDown)
    {
        showPressed.setText("Pressed M");
        if(mKey.shiftKey) {
            word = this.checkInput(word, 'M');
        } else
            word = this.checkInput(word, 'm');
        displayWords.setText(word);
    }
    else if (nKey.isDown)
    {
        showPressed.setText("Pressed N");
        if(nKey.shiftKey) {
            word = this.checkInput(word, 'N');
        } else
            word = this.checkInput(word, 'n');
        displayWords.setText(word);
    }
    else if (oKey.isDown)
    {
        showPressed.setText("Pressed O");
        if(oKey.shiftKey) {
            word = this.checkInput(word, 'O');
        } else
            word = this.checkInput(word, 'o');
        displayWords.setText(word);
    }
    else if (pKey.isDown)
    {
        showPressed.setText("Pressed P");
        if(pKey.shiftKey) {
            word = this.checkInput(word, 'P');
        } else
            word = this.checkInput(word, 'p');
        displayWords.setText(word);
    }
    else if (qKey.isDown)
    {
        showPressed.setText("Pressed Q");
        if(qKey.shiftKey) {
            word = this.checkInput(word, 'Q');
        } else
            word = this.checkInput(word, 'q');
        displayWords.setText(word);
    }
    else if (rKey.isDown)
    {
        showPressed.setText("Pressed R");
        if(rKey.shiftKey) {
            word = this.checkInput(word, 'R');
        } else
            word = this.checkInput(word, 'r');
        displayWords.setText(word);
    }
    else if (sKey.isDown)
    {
        showPressed.setText("Pressed S");
        if(sKey.shiftKey) {
            word = this.checkInput(word, 'S');
        } else
            word = this.checkInput(word, 's');
        displayWords.setText(word);
    }
    else if (tKey.isDown)
    {
        showPressed.setText("Pressed T");
        if(tKey.shiftKey) {
            word = this.checkInput(word, 'T');
        } else
            word = this.checkInput(word, 't');
        displayWords.setText(word);
    }
    else if (uKey.isDown)
    {
        showPressed.setText("Pressed U");
        if(uKey.shiftKey) {
            word = this.checkInput(word, 'U');
        } else
            word = this.checkInput(word, 'u');
        displayWords.setText(word);
    }
    else if (vKey.isDown)
    {
        showPressed.setText("Pressed V");
        if(vKey.shiftKey) {
            word = this.checkInput(word, 'V');
        } else
            word = this.checkInput(word, 'v');
        displayWords.setText(word);
    }
    else if (wKey.isDown)
    {
        showPressed.setText("Pressed W");
        if(wKey.shiftKey) {
            word = this.checkInput(word, 'W');
        } else
            word = this.checkInput(word, 'w');
        displayWords.setText(word);
    }
    else if (xKey.isDown)
    {
        showPressed.setText("Pressed X");
        if(xKey.shiftKey) {
            word = this.checkInput(word, 'X');
        } else
            word = this.checkInput(word, 'x');
        displayWords.setText(word);
    }
    else if (yKey.isDown)
    {
        showPressed.setText("Pressed Y");
        if(yKey.shiftKey) {
            word = this.checkInput(word, 'Y');
        } else
            word = this.checkInput(word, 'y');
        displayWords.setText(word);
    }
    else if (zKey.isDown)
    {
        showPressed.setText("Pressed Z");
        if(zKey.shiftKey) {
            word = this.checkInput(word, "Z");
        } else
            word = this.checkInput(word, 'z');
        displayWords.setText(word);
    }

}

function numberKeys() {
    if (oneKey.isDown) {
        if(oneKey.shiftKey) {
            showPressed.setText("Pressed !");
            word = this.checkInput(word, '!');
        } else {
            showPressed.setText("Pressed 1");
            word = this.checkInput(word, '1');
        }
        displayWords.setText(word);
    }

}

function punctuationKeys() {
    if (spaceKey.isDown)
    {
        showPressed.setText("Pressed Space");
        word = this.checkInput(word, ' ');
        displayWords.setText(word);
    }
    else if (commaKey.isDown) {
        showPressed.setText("Pressed ,");
        word = this.checkInput(word, ',');
        displayWords.setText(word);
    }
}

function winthis() {
    if (word === "") {
        winner = this.add.text(100, 100, "Winner!");
        winner.anchor.setTo(0.5, 0.5);
    }
}

function this.checkInput(word, letter) {
    if(word.charAt(0) === letter) {
        return word.slice(1);
    }
    else
        return word;
}

function defineKeys() {

    //Lowercase Letters
    aKey = this.input.keyboard.addKey(Phaser.Keyboard.A);
    bKey = this.input.keyboard.addKey(Phaser.Keyboard.B);
    cKey = this.input.keyboard.addKey(Phaser.Keyboard.C);
    dKey = this.input.keyboard.addKey(Phaser.Keyboard.D);
    eKey = this.input.keyboard.addKey(Phaser.Keyboard.E);
    fKey = this.input.keyboard.addKey(Phaser.Keyboard.F);
    gKey = this.input.keyboard.addKey(Phaser.Keyboard.G);
    hKey = this.input.keyboard.addKey(Phaser.Keyboard.H);
    iKey = this.input.keyboard.addKey(Phaser.Keyboard.I);
    jKey = this.input.keyboard.addKey(Phaser.Keyboard.J);
    kKey = this.input.keyboard.addKey(Phaser.Keyboard.K);
    lKey = this.input.keyboard.addKey(Phaser.Keyboard.L);
    mKey = this.input.keyboard.addKey(Phaser.Keyboard.M);
    nKey = this.input.keyboard.addKey(Phaser.Keyboard.N);
    oKey = this.input.keyboard.addKey(Phaser.Keyboard.O);
    pKey = this.input.keyboard.addKey(Phaser.Keyboard.P);
    qKey = this.input.keyboard.addKey(Phaser.Keyboard.Q);
    rKey = this.input.keyboard.addKey(Phaser.Keyboard.R);
    sKey = this.input.keyboard.addKey(Phaser.Keyboard.S);
    tKey = this.input.keyboard.addKey(Phaser.Keyboard.T);
    uKey = this.input.keyboard.addKey(Phaser.Keyboard.U);
    vKey = this.input.keyboard.addKey(Phaser.Keyboard.V);
    wKey = this.input.keyboard.addKey(Phaser.Keyboard.W);
    xKey = this.input.keyboard.addKey(Phaser.Keyboard.X);
    yKey = this.input.keyboard.addKey(Phaser.Keyboard.Y);
    zKey = this.input.keyboard.addKey(Phaser.Keyboard.Z);

    //Punctuation
    commaKey = this.input.keyboard.addKey(Phaser.Keyboard.COMMA);
    periodKey = this.input.keyboard.addKey(Phaser.Keyboard.PERIOD);

    //Numbers (With shift will correlate to more punctuation)
    oneKey = this.input.keyboard.addKey(Phaser.Keyboard.ONE);

    //Other Keys
    spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

}
*/