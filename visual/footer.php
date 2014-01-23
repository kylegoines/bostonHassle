<?php

/**

 * The template for displaying the footer.

 *

 * Contains the closing of the id=main div and all content after

 *

 * @package Visual

 * @since Visual 0.1

 */

?>

		<div class="section clearfix">

	</div><!-- #main .site-main -->

	

</div><!-- #page .hfeed .site -->



<footer id="colophon" class="site-footer" role="contentinfo">

	<div class="section clearfix">



	 <?php get_sidebar('footer'); ?>

	</div><!-- .site-info -->

	

	<!--<div class="section clearfix">

			<?php get_search_form(); ?>

			</div>-->


<?php wp_footer(); ?>
<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/handelbars.js"></script>
<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/events.js"></script>



</body>

</html>