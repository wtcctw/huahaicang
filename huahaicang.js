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


setTimeout(qiang, 500);



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




