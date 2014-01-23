<?php

/**

 * The Sidebar containing the main widget areas.

 *

 * @package Visual

 * @since Visual 0.1

 */

?>

	<div id="chosen-shows">	

	<a href="http://www.bostonhassle.com/events/category/music-2/"><h1 class="fontheader">Chosen Shows</h1></a>
	

		<div id="index-secondary" class="widget-area" role="complementary">

			

			<?php do_action( 'before_sidebar' );
                                 date_default_timezone_set('UTC');
                                      
            ?>

			<?php if ( ! dynamic_sidebar( 'sidebar-2' ) ) : ?>



				<aside id="search" class="widget widget_search">

					<?php get_search_form(); ?>

				</aside>



				<aside id="archives" class="widget">

					<h1 class="widget-title"><?php _e( 'Archives', 'visual' ); ?></h1>

					<ul>

						<?php wp_get_archives( array( 'type' => 'monthly' ) ); ?>

					</ul>

				</aside>



				<aside id="meta" class="widget">

					<h1 class="widget-title"><?php _e( 'Meta', 'visual' ); ?></h1>

					<ul>

						<?php wp_register(); ?>

						<li><?php wp_loginout(); ?></li>

						<?php wp_meta(); ?>

					</ul>

				</aside>



			<?php endif; // end sidebar widget area ?>

		</div><!-- #secondary .widget-area -->
		
		<div id="sidebar-nav">
			<a id="scrollUp">&uarr; Top </a>
			<a id="scrollDown">&darr; More</a>
			<span class="right-align"><a href="http://www.bostonhassle.com/events/">Full Calendar &rarr;</a></span>
		</div>


	</div>

