// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.text === 'report_back') {
    var a=[];
    var metas = document.getElementsByTagName('meta');
    for (var i=0; i<metas.length; i++) { 
      if (metas[i].getAttribute("property") == "od:id") { 
        a.push(metas[i].getAttribute("content"));
      }
    }
    sendResponse(a[0]);
  }
});