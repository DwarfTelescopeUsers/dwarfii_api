# Dwarf II

Wrapper functions for Dwarf II (aka Dwarf 2) API V1. This library and the API are a work in progress.

Dwarf Lab's [API V1 documentation](https://hj433clxpv.feishu.cn/docx/MiRidJmKOobM2SxZRVGcPCVknQg).

[Documentation](https://dwarftelescopeusers.github.io/dwarfii_api/) for this package.

## Install

```
npm install dwarfii_api
```

## Usage

The Dwarf API uses websockets. The URL of the websockets depends on if you use Dwarf wifi or if you use the Dwarf in STA mode.

Example of sending a Goto command using the Dwarf wifi.

```js
import { startGoto, wsURL, DwarfIP, socketSend } from "dwarfii_api";

const socket = new WebSocket(wsURL(DwarfIP));
socket.addEventListener("open", () => {
  let planet = null;
  let RA = 10.6;
  let dec = 41.2;
  let lat = 40.0;
  let lon = 90.0;
  let options = startGoto(planet, RA, dec, lat, lon);
  socketSend(socket, options);
});

socket.addEventListener("message", (event) => {
  let message = JSON.parse(event.data);
  console.log(message);
});

socket.addEventListener("error", (message) => {
  console.log("error:", message);
});
```

Example of sending a take astro photos command using the Dwarf in STA mode. You need to provide the IP of your Dwarf II.

```js
import {
  wsURL,
  socketSend,
  binning2x2,
  takeAstroPhoto,
  fileFits,
} from "dwarfii_api";

let myIP = "192.123.45.6";
const socket = new WebSocket(wsURL(myIP));
socket.addEventListener("open", () => {
  let RA = 10.6;
  let dec = 41.2;
  let exposure = 10;
  let gain = 60;
  let count = 100;
  let options = takeAstroPhoto(
    RA,
    dec,
    exposure,
    gain,
    binning2x2,
    count,
    fileFits
  );
  socketSend(socket, options);
});

socket.addEventListener("message", (event) => {
  let message = JSON.parse(event.data);
  console.log(message);
});

socket.addEventListener("error", (message) => {
  console.log("error:", message);
});
```
