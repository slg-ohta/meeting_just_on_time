$(function() {
	$.getJSON("https://sheetsu.com/apis/04fbd25d" , function(data) {
		var title = $("#title");
		var agenda = $("#agenda");
		var member = $("#member");

		var len = data["result"].length;

		for(var i = 0; i < len; i++) {
			if (data["result"][i].type == 1) {
				title.append($("<li>").attr({"id":"date","class":data["result"][i].id}).text(data["result"][i].date));
			}
		}

		for(var i = 0; i < len; i++) {
			if (data["result"][i].type == 1) {
				$("#date").append($("#title").attr({"class":data["result"][i].id}).text(data["result"][i].title));
			}
		}

		for(var i = 0; i < len; i++) {
			if (data["result"][i].type == 2 && data["result"][i].agenda != null) {
				agenda.append($("<li>").attr({"class":data["result"][i].id}).text(data["result"][i].agenda));
			}
		}

		for(var i = 0; i < len; i++) {
			if (data["result"][i].type == 3) {
				member.append($("<li>").attr({"class":data["result"][i].id}).text(data["result"][i].name));
			}
		}

	});
});