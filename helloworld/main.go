package main

import (
	"log"
	"time"
)

func main() {
	t := time.NewTicker(1 * time.Minute)

	log.Print("Hello World!")
	for {
		select {
		case <-t.C:
			log.Print("Hello World!")
		}
	}
}
