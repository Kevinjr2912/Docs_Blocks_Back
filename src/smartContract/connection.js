const { ApiPromise, WsProvider } = require('@polkadot/api');

async function connectToVara() {
    const wsProvider = new WsProvider('wss://testnet.vara.network'); // Asegúrate de que sea la URL correcta
    const api = await ApiPromise.create({ provider: wsProvider });

    // Esperar a que la API esté lista
    await api.isReady;

    console.log('Conectado a la red de Vara');

    return api;
}

module.exports = connectToVara;
