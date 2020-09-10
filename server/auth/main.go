package main

import (
	"fmt"
	"log"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/quasoft/memstore"
)

// var store = sessions.NewCookieStore([]byte("kjbkjbjkdsfbjsdfbjb"))
var store = memstore.NewMemStore(
	[]byte("authkey123"),
	[]byte("enckey12341234567890123456789012"),
)

type server struct{}

const api_key = "123"

func (s *server) HandleAPIKey(handler http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		x := r.Header.Get("X-API-KEY")
		if x != api_key {
			w.WriteHeader(http.StatusUnauthorized)
		} else {
			handler(w, r)
		}
	}
}

func (s *server) HandleBasicAuth(handler http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		username, password, ok := r.BasicAuth()
		if !ok || username != "user" || password != "pass" {
			w.Header().Set("WWW-Authenticate", `Basic realm="Please log in"`)
			w.WriteHeader(http.StatusUnauthorized)
		} else {
			handler.ServeHTTP(w, r)
		}
	})
}

func (s *server) HandleVerifySession(handler http.Handler) http.Handler {

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.RequestURI == "/" {

			session, _ := store.Get(r, "session-name")
			if session.Values["isLoggedIn"] != true {
				w.WriteHeader(http.StatusUnauthorized)
				http.Redirect(w, r, "/login", http.StatusTemporaryRedirect)
			} else {

				handler.ServeHTTP(w, r)
			}
		} else {

			handler.ServeHTTP(w, r)
		}
	})
}

func (s *server) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	session, _ := store.Get(r, "session-name")
	val := session.Values["count"]
	count, ok := val.(int)
	if !ok {
		count = 0
	}
	count = count + 1
	session.Values["count"] = count
	err := session.Save(r, w)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	fmt.Println("count", count)

	w.Header().Set("Content-Type", "text/html")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(`<h1>HELLO` + strconv.Itoa(count) + `</h1>`))
}

func (s *server) ServeLoginForm(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(`
	<form action="/handleLogin" method="POST">
	<input name="user"/>
	<input name="pass"/>
	<input type="submit"/>
	</form>	
	`))
}

func (s *server) ServeLoginAuth(w http.ResponseWriter, r *http.Request) {
	// Call ParseForm() to parse the raw query and update r.PostForm and r.Form.
	if err := r.ParseForm(); err != nil {
		fmt.Fprintf(w, "ParseForm() err: %v", err)
		http.Redirect(w, r, "/login", http.StatusTemporaryRedirect)
		return
	}
	name := r.FormValue("user")
	password := r.FormValue("pass")
	fmt.Println(name, password)
	if name != "user" || password != "pass" {
		http.Redirect(w, r, "/login", http.StatusTemporaryRedirect)
	} else {
		session, _ := store.Get(r, "session-name")
		session.Values["user"] = name
		session.Values["isLoggedIn"] = true
		_ = session.Save(r, w)
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
	}
}

func main() {

	s := &server{}
	r := mux.NewRouter()
	r.Use(s.HandleVerifySession)
	r.HandleFunc("/", s.ServeHTTP)
	r.HandleFunc("/login", s.ServeLoginForm)
	r.HandleFunc("/handleLogin", s.ServeLoginAuth)
	http.Handle("/", r)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
