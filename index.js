// 创建按钮
const createBtn = () => {
  const backToTopBtn = document.createElement('div');
  backToTopBtn.setAttribute('id', 'back-to-top');
  backToTopBtn.innerHTML = `
  <svg t="1575621299051" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1241" data-spm-anchor-id="a313x.7781069.0.i0" width="32" height="32"><path d="M514.56 304.64c-78.08 0-140.8-62.72-140.8-140.8s62.72-140.8 140.8-140.8 140.8 62.72 140.8 140.8-62.72 140.8-140.8 140.8z m0-231.68c-49.92 0-89.6 40.96-89.6 89.6s40.96 89.6 89.6 89.6 89.6-40.96 89.6-89.6-39.68-89.6-89.6-89.6zM376.32 719.36c-12.8 0-23.04-8.96-25.6-21.76l-12.8-78.08c-49.92 30.72-116.48 48.64-177.92 48.64h-51.2c-14.08 0-25.6-11.52-25.6-25.6v-81.92c0-14.08 11.52-25.6 25.6-25.6h14.08c76.8 0 126.72-35.84 185.6-133.12 3.84-8.96 8.96-17.92 15.36-25.6 20.48-26.88 49.92-42.24 80.64-42.24h217.6c30.72 0 60.16 14.08 80.64 40.96 1.28 1.28 1.28 1.28 1.28 2.56 5.12 7.68 10.24 15.36 14.08 24.32 58.88 97.28 108.8 133.12 185.6 133.12h14.08c14.08 0 25.6 11.52 25.6 25.6v81.92c0 14.08-11.52 25.6-25.6 25.6h-51.2c-60.16 0-125.44-17.92-175.36-47.36l-11.52 76.8c-2.56 14.08-15.36 23.04-29.44 21.76-14.08-2.56-24.32-15.36-21.76-29.44l16.64-117.76c1.28-8.96 7.68-16.64 16.64-20.48 8.96-3.84 19.2-1.28 25.6 5.12 40.96 35.84 113.92 61.44 177.92 61.44h25.6v-30.72c-89.6-3.84-153.6-51.2-217.6-160 0-1.28-1.28-1.28-1.28-2.56-2.56-6.4-6.4-11.52-10.24-16.64-7.68-10.24-20.48-21.76-39.68-21.76h-217.6c-19.2 0-32 11.52-39.68 21.76-3.84 5.12-6.4 10.24-10.24 16.64 0 1.28-1.28 1.28-1.28 2.56-65.28 108.8-129.28 156.16-217.6 160v30.72h25.6c64 0 138.24-25.6 179.2-61.44 6.4-6.4 16.64-7.68 25.6-5.12 8.96 2.56 15.36 10.24 16.64 20.48l19.2 119.04c2.56 14.08-7.68 26.88-20.48 29.44-2.56-1.28-3.84-1.28-5.12-1.28z" p-id="1242"></path><path d="M857.6 968.96c-2.56 0-6.4 0-8.96-1.28l-325.12-49.92-325.12 49.92c-30.72 5.12-60.16-14.08-69.12-43.52-3.84-15.36-2.56-30.72 5.12-43.52 7.68-12.8 20.48-23.04 35.84-26.88l10.24-2.56c-19.2-10.24-33.28-23.04-43.52-38.4-10.24-16.64-14.08-34.56-8.96-52.48 15.36-53.76 97.28-69.12 166.4-51.2l227.84 56.32 227.84-56.32c69.12-16.64 151.04-2.56 166.4 51.2 5.12 16.64 2.56 35.84-8.96 52.48-8.96 14.08-24.32 28.16-43.52 38.4l10.24 2.56c15.36 3.84 28.16 12.8 35.84 26.88 7.68 12.8 8.96 28.16 5.12 43.52-5.12 26.88-30.72 44.8-57.6 44.8z m-334.08-102.4h3.84l328.96 51.2c5.12 1.28 11.52-3.84 12.8-7.68v-3.84c-1.28-1.28-1.28-2.56-3.84-2.56l-102.4-25.6c-11.52-2.56-20.48-14.08-19.2-25.6s10.24-21.76 21.76-24.32l23.04-3.84c40.96-6.4 70.4-24.32 79.36-38.4 3.84-6.4 2.56-8.96 2.56-10.24-5.12-15.36-52.48-29.44-104.96-16.64L529.92 819.2c-3.84 1.28-7.68 1.28-12.8 0l-234.24-57.6c-53.76-12.8-101.12 0-104.96 16.64 0 1.28-1.28 3.84 2.56 10.24 8.96 14.08 37.12 32 79.36 38.4l23.04 3.84c11.52 1.28 21.76 11.52 21.76 24.32s-7.68 23.04-19.2 25.6l-102.4 25.6c-1.28 0-2.56 1.28-3.84 2.56 0 1.28-1.28 2.56 0 3.84 1.28 3.84 6.4 7.68 12.8 7.68l328.96-51.2c0-2.56 1.28-2.56 2.56-2.56z" p-id="1243"></path></svg>
  <div id='close-btn'>
    <svg t="1566714657112" viewBox="0 0 1038 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12560" width="20" height="20"><path d="M509.125332 997.359791C236.342166 997.359791 14.419101 775.403955 14.419101 502.620789 14.419101 229.804853 236.342166 7.849017 509.125332 7.849017s494.739002 221.955836 494.739002 494.771772c0 272.783166-221.955836 494.739002-494.739002 494.739002zM726.85375 321.923243l-36.998101-36.965331-180.697547 180.664776-180.697546-180.664776-36.998101 36.965331 180.697546 180.697546-180.697546 180.664776 36.998101 36.998101 180.697546-180.697546 180.697547 180.697546 36.998101-36.998101-180.697546-180.664776 180.697546-180.697546z" fill="#B3B3B3" p-id="12561"></path></svg>
  </div>
  `
  backToTopBtn.addEventListener('click', onClick);


  return backToTopBtn;


}

function closeBox() {
  var popBox = document.getElementById("popBox");
  var popLayer = document.getElementById("popLayer");
  popBox.style.display = "none";
  popLayer.style.display = "none";
}


const pop = () => {

  const popLayer = document.createElement('div');
  popLayer.setAttribute('id', 'popLayer');
  popLayer.innerHTML = `
    <div id="popBox">
        <div class="close">
            <a href="javascript:void(0)" id="closeButton" οnclick="closeBox()">关闭</a>
        </div>
        <div id="classificationDiv">

        分类：<input id ="classificationInput"></input> 
        <input type="button" id="classificationAdd" value="添加">
        </div>
        <hr>
     
        分类:<div>
            <select id="starClassification" >
              </select> <input type="button" id="classificationDel" value="删除分类">
</div>
</br>
<div class="content">
备注:<input id="starComment"></input>
</br>
  <input type="button" id="starSave" value="保存">
  <hr>
  <div id="star_list">
  </div>
        </div>
    </div>
    `;

  return popLayer;


}

function popBox() {
  var popBox = document.getElementById("popBox");
  var popLayer = document.getElementById("popLayer");
  popBox.style.display = "block";
  popLayer.style.display = "block";

  document.getElementById("classificationDiv").style.display = "block";

};

function popBoxWithAll() {
  var popBox = document.getElementById("popBox");
  var popLayer = document.getElementById("popLayer");
  popBox.style.display = "block";
  popLayer.style.display = "block";
  document.getElementById("classificationDiv").style.display = "none";

};

/*点击关闭按钮*/


// 点击事件
const onClick = () => {

  (function smoothscroll() {

    popBox();
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(smoothscroll);
      window.scrollTo(0, currentScroll - (currentScroll / 5));
    }
  })();
}

function AddStarItem() {
  localStorage.setItem("star_list", JSON.stringify(1));
}
// 关闭按钮
const onClose = (e) => {

  e.stopPropagation();
  var backToTopBtn = document.querySelector('#back-to-top');
  backToTopBtn.style.display = 'none';
  window.onscroll = null
  return
}

function addClassification(c){

  var  list;
  chrome.storage.local.get(['classification'], function (result) {
  
      if(typeof result.classification == "object"){
        list = result.classification;
      }
      else{
        list = [];
      }
      list.push(c);
      chrome.storage.local.set({ classification: list }, function () {
        console.log("添加分类成功");
        updateC();
      });
  });
}

function delClassification(index){

  var  list;
  chrome.storage.local.get(['classification'], function (result) {
  
      if(typeof result.classification == "object"){
        list = result.classification;
      }
      else{
        list = [];
      }
      list.del([index]);
      chrome.storage.local.set({ classification: list }, function () {
        updateC();
        alert("删除分类成功");
        console.log("删除分类成功");
      });
  });
}


function addStarRepo(classification,comment,name,url,star_num){

  var  list;
  chrome.storage.local.get(['star_repo'], function (result) {
      if(typeof result.star_repo == "object"){
        list = result.star_repo;
      }
      else{
        list = [];
      }
      list.push({classification:classification,comment:comment,name:name,url:url,star_num:star_num});
      chrome.storage.local.set({ star_repo: list }, function () {
        alert("添加成功");
        console.log("添加成功");
        updateS();
      });
  });
}

const addC = () => {

  (function _() {
    addClassification(  document.getElementById("classificationInput").value ); 
  })();
}

// 把按钮插入文档
const injectBtn = () => {
  try {
    document.getElementsByClassName("btn btn-sm btn-with-count js-toggler-target")[1].onmouseup = function () { alert("开始记录吧"); popBoxWithAll(); return true; };
  } catch (e) {
    console.log(e);
  };
  var body = document.querySelector('body');
  body.appendChild(createBtn());
  body.appendChild(pop());
  document.getElementById("closeButton").addEventListener('click', closeBox);
  document.getElementById("classificationAdd").addEventListener('click',addC); 
  var selectedObj = document.getElementById("starClassification");

  document.getElementById("classificationDel").addEventListener('click',function (){delClassification(selectedObj.options[selectedObj.selectedIndex].value)}); 
  document.getElementById("starSave").addEventListener('click',function (){ 
     var c = selectedObj.options[selectedObj.selectedIndex].value;
     var comment = document.getElementById("starComment").value;
     var url =""
     
    var  name =document.querySelector('#js-repo-pjax-container > div.pagehead.repohead.instapaper_ignore.readability-menu.experiment-repo-nav > div > h1 > span.author > a').innerHTML;
    var repo = document.querySelector('#js-repo-pjax-container > div.pagehead.repohead.instapaper_ignore.readability-menu.experiment-repo-nav > div > h1 > strong > a');
    url = repo.href;
    var star_num = document.querySelector('#js-repo-pjax-container > div.pagehead.repohead.instapaper_ignore.readability-menu.experiment-repo-nav > div > ul > li:nth-child(2) > div > form.unstarred.js-social-form > a').innerHTML;
    console.log(c);
    console.log(comment);
    console.log(name);
    console.log(repo.innerHTML)
    addStarRepo(c,comment,name+'/'+repo.innerHTML,url,star_num);
  
  }); 
  
  //displayHandler();
  document.querySelector('#back-to-top').style.display = 'block';
  var closeBtn = document.querySelector('#close-btn');
  closeBtn.addEventListener('click', onClose);
};

/*
// 监听滚动，大于50px才显示按钮
window.onscroll = function(e) {
  displayHandler()
}

// 控制按钮显示/隐藏
const displayHandler = () => {
  var currentScroll=document.documentElement.scrollTop||document.body.scrollTop;
  var backToTopBtn = document.querySelector('#back-to-top');
  if (!backToTopBtn) return
  if (currentScroll >50) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
}
*/

Array.prototype.del = function(indexList) {
  function isValidate(number) {
    if(isNaN(number) && number > this.length) {
      return false;
    }
  }
  if(indexList instanceof Array) {
    indexList.sort(function(x, y) {
      if(x > y) {
        return 1;
      } else {
        return -1;
      }
    });
    var lastIndex = indexList[indexList.length - 1];
    isValidate(lastIndex);
    for(var i = 0; i < indexList.length; i++) {
      var n = i;
      if(n > 0) {
        indexList[i] = indexList[i] - n;
      }
      this.splice(indexList[i], 1);
      n++;
    }
  } else {
    isValidate(indexList);
    this.splice(indexList, 1);
  }
}


function updateC(){
  chrome.storage.local.get(['classification'], function (result) {
    console.log(result.classification);
    document.getElementById("starClassification").options.length= 0;
    for (let index = 0; index < result.classification.length; index++) {
      const element = result.classification[index];
            document.getElementById("starClassification").options.add(new Option(element,index)); 
    }
  });
  
  }
  
  function updateS(){
    chrome.storage.local.get(['star_repo'], function (result) {

      if(result != null){
        document.getElementById("star_list").innerHTML="";
      for (let index = 0; index < result.star_repo.length; index++) {
        const element = result.star_repo[index];
        document.getElementById("star_list").innerHTML +="<div><a href='"+element.url+"'>"+element.name+"</a>   ["+element.star_num+"] </div>" ;
      }
    }
  });
  }

  

injectBtn();
updateC();
updateS();
// chrome.storage.local.clear(function(){});