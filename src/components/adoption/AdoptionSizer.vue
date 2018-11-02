<template>
  <div>
    <div class="border">
      <div class="sizerContainer">
        <div class="pet-type">
          <button type="button" class="btn btn-lg btn-link" @click="show(0)">汪星人</button>
          <button type="button" class="btn btn-lg  btn-link" @click="show(1)">喵星人</button>
        </div>
        <div class="type-content">
          <span class="text-primary">品种:</span>
          <!--汪星人-->
          <div class="dogSizer" v-if="type == 0">
            <!-- Nav tabs -->
            <div class="letter">
              <ul class="nav nav-pills" role="tablist">
                <li role="presentation" class="active"><a href="#doghot" aria-controls="hot" role="tab"
                                                          data-toggle="tab">热门</a></li>
                <li role="presentation"><a href="#dogA" aria-controls="A" role="tab" data-toggle="tab">A</a></li>
                <li role="presentation"><a href="#dogB" aria-controls="B" role="tab" data-toggle="tab">B</a></li>
                <li role="presentation"><a href="#dogC" aria-controls="C" role="tab" data-toggle="tab">C</a></li>
                <li role="presentation"><a href="#dogD" aria-controls="D" role="tab" data-toggle="tab">D</a></li>
                <li role="presentation"><a href="#dogE" aria-controls="E" role="tab" data-toggle="tab">E</a></li>
                <li role="presentation"><a href="#dogF" aria-controls="F" role="tab" data-toggle="tab">F</a></li>
                <li role="presentation"><a href="#dogG" aria-controls="G" role="tab" data-toggle="tab">G</a></li>
                <li role="presentation"><a href="#dogH" aria-controls="H" role="tab" data-toggle="tab">H</a></li>
                <li role="presentation"><a href="#dogJ" aria-controls="J" role="tab" data-toggle="tab">J</a></li>
                <li role="presentation"><a href="#dogK" aria-controls="K" role="tab" data-toggle="tab">K</a></li>
                <li role="presentation"><a href="#dogL" aria-controls="L" role="tab" data-toggle="tab">L</a></li>
                <li role="presentation"><a href="#dogM" aria-controls="M" role="tab" data-toggle="tab">M</a></li>
                <li role="presentation"><a href="#dogN" aria-controls="N" role="tab" data-toggle="tab">N</a></li>
                <li role="presentation"><a href="#dogP" aria-controls="P" role="tab" data-toggle="tab">P</a></li>
                <li role="presentation"><a href="#dogQ" aria-controls="Q" role="tab" data-toggle="tab">Q</a></li>
                <li role="presentation"><a href="#dogR" aria-controls="R" role="tab" data-toggle="tab">R</a></li>
                <li role="presentation"><a href="#dogS" aria-controls="S" role="tab" data-toggle="tab">S</a></li>
                <li role="presentation"><a href="#dogT" aria-controls="T" role="tab" data-toggle="tab">T</a></li>
                <li role="presentation"><a href="#dogW" aria-controls="W" role="tab" data-toggle="tab">W</a></li>
                <li role="presentation"><a href="#dogX" aria-controls="X" role="tab" data-toggle="tab">X</a></li>
                <li role="presentation"><a href="#dogY" aria-controls="Y" role="tab" data-toggle="tab">Y</a></li>
                <li role="presentation"><a href="#dogZ" aria-controls="Z" role="tab" data-toggle="tab">Z</a></li>
              </ul>
            </div>
            <!-- Tab panes -->
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="doghot">
                <dl>
                  <dd style="color: #23527c"><a @click="addtype('-1')"><b>不限</b></a></dd>
                  <dd><a @click="addtype('萨摩耶')">萨摩耶</a></dd>
                  <dd><a @click="addtype('拉布拉多')">拉布拉多</a></dd>
                  <dd><a @click="addtype('柯基犬')">柯基犬</a></dd>
                  <dd><a @click="addtype('哈士奇')">哈士奇</a></dd>
                  <dd><a @click="addtype('金毛')">金毛</a></dd>
                  <dd><a @click="addtype('泰迪')">泰迪</a></dd>
                  <dd><a @click="addtype('英国斗牛犬')">英国斗牛犬</a></dd>
                  <dd><a @click="addtype('法国斗牛犬')">法国斗牛犬</a></dd>
                  <dd><a @click="addtype('博美')">博美</a></dd>
                  <dd><a @click="addtype('比熊犬')">比熊犬</a></dd>
                  <dd><a @click="addtype('边境牧羊犬')">边境牧羊犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogA">
                <dl>
                  <dd><a @click="addtype('澳大利亚牧牛犬')">澳大利亚牧牛犬</a></dd>
                  <dd><a @click="addtype('澳大利亚梗')">澳大利亚梗</a></dd>
                  <dd><a @click="addtype('安纳托利亚牧羊犬')">安纳托利亚牧羊犬</a></dd>
                  <dd><a @click="addtype('阿拉斯加')">阿拉斯加</a></dd>
                  <dd><a @click="addtype('澳大利亚牧羊犬')">澳大利亚牧羊犬</a></dd>
                  <dd><a @click="addtype('美国爱斯基摩犬')">美国爱斯基摩犬</a></dd>
                  <dd><a @click="addtype('爱尔兰猎狼犬')">爱尔兰猎狼犬</a></dd>
                  <dd><a @click="addtype('爱尔兰梗')">爱尔兰梗</a></dd>
                  <dd><a @click="addtype('阿芬平斯澈犬/猴面梗')">阿芬平斯澈犬/猴面梗</a></dd>
                  <dd><a @click="addtype('阿富汗猎犬')">阿富汗猎犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogB">
                <dl>
                  <dd><a @click="addtype('波音达犬')">波音达犬</a></dd>
                  <dd><a @click="addtype('比特犬')">比特犬</a></dd>
                  <dd><a @click="addtype('捕鼠梗')">捕鼠梗</a></dd>
                  <dd><a @click="addtype('葡萄牙波登可犬')">葡萄牙波登可犬</a></dd>
                  <dd><a @click="addtype('波兰牧羊犬')">波兰牧羊犬</a></dd>
                  <dd><a @click="addtype('伯恩山犬')">伯恩山犬</a></dd>
                  <dd><a @click="addtype('波利犬')">波利犬</a></dd>
                  <dd><a @click="addtype('布里塔尼犬')">布里塔尼犬</a></dd>
                  <dd><a @click="addtype('伯瑞犬')">伯瑞犬</a></dd>
                  <dd><a @click="addtype('波士顿犬')">波士顿犬</a></dd>
                  <dd><a @click="addtype('博美')">博美</a></dd>
                  <dd><a @click="addtype('冰岛牧羊犬')">冰岛牧羊犬</a></dd>
                  <dd><a @click="addtype('北海道犬')">北海道犬</a></dd>
                  <dd><a @click="addtype('贝灵顿梗')">贝灵顿梗</a></dd>
                  <dd><a @click="addtype('边境梗')">边境梗</a></dd>
                  <dd><a @click="addtype('巴吉度')">巴吉度</a></dd>
                  <dd><a @click="addtype('比格犬')">比格犬</a></dd>
                  <dd><a @click="addtype('比利牛斯獒犬')">比利牛斯獒犬</a></dd>
                  <dd><a @click="addtype('边境牧羊犬')">边境牧羊犬</a></dd>
                  <dd><a @click="addtype('比利时玛利诺犬')">比利时玛利诺犬</a></dd>
                  <dd><a @click="addtype('巴哥')">巴哥</a></dd>
                  <dd><a @click="addtype('比利时牧羊犬')">比利时牧羊犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogC">
                <dl>
                  <dd><a @click="addtype('茶杯犬')">茶杯犬</a></dd>
                  <dd><a @click="addtype('查理士王小猎犬')">查理士王小猎犬</a></dd>
                  <dd><a @click="addtype('川东猎犬')">川东猎犬</a></dd>
                  <dd><a @click="addtype('柴犬')">柴犬</a></dd>
                  <dd><a @click="addtype('长须牧羊犬')">长须牧羊犬</a></dd>
                  <dd><a @click="addtype('藏獒')">藏獒</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogD">
                <dl>
                  <dd><a @click="addtype('德国牧羊犬')">德国牧羊犬</a></dd>
                  <dd><a @click="addtype('短毛猎狐梗')">短毛猎狐梗</a></dd>
                  <dd><a @click="addtype('杜高')">杜高</a></dd>
                  <dd><a @click="addtype('斗牛梗')">斗牛梗</a></dd>
                  <dd><a @click="addtype('德国短毛指示犬')">德国短毛指示犬</a></dd>
                  <dd><a @click="addtype('德国杜宾犬')">德国杜宾犬</a></dd>
                  <dd><a @click="addtype('大麦町犬')">大麦町犬</a></dd>
                  <dd><a @click="addtype('德国刚毛指示犬')">德国刚毛指示犬</a></dd>
                  <dd><a @click="addtype('大型雪纳瑞')">大型雪纳瑞</a></dd>
                  <dd><a @click="addtype('丹迪丁蒙梗')">丹迪丁蒙梗</a></dd>
                  <dd><a @click="addtype('迷你杜宾犬')">迷你杜宾犬</a></dd>
                  <dd><a @click="addtype('大丹犬')">大丹犬</a></dd>
                  <dd><a @click="addtype('大白熊犬')">大白熊犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogE">
                <dl>
                  <dd><a @click="addtype('恶霸犬')">恶霸犬</a></dd>
                  <dd><a @click="addtype('俄罗斯南部牧羊犬')">俄罗斯南部牧羊犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogF">
                <dl>
                  <dd><a @click="addtype('芬兰狐狸犬')">芬兰狐狸犬</a></dd>
                  <dd><a @click="addtype('法国斗牛犬')">法国斗牛犬</a></dd>
                  <dd><a @click="addtype('佛兰德牧羊犬')">佛兰德牧羊犬</a></dd>
                  <dd><a @click="addtype('法国狼犬')">法国狼犬</a></dd>
                  <dd><a @click="addtype('法老王猎犬')">法老王猎犬</a></dd>
                  <dd><a @click="addtype('巴西菲勒犬')">巴西菲勒犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogG">
                <dl>
                  <dd><a @click="addtype('哥顿雪达犬')">哥顿雪达犬</a></dd>
                  <dd><a @click="addtype('高加索')">高加索</a></dd>
                  <dd><a @click="addtype('刚毛猎狐梗')">刚毛猎狐梗</a></dd>
                  <dd><a @click="addtype('古牧')">古牧</a></dd>
                  <dd><a @click="addtype('刚毛指示格里芬犬')">刚毛指示格里芬犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogH">
                <dl>
                  <dd><a @click="addtype('惠比特犬')">惠比特犬</a></dd>
                  <dd><a @click="addtype('荷兰毛狮犬')">荷兰毛狮犬</a></dd>
                  <dd><a @click="addtype('黑狼犬')">黑狼犬</a></dd>
                  <dd><a @click="addtype('爱尔兰红白雪达犬')">爱尔兰红白雪达犬</a></dd>
                  <!--<dd><a @click="addtype('哈威那犬/哈瓦那犬')">哈威那犬/哈瓦那犬</a></dd>-->
                  <dd><a @click="addtype('红骨猎浣熊犬')">红骨猎浣熊犬</a></dd>
                  <dd><a @click="addtype('德国狐狸犬')">德国狐狸犬</a></dd>
                  <dd><a @click="addtype('哈士奇')">哈士奇</a></dd>
                  <dd><a @click="addtype('蝴蝶犬')">蝴蝶犬</a></dd>
                  <dd><a @click="addtype('湖畔梗')">湖畔梗</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogJ">
                <dl>
                  <!--<dd><a @click="addtype('湖畔梗')">京巴犬/北京犬/狮子犬</a></dd>-->
                  <dd><a @click="addtype('加纳利犬')">加纳利犬</a></dd>
                  <dd><a @click="addtype('吉娃娃')">吉娃娃</a></dd>
                  <dd><a @click="addtype('金毛')">金毛</a></dd>
                  <dd><a @click="addtype('杰克罗素梗')">杰克罗素梗</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogK">
                <dl>
                  <dd><a @click="addtype('美国可卡犬')">美国可卡犬</a></dd>
                  <dd><a @click="addtype('匈牙利库维斯犬')">匈牙利库维斯犬</a></dd>
                  <dd><a @click="addtype('英国可卡犬')">英国可卡犬</a></dd>
                  <dd><a @click="addtype('中国昆明犬')">中国昆明犬</a></dd>
                  <!--<dd><a @click="addtype('杰克罗素梗')">凯利蓝梗/爱尔兰梗</a></dd>-->
                  <dd><a @click="addtype('凯恩梗')">凯恩梗</a></dd>
                  <dd><a @click="addtype('威尔士柯基')">威尔士柯基</a></dd>
                  <dd><a @click="addtype('柯基犬')">柯基犬</a></dd>
                  <dd><a @click="addtype('卡斯罗犬')">卡斯罗犬</a></dd>
                  <dd><a @click="addtype('克伦伯猎鹬犬')">克伦伯猎鹬犬</a></dd>
                  <dd><a @click="addtype('可蒙犬')">可蒙犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogL">
                <dl>
                  <dd><a @click="addtype('灵缇')">灵缇</a></dd>
                  <dd><a @click="addtype('腊肠犬')">腊肠犬</a></dd>
                  <dd><a @click="addtype('捷克狼犬')">捷克狼犬</a></dd>
                  <dd><a @click="addtype('拉布拉多')">拉布拉多</a></dd>
                  <dd><a @click="addtype('拉萨犬')">拉萨犬</a></dd>
                  <dd><a @click="addtype('罗威士梗')">罗威士梗</a></dd>
                  <dd><a @click="addtype('罗威纳犬')">罗威纳犬</a></dd>
                  <dd><a @click="addtype('罗得西亚脊背犬')">罗得西亚脊背犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogM">
                <dl>
                  <dd><a @click="addtype('马尔济斯犬')">马尔济斯犬</a></dd>
                  <dd><a @click="addtype('美国斗牛犬')">美国斗牛犬</a></dd>
                  <dd><a @click="addtype('马里努阿犬')">马里努阿犬</a></dd>
                  <dd><a @click="addtype('美国斯塔福梗')">美国斯塔福梗</a></dd>
                  <dd><a @click="addtype('美国猎狐犬')">美国猎狐犬</a></dd>
                  <dd><a @click="addtype('美国水猎犬')">美国水猎犬</a></dd>
                  <dd><a @click="addtype('曼彻斯特梗犬')">曼彻斯特梗犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogN">
                <dl>
                  <dd><a @click="addtype('牛头梗')">牛头梗</a></dd>
                  <dd><a @click="addtype('迷你牛头梗')">迷你牛头梗</a></dd>
                  <dd><a @click="addtype('纽芬兰犬')">纽芬兰犬</a></dd>
                  <dd><a @click="addtype('纽波利顿獒犬')">纽波利顿獒犬</a></dd>
                  <dd><a @click="addtype('挪威猎糜犬')">挪威猎糜犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogP">
                <dl>
                  <dd><a @click="addtype('葡萄牙水犬')">葡萄牙水犬</a></dd>
                  <dd><a @click="addtype('葡萄牙牧羊犬')">葡萄牙牧羊犬</a></dd>
                  <dd><a @click="addtype('帕特大勒梗')">帕特大勒梗</a></dd>
                  <dd><a @click="addtype('平毛寻回猎犬')">平毛寻回猎犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogQ">
                <dl>
                  <dd><a @click="addtype('拳师犬')">拳师犬</a></dd>
                  <dd><a @click="addtype('秋田犬-美系')">秋田犬-美系</a></dd>
                  <dd><a @click="addtype('切萨皮克海湾寻回犬')">切萨皮克海湾寻回犬</a></dd>
                  <dd><a @click="addtype('秋田犬-日本')">秋田犬-日本</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogR">
                <dl>
                  <dd><a @click="addtype('软毛麦色梗')">软毛麦色梗</a></dd>
                  <dd><a @click="addtype('日本狆犬')">日本狆犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogS">
                <dl>
                  <dd><a @click="addtype('澳洲丝毛梗')">澳洲丝毛梗</a></dd>
                  <dd><a @click="addtype('松狮犬')">松狮犬</a></dd>
                  <dd><a @click="addtype('苏格兰梗')">苏格兰梗</a></dd>
                  <dd><a @click="addtype('苏联红犬')">苏联红犬</a></dd>
                  <dd><a @click="addtype('苏格兰牧羊犬')">苏格兰牧羊犬</a></dd>
                  <dd><a @click="addtype('威尔士史宾格')">威尔士史宾格</a></dd>
                  <dd><a @click="addtype('斯科舍诱鸭寻回犬')">斯科舍诱鸭寻回犬</a></dd>
                  <dd><a @click="addtype('凯斯梗犬')">凯斯梗犬</a></dd>
                  <dd><a @click="addtype('沙皮犬')">沙皮犬</a></dd>
                  <dd><a @click="addtype('圣伯纳犬')">圣伯纳犬</a></dd>
                  <dd><a @click="addtype('萨路基犬')">萨路基犬</a></dd>
                  <dd><a @click="addtype('舒伯齐犬')">舒伯齐犬</a></dd>
                  <dd><a @click="addtype('萨摩耶犬')">萨摩耶犬</a></dd>
                  <dd><a @click="addtype('英国史宾格犬')">英国史宾格犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogT">
                <dl>
                  <dd><a @click="addtype('中华田园犬')">中华田园犬</a></dd>
                  <dd><a @click="addtype('日本土佐犬')">日本土佐犬</a></dd>
                  <dd><a @click="addtype('泰迪')">泰迪</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogW">
                <dl>
                  <dd><a @click="addtype('匈牙利威斯拉犬')">匈牙利威斯拉犬</a></dd>
                  <dd><a @click="addtype('万能梗/艾里梗')">万能梗/艾里梗</a></dd>
                  <dd><a @click="addtype('德国魏玛犬/威玛猎犬')">德国魏玛犬/威玛猎犬</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogX">
                <dl>
                  <dd><a @click="addtype('迷你雪纳瑞')">迷你雪纳瑞</a></dd>
                  <dd><a @click="addtype('寻血猎犬')">寻血猎犬</a></dd>
                  <dd><a @click="addtype('标准雪纳瑞犬')">标准雪纳瑞</a></dd>
                  <dd><a @click="addtype('爱尔兰雪达犬/红雪达')">爱尔兰雪达犬/红雪达</a></dd>
                  <dd><a @click="addtype('西藏猎犬')">西藏猎犬</a></dd>
                  <dd><a @click="addtype('西藏梗')">西藏梗</a></dd>
                  <dd><a @click="addtype('西里汉梗')">西里汉梗</a></dd>
                  <dd><a @click="addtype('西施犬')">西施犬</a></dd>
                  <dd><a @click="addtype('中国细犬')">中国细犬</a></dd>
                  <dd><a @click="addtype('小鹿犬')">小鹿犬</a></dd>
                  <dd><a @click="addtype('下司犬')">下司犬</a></dd>
                  <dd><a @click="addtype('西高地')">西高地</a></dd>
                  <dd><a @click="addtype('喜乐蒂')">喜乐蒂</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogY">
                <dl>
                  <dd><a @click="addtype('英国斗牛犬')">英国斗牛犬</a></dd>
                  <dd><a @click="addtype('意大利灵缇')">意大利灵缇</a></dd>
                  <dd><a @click="addtype('约克夏梗')">约克夏梗</a></dd>
                  <dd><a @click="addtype('英国猎狐犬')">英国猎狐犬</a></dd>
                  <dd><a @click="addtype('英国雪达犬')">英国雪达犬</a></dd>
                  <dd><a @click="addtype('日本银狐')">日本银狐</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="dogZ">
                <dl>
                  <dd><a @click="addtype('中亚牧羊犬')">中亚牧羊犬</a></dd>
                  <dd><a @click="addtype('中国冠毛犬')">中国冠毛犬</a></dd>
                </dl>
              </div>
            </div>
          </div>
          <!--喵星人-->
          <div class="catSizer" v-if="type == 1">
            <!--字母-->
            <div class="letter">
              <ul class="nav nav-pills" role="tablist">
                <li role="presentation" class="active"><a href="#cathot" aria-controls="cathot" role="tab"
                                                          data-toggle="tab">热门</a></li>
                <li role="presentation"><a href="#catA" aria-controls="A" role="tab" data-toggle="tab">A</a></li>
                <li role="presentation"><a href="#catB" aria-controls="B" role="tab" data-toggle="tab">B</a></li>
                <li role="presentation"><a href="#catD" aria-controls="D" role="tab" data-toggle="tab">D</a></li>
                <li role="presentation"><a href="#catE" aria-controls="E" role="tab" data-toggle="tab">E</a></li>
                <li role="presentation"><a href="#catJ" aria-controls="J" role="tab" data-toggle="tab">J</a></li>
                <li role="presentation"><a href="#catK" aria-controls="K" role="tab" data-toggle="tab">K</a></li>
                <li role="presentation"><a href="#catM" aria-controls="M" role="tab" data-toggle="tab">M</a></li>
                <li role="presentation"><a href="#catP" aria-controls="P" role="tab" data-toggle="tab">P</a></li>
                <li role="presentation"><a href="#catR" aria-controls="R" role="tab" data-toggle="tab">R</a></li>
                <li role="presentation"><a href="#catS" aria-controls="S" role="tab" data-toggle="tab">S</a></li>
                <li role="presentation"><a href="#catT" aria-controls="T" role="tab" data-toggle="tab">T</a></li>
                <li role="presentation"><a href="#catX" aria-controls="X" role="tab" data-toggle="tab">X</a></li>
                <li role="presentation"><a href="#catY" aria-controls="Y" role="tab" data-toggle="tab">Y</a></li>
                <li role="presentation"><a href="#catZ" aria-controls="Z" role="tab" data-toggle="tab">Z</a></li>
              </ul>
            </div>
            <!--内容-->
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="cathot">
                <dl>
                  <dd style="color: #23527c" ><a @click="addtype('-1')"><b>不限</b></a></dd>
                  <dd><a @click="addtype('加菲猫')">加菲猫</a></dd>
                  <dd><a @click="addtype('英国短毛猫')">英国短毛猫</a></dd>
                  <dd><a @click="addtype('折耳猫')">折耳猫</a></dd>
                  <dd><a @click="addtype('东方猫')">东方猫</a></dd>
                  <dd><a @click="addtype('布偶猫')">布偶猫</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane " id="catA">
                <dl>
                  <dd><a @click="addtype('阿比西尼亚猫')">阿比西尼亚猫</a></dd>
                  <dd><a @click="addtype('矮脚猫')">矮脚猫</a></dd>
                  <dd><a @click="addtype('奥西猫')">奥西猫</a></dd>
                  <dd><a @click="addtype('埃及猫')">埃及猫</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="catB">
                <dl>
                  <dd><a @click="addtype('波米拉猫')">波米拉猫</a></dd>
                  <dd><a @click="addtype('伯曼猫')">伯曼猫</a></dd>
                  <dd><a @click="addtype('波斯猫')">波斯猫</a></dd>
                  <dd><a @click="addtype('布偶猫')">布偶猫</a></dd>
                  <dd><a @click="addtype('柴猫')">柴猫</a></dd>
                  <dd><a @click="addtype('巴厘猫')">巴厘猫</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="catD">
                <dl>
                  <dd><a @click="addtype('东方猫')">东方猫</a></dd>
                  <dd><a @click="addtype('德文卷毛猫')">德文卷毛猫</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="catE">
                <dl>
                  <dd><a @click="addtype('俄罗斯蓝猫')">俄罗斯蓝猫</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="catJ">
                <dl>
                  <dd><a @click="addtype('加拿大无毛猫')">加拿大无毛猫</a></dd>
                  <dd><a @click="addtype('金吉拉')">金吉拉</a></dd>
                  <dd><a @click="addtype('加菲猫')">加菲猫</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="catK">
                <dl>
                  <dd><a @click="addtype('卡尔特猫')">卡尔特猫</a></dd>
                  <dd><a @click="addtype('科拉特猫')">科拉特猫</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="catM">
                <dl>
                  <dd><a @click="addtype('英国短毛猫')">英国短毛猫</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="catP">
                <dl>
                  <dd><a @click="addtype('皮堡斯')">皮堡斯</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="catR">
                <dl>
                  <dd><a @click="addtype('日本短尾猫')">日本短尾猫</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="catS">
                <dl>
                  <dd><a @click="addtype('塞尔凯特卷毛猫')">塞尔凯特卷毛猫</a></dd>
                  <dd><a @click="addtype('折耳猫')">折耳猫</a></dd>
                  <dd><a @click="addtype('山东狮子猫')">山东狮子猫</a></dd>
                  <dd><a @click="addtype('斯芬克斯猫')">斯芬克斯猫</a></dd>
                  <dd><a @click="addtype('沙特尔猫')">沙特尔猫</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="catT">
                <dl>
                  <dd><a @click="addtype('土耳其安哥拉猫')">土耳其安哥拉猫</a></dd>
                  <dd><a @click="addtype('土耳其梵猫')">土耳其梵猫</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="catX">
                <dl>
                  <dd><a @click="addtype('新加坡猫')">新加坡猫</a></dd>
                  <dd><a @click="addtype('喜马拉雅猫')">喜马拉雅猫</a></dd>
                  <dd><a @click="addtype('西伯利亚森林猫')">西伯利亚森林猫</a></dd>
                  <dd><a @click="addtype('夏尔特猫')">夏尔特猫</a></dd>
                  <dd><a @click="addtype('暹罗猫')">暹罗猫</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="catY">
                <dl>
                  <dd><a @click="addtype('英国短毛猫')">英国短毛猫</a></dd>
                </dl>
              </div>
              <div role="tabpanel" class="tab-pane" id="catZ">
                <dl>
                  <dd><a @click="addtype('中国狸花猫')">中国狸花猫</a></dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div class="sex">
          <span class="text-primary">性别:</span>
          <el-radio-group @change="addsex" v-model="adosex" size="small">
            <el-radio-button label="-1">不限</el-radio-button>
            <el-radio-button label="0">公</el-radio-button>
            <el-radio-button label="1">母</el-radio-button>
          </el-radio-group>
        </div>
        <!--<div class="sex">-->
          <!--<span class="text-primary">年龄:</span>-->
          <!--<el-radio-group @change="addage"  v-model="adoage" size="small">-->
            <!--<el-radio-button label="0">不限</el-radio-button>-->
            <!--<el-radio-button label="1">2个月内</el-radio-button>-->
            <!--<el-radio-button label="2">2-3个月</el-radio-button>-->
            <!--<el-radio-button label="3">6个月</el-radio-button>-->
            <!--<el-radio-button label="4">6-12个月</el-radio-button>-->
            <!--<el-radio-button label="5">1年以上</el-radio-button>-->
            <!--<el-radio-button label="6">3年以上</el-radio-button>-->
          <!--</el-radio-group>-->
        <!--</div>-->
      </div>

    </div>
  </div>
</template>

<script>
  import store from './store.js'
  export default {
    name: "AdoptionSizer",
    data() {
      return {
        type: 0,
        adosex:'-1',
        adoage:'0',
      }
    },
    methods: {
      addsex(){
        store.commit('addpetSex',this.adosex)
      },
      addtype(type){
        store.commit('addpetType',type)
      },

      show: function (index) {
        this.type = index;
      }
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    cursor: pointer;
  }
  dl{
    margin-bottom:50px
  }
  .border {
    background: url("../../assets/adoption/border.png") no-repeat;
    width: 800px;
    height: 509px;
    background-size: 100% 100%;
    padding-top: 100px;
  }

  .type-content {
    margin-top: 15px;
  }

  .letter li a {
    padding: 5px 10px;
  }

  .sex {
    clear: left;
    margin-top: 20px;
  }

  .sex li a {
    padding: 5px 10px;
  }

  .sizerContainer {
    margin-left: 100px;
  }

  .tab-content {
    margin-top: 5px;
  }

  .tab-content dd {
    display: inline-block;
    margin-left: 8px;
    margin-top: 5px;
  }

  .sizerContainer span {
    float: left;
    margin-right: 20px;
    font-size: 16px;
    line-height: 30px;
  }

  .dogSizer, .catSizer {
    float: left;
    width: 580px;
  }

  .pet-type {
    margin-left: 60px;
  }

</style>
