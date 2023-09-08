function findIPAddress() {
    const websiteName = document.getElementById("websiteName").value;

    if (websiteName.trim() === "") {
        alert("Please enter a website URL");
        return;
    }

    fetch(`https://api.ipify.org?format=json&url=${websiteName}`)
        .then((response) => response.json())
        .then((data) => {
            const ipAddress = data.ip;
            document.getElementById("result").innerText = `IP Address of ${websiteName}: ${ipAddress}`;
        })
        .catch((error) => {
            document.getElementById("result").innerText = `Error: ${error.message}`;
        });
}
