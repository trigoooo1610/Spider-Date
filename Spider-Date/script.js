// =====================================
// SPIDER INITIATIVE SYSTEM
// Agent: GI
// =====================================



// ===============================
// ELEMENTOS
// ===============================


const bootScreen = document.getElementById("bootScreen");
const introScreen = document.getElementById("introScreen");
const missionScreen = document.getElementById("missionScreen");
const finalScreen = document.getElementById("finalScreen");


const progressBar = document.getElementById("progressBar");
const percentage = document.getElementById("percentage");
const bootMessages = document.getElementById("bootMessages");


const introTyping = document.getElementById("introTyping");
const startButton = document.getElementById("startButton");

const acceptMission = document.getElementById("acceptMission");

const denyMission = document.getElementById("denyMission");


const status = document.getElementById("status");
const protocol = document.querySelector("#hud div:nth-child(2)");


// Missões

const missionButton = document.getElementById("missionButton");

const missionText = document.getElementById("missionText");

const missionTag = document.getElementById("missionTag");

const missionTitle = document.getElementById("missionTitle");


// Aranha

const spiderTarget = document.getElementById("spiderTarget");


// Arquivos

const filesContainer = document.getElementById("filesContainer");

const files = document.querySelectorAll(".file");

// Localização - Missão 03

const locationContainer = document.getElementById("locationContainer");

const locationOptions = document.querySelectorAll(".locationOption");

const missionNumber = document.getElementById("missionNumber");



// Spider Device

const spiderDevice = document.getElementById("spiderDevice");

const unlockMessage = document.getElementById("unlockMessage");


const missionDate = document.getElementById("missionDate");

const missionTime = document.getElementById("missionTime");

const missionLocation = document.getElementById("missionLocation");

const missionObjective = document.getElementById("missionObjective");


const dataCount = document.getElementById("dataCount");






// ===============================
// CONFIGURAÇÕES
// ===============================


const agentName = "GI";


let progress = 0;


let currentMission = 1;


let lastMessage = -1;



const bootTexts = [

    "Inicializando sistema...",

    "Conectando à Spider Network...",

    "Estabilizando conexão multiversal...",

    "Analisando compatibilidade do agente...",

    "Carregando protocolos secretos..."

];







// ===============================
// BOOT
// ===============================



const loading = setInterval(()=>{


    progress += Math.floor(Math.random()*4)+1;


    if(progress > 100){

        progress = 100;

    }



    progressBar.style.width = progress+"%";


    percentage.textContent = progress+"%";



    let index = Math.floor(progress / 20);



    if(index >= bootTexts.length){

        index = bootTexts.length-1;

    }



    if(index !== lastMessage){

        lastMessage = index;

        showBootMessage(bootTexts[index]);

    }




    if(progress >=100){


        clearInterval(loading);


        setTimeout(accessDenied,1000);


    }



},120);







function showBootMessage(message){


    bootMessages.classList.add("message-hide");


    setTimeout(()=>{


        bootMessages.textContent = message;


        bootMessages.classList.remove("message-hide");


    },400);


}









// ===============================
// ACESSO
// ===============================


async function accessDenied(){


    bootMessages.innerHTML =
    "⚠ ACESSO NEGADO ⚠";



    status.textContent="ERRO";

    status.style.color="#ff0000";



    document.body.classList.add("glitching");



    await wait(2200);



    document.body.classList.remove("glitching");



    progressBar.style.opacity="0";

    percentage.style.opacity="0";



    await showBootMessage("Compatibilidade encontrada.");

    await wait(1500);



    await showBootMessage("Acesso concedido.");

    await wait(1500);



    await showBootMessage("Analisando identidade...");

    await wait(1500);



    bootMessages.innerHTML =

    `
    AGENTE IDENTIFICADO:

    <br><br>

    <strong style="
    color:#ff3030;
    font-size:1.6rem;
    ">

    ${agentName}

    </strong>
    `;



    status.textContent="ONLINE";

    status.style.color="#00ff88";



    setTimeout(showIntro,2500);


}








// ===============================
// INTRO
// ===============================



const introText =

`
Bem-vinda, ${agentName}.

O sistema detectou uma pessoa
com características incomuns.

Determinação.
Coragem.

Sua primeira missão está esperando.
`;






function showIntro(){


    bootScreen.classList.remove("active");


    introScreen.classList.add("active");


    typeIntro();


}





async function typeIntro(){


    introTyping.innerHTML="";


    for(let char of introText){


        introTyping.innerHTML += char;


        await wait(40);


    }


}








// ===============================
// ENTRAR NA MISSÃO
// ===============================


startButton.addEventListener("click",()=>{


    introScreen.classList.remove("active");


    missionScreen.classList.add("active");



});










// ===============================
// MISSÃO 01
// ===============================


missionButton.onclick = startMissionOne;



function startMissionOne(){


    missionButton.style.display="none";



    missionText.innerHTML=

    `
    SENTIDO ARANHA ATIVADO.

    <br><br>

    O traje está analisando seus reflexos...

    <br><br>

    Aguarde o sinal.
    `;



    setTimeout(()=>{


        spawnSpider();


    },3000);



}






function spawnSpider(){


    spiderTarget.style.display="block";


    const x =
    Math.random() * 
    (window.innerWidth - 100);



    const y =
    Math.random() *
    (window.innerHeight - 100);



    spiderTarget.style.left = x + "px";

    spiderTarget.style.top = y + "px";


}






spiderTarget.addEventListener("click",()=>{


    spiderTarget.style.display="none";


    completeMissionOne();


});







function completeMissionOne(){


    missionText.innerHTML=

    `
    SINAL DETECTADO ✓

    <br><br>

    Reflexos aprovados.

    <br><br>

    NOVO DADO DESBLOQUEADO
    `;



    unlockData("date");



}









// ===============================
// DESBLOQUEIOS
// ===============================


function unlockData(type){



    if(type === "date"){


        missionDate.textContent="01/08";


        dataCount.textContent="1/4";

        nextMission();


    }



    if(type === "time"){


        missionTime.textContent="18:30";


        dataCount.textContent="2/4";

        nextMissionThree();


    }




    spiderDevice.classList.add("updated");


    unlockMessage.style.display="block";



    setTimeout(()=>{


        spiderDevice.classList.remove("updated");


    },800);



    setTimeout(()=>{


        unlockMessage.style.display="none";



    },3000);


}







// ===============================
// IR PARA MISSÃO 02
// ===============================


function nextMission(){


    currentMission = 2;


    missionButton.style.display="block";


    missionButton.textContent="CONTINUAR MISSÃO";


    missionButton.onclick=startMissionTwo;


}








// ===============================
// MISSÃO 02
// ===============================


function startMissionTwo(){



    spiderTarget.style.display="none";


    missionButton.style.display="none";



    missionTag.textContent="SEGUNDO TESTE";


    missionTitle.textContent="Análise de Rota";



    missionText.innerHTML=

    `
    O traje encontrou uma informação protegida.

    <br><br>

    Três arquivos foram encontrados.

    <br><br>

    Escolha o arquivo correto.
    `;



    filesContainer.style.display="flex";


}






files.forEach(file=>{


    file.addEventListener("click",()=>{


        if(file.textContent.includes("B")){


            file.classList.add("correct");


            completeMissionTwo();


        }

        else{


            missionText.innerHTML=

            `
            ARQUIVO INCORRETO.

            <br><br>

            Tente novamente.
            `;


        }


    });


});








function completeMissionTwo(){


    filesContainer.style.display="none";



    missionText.innerHTML=

    `
    ANÁLISE CONCLUÍDA ✓

    <br><br>

    Dados recuperados.

    <br><br>

    NOVO DADO DESBLOQUEADO
    `;



    unlockData("time");



}

// ===============================
// ESCOLHA DA LOCALIZAÇÃO
// ===============================


locationOptions.forEach(option=>{


    option.addEventListener("click",()=>{


        if(option.textContent.includes("Polo Shopping")){


            option.classList.add("correct");


            completeMissionThree();


        }


        else{


            missionText.innerHTML=

            `
            LOCALIZAÇÃO INCORRETA.

            <br><br>

            Continue investigando.
            `;


        }


    });


});

function completeMissionThree(){


    locationContainer.style.display="none";



    missionText.innerHTML=

    `
    LOCALIZAÇÃO CONFIRMADA ✓

    <br><br>

    Polo Shopping encontrado.

    <br><br>

    NOVO DADO DESBLOQUEADO
    `;



    missionLocation.textContent="Polo Shopping";


    dataCount.textContent="3/4";



    spiderDevice.classList.add("updated");


    unlockMessage.style.display="block";



    setTimeout(()=>{


        spiderDevice.classList.remove("updated");


    },800);



    setTimeout(()=>{


        unlockMessage.style.display="none";


    },3000);


    setTimeout(()=>{


    openFinalMission();


},4000);



}

// ===============================
// MISSÃO FINAL
// ===============================


function openFinalMission(){


    missionScreen.classList.remove("active");


    finalScreen.classList.add("active");


    setTimeout(()=>{


        document.getElementById("acceptQuestion").style.display = "block";


        acceptMission.style.display = "inline-block";


        denyMission.style.display = "inline-block";


    },3000);


}





// ===============================
// UTILIDADE
// ===============================


function wait(ms){

    return new Promise(resolve=>{

        setTimeout(resolve,ms);

    });

}






// ===============================
// GLITCH
// ===============================


setInterval(()=>{


    const glitch =
    document.getElementById("glitch");


    glitch.style.opacity="1";



    setTimeout(()=>{


        glitch.style.opacity="0";


    },100);



},5000);

// ===============================
// IR PARA MISSÃO 03
// ===============================


function nextMissionThree(){


    currentMission = 3;


    missionButton.style.display="block";


    missionButton.textContent="CONTINUAR MISSÃO";


    missionButton.onclick=startMissionThree;


}

function startMissionThree(){


    missionButton.style.display="none";


    missionNumber.textContent="03";


    missionTag.textContent="TERCEIRO TESTE";


    missionTitle.textContent="Rastreamento de Localização";



    missionText.innerHTML=

    `
    O traje encontrou uma localização protegida.

    <br><br>

    O endereço está criptografado.

    <br><br>

    Resolva o código para continuar.
    `;



    locationContainer.style.display="block";


}

// ===============================
// ACEITAÇÃO DA MISSÃO
// ===============================


acceptMission.addEventListener("click",()=>{

    document.getElementById("acceptQuestion").style.display="none";

    document.getElementById("finalText").innerHTML =


    `
    PROTOCOLO ACEITO ✓

    <br><br>

    Parabéns, Princesa.

    <br><br>

    A Spider Initiative foi concluída.

    <br><br>

    Todos os dados foram confirmados.

    <br><br>

    A próxima missão será a mais importante:

    <br><br>

    Criar uma memória inesquecível comigo. ❤️
    `;



    acceptMission.style.display="none";


    denyMission.style.display="none";

    document.getElementById("acceptQuestion").style.display="none";



    protocol.textContent="PROTOCOLO FINALIZADO";


    status.textContent="MISSÃO ACEITA ❤️";


    status.style.color="#ff69b4";


});

denyMission.addEventListener("mouseover",()=>{


    const x = Math.random() * 
    (window.innerWidth - 150);


    const y = Math.random() * 
    (window.innerHeight - 100);



    denyMission.style.position="fixed";


    denyMission.style.left=x+"px";


    denyMission.style.top=y+"px";

    protocol.textContent="PROTOCOLO FINALIZADO";


    status.textContent="MISSÃO ACEITA ❤️";


    status.style.color="#ff69b4";


});