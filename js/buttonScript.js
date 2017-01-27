// JavaScript Document
"use strict";
//派别标记
var PaiBei = "Taiji";
//选择派别0 & 选择属性1 按钮激活标记
var XZbottom = 0;


function ChangechoiceBG(ZhaoShi) {
	var Ditu = document.getElementById("choicePaiBei");
	var shi01 = document.getElementById("shi_01");
	var shi02 = document.getElementById("shi_02");
	var shiTimu = document.getElementById("shi_Timu");
	var hrhr = document.getElementById("cssStyle");
	switch (ZhaoShi) {
		case "Taiji":
			Ditu.setAttribute("class", "choicePaiBei cPBTaiji");
			shiTimu.innerHTML = "太极";
			shi01.innerHTML = "攻击具有渗透性，高消削。";
			shi02.innerHTML = "借力打力，化解冲击力。";
			hrhr.setAttribute("href", "./css/cssTaiji.css");
			break;
		case "Taiquan":
			Ditu.setAttribute("class", "choicePaiBei cPBTaiquan");
			shiTimu.innerHTML = "泰拳";
			shi01.innerHTML = "攻击猛锐迅捷，杀伤力大。";
			shi02.innerHTML = "并具有高抗打能力。";
			hrhr.setAttribute("href", "./css/cssTaiquan.css");
			break;
	}
}

/*window.onload = function(){
	var aaa = document.getElementById("choiceJinDuLan_XZshuxin");
	aaa.onclick = function(){
		aaa.innerHTML="aaa";
	};
};*/


//选择派别后的动作
function choicePB_h() {
	switch (PaiBei) {
		case "Taiji":
			document.getElementById("choiceZhaoshishiXiaoKuang_Taiji").style.backgroundColor = "#8ec4ec";
			document.getElementById("choiceZhaoshishiXiaoKuang_Taiquan").style.backgroundColor = "#fff";
			document.getElementById("ZhaoshiMinXiao").setAttribute("class", "ZhaoshiMinXiao Kuang10 ZsMX_Taiji");
			$("#ZhaoshiMinXiao").html("太<br />极");
			break;
		case "Taiquan":
			document.getElementById("choiceZhaoshishiXiaoKuang_Taiji").style.backgroundColor = "#fff";
			document.getElementById("choiceZhaoshishiXiaoKuang_Taiquan").style.backgroundColor = "#eb8d8d";
			document.getElementById("ZhaoshiMinXiao").setAttribute("class", "ZhaoshiMinXiao Kuang10 ZsMX_Taiquan");
			$("#ZhaoshiMinXiao").html("泰<br />拳");
			break;
	}
	document.getElementById("choiceJinDuLan_XZpaibei").setAttribute("class", "choiceJinDuLanButtom gray");
	document.getElementById("choiceJinDuLan_XZshuxin").setAttribute("class", "choiceJinDuLanButtom red");
	XZbottom = 1;
	ChangechoiceBG(PaiBei);
}


//选择派别大按钮
function choicePB(pbpb) {
	//var XZpaibei = document.getElementById("choiceJinDuLan_XZpaibei");
	//var XZshuxin = document.getElementById("choiceJinDuLan_XZshuxin");
	PaiBei = pbpb;
	choicePB_h();
	//document.getElementById("choiceZhaoshiDaKuang").style.display = "none";
	$("#choiceZhaoshiDaKuang").hide("fade", 300, DaKuangHtS_ps);
	//document.getElementById("choiceShuxinDaKuang").style.display = "inline";
}

function DaKuangHtS_ps() {
	$("#choiceShuxinDaKuang").show("fade", 300);
}

function DaKuangHtS_sp() {
	$("#choiceZhaoshiDaKuang").show("fade", 300);
}

//直接选择顶栏
function XZbottomFF(Bu) {
	if (Bu === 1) {
		if (XZbottom === 0) {
			choicePB_h();
			//document.getElementById("choiceZhaoshiDaKuang").style.display = "none";
			//document.getElementById("choiceShuxinDaKuang").style.display = "inline";
			$("#choiceZhaoshiDaKuang").hide("fade", 300, DaKuangHtS_ps);
			if (PaiBei === "Taiji") {
				document.getElementById("choicePaiBei").setAttribute("class", "choicePaiBei cPBTaiji");
			}
			if (PaiBei === "Taiquan") {
				document.getElementById("choicePaiBei").setAttribute("class", "choicePaiBei cPBTaiquan");
			}
		}
	} else {
		if (XZbottom === 1) {
			//document.getElementById("choiceZhaoshiDaKuang").style.display = "inline";
			//document.getElementById("choiceShuxinDaKuang").style.display = "none";
			$("#choiceShuxinDaKuang").hide("fade", 300, DaKuangHtS_sp);
			document.getElementById("choiceJinDuLan_XZpaibei").setAttribute("class", "choiceJinDuLanButtom red");
			document.getElementById("choiceJinDuLan_XZshuxin").setAttribute("class", "choiceJinDuLanButtom gray");
			XZbottom = 0;
		}
	}
}
//加"+"号
function Add_zh(a){
	var b;
	if(a > 0){
		b = "+" + a;	
	}else{
		b = a;
	}
	return b;
}

// “+-”号 点击
function SXtiaozheng(shuxin, a) {
	var mSX_LiLiang = ShuX_LiLiang.createNew();
	//var mSX_Minjie = ShuX_Minjie.createNew();
	var mSX_ZhiLi = ShuX_ZhiLi.createNew();
	var mSX_Tizhi = ShuX_Tizhi.createNew();
	//var mSX_Pinheng = ShuX_Pinheng.createNew();
	if (a === 0) {
		switch (shuxin) {
			case "Liliang":
				if (SX_Liliang > 0) {
					SX_Liliang--;
					SX_Sum++;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Liliang").html(SX_Liliang);
					$("#DianshuguanlianXiaoKuang_s_gongjiJC").html(Add_zh(Math.round((mSX_LiLiang.gongjiJC(SX_Liliang) - 1) * 100)) + "%");
					$("#DianshuguanlianXiaoKuang_s_baojishanghai").html(Add_zh(Math.round((mSX_LiLiang.baojishanghai(SX_Liliang) - 1) * 100)) + "%");
				}
				break;
			case "Minjie":
				if (SX_Minjie > 0) {
					SX_Minjie--;
					SX_Sum++;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Minjie").html(SX_Minjie);
					$("#DianshuguanlianXiaoKuang_s_shudu").html(SX_Minjie);
					$("#DianshuguanlianXiaoKuang_s_shanbi").html(SX_Minjie);
				}
				break;
			case "Zhili":
				if (SX_Zhili > 0) {
					SX_Zhili--;
					SX_Sum++;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Zhili").html(SX_Zhili);
					$("#DianshuguanlianXiaoKuang_s_baojijilv").html(mSX_ZhiLi.baojijilv(SX_Zhili)*100 + "%");
					$("#DianshuguanlianXiaoKuang_s_gongjifudongjilv").html(mSX_ZhiLi.gongjifudongjilv(SX_Zhili)*100 + "%");
					$("#DianshuguanlianXiaoKuang_s_minzhongxz").html(Add_zh(mSX_ZhiLi.minzhongxz(SX_Zhili)*100) + "%");
					$("#DianshuguanlianXiaoKuang_s_qinbao").html(SX_Zhili);
				}
				break;
			case "Tizhi":
				if (SX_Tizhi > 0) {
					SX_Tizhi--;
					SX_Sum++;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Tizhi").html(SX_Tizhi);
					$("#DianshuguanlianXiaoKuang_s_fangyujilv").html(SX_Tizhi);
					$("#DianshuguanlianXiaoKuang_s_yibanfanshuang").html(mSX_Tizhi.yibanfanshuang(SX_Tizhi)*100 + "%");
					$("#DianshuguanlianXiaoKuang_s_fangyufanshuang").html(mSX_Tizhi.fangyufanshuang(SX_Tizhi)*100 + "%");
					$("#DianshuguanlianXiaoKuang_s_wendinfantan").html(mSX_Tizhi.wendinfantan(SX_Tizhi)*100 + "%");
				}
				break;
			case "Pinheng":
				if (SX_Pinheng > 0) {
					SX_Pinheng--;
					SX_Sum++;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Pinheng").html(SX_Pinheng);
				}
				break;
		}
	} else {
		switch (shuxin) {
			case "Liliang":
				if (SX_Sum > 0 && SX_Liliang < 5) {
					SX_Liliang++;
					SX_Sum--;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Liliang").html(SX_Liliang);
					$("#DianshuguanlianXiaoKuang_s_gongjiJC").html(Add_zh(Math.round((mSX_LiLiang.gongjiJC(SX_Liliang) - 1) * 100)) + "%");
					$("#DianshuguanlianXiaoKuang_s_baojishanghai").html(Add_zh(Math.round((mSX_LiLiang.baojishanghai(SX_Liliang) - 1) * 100)) + "%");
				}
				break;
			case "Minjie":
				if (SX_Minjie < 5 && SX_Sum > 0) {
					SX_Minjie++;
					SX_Sum--;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Minjie").html(SX_Minjie);
					$("#DianshuguanlianXiaoKuang_s_shudu").html(SX_Minjie);
					$("#DianshuguanlianXiaoKuang_s_shanbi").html(SX_Minjie);
				}
				break;
			case "Zhili":
				if (SX_Zhili < 5 && SX_Sum > 0) {
					SX_Zhili++;
					SX_Sum--;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Zhili").html(SX_Zhili);
					$("#DianshuguanlianXiaoKuang_s_baojijilv").html(mSX_ZhiLi.baojijilv(SX_Zhili)*100 + "%");
					$("#DianshuguanlianXiaoKuang_s_gongjifudongjilv").html(mSX_ZhiLi.gongjifudongjilv(SX_Zhili)*100 + "%");
					$("#DianshuguanlianXiaoKuang_s_minzhongxz").html(Add_zh(mSX_ZhiLi.minzhongxz(SX_Zhili)*100) + "%");
					$("#DianshuguanlianXiaoKuang_s_qinbao").html(SX_Zhili);
				}
				break;
			case "Tizhi":
				if (SX_Tizhi < 5 && SX_Sum > 0) {
					SX_Tizhi++;
					SX_Sum--;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Tizhi").html(SX_Tizhi);
					$("#DianshuguanlianXiaoKuang_s_fangyujilv").html(SX_Tizhi);
					$("#DianshuguanlianXiaoKuang_s_yibanfanshuang").html(mSX_Tizhi.yibanfanshuang(SX_Tizhi)*100 + "%");
					$("#DianshuguanlianXiaoKuang_s_fangyufanshuang").html(mSX_Tizhi.fangyufanshuang(SX_Tizhi)*100 + "%");
					$("#DianshuguanlianXiaoKuang_s_wendinfantan").html(mSX_Tizhi.wendinfantan(SX_Tizhi)*100 + "%");
				}
				break;
			case "Pinheng":
				if (SX_Pinheng < 3 && SX_Sum > 0) {
					SX_Pinheng++;
					SX_Sum--;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Pinheng").html(SX_Pinheng);
				}
				break;
		}
	}
	if (SX_Sum === 0) {
		$(".DianshuDaKuang_TR3.DDK_T_jj").removeClass("DDK_T_jj");
	} else {
		$(".DianshuDaKuang_TR3").addClass("DDK_T_jj");
		if (SX_Liliang === 5) {
			$("#DianshuDaKuang_TR3_Liliang").removeClass("DDK_T_jj");
		}
		if (SX_Minjie === 5) {
			$("#DianshuDaKuang_TR3_Minjie").removeClass("DDK_T_jj");
		}
		if (SX_Zhili === 5) {
			$("#DianshuDaKuang_TR3_Zhili").removeClass("DDK_T_jj");
		}
		if (SX_Tizhi === 5) {
			$("#DianshuDaKuang_TR3_Tizhi").removeClass("DDK_T_jj");
		}
		if (SX_Pinheng === 3) {
			$("#DianshuDaKuang_TR3_Pinheng").removeClass("DDK_T_jj");
		}
	}
	if (SX_Liliang === 0) {
		$("#DianshuDaKuang_TR1_Liliang").removeClass("DDK_T_jj");
	} else {
		$("#DianshuDaKuang_TR1_Liliang").addClass("DDK_T_jj");
	}
	if (SX_Minjie === 0) {
		$("#DianshuDaKuang_TR1_Minjie").removeClass("DDK_T_jj");
	} else {
		$("#DianshuDaKuang_TR1_Minjie").addClass("DDK_T_jj");
	}
	if (SX_Zhili === 0) {
		$("#DianshuDaKuang_TR1_Zhili").removeClass("DDK_T_jj");
	} else {
		$("#DianshuDaKuang_TR1_Zhili").addClass("DDK_T_jj");
	}
	if (SX_Tizhi === 0) {
		$("#DianshuDaKuang_TR1_Tizhi").removeClass("DDK_T_jj");
	} else {
		$("#DianshuDaKuang_TR1_Tizhi").addClass("DDK_T_jj");
	}
	if (SX_Pinheng === 0) {
		$("#DianshuDaKuang_TR1_Pinheng").removeClass("DDK_T_jj");
	} else {
		$("#DianshuDaKuang_TR1_Pinheng").addClass("DDK_T_jj");
	}



}

/*关联数值变红*/
$(document).ready(function () {
	$("#DianshuDaKuang_T_Liliang").hover(
		function () {
			$("#DianshuguanlianXiaoKuang_gongjiJC").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_gongjiJC").addClass("redfont");
			$("#DianshuguanlianXiaoKuang_baojishanghai").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_baojishanghai").addClass("redfont");
		},
		function () {
			$("#DianshuguanlianXiaoKuang_gongjiJC").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_gongjiJC").removeClass("redfont");
			$("#DianshuguanlianXiaoKuang_baojishanghai").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_baojishanghai").removeClass("redfont");
		}
	);
	$("#DianshuDaKuang_T_Minjie").hover(
		function () {
			$("#DianshuguanlianXiaoKuang_shudu").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_shudu").addClass("redfont");
			$("#DianshuguanlianXiaoKuang_shanbi").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_shanbi").addClass("redfont");
		},
		function () {
			$("#DianshuguanlianXiaoKuang_shudu").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_shudu").removeClass("redfont");
			$("#DianshuguanlianXiaoKuang_shanbi").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_shanbi").removeClass("redfont");
		}
	);
	$("#DianshuDaKuang_T_Zhili").hover(
		function () {
			$("#DianshuguanlianXiaoKuang_baojijilv").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_baojijilv").addClass("redfont");
			$("#DianshuguanlianXiaoKuang_gongjifudongjilv").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_gongjifudongjilv").addClass("redfont");
			$("#DianshuguanlianXiaoKuang_minzhongxz").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_minzhongxz").addClass("redfont");
			$("#DianshuguanlianXiaoKuang_qinbao").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_qinbao").addClass("redfont");
		},
		function () {
			$("#DianshuguanlianXiaoKuang_baojijilv").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_baojijilv").removeClass("redfont");
			$("#DianshuguanlianXiaoKuang_gongjifudongjilv").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_gongjifudongjilv").removeClass("redfont");
			$("#DianshuguanlianXiaoKuang_minzhongxz").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_minzhongxz").removeClass("redfont");
			$("#DianshuguanlianXiaoKuang_qinbao").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_qinbao").removeClass("redfont");
		}
	);
	$("#DianshuDaKuang_T_Tizhi").hover(
		function () {
			$("#DianshuguanlianXiaoKuang_fangyujilv").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_fangyujilv").addClass("redfont");
			$("#DianshuguanlianXiaoKuang_yibanfanshuang").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_yibanfanshuang").addClass("redfont");
			$("#DianshuguanlianXiaoKuang_fangyufanshuang").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_fangyufanshuang").addClass("redfont");
			$("#DianshuguanlianXiaoKuang_wendinfantan").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_wendinfantan").addClass("redfont");
		},
		function () {
			$("#DianshuguanlianXiaoKuang_fangyujilv").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_fangyujilv").removeClass("redfont");
			$("#DianshuguanlianXiaoKuang_yibanfanshuang").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_yibanfanshuang").removeClass("redfont");
			$("#DianshuguanlianXiaoKuang_fangyufanshuang").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_fangyufanshuang").removeClass("redfont");
			$("#DianshuguanlianXiaoKuang_wendinfantan").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_wendinfantan").removeClass("redfont");
		}
	);
	$("#DianshuDaKuang_T_Pinheng").hover(
		function () {
			$("#DianshuguanlianXiaoKuang_wendinzhi").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_wendinzhi").addClass("redfont");
			$("#DianshuguanlianXiaoKuang_wendinhuifu").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_wendinhuifu").addClass("redfont");
		},
		function () {
			$("#DianshuguanlianXiaoKuang_wendinzhi").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_wendinzhi").removeClass("redfont");
			$("#DianshuguanlianXiaoKuang_wendinhuifu").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_wendinhuifu").removeClass("redfont");
		}
	);
});
