auto();
setScreenMetrics(2960, 1440);
//启动APP
//app.launchApp("刷宝短视频")
while (true) {
    //下滑操作
    var w1 = device.width / 2 + Math.ceil(Math.random() * 10 + 10);
    var w2 = device.width / 2 + Math.ceil(Math.random() * 10 + 5);
    var h1 = 5500 + Math.ceil(Math.random() * 10 + 20);
    var h2 = 300 + Math.ceil(Math.random() * 10 + 15);
    var time = 1000 + Math.ceil(Math.random() * 10 + 15);
    swipe(w1, h1, w2, h2, time);
    var sleepTime = Math.ceil(Math.random() * 10 + 15) * 1000;
    sleep(sleepTime);
}