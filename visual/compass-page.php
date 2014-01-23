<?php
/**
Template Name: Compass
 */
 
get_header(); ?>

		<div id="primary" class="content-area">
			<div id="content" class="site-content" role="main">

				<?php $args = array( 'post_type' => 'compass', 'posts_per_page' => 10 );
					$loop = new WP_Query( $args );
					while ( $loop->have_posts() ) : $loop->the_post(); ?>
					
					<?php get_template_part( 'content', 'single' ); ?>

				<?php visual_content_nav( 'nav-below' ); ?>

<?php endwhile; ?>

			</div><!-- #content .site-content -->
		</div><!-- #primary .content-area -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>