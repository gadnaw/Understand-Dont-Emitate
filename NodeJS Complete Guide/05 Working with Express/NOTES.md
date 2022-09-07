# Don't re-invent the Wheel
## - focus on your Business Logics
## - ExpressJs is all about Middleware
## npm install --save express
----------------------------------------------------------------
# Module Goal:
1. Using Middleware
1. Working with Requests & Responses (elegantly)
1. Routing
1. Returning HTML Pages (Files)

# Why ExpressJS:
1. simpler server logic
1. you want to focus on your Business Logic, not on the nitty-gritty Details
1. Use a Framework for the Heavy Lifting

Source Code  express/lib/response.js

# app.use
app.use([path,] callback [, callback...])

## app.get()
 - is an app.use but only for get requests

## app.post()
 - is an app.use but only for post requests

## app.patch()
## app.put()
## app.delete()