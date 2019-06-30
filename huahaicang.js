var qiang = function(){	
	var btnActive = document.querySelector('div.btn.active');	
	if (btnActive) {
		console.log("active: " + btnActive);
      	btnActive.click();
      	// location.reload();
	} else {
		console.log("not active!");
		location.reload();
	}
}


setTimeout(qiang, 1000);

// var intervalId;
// intervalId = setInterval(function(){
// 	now = new Date();
// 	var hour = now.getHours();
// 	var min = now.getMinutes();
// 	var sec = now.getSeconds();
// 	var millisec = now.getMilliseconds();

// 	if(hour == 12 && min ==0 && sec >= 0 && millisec >= 0) {
// 		qiang();
// 		if (intervalId > 0) {
// 			clearInterval(intervalId);
// 		}
// 	}
// }, 50);



// var outBtn;
// var innerBtn;

// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }

// function begin() {
// 	console.log("BEGIN!!!!");
// 	outBtn = setInterval(function(){
// 		var btn = document.getElementById('payname_four');
// 		if (!btn) console.log('没找到签单按钮！');
// 		if (btn) {
// 			btn.click();
// 			console.log('outer button clicked!');
// 		}
// 	}, getRandomArbitrary(3000, 5000));

// 	innerBtn = setInterval(function(){
// 		var as = document.querySelectorAll('#get_orders a');
// 		[].forEach.call(as, function(a){
// 			a.click();
// 			console.log('inner button clicked!');
// 		});
// 	}, 10);

// 	console.log(outBtn);
// 	console.log(innerBtn);
// }

// function end() {
// 	console.log('END!!!!')
// 	if(outBtn > 0) {
// 		console.log(outBtn);
// 		clearInterval(outBtn); 
// 	}
// 	if(innerBtn > 0) {
// 		console.log(innerBtn);
// 		clearInterval(innerBtn);
// 	}
// }

// function updated() {
// 	console.log('UPDATED!!!!');
// 	if(outBtn > 0) {
// 		console.log(outBtn);
// 		clearInterval(outBtn); 
// 	}
// 	if(innerBtn > 0) {
// 		console.log(innerBtn);
// 		clearInterval(innerBtn);
// 	}
// 	begin();
// }




