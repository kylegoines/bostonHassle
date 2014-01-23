<?php

/*
Template Name: Static page
 */



get_header(); ?>


		<div id="primary" class="content-area">

			<h3>Sort By:</h3>
			<ul class="sort">
				<li class="sort-all">All</li>
				<li class="musicBtn sort-music">Music</li>
				<li class="filmBtn sort-film">Film</li>
				<li class="artBtn sort-art">Art</li>
			</ul>

			<div id="content" class="site-content" role="main">


			<div class="tonight">
				<h1>Events tonight</h1>

			</div>


				<script id="some-template" type="text/x-handlebars-template">

					{{#events}}
						<a class="{{cat}}" href="{{url}}">
							<div class="event-static">
								<div class="date-module">
									<p class="monthName">{{month}}</p>
									<p class="dateNum">{{date}}</p>
								</div>

								<div class="event-content">
									<h3>{{name}}</h3>
									<time>{{time}}</time>

									<ul>
										<li class="location">@{{location}}</li>
										<li class="ages">{{ages}}</li>
										<li class="price">{{price}}</li>
									</ul>

								</div>

							</div>
						</a>
					{{/events}}

				</script>

				<div id='content-placeholder'>
				</div>

			</div><!-- #content .site-content -->

		</div><!-- #primary .content-area -->

<?php get_footer(); ?>