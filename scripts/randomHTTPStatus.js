(function () {
    var statuses = [
        // 100 Statuses
        {
            "code": "100",
            "color": "#3fe615",
            "description": "Continue"
        },
        {
            "code": "101",
            "color": "#3fe615",
            "description": "Switching Protocols"
        },
        {
            "code": "102",
            "color": "#3fe615",
            "description": "Processing"
        },
        {
            "code": "103",
            "color": "#3fe615",
            "description": "Early Hints"
        },

        // 200 Statuses
        {
            "code": "200",
            "color": "#3fe615",
            "description": "OK"
        },
        {
            "code": "201",
            "color": "#3fe615",
            "description": "Created"
        },
        {
            "code": "202",
            "color": "#3fe615",
            "description": "Accepted"
        },
        {
            "code": "203",
            "color": "#3fe615",
            "description": "Non-Authoritative Information"
        },
        {
            "code": "204",
            "color": "#3fe615",
            "description": "No Content"
        },
        {
            "code": "205",
            "color": "#3fe615",
            "description": "Reset Content"
        },
        {
            "code": "206",
            "color": "#3fe615",
            "description": "Partial Content"
        },
        {
            "code": "207",
            "color": "#3fe615",
            "description": "Multi-Status"
        },
        {
            "code": "208",
            "color": "#3fe615",
            "description": "Already Reported"
        },
        {
            "code": "226",
            "color": "#3fe615",
            "description": "IM Used"
        },

        // 300 Statuses
        {
            "code": "300",
            "color": "#e2e2e2",
            "description": "Multiple Choices"
        },
        {
            "code": "301",
            "color": "#e2e2e2",
            "description": "Moved Permanently"
        },
        {
            "code": "302",
            "color": "#e2e2e2",
            "description": "Found"
        },
        {
            "code": "303",
            "color": "#e2e2e2",
            "description": "See Other"
        },
        {
            "code": "304",
            "color": "#e2e2e2",
            "description": "Not Modified"
        },
        {
            "code": "305",
            "color": "#e2e2e2",
            "description": "Use Proxy"
        },
        {
            "code": "306",
            "color": "#e2e2e2",
            "description": "Switch Proxy"
        },
        {
            "code": "307",
            "color": "#e2e2e2",
            "description": "Temporary Redirect"
        },
        {
            "code": "308",
            "color": "#e2e2e2",
            "description": "Permanent Redirect"
        },

        // 400 Statuses
        {
            "code": "400",
            "color": "#ff3ebf",
            "description": "Bad Request"
        },
        {
            "code": "401",
            "color": "#ff3ebf",
            "description": "Unauthorized"
        },
        {
            "code": "402",
            "color": "#ff3ebf",
            "description": "Payment Required"
        },
        {
            "code": "403",
            "color": "#ff3ebf",
            "description": "Forbidden"
        },
        {
            "code": "404",
            "color": "#ff3ebf",
            "description": "Not Found"
        },
        {
            "code": "405",
            "color": "#ff3ebf",
            "description": "Method Not Allowed"
        },
        {
            "code": "406",
            "color": "#ff3ebf",
            "description": "Not Acceptable"
        },
        {
            "code": "407",
            "color": "#ff3ebf",
            "description": "Proxy Authentication Required"
        },
        {
            "code": "408",
            "color": "#ff3ebf",
            "description": "Request Timeout"
        },
        {
            "code": "409",
            "color": "#ff3ebf",
            "description": "Conflict"
        },
        {
            "code": "410",
            "color": "#ff3ebf",
            "description": "Gone"
        },
        {
            "code": "411",
            "color": "#ff3ebf",
            "description": "Length Required"
        },
        {
            "code": "412",
            "color": "#ff3ebf",
            "description": "Precondition Failed"
        },
        {
            "code": "413",
            "color": "#ff3ebf",
            "description": "Payload Too Large"
        },
        {
            "code": "414",
            "color": "#ff3ebf",
            "description": "URI Too Long"
        },
        {
            "code": "415",
            "color": "#ff3ebf",
            "description": "Unsupported Media Type"
        },
        {
            "code": "416",
            "color": "#ff3ebf",
            "description": "Range Not Satisfiable"
        },
        {
            "code": "417",
            "color": "#ff3ebf",
            "description": "Expectation Failed"
        },
        {
            "code": "418",
            "color": "#ff3ebf",
            "description": "I'm a teapot"
        },
        {
            "code": "421",
            "color": "#ff3ebf",
            "description": "Misdirected Request"
        },
        {
            "code": "422",
            "color": "#ff3ebf",
            "description": "Unprocessable Entity"
        },
        {
            "code": "423",
            "color": "#ff3ebf",
            "description": "Locked"
        },
        {
            "code": "424",
            "color": "#ff3ebf",
            "description": "Failed Dependency"
        },
        {
            "code": "425",
            "color": "#ff3ebf",
            "description": "Too Early"
        },
        {
            "code": "426",
            "color": "#ff3ebf",
            "description": "Upgrade Required"
        },
        {
            "code": "428",
            "color": "#ff3ebf",
            "description": "Precondition Required"
        },
        {
            "code": "429",
            "color": "#ff3ebf",
            "description": "Too Many Requests"
        },
        {
            "code": "431",
            "color": "#ff3ebf",
            "description": "Request Header Fields Too Large"
        },
        {
            "code": "451",
            "color": "#ff3ebf",
            "description": "Unavailable For Legal Reasons"
        },

        // 500 Statuses
        {
            "code": "500",
            "color": "#ff3e3e",
            "description": "Internal Server Error"
        },
        {
            "code": "501",
            "color": "#ff3e3e",
            "description": "Not Implemented"
        },
        {
            "code": "502",
            "color": "#ff3e3e",
            "description": "Bad Gateway"
        },
        {
            "code": "503",
            "color": "#ff3e3e",
            "description": "Service Unavailable"
        },
        {
            "code": "504",
            "color": "#ff3e3e",
            "description": "Gateway Timeout"
        },
        {
            "code": "505",
            "color": "#ff3e3e",
            "description": "HTTP Version Not Supported"
        },
        {
            "code": "506",
            "color": "#ff3e3e",
            "description": "Variant Also Negotiates"
        },
        {
            "code": "507",
            "color": "#ff3e3e",
            "description": "Insufficient Storage"
        },
        {
            "code": "508",
            "color": "#ff3e3e",
            "description": "Loop Detected"
        },
        {
            "code": "510",
            "color": "#ff3e3e",
            "description": "Not Extended"
        },
        {
            "code": "511",
            "color": "#ff3e3e",
            "description": "Network Authentication Required"
        }
    ];

    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

    document.getElementById("placeHereAHTTPStatus").innerHTML = `<title>${randomStatus.code} ${randomStatus.description}</title>\n`//${randomStatus.code} ${randomStatus.description}`;
})();