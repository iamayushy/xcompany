# Xnation - A Community Gaming Platform

## 1. Working Fearures
    1. The Landing page Is Completed
    2. SignUp With Email and Google Is Implemented

## 2. Pendig
    1. Page To Load Once the user is authenticated
    2. Zoom integration is pending

## 3. Implementing Zoom Integration
    1. Need to install the zoom sdk
    Using the given commant " npm i @zoomus/websdk "


## 4. Initializing the zoom sdk
```js
    import ZoomMtgEmbedded from "@zoomus/websdk/embedded"

    const client = ZoomMtgEmbedded.createClient() // creates a zoom environment


```
## 5. Add the config file for userAuth
```js
   client.join({
   sdkKey: sdkKey,
   signature: signature,
   meetingNumber: meetingNumber,
   password: password,
   userName: userName
})
```
## The above will help to use zoom, will try to use 100ms sdk because it's more customizeable and can be use for large userbase.
