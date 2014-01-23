<?php

/**

 * The Sidebar containing the main widget areas.

 *

 * @package Visual

 * @since Visual 0.1

 */

?> 

		<div id="footer-sidebar" class="widget-area" role="complementary">

			<aside id="pages-2">
				<?php wp_page_menu('show-home=1&include=4987'); ?>
				<ul>
<li><a href="http://www.bostonhassle.com/category/top-shrimp/">Top Shrimp</a></li>
</ul>
	<ul class="the_pages">
<?php wp_list_pages('title_li=&exclude=558,14549,27584&sort_column=menu_order'); ?>
</ul>
			</aside>

			<aside id="search-2">
				<?php get_search_form(); ?>
			</aside>

 		<aside id="social">
			<a href="https://www.facebook.com/pages/Boston-Hassle/301986473149390" target="_blank"><img src="<?php echo get_bloginfo('template_directory');?>/img/facebook.png"></a>
			<a href="https://twitter.com/bostonhassle" target="_blank"><img src="<?php echo get_bloginfo('template_directory');?>/img/twitter.png"></a>
			<a href="https://plus.google.com/117329969447309113172/posts" target="_blank"><img src="<?php echo get_bloginfo('template_directory');?>/img/google.png"></a>
			<a href="feed"><img src="<?php echo get_bloginfo('template_directory');?>/img/rss.png"></a>
			</aside>

			
		</div><!-- #secondary .widget-area -->
		