/**
 * Created by Administrator on 8/16 0016.
 */

var data = [];
var dataStr ='1、cc1<br><br>描述内容1<br><br><br>' +
    '2、cc2<br><br>描述内容2<br><br><br>' +
    '3、cc3<br><br>描述内容3<br><br><br>' +
    '4、cc4<br><br>描述内容4<br><br><br>' +
    '5、cc5<br><br>描述内容5<br><br><br>' +
    '6、cc6<br><br>描述内容6<br><br><br>' +
    '7、cc7<br><br>描述内容7<br><br><br>' +
    '8、cc8<br><br>描述内容8<br><br><br>' +
    '9、cc9<br><br>描述内容9<br><br><br>' +
    '10、cc10<br><br>描述内容10<br><br><br>' +
    '11、cc11<br><br>描述内容11<br><br><br>' +
    '12、cc12<br><br>描述内容12<br><br><br>' +
    '13、cc13<br><br>描述内容13<br><br><br>' +
    '14、cc14<br><br>描述内容14<br><br><br>' +
    '15、cc15<br><br>描述内容15<br><br><br>' +
    '16、cc16<br><br>描述内容16<br><br><br>' +
    '17、cc17<br><br>描述内容17<br>' ;
var d = dataStr.split('<br><br><br>');
for(var i = 0;i< d.length;i++){

    var c = d[i].split('<br><br>');
    data.push({
        /*向data中加入对象*/
        img :c[0].split('、')[1]+'.jpg',
        caption:c[0].split('、')[1],
        desc: c[1]
    });
    //console.log(c[0].split('、')[1]+'.jpg');
}