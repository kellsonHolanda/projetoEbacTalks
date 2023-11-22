AOS.init({
    duration: 1200,
})

const dataDoEvento = new Date("Dec 21, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const meuIntervalo = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = (timeStampDoEvento - timeStampAtual);

    const diaEmMs = 1000*60*60*24;
    const horaEmMs = 1000*60*60;
    const minutoEmMs = 1000*60;
    const segundoEmMs = 1000;

    const diasAteOEvento = Math.floor(distanciaAteOEvento/(diaEmMs));
    const horasAteOEvento = Math.floor((distanciaAteOEvento%(diaEmMs))/(horaEmMs));
    const minutosAteOEvento = Math.floor((distanciaAteOEvento%(horaEmMs))/(minutoEmMs));
    const segundosAteOEvento = Math.floor((distanciaAteOEvento%(minutoEmMs))/(segundoEmMs));

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if ( distanciaAteOEvento < 0) {
        clearInterval(meuIntervalo);
        document.getElementById('contador').innerHTML = 'Evento atual expirado. Fique atento para mais informações sobre os próximos enventos.';
    }
}, 1000);