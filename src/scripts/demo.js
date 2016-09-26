export function display(){
	var width = window.innerWidth;

	reDisplay()

	if(width > 1100) {
		$("section:eq(0)>div").slice(0, 4).wrapAll("<div></div>");
		$("section:eq(0)>div").slice(1, 3).wrapAll("<div></div>");
		$("section:eq(0)>div:eq(1)").append("<div class='hide'>h</div>");
		$("section:eq(0)>div:eq(1)").append("<div class='hide'>h</div>");
		$("section:eq(4)>div").slice(0, 4).wrapAll("<div></div>");
		$("section:eq(4)>div").slice(1, 3).wrapAll("<div></div>");
		$("section:eq(4)>div:eq(1)").append("<div class='hide'>h</div>");
		$("section:eq(4)>div:eq(1)").append("<div class='hide'>h</div>");

	}
	if(width < 1100 && width > 800){
		$("section:eq(0)>div").slice(0, 3).wrapAll("<div></div>");
		$("section:eq(0)>div").slice(1, 4).wrapAll("<div></div>");
		$("section:eq(4)>div").slice(0, 3).wrapAll("<div></div>");
		$("section:eq(4)>div").slice(1, 4).wrapAll("<div></div>");
	}
	if(width < 800 && width > 500){
		$("section:eq(0)>div").slice(0, 2).wrapAll("<div></div>");
		$("section:eq(0)>div").slice(1, 3).wrapAll("<div></div>");
		$("section:eq(0)>div").slice(2, 4).wrapAll("<div></div>");
		$("section:eq(4)>div").slice(0, 2).wrapAll("<div></div>");
		$("section:eq(4)>div").slice(1, 3).wrapAll("<div></div>");
		$("section:eq(4)>div").slice(2, 4).wrapAll("<div></div>");
	}
	if(width <500){
		$("section:eq(0)>div").wrap("<div></div>");
		$("section:eq(4)>div").wrap("<div></div>");
	}
}

function reDisplay(){
	$("section:eq(0)").html("<div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div>");
	$("section:eq(4)").html("<div><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem rem nam dolore repellendus provident, voluptas necessitatibus vel cupiditate delectus, doloremque incidunt accusantium quia! Nisi molestiae totam natus, in assumenda accusantium.</div></div><div><div>Lorem ipsum dolor sit amet.</div></div><div><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At sunt harum ut rerum id quae voluptas velit iusto quasi distinctio.</div></div><div><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, sequi?</div></div><div><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nisi deserunt, dolorem accusamus sint ipsam dolor quae ab animi assumenda architecto placeat possimus fugit doloribus vel, corporis amet aliquam maiores!</div></div><div><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div></div>");
}