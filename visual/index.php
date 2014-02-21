 <?php



/**



 * The main template file.



 *



 * This is the most generic template file in a WordPress theme



 * and one of the two required files for a theme (the other being style.css).



 * It is used to display a page when nothing more specific matches a query.



 * E.g., it puts together the home page when no home.php file exists.



 * Learn more: http://codex.wordpress.org/Template_Hierarchy



 *



 * @package Visual



 * @since Visual 0.1



 */







get_header(); ?>



<div id="photo-rotator">



<a href="index.php?cat=4"><h1 class="fontheader">Be There</h1></a>



<div class="flex-container">



  <div class="flexslider">



    <ul class="slides">



  



<?php 



date_default_timezone_set('EST');



$currentDate = time();

$args = array(

	'post_type' => array('post', 'art', 'film', 'comic'),

	'posts_per_page' => 6,

	'order' => 'ASC',

	'cat' => 4,

	'year' => date("Y", $currentDate),

	'monthnum' => date("m", $currentDate),

	'day' => date("d", $currentDate)

);



$my_query = new WP_Query( $args );



?>



<?php





if (! $my_query->have_posts()) {

	$args = array(

		'post_type' => array('post', 'art', 'film', 'comic'),

		'posts_per_page' => 6,

		'orderby' => 'date',

		'order' => 'ASC',

		'cat' => 7974

	);

	

	$my_query = new WP_Query( $args );

}



?>



  



  <?php  

   

//old query: look for old gotos

//   		$cutoff = 14;

//   		$i = 0;

// 		while((! $my_query->have_posts() ) && $i <= $cutoff) {

// 			$currentDate = strtotime('-1 day', $currentDate);

// 			$args = array(

// 				'post_type' => array('post', 'art', 'film'),

// 				'posts_per_page' => 6,

// 				'order' => 'ASC',

// 				'cat' => 4,

// 				'year' => date("Y", $currentDate),

// 				'monthnum' => date("m", $currentDate),

// 				'day' => date("d", $currentDate)

// 			);

// 			$my_query = new WP_Query( $args );

// 			$i++;

// 		}

		

		

		while($my_query->have_posts()) { 

			$my_query->the_post();



    ?>



      <li>



         <a href="<?php the_permalink() ?>" class="post-image">



         <?php the_post_thumbnail( 'rotator-post-image' ); ?>



         <p class="flex-caption">GO TO: <?php the_title(); ?></p>



     </a>



      </li>



    <?php



        }



    wp_reset_query();



    ?>



    </ul>



  </div>



</div>



</div>











<?php get_sidebar('static'); ?>



<?php get_sidebar('frontBanner'); ?>





<a href="index.php?cat=5"><h1 class="fontheader">Top Shrimp</h1></a>



 <?php wp_nav_menu( array('menu' => 'topShrimp' )); ?>



	<div id="primary" class="content-area">



		<div id="content" class="site-content" role="main">

		



		  	<?php if ( have_posts() ) : ?>



				<?php /* Start the Loop */ ?>

				<?php while ( have_posts() ) : the_post(); ?>





					<?php



						/* Include the Post-Format-specific template for the content.



						 * If you want to overload this in a child theme then include a file



						 * called content-___.php (where ___ is the Post Format name) and that will be used instead.



						 */



						get_template_part( 'content', get_post_format() );



					?>







				<?php endwhile; ?>







			<?php else : ?>







				<?php get_template_part( 'no-results', 'index' ); ?>







			<?php endif; ?>







			</div><!-- #content .site-content -->



			



		<?php visual_content_nav( 'nav-below' ); ?>



			



		</div><!-- #primary .content-area -->

	

<?php get_footer(); ?>

