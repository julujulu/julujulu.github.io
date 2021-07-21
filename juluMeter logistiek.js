function getName() {
    const params = (new URL(document.location)).searchParams;
    let name = params.get("name");
    return name;
}

function show() {
    document.getElementById("juluLaadBar").style.display = "block";
    document.getElementById("name").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("knop").style.display = "none";
    document.getElementById("juluHoofd").style.display = "inline";

}
function juluCalculator() {
    return Math.floor(Math.random()*100);;
}
function yusuKlikken() {
    setTimeout(function() {
        document.getElementById("submit").click();
    }, 3000);

}

function edgeCaseHandler(juluPercentage) {
    let name = getName();
    document.getElementById("result-name").innerHTML = name;
    if (juluPercentage >= 85) {
        document.body.style.backgroundImage =  "url('resources/superjulu.jpeg')";
        document.getElementById("juluText").innerHTML = `${juluPercentage}% HODEE ${name} IS KAOLO JULU`
        document.getElementById("juluText").style.color = "magenta";

    }
    else if (juluPercentage <= 15) {
        document.body.style.backgroundImage =  "url('resources/gigachad.jpg')";
        document.getElementById("juluText").style.color = "white"; 
    }
    switch(name.toLowerCase()) {
        case "erwin":
            document.body.style.backgroundImage =  "url('resources/gigachad.jpg')";
            document.getElementById("juluText").innerHTML = "0%. Geen julu gevonden. Erwin is compleet julu vrij";
            document.getElementById("juluText").style.color = "white"; 
            break; 
        case "julu": 
        document.body.style.backgroundImage =  "url('resources/superjulu.jpeg')";
        document.getElementById("juluText").innerHTML = "O̸̢̧̨̩̞̗̤̪̹̖̜̖͍̘̼͇͎͛̀A̶̢̨̲͓̠̰͉̤̝͍͑͋͌̍͂̾̌́͊͜͜Í̸̡̢̘̠̼̗̟̤͓̝̞̘͚̭̰͉̏͜Ś̵̛̬̯̗͉̬̲̫̞͇̤̳̗̠̳̭̦̻̖̋̇̎͗̊͋͊̌F̵̛̦̠̐̍͛͒̏͐̇̆̈̃͛̃̉̚W̶̡̨͉͓͕̖͍̬̼̟̳̘̤̠̦͉̲̉́̎͒̋̿̀̀̈́̔̓̋̃̇̆̉͌͜͝ͅE̷̻͍̭͉̞̺̲̘̖͓̭̭̮̖̻͔̲̱̎̂͐̽͌̎̽̓̒͝I̵̛̝̪̬̟͎̍́͐̒͆͊̆́̌̃̔̌̏̍͠Ņ̵̛̤̘̼͎̳̯̊͑̂́̇̈́͛͝͠2̸͕̯̱̫͔̾̓͝@̵̪͆̈́̐#̷̛̜̠̲̖͉̖̤̎̚͘$̶̨̧̞̲͎͉̞̇͌̾͋̉̈̍́̾ͅ!̷̹͇̰̳͈̳̍̋̂̀̉̿͋̉̈̇̏͂͆̅̃͊̎̕͠S̷̨̢̢̧̨̛̱̬͍̜̟̠̜̹̼̳̞̻̥̏̂̓̊͌̊̓͒̀̓͂̎̽͗͝ͅK̶̩̯̿͊̇͌̏̀͛̊̈̀̒͊̅̈́̈́̕͠L̷̘̜͇͍̍̀̍͒̍͝F̶̛̮̥̰̦̹̤̻̯̥̟͉̮̹̮̍̓̏̉̋̽̈̽̔̓̈́͂̔̽͘͝M̸̮̮̙͙͖̲̻͍̙̤̃̐̈́̿2̵̙̼͓͕̤̞̭̪̰͔̮͚̜̼͖̗͕̀̓̈́̈́̄͆́̎̊̾ J̵̩͉̲̳̱̩̱͉̉́̈́̓͒̇̍̓͐̃̀̏͌͜͝͝Ư̷̡̢̛͔̹̭͕̯͔̫̝̥̹̼̝̟͓̌̌͐͛͗̓̇̈͝͠L̸̨͖̫̞̖͇͂̊̀̑͐́̅̀̌U̸̯̯̣̺̣̗̠̥̳͇̲̗̗̜̥͓̩̿̈̔͗̾̿́̈́̇̊͠ ̵̢͍̰̣̙̜̯̀̈̀̏͌̾͑̈̉̈́̅́̌̕͝Ǫ̶̙̔̓̍͋̌̈̋͐̍̋̉͋́͛̕͠V̴̥̗̪̞͔̖͛͒̀̔̔̑̐̃̀̒̉̈́͐E̸̛̛͇͉̬̣̩̙̮̞̳̭̿̀̌̇̅̾͋́̈́̉̎͘͜͜͝͝R̴̤̪͇͚͌̏̽͛͗̋͑̀̍̈́̈̚͘̚͠L̶̻̣͉̱͚̘̬̙͖̄͂̎̃O̷̬̊A̷̢̛̪̯͇͖̰̩̾͛̔͂̊͝Ḑ̵̛̣̝̠̦̪̫̰̗̠̟͕͈̝͆̈̿̾̂́̑͜ ̶͂̍̇̈́̽̅́́̌̇̚͜͠ͅ1̴̼̖̠͔̹̣͗̊̔͛̃̈́̾̄̔́̅̒̚͝?̷̫̲͈̬̮̪̯̪̬̋̓͝ͅ@̸̨̩̠̗͎͓͚̲̱̮̮͒͆́̃̋̕ͅ3̸̞͈̥͗͒̈̀̄̌̓͆̋͑̐͋̆̀͊̕ͅ1̶̢̨̛͈̣͎̟̗̦̭̮̜̠̟̦͓͗̎͜?̷̢̳̩̫̰̠̮̖̼͚̹̓̂̏̄̄̀͂͒͑̑̽͌́̋͘͜͝͝͝@̶̛̛̲̠̯̦̲̥̑̄͗̾̆̾͊̾͌͆̿̚͝#̵̡̧͔͙̰̜̗̼̲̝̜̭̝̟͕̓̅́̈̔̍̓̅͑̄̈͐͊͜ͅ1̷̨̛̼̮̤̫̣͔͚̥̲̤̬͋͆͛́͌̄̅̕͝?̵̨̗͔̩̞̻̳͚̟̼̔̇͗͊̇̕͜4̴̝̱̭̈́͊̋͆͒́̋̈?̶̨̝̤̞̗̘̖̝̅̅̕ͅ!̴̢͇͎͍͎̭̤͕̫̹͚̰͖̰̌̀͠@̶̡̢̧̞̤͉̼͍͓̱͕̝͖̪̈͆̌̌͌̿͜͜͝ͅ$̷̧͇̥̲̤̮̯̭̹̄̔͂ͅ?̵̧̛̠͕̹̺̼̓́͒͑̊̈́͛̍̉͐͆́̏̚̕͠!̸̡̲̏͘@̵̧̛̩̝̬̯̫͔̱̦̯̟͋̆̽̀̂͐̆̿̆͘͜3̸̡̠̗̯̯͋̄͑̌̍͂̉͒̍͂̇̽̓̾͘͜͝͝";
        window.setTimeout(function() {
            alert("H̴͈̹̆̕E̷͕̹̔͑Ḷ̷̤̾P̵͚͉̽ ̶̦͎̈́͘T̷̩̖̾E̶̘̠̽͆V̸̘͘E̶̠̔̓E̴͓̊L̶͇̃ ̶̣̠̉͂J̵̧̓U̸̳͛͠L̷̠̄Ù̷̜̕");}, 100);
            break;
        default:
            break;
    }
}

