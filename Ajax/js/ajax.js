/* SOURCE: https://github.com/furkansenturk/Javascript/Ajax/ */
function ajax(e){if(null==e.method?e.method="POST":0==e.method.length&&(e.method="POST"),e.method=e.method.toUpperCase(),e.contentType||(e.contentType="application/x-www-form-urlencoded"),"object"==typeof e.data){d="";for(var t in e.data)"object"!=typeof e.data[t]&&(d+=t+"="+e.data[t]+"&");e.data=d.substr(0,d.length-1)}b=new XMLHttpRequest,b.onreadystatechange=function(){4===this.readyState&&(e.XMLHttpRequest&&0!=e.XMLHttpRequest.length&&e.XMLHttpRequest(this),200===this.status&&(s=this.responseText,e.response&&0!=e.response.length&&(e.responseType&&"JSON"==e.responseType.toUpperCase()&&(s=JSON.parse(s)),e.response(s))))},"GET"==e.method&&(e.url+="?"+e.data,e.data=""),b.open(e.method,e.url,!0),b.setRequestHeader("Content-type",e.contentType),b.send(e.data)}