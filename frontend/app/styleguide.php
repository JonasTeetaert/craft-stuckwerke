<?php include 'inc/head.php' ?>

<body>
	<section class="section">
		<div class="section__inner">
			<div class="content-box">
				<h1>Styleguide</h1>
				<p>made by Jonas Teetaert</p>
			</div>
		</div>
	</section>
	<section class="section">
		<div class="section__inner">
			<div class="content-box">
				<h2>Colors</h2>
				<ul class="colors">
					<li>
						<div class="colorblock red"></div>
						<span>color-primary: #e04246</span>
					</li>
					<li>
						<div class="colorblock dark-blue"></div>
						<span>color-secondary: #06044d</span>
					</li>
					<li>
						<div class="colorblock light-gray"></div>
						<span>light-gray</span>
					</li>
					<li>
						<div class="colorblock gray"></div>
						<span>gray</span>
					</li>
				</ul>
			</div>
		</div>
	</section>
	<section class="section">
		<div class="section__inner">
			<div class="content-box">
				<h1>Headers</h1>
				<h1>H1. This is a h1 title</h1>
				<h2>H2. This is a h2 title</h2>
				<h3>H3. This is a h3 title</h3>
			</div>
		</div>
	</section>
	<section class="section">
		<div class="section__inner">
			<div class="content-box">
				<h1>Paragraph en links</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mattis tellus iaculis viverra. Nunc
					auctor dolor
					orci, a interdum purus facilisis id. Etiam dolor nulla, dignissim et nunc sit amet, tristique bibendum dui.
					Nunc ultricies
					tellus et est ornare, non viverra felis commodo. Vivamus pharetra ultricies sollicitudin.
					<a href="#">Link</a> Cras congue mattis ante, maximus vehicula urna posuere id. Curabitur eleifend aliquet
					porttitor. Etiam pretium
					risus in dictum malesuada. Donec et mollis orci, a sollicitudin leo. Praesent eget erat purus.</p>
			</div>
		</div>
	</section>
	<section class="section">
		<div class="section__inner">
			<div class="content-box">
				<h1>Buttons</h1>
				<p>
					<a class="btn" href="#">about</a>
				</p>
				<p>
					<a class="btn btn--firstletter" href="#">Jonas Teetaert</a>
				</p>
				<p>
					<a class="btn btn--shadow" href="#">Jonas Teetaert</a>
				</p>
				<div class="">
					<input class="toggle" id="about" type="checkbox">
					<label class="toggle--label btn" for="about" data-on="close" data-off="about"></label>
				</div>
			</div>
		</div>
	</section>
	<section class="section">
		<div class="section__inner">
			<div class="content-box">
				<h1>Icon</h1>
			</div>
		</div>
	</section>
	<!-- scripts -->
	<?php include 'inc/scripts.php' ?>
</body>

</html>