const { ApiPromise, WsProvider, Keyring } = require('@polkadot/api');
const connection = require("./connection")

// Configura un firmante para la transacción
const keyring = new Keyring({ type: 'sr25519' });
const signer = keyring.addFromUri('0x74523cc683fb86041c84107e653631b6076eb025475df39acad7573395075a70');

// Función para mintear un NFT
async function mintNFT(api) {
    const contractAddress = '0xd1d2613353d7205d801e1d2d52a0aa53a986fbad5a425e874e9d0a129955a2a2'; // Dirección del contrato desplegado
    const gasLimit = 1000000000000n; // Configura un límite de gas adecuado (en formato BigInt)
    const value = 0; // Valor en tokens transferidos, si aplica

    // Verifica que el módulo de contratos esté disponible en la API
    if (!api.tx.contracts) {
        throw new Error('El módulo de contratos no está disponible en la red');
    }

    // Datos del NFT que quieres mintear (ejemplo genérico)
    const tokenMetadata = {
        name: 'NFT Name',
        description: 'NFT Description',
        media: 'media_url',
        reference: 'optional_reference'
    };

    // Transacción para llamar a la función 'mint' del contrato
    const tx = api.tx.contracts.call(
        contractAddress,
        value, // Valor
        gasLimit, // Límite de gas
        api.createType('Bytes', tokenMetadata) // Parámetros de la función
    );

    // Aquí debes firmar y enviar la transacción
    console.log('Minteando el NFT...');

    // Enviar la transacción (aquí necesitarías una cuenta firmante)
    const signer = 'TUS_DATOS_DE_FIRMA'; // Aquí debes configurar un firmante válido
    const result = await tx.signAndSend(signer);

    console.log('Transacción completada:', result);
}

(async () => {
    try {
        const api = await connection(); // Conectarse a la red de Vara
        await mintNFT(api); // Mintear un NFT
    } catch (error) {
        console.error('Error al mintear el NFT:', error);
    }
})();
