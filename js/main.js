const consoleInput = document.querySelector(".console-input");
const historyContainer = document.querySelector(".console-history");

function addResult(inputAsString, output) {
    const outputAsString = output instanceof Array ? `[${output.join(", ")}]` : output.toString();
    const inp = document.createElement("div");
    const outp = document.createElement("div");

    inp.classList.add("console-input-log");
    outp.classList.add("console-output-log");

    inp.textContent = `> ${ inputAsString }`;
    outp.textContent = outputAsString;

    historyContainer.append(inp, outp);
}

consoleInput.addEventListener("keyup", function(e) {
    const code = consoleInput.value.trim();
    const ends = consoleInput.value.endsWith(".js");

    if (e.key == "Enter") {
        switch (code) {
            case "console.clear()":
                historyContainer.innerHTML = "";
                break;

            default:
                try {
                    addResult(code, eval(code));
                } catch (err) {
                    addResult(code, err);
                }
                break;
        }

        consoleInput.value = "";
        historyContainer.scrollTop = historyContainer.scrollHeight;
    }
});

function printFile(file) {
    const reader = new FileReader();
    reader.onload = (evt) => {
      return evt.target.result;
    };
     reader.readAsText(file);
}
