// var appName = rawInput("微信");
// launchApp(appName);

console.show();
threads.start(function () {
    events.observeNotification();
    events.on("notification", function (n) {
        if (n.getText().indexOf('[微信红包]') >= 0) {
            n.click();
        }
    });
});


while (true) {
    var idx = -1;
    className("TextView").find().forEach(function (tv) {
        if (tv.text() === '微信红包') {
            idx++;
            var rpp = tv.parent();
            if (rpp == null) {
                return;
            }

            var rd = rpp.parent();
            if (rd == null) {
                return;
            }
            //已领取  、已领完字样
            var textInfo = rd.findOne(id('aul'));
            if (textInfo == null) {
                var flag = true;
                switch (rpp.depth()) {
                    case 14:
                        flag = false;
                        break;
                    case 17:
                        flag = false;
                        break;
                    default:
                        break;
                }

                if (flag) {
                    return;
                }

                //点击红包
                click(tv.text(), idx);
                sleep(200);
                //点击开
                var dan = id("dan").findOne();
                if (dan != null) {
                    dan.click();
                }
                sleep(200);
                //打印红包信息
                var d62 = id("d62").findOne();
                if (d62 != null) {
                    console.log('抢到的金额：%s', d62.text());
                }

                back();
            }
        }
    });
    sleep(1000);
}

