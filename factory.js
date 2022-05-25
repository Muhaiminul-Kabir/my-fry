import { pubDicRead } from "./server.js";


export function startWorker() {
       pubDicRead();
        startWorker();
}
