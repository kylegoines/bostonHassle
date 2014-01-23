<?php
/**
 * The Template for displaying all single posts.
 *
 * @package Visual
 * @since Visual 0.1
 */

get_header(); ?>

		<div id="primary" class="content-area">
			<div id="content" class="site-content" role="main">

			<?php while ( have_posts() ) : the_post(); ?>

				<section class="comic single-comic">
					
				<header class="comic-header">
				<h1> <?php echo get_the_term_list($post->ID, 'series');?> by 
					<?php echo get_the_term_list($post->ID, 'comic_author');?>
					
				</h1>
				
				<div class="comic-creds">
				<?php echo get_the_date(); ?>
				</div>
				</header>
			
				<nav class="previous-comic-link">
				<?php previous_post_link('%link', '<<', TRUE, ' ', 'series');	?> &nbsp;
				</nav>
			
				<figure class="comic-image">
				<?php 
					if ( has_post_thumbnail() ) { // check if the post has a Post Thumbnail assigned to it.
						the_post_thumbnail('full');
				} 
				?>
					<figcaption class="comic-description">
					<?php if ( get_post_meta( get_the_ID(), 'comic_description', true ) ) : ?>
					<?php echo get_post_meta( get_the_ID(), 'comic_description', true ); ?>
					<?php endif; ?>	
					</figcaption>
					
					
					<footer class="comic-meta">
										
					<?php $tag_list = get_the_tag_list( '', __( ', ') ); ?>
					
					<?php if (!empty($tag_list)){ ?>
					Tags: <?php printf ($tag_list); ?>
					
					<?php } else echo ""; ?>
					</footer>	
		
				</figure>
			
				

				<nav class="next-comic-link">	
				<?php next_post_link('%link', '>>', TRUE, ' ', 'series');	?>&nbsp;
				</nav>
				
			</section>

			<?php endwhile; // end of the loop. ?>

			</div><!-- #content .site-content -->
		</div><!-- #primary .content-area -->

<?php get_sidebar('permalink'); ?>
<?php get_footer(); ?>