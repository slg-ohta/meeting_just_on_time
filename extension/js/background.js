    var BG=this;

    // var agenda_time = data["result"][i].time;

    var callback=function(){
        // if (data["result"][i].type == 2) {
            BG.message='この議題はあと３分で終了する予定です';
            BG.pattern = 1;
        // } elseif {
            // BG.message='この議題を終了する時間です';
            // BG.pattern = 2;
        // }

        var notification = chrome.notifications.create('notification.html');
        // notification.show();
    }

    setTimeout(callback, 2000);
