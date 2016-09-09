//输入框高亮
$('input').on('focus',function(){
	$(this).parent().addClass('focus');
});
$('input').on('blur',function(){
	$(this).parent().removeClass('focus');
});

//弹出框
//dialog-fixed
function showDialog(container){
	container.fadeIn('fast');
	dialogFixed(container.find('.dialog-wrap'));
}
function hideDialog(container){
	container.fadeOut();
}
//提示框
function showTipDiialog(container,text,callfun){
	if(text){
		container.html(text);
	}	
	container.fadeIn();
	dialogFixed(container);
	setTimeout(function(){
		container.fadeOut();
		if(typeof(callfun)=='function'){
			callfun();
		}
	},1500);
}
//弹出框位置调整，垂直、水平居中
function dialogFixed(container){
	var width = container.outerWidth();
	var height = container.outerHeight();
	container.css({'margin-left':-width/2,'margin-top':-height/2});
}
//关闭弹出框
$('.btn-dialog').on('touchstart',function(){
	$('.dialog-cover').fadeOut();
});
//弹出框x按钮关闭
$('.icon-close').on('touchstart',function(){
	$(this).parents('.dialog-cover').fadeOut();
});

//获取url参数
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}