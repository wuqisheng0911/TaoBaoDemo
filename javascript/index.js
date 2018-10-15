$(function() {
	// 搜索栏下滑固定
	function fixtop() {
		var $hold = $(".hold");
		var $content = $(".canchange");
		$(window).scroll(function(event) {
			// console.log(window.scrollY);
			if (window.scrollY>=120) {
				$content.removeClass("body-top-header").addClass("fixed");
				$hold.css("height","120px");
			}else{
				$content.addClass("body-top-header").removeClass("fixed");
				$hold.css("height","0px");
			}
		});
	}
	// 轮播图1
	function carousel_one(){
		var $banner = $(".carousel-ad-top");
		var $ul = $("ul.carousel-ad-top-in");
		var $li = $("ul.carousel-ad-top-in li");
		var length = $li.length-1;
		var Width = $li.width();
		var $prev = $("i.previous");
		var $next = $("i.next");
		var $li_index = $("ul.carousel-ad-top-index li");
		var current_index = 0;
		// 点击索引点移动
		$li_index.click(function() {
			$(this).addClass("active").siblings().removeClass("active");
			var index = $li_index.index($(this));
			$ul.stop().animate({
				'left': -index*Width
			});
			current_index = index;
		});
		// 点击前进按钮移动
		$next.click(function() {
			if (current_index >= length) {
				current_index = 0;
				$ul.css('left',0);
			}
			current_index++;
			$ul.stop().animate({
				'left': -current_index*Width
			});
		
			if (current_index == length) {
				$li_index.eq(0).addClass("active").siblings().removeClass("active");
			}else{
				$li_index.eq(current_index).addClass("active").siblings().removeClass("active");
			}
		});
		// 点击后退按钮移动
		$prev.click(function() {
			if (current_index <= 0) {
				current_index = length;
				$ul.css('left',-current_index*Width);
			}
			current_index--;
			$ul.stop().animate({
				'left': -current_index*Width
			});
			if (current_index == length) {
				$li_index.eq(0).addClass("active").siblings().removeClass("active");
			}else{
				$li_index.eq(current_index).addClass("active").siblings().removeClass("active");
			}
		});
		//自动播放
		var time = setInterval(function() {
			$next.click();
		},2000);
		// 鼠标移入停止
		$banner.mouseover(function() {
			clearInterval(time);
		});
		// 鼠标移出播放
		$banner.mouseout(function() {
			time = setInterval(function() {
				$next.click();
			},2000);
		});
	}
	// 轮播图2
	function carousel_two(){
		var $banner = $(".bottom-ad-content");
		var $ul = $(".banner_content");
		var $li = $(".banner_content li");
		var Width = $li.width();
		var length = $li.length-1;
		var $li_index = $(".carousel-ad-bottom-index li");
		var current_index = 0;
		var $prev = $("i.prev");
		var $nex = $("i.nex");
		var $span = $(".top-mark i span");
		// 点击前进按钮移动
		$nex.click(function() {
			if (current_index >= length) {
				current_index = 0;
				$ul.css('left',0);
			}
			current_index++;
			$ul.stop().animate({
				'left': -current_index*Width
			});
			if (current_index == length) {
				$span.text("1");
				$li_index.eq(0).addClass("changeBg").siblings().removeClass("changeBg");
			}else{
				$span.text(current_index+1);
				$li_index.eq(current_index).addClass("changeBg").siblings().removeClass("changeBg");
			}
		});
		// 点击后退按钮移动
		$prev.click(function() {
			if (current_index <= 0) {
				current_index = length;
				$ul.css('left',-current_index*Width);
			}
			current_index--;
			$ul.stop().animate({
				'left': -current_index*Width
			});
			if (current_index == length) {
				$li_index.eq(0).addClass("changeBg").siblings().removeClass("changeBg");
			}else{
				$li_index.eq(current_index).addClass("changeBg").siblings().removeClass("changeBg");
			}
		});
			//自动播放
		var time = setInterval(function() {
			$nex.click();
		},3000);
		// 鼠标移入停止
		$banner.mouseover(function() {
			clearInterval(time);
		});
		// 鼠标移出播放
		$banner.mouseout(function() {
			time = setInterval(function() {
				$nex.click();
			},3000);
		});
	}
	// 
	fixtop();
	carousel_one();
	carousel_two();
	function mbChange() {
		var md = $("div.mb-show").eq(0).siblings("div.mb-show");
		var tto;
		$(".body-content-in-nav ul li").mouseenter(function() {
			var index = $(".body-content-in-nav ul li").index($(this));
			md.eq(index).css("display","block");
			md.eq(index).siblings("div.mb-show").css("display","none");
			md.eq(index).mouseenter(function() {
				clearTimeout(tto);
			});
			md.eq(index).mouseleave(function() {
				md.css("display","none");
				$("div.mb-show").eq(0).css("display","block");
			});
		});
		$(".body-content-in-nav ul").mouseleave(function() {
				tto = setTimeout(function() {
				md.css("display","none");
				$("div.mb-show").eq(0).css("display","block");
			},100);
		});
	}
	mbChange();
});