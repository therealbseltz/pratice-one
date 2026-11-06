package main

import (
    "log"
    "net/http"
    "github.com/elazarl/goproxy"
)

func main() {
    proxy := goproxy.NewProxyHttpServer()
    proxy.Verbose = true // Logs traffic to the console

    log.Println("Starting proxy on :8080...")
    log.Fatal(http.ListenAndServe(":8080", proxy))
}
