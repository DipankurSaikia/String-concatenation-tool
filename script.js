function concatenateString() {
    const s1 = "https://stream.pwjarvis.app/";
    const s2 = "/hls/480/main.m3u8";
    const codeInput = document.getElementById("codeInput").value;

    // Concatenate the strings
    const result = s1 + codeInput + s2;

    // Output the result in the HTML page
    document.getElementById("output").textContent = result;

    // Show the copy button
    document.getElementById("copyButton").style.display = "inline-block";
}

function copyToClipboard() {
    const output = document.getElementById("output").textContent;

    // Copy the text inside the output to the clipboard
    navigator.clipboard.writeText(output).then(function() {
        alert('Copied to clipboard!');
    }, function(err) {
        alert('Failed to copy text: ', err);
    });
}
