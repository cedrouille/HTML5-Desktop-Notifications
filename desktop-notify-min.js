(function(e){function m(t,n){var r;return e.Notification?r=new e.Notification(t,{icon:c(n.icon)?n.icon:n.icon.x32,body:n.body||u,tag:n.tag||u}):e.webkitNotifications?(r=e.webkitNotifications.createNotification(n.icon,t,n.body),r.show()):navigator.mozNotification?(r=navigator.mozNotification.createNotification(t,n.body,n.icon),r.show()):e.external&&e.external.msIsSiteMode()&&(e.external.msSiteModeClearIconOverlay(),e.external.msSiteModeSetIconOverlay(c(n.icon)?n.icon:n.icon.x16,t),e.external.msSiteModeActivate(),r={ieVerification:f+1}),r}function g(t){return{close:function(){t&&t.close?t.close():e.external&&e.external.msIsSiteMode()&&t.ieVerification===f&&e.external.msSiteModeClearIconOverlay()}}}function y(t){if(!a)return;var n=l(t)?t:d;e.webkitNotifications&&e.webkitNotifications.checkPermission?e.webkitNotifications.requestPermission(n):e.Notification&&e.Notification.requestPermission&&e.Notification.requestPermission(n)}function b(){var t;if(!a)return;return e.Notification&&e.Notification.permissionLevel?t=e.Notification.permissionLevel():e.webkitNotifications&&e.webkitNotifications.checkPermission?t=i[e.webkitNotifications.checkPermission()]:navigator.mozNotification?t=n:e.external&&e.external.msIsSiteMode()&&(t=n),t}function w(e){return e&&h(e)&&p(v,e),v}function E(t,r){var i,s;return a&&c(t)&&r&&(c(r.icon)||h(r.icon))&&b()===n&&(i=m(t,r),s=g(i),r.timeout&&i.addEventListener&&i.addEventListener("show",function(){var t=s;e.setTimeout(function(){t.close()},r.timeout)})),s}var t="default",n="granted",r="denied",i=[n,t,r],s={pageVisibility:!0},o={},u="",a=function(){try{return!!(e.Notification||e.webkitNotifications||navigator.mozNotification||e.external&&e.external.msIsSiteMode()!==undefined)}catch(t){}}(),f=Math.floor(Math.random()*10+1),l=function(e){return e&&e.constructor===Function},c=function(e){return e&&e.constructor===String},h=function(e){return e&&e.constructor===Object},p=function(e,t){var n,r;for(n in t){r=t[n];if(!(n in e)||e[n]!==r&&(!(n in o)||o[n]!==r))e[n]=r}return e},d=function(){},v=s;e.notify={PERMISSION_DEFAULT:t,PERMISSION_GRANTED:n,PERMISSION_DENIED:r,isSupported:a,config:w,createNotification:E,permissionLevel:b,requestPermission:y},l(Object.freeze)&&Object.freeze(e.notify)})(window);
