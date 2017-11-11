  var a = [  
    ['1','2','3','4','5','6','7','8','9','0'],
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['z','x','c','v','b','n','m'],
    ];
    
    var hash = {
    '1':'lolimy.club/start',
    '2':'baidu.com',
    '3':'acfun.tv',
    '4':'github.com',
    '5':'gitter.im',
    '6':'alpha.wallhaven.cc',
    '7':'',
    '8':'',
    '9':'twitter.com',
    '0':'163.com',
    'q':'qq.com',
    'w':'weibo.com',
    'e':'exhentai.org',
    'r':'',
    't':'taobao.com',
    'y':'',
    'u':'',
    'i':'iqiyi.com',
    'o':'',
    'p':'pixiv.net',
    'a':'amazon.co.jp',
    's':'',
    'd':'douban.com',
    'f':'facebook.com',
    'g':'google.com',
    'h':'',
    'j':'JD.com',
    'k':'konachan.net',
    'l':'lolimy.club',
    'z':'zhaopin.com',
    'x':'xunlei.com',
    'c':'chiphell.com',
    'v':'v2ex.com',
    'b':'bilibili.com',
    'n':'nyaa.si',
    'm':'meituan.com',      
    };
    var hashInLocalStorage = JSON.parse(localStorage.getItem('wangzhin'||'null'));
    if(hashInLocalStorage){
	    hash = hashInLocalStorage;
	};
    var index,index2;
    for(index = 0;index<a.length;index++){
      var divn = document.createElement('div');
      var row = a[index];
      kb.appendChild(divn);
      for(index2=0;index2<row.length;index2++){
        var kbdn = document.createElement('kbd');
        divn.appendChild(kbdn);
		    var spann = document.createElement('span');
        spann.textContent = row[index2];
		    kbdn.appendChild(spann);
	      //var ht = /\w*#?/.exec(/.*\./i.exec(hash[row[index2]]));   
	      kbdn.id = row[index2];
	      var imgn = document.createElement('img');
	      if (hash[row[index2]]){
	        imgn.src ='https://' + hash[row[index2]] + '/favicon.ico';
	      }else{
	        imgn.src = './tuer.png';
	      }
	        kbdn.appendChild(imgn);
	        imgn.onerror = function(xxx) {
	        xxx.target.src = './tuer.png';
	      };
	
	      imgn.onclick = function(keyb) {
	        var z = this.parentNode.id;
	        window.open('https://' + hash[z],'_blank');
	       keyb.stopPropagation();
	      };
	      kbdn.onclick = function(keyb) {
          var y = keyb['target']['id'];
          window.open('https://' + hash[y],'_blank');
        }; 

        var buttonn = document.createElement('button');
        buttonn.textContent = '编辑';
        kbdn.appendChild(buttonn);
        buttonn.id = row[index2];
        buttonn.onclick = function(btn){
	        var bt2 = btn['target'];		
          var key=  btn['target']['id'];
          var x = prompt('更改网址 格式 例：qq.com',hash[key]);
	        if (x !== null) {	
            hash[key] = x; 
            localStorage.setItem('wangzhix',JSON.stringify(hash));
	        	bt2.previousSibling.src='https://' + x + '/favicon.ico';
	        };
	        btn.stopPropagation();
        };
      };
    };
   document.onkeypress = function (keyb){
     if(hash[keyb.key]){
       console.log(hash[keyb]);
      window.open('https://' + hash[keyb.key],'_blank'); 
     }
    };
    
