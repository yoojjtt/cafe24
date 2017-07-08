	 <div class="col-lg-7">
		<div class="panel panel-default">
			<div class="panel-body">
				
				<h1>글쓰기 (Write) <a class="btn btn-info" href="/index.php/topic" >Topic page</a></h1>
				
				<div class="col-lg-12">
				   <form action="/index.php/topic/write" method="post">  <!-- 쓰는 페이지이자, echo하는 페이지-->
						
						
						<?php echo validation_errors(); ?> <!-- validation error가 발생했을 때 다시 페이지로 돌려주는 역할-->
						<input type="text" name="id" placeholder="작성자" class="form-control"/>
						<input type="text" name="title" placeholder="제목" class="form-control"/>
						<textarea name="description" placeholder="본문" class="form-control" rows="15"></textarea>
						<div class="span5">
						<input type="submit" class="btn btn-success" value="submit" class="form-control"/>
						</div>



					</form>
				</div>
				
			
				
			</div>
		</div>
	</div>
	<!-- /.col-lg-12 -->
</div>
<!-- /.row -->