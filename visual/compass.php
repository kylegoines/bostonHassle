<?php /* Template Name: Compass */ ?>  
  
    <?php get_header(); ?>  
      
    <!-- #content  BEGIN  -->  
    <div  id="content" class="clearfix">  
      <h1 class="fontheader">Boston Counter Cultural Compass</h1>
    <?php  
  			 $cmpss = new WP_Query(array(  
            'post_type' =>  'compass',  
    		'posts_per_page'  =>'1'  
    		    )  
    		);  
		?>  
    
    <?php if ($cmpss->have_posts()) : while  ($cmpss->have_posts()) : $cmpss->the_post(); ?>  
  
     <p><a href="<?php the_permalink(); ?>"><?php echo get_the_title();  ?></a></p>  
      <?php echo get_the_content();  ?>
	<?php endwhile; endif; ?>  
	<?php wp_reset_query(); ?>  


  
    </div><!-- #content  END -->  
  
<?php  get_footer(); ?>  