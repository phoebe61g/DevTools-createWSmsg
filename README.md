# DevTools-createWSmsg
Manipulating WebSocket to Send/Receive Messages Using JavaScript in DevTools Console.

## The WebSocket Object

On the Chrome tab where WebSockets are running, open the DevTools in Chrome (shortcut key: F12). By default, DevTools records all network requests in the Network panel while it's open. Set the filter to 'WS' to only capture WebSocket traffic. Once you've selected the WebSocket item you're interested in, open the Messages tab to observe when messages are sent and echoed.
![image](https://github.com/phoebe61g/DevTools-createWSmsg/assets/57568523/5a37e57f-3624-42d7-82aa-876965bea44b)

Switch to the Console panel. Here, you can load the WebSocket object and perform actions using JavaScript.
Type 'queryObjects(WebSocket)' and store the object you want as a global variable. The default name would be 'temp1'.
<img width="704" alt="queryObject_WS" src="https://github.com/phoebe61g/DevTools-createWSmsg/assets/57568523/5560c795-c59f-44ec-90d1-e046e9ed31fa">

## Usage
Sample codes can be directly run in the console, and you can also modify some variables as needed.
The initial sample codes provided aim to measure the time difference between when messages are sent and when they are echoed back. More operations may be added in the future.

## Motivation
The Mist Remote Shell utilizes Websockets to facilitate command transmission. Each character input by the administrator is transmitted to the device in real-time. Upon receiving the character, the device sends back the displayed character to the Remote Shell for the administrator to see. This round-trip process enables us to measure the time it takes for managed traffic to travel between Mist Cloud and the device.
