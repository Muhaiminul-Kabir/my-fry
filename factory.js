var w;

function startWorker() {
        if (typeof (Worker) !== "undefined") {
                if (typeof (w) == "undefined") {
                        w = new Worker("work.js");
                }
                w.onmessage = function (event) {
                        document.getElementById("result").innerHTML = event.data;
                };
        } else {
                alert('Something went wrong');

        }
}

function stopWorker() {
        w.terminate();
        w = undefined;
}
