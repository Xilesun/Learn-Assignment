export function display(){
	var width = window.innerWidth,
	    left = $(".left"),
	    right = $(".right");
	if(width > 768){
		left.html("<div>1</div><div>2</div><div>5</div><div>6</div>");
		right.html("<div>3</div><div>4</div><div>7</div>");
	}
	if(width < 768 && width > 420){
		left.html("<div>1</div><div>5</div><div>6</div>");
		right.html("<div>3</div><div>2</div><div>4</div><div>7</div>");		
	}
	if(width < 420){
		left.html("<div>3</div><div>2</div><div>1</div><div>4</div><div>5</div><div>6</div><div>7</div>");
	}
}

