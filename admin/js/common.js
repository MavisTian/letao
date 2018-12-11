
	NProgress.start();

	NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	 // 检测用户是否登录
	 $.ajax({
		url: '/api/employee/checkRootLogin',
		type: 'get',
		success: function (info) {
			if (info.error) {
				location.href = '/admin/login.html';
			}
		}
	})