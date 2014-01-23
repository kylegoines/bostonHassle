<?php
/**
 * The template for displaying Archive pages.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package Visual
 * @since Visual 0.1
 */

get_header(); ?>

	<div id="primary" class="content-area">
	
		<header class="page-header">
			<h1 class="fontheader" >
				Hassle Comics :: All About <?php echo get_the_term_list($post->ID, 'comic_author');?>
			</h1>		
			
			<?php echo term_description();?>
		</header><!-- .page-header -->
		
		<header class="page-header">
		<h1 class="fontheader">
		Comics by <?php echo get_the_term_list($post->ID, 'comic_author');?>
		</h1>
		</header>
		
		<div id="content" class="site-content" role="main">

			<?php if ( have_posts() ) : ?>

				<?php /* Start the Loop */ ?>
				<?php while ( have_posts() ) : the_post(); ?>

					<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php if ( has_post_thumbnail() ) { ?>
	<figure class="visual-thumbnail">
		<a href="<?php the_permalink() ?>" class="thumbnail">
		<?php the_post_thumbnail( 'visual-thumbnail' ); ?>
		</a>
	</figure>
	<?php } ?>
		
	<header class="entry-header" style="text-align:center;">
		<?php echo get_the_term_list($post->ID, 'series');?> //
		<?php echo get_the_date(); ?>

	</header><!-- .entry-header -->
	
	<div class="entry-content" style="text-align:center;">
	
		<?php the_excerpt(); ?>
		
		<?php wp_link_pages( array( 'before' => '<div class="page-links">' . __( 'Pages:', 'visual' ), 'after' => '</div>' ) ); ?>
		
		<a href="<?php the_permalink(); ?>"><span style="font-style:italic;">click to read</span><span class="visuallyhidden"><?php the_title(); ?></span></a>
		 
	</div><!-- .entry-content -->

	
</article><!-- #post-<?php the_ID(); ?> -->

				<?php endwhile; ?>

			<?php else : ?>

				<?php get_template_part( 'no-results', 'index' ); ?>

			<?php endif; ?>

			</div><!-- #content .site-content -->
			
		<?php visual_content_nav( 'nav-below' ); ?>
			
		</div><!-- #primary .content-area -->

<?php if ( is_author() ) { get_sidebar(); } ?>
<?php get_footer(); ?>