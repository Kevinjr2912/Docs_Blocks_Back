const { ApiPromise, WsProvider, Keyring } = require("@polkadot/api");
const { cryptoWaitReady } = require("@polkadot/util-crypto");

async function connectToVara() {
  const wsProvider = new WsProvider('wss://testnet.vara.network'); // URL de nodo RPC de la red de Vara
  const api = await ApiPromise.create({ provider: wsProvider });
  
  console.log('Conectado a la red de Vara');

  // Verificar si el módulo de contratos está disponible
  if (!api.tx.contracts) {
      throw new Error('El módulo de contratos no está disponible en la red.');
  }

  return api;
}

// Configuración de la clave privada del firmante
async function setupSigner() {
  await cryptoWaitReady();
  const keyring = new Keyring({ type: "sr25519" });
  const signer = keyring.addFromUri("0x74523cc683fb86041c84107e653631b6076eb025475df39acad7573395075a70");
  return signer;
}

async function mintNFT(api, signer) {
  const contractAddress = "0xd1d2613353d7205d801e1d2d52a0aa53a986fbad5a425e874e9d0a129955a2a2"; // Dirección del contrato NFT desplegado
  const gasLimit = 1000000000000n; // Establece el límite de gas adecuado (BigInt)
  const value = 0; // Valor en tokens transferidos (0 si no es necesario)

  // Datos de los metadatos del NFT
  const tokenMetadata = {
    name: "Nombre del NFT",
    description: "Descripción del NFT",
    media: "url_o_datos_media",
    reference: "Referencia opcional",
  };

  try {
    // Crear la transacción para la función 'Mint'
    const tx = api.tx.contracts.call(
      contractAddress, // Dirección del contrato
      value, // Valor en tokens (si es necesario)
      gasLimit, // Límite de gas
      api.createType("Bytes", tokenMetadata) // Los datos del NFT convertidos a Bytes
    );

    // Firmar y enviar la transacción
    const result = await tx.signAndSend(signer, ({ status }) => {
      if (status.isInBlock) {
        console.log(`Minting en bloque: ${status.asInBlock}`);
      } else if (status.isFinalized) {
        console.log(`Transacción finalizada: ${status.asFinalized}`);
      }
    });

    console.log("Resultado de la transacción:", result);
  } catch (error) {
    console.error("Error durante la creación del NFT:", error);
  }
}

(async () => {
  try {
    // Conexión a la red de Vara
    const api = await connectToVara();

    // Configurar el firmante (cuenta que firmará las transacciones)
    const signer = await setupSigner();

    // Mintear el NFT
    await mintNFT(api, signer);
  } catch (error) {
    console.error("Error general:", error);
  }
})();
