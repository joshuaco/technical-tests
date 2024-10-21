import { describe, it } from 'node:test';
import { ifError, equal } from 'node:assert/strict';
import {
  delay,
  leerArchivos,
  obtenerDatosPromise,
  ping,
  procesarArchivo
} from '../solutions/index.js';
import { readFile } from 'node:fs/promises';

describe('1. ping', () => {
  it('1.1. ping to google.com.ve', (_, done) => {
    ping('google.com.ve', (err, info) => {
      ifError(err);
      equal(info.ip, 'google.com.ve');
      done();
    });
  });
});

describe('2. obtenerDatosPromise', () => {
  it('2.1. obtenerDatosPromise', async () => {
    const { data } = await obtenerDatosPromise();
    equal(data, 'datos importantes');
  });
});

describe('3. procesarArchivo', () => {
  it('3.1. procesarArchivo', async () => {
    await procesarArchivo();
    const content = await readFile('output.txt', 'utf8');
    equal(content, 'LALALAND GOGOGO');
  });
});

describe('4. leerArchivos', () => {
  it('4.1. leerArchivos', async () => {
    const message = await leerArchivos();
    equal(message, 'hola que tal');
  });
});

describe('5. delay', () => {
  it('5.1. show message after 3000 miliseconds', async () => {
    await delay(3000);
    console.log('Hola mundo!');
  });
});
