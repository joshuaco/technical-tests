import fs from 'node:fs/promises';
import net from 'node:net';

// Exercise 1
export const ping = (ip, callback) => {
  const startTime = process.hrtime();

  const client = net.connect({ port: 80, host: ip }, () => {
    client.end();
    callback(null, { time: process.hrtime(startTime), ip });
  });

  client.on('error', (err) => {
    client.end();
    callback(err);
  });
};

// Exercise 2
export function obtenerDatosCallback(callback) {
  setTimeout(() => {
    callback(null, { data: 'datos importantes' });
  }, 2000);
}

//obtenerDatosCallback((err, info) => console.log(info));

export function obtenerDatosPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: 'datos importantes' });
    }, 1000);
  });
}

// Exercise 3
export async function procesarArchivo() {
  let contenido = '';

  try {
    contenido = await fs.readFile('input.txt', 'utf8');
  } catch (error) {
    console.error('Error abriendo archivo:', error.message);
    throw error.message;
  }

  const textoProcesado = contenido.toUpperCase();

  try {
    await fs.writeFile('output.txt', textoProcesado);
  } catch (error) {
    console.error('Error guardando archivo:', error.message);
  }
}

// Exercise 4
export async function leerArchivos() {
  const [archivo1, archivo2, archivo3] = await Promise.all([
    fs.readFile('archivo1.txt', 'utf8'),
    fs.readFile('archivo2.txt', 'utf8'),
    fs.readFile('archivo3.txt', 'utf8')
  ]);

  return `${archivo1} ${archivo2} ${archivo3}`;
}

// Exercise 5
export async function delay(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, n);
  });
}
