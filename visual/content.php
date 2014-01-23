<?php
/**
 * @package Visual
 * @since Visual 0.1
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php if ( has_post_thumbnail() ) { ?>
	<figure class="visual-thumbnail">
		<a href="<?php the_permalink() ?>" class="thumbnail">
		<?php the_post_thumbnail( 'visual-thumbnail' ); ?>
		</a>
	</figure>
	<?php } ?>
		
	<header class="entry-header">
		<div class="entry-meta">
			<?php 
				if (get_post_type() != 'art' && get_post_type() != 'film')
					the_category(', ');
			?>
		</div>
		<h1 class="entry-title"><a href="<?php the_permalink(); ?>" title="<?php echo esc_attr( sprintf( __( 'Permalink to %s', 'visual' ), the_title_attribute( 'echo=0' ) ) ); ?>" rel="bookmark"><?php the_title(); ?></a></h1>

		<?php if ( 'post' == get_post_type() ) : ?>
		<div class="entry-meta">
			
		     <?php visual_posted_on(); ?>
			
		</div><!-- .entry-meta -->
		<?php endif; ?>
	</header><!-- .entry-header -->
	
	<div class="entry-content">
	
		<?php the_excerpt(); ?>
		
		<?php wp_link_pages( array( 'before' => '<div class="page-links">' . __( 'Pages:', 'visual' ), 'after' => '</div>' ) ); ?>
		
		<a href="<?php the_permalink(); ?>"><span style="font-style:italic">read more</span><span class="visuallyhidden"><?php the_title(); ?></span></a>
		 
	</div><!-- .entry-content -->

	
</article><!-- #post-<?php the_ID(); ?> -->