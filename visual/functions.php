<?php



/**

 * Visual functions and definitions

 *

 * @package Visual

 * @since Visual 0.1

 */

	 

/**

 * Set the content width based on the theme's design and stylesheet.

 *

 * @since Visual 0.1

 */

if ( ! isset( $content_width ) )

	$content_width = 670; /* pixels */

	

/**

 * Loads Options Framework for theme options

 * See: https://github.com/devinsays/options-framework-theme

 *

 * @since Visual 0.4

 */

function visual_optionsframework_setup() {

	if ( !function_exists( 'optionsframework_init' ) ) {

		define( 'OPTIONS_FRAMEWORK_DIRECTORY', get_template_directory_uri() . '/inc/options-framework/' );

		require_once dirname( __FILE__ ) . '/inc/options-framework/options-framework.php';

	}

}

add_action( 'after_setup_theme', 'visual_optionsframework_setup' );



/*

 * Load Jetpack compatibility file.

 */

require( get_template_directory() . '/inc/jetpack.php' );



if ( ! function_exists( 'visual_setup' ) ) :



/**

 * Sets up theme defaults and registers support for various WordPress features.

 *

 * Note that this function is hooked into the after_setup_theme hook, which runs

 * before the init hook. The init hook is too late for some features, such as indicating

 * support post thumbnails.

 *

 * @since Visual 0.1

 */

function visual_setup() {



	/**

	 * Custom template tags for this theme.

	 */

	require( get_template_directory() . '/inc/template-tags.php' );



	/**

	 * Custom functions that act independently of the theme templates

	 */

	require( get_template_directory() . '/inc/extras.php' );

	

	/**

	 * Loads options for theme customizer

	 */

	require_once( get_template_directory() . '/inc/options.php' );

	

	/**

	 * Functions to enable the options

	 */

	require( get_template_directory() . '/inc/options-functions.php' );



	/**

	 * Customizer additions

	 */

	require( get_template_directory() . '/inc/customizer.php' );



	/**

	 * Make theme available for translation

	 * Translations can be filed in the /languages/ directory

	 * If you're building a theme based on Visual, use a find and replace

	 * to change 'visual' to the name of your theme in all the template files

	 */

	load_theme_textdomain( 'visual', get_template_directory() . '/languages' );



	/**

	 * Add default posts and comments RSS feed links to head

	 */

	add_theme_support( 'automatic-feed-links' );



	/**

	 * Enable support for Post Thumbnails

         	add_theme_support( 'post-thumbnails' );

	 */

	

	add_theme_support( 'post-thumbnails', array( 'post', 'art', 'film', 'hassleshows', 'compass', 'comic' ) ); // Add support for posts

	add_image_size( 'visual-thumbnail', 328, 999 );

	add_image_size( 'visual-post', 700, 9999 );



set_post_thumbnail_size( 150, 150, true ); // 50 pixels wide by 50 pixels tall, hard crop mode

add_image_size( 'nav-image', 150, 75, true ); // Rotator thumbnail size, hard crop mode

add_image_size( 'rotator-post-image', 667, 334, true ); // Rotator large size, hard crop mode



	/**

	 * This theme uses wp_nav_menu() in one location.

	 */

	register_nav_menus( array(

		'primary' => __( 'Primary Menu', 'visual' ),

	) );



	/**

	 * Enable support for Post Formats

	 */

	add_theme_support( 'post-formats', array( 'image', 'gallery' ) );

}

endif; // visual_setup



add_action( 'after_setup_theme', 'visual_setup' );



/**

 * Register widgetized area and update sidebar with default widgets

 *

 * @since Visual 0.1

 */

 

function visual_widgets_init() {

	register_sidebar( array(

		'name' => __( 'Sidebar', 'visual' ),

		'id' => 'sidebar-1',

		'before_widget' => '<aside id="%1$s" class="widget %2$s">',

		'after_widget' => '</aside>',

		'before_title' => '<h1 class="widget-title"><span>',

		'after_title' => '</span></h1>',

	) );



	register_sidebar( array(

		'name' => __( 'SidebarIndex', 'visual' ),

		'id' => 'sidebar-2',

		'before_widget' => '<aside id="%1$s" class="widget %2$s">',

		'after_widget' => '</aside>',

		'before_title' => '<h1 class="widget-title"><span>',

		'after_title' => '</span></h1>',

	) );



	register_sidebar( array(

		'name' => __( 'sideBarPermalink', 'visual' ),

		'id' => 'sidebar-3',

		'before_widget' => '<aside id="%1$s" class="widget %2$s">',

		'after_widget' => '</aside>',

		'before_title' => '<h1 class="widget-title"><span>',

		'after_title' => '</span></h1>',

	) );

	

	register_sidebar( array(

		'name' => __( 'footer', 'visual' ),

		'id' => 'sidebar-4',

		'before_widget' => '<aside id="%1$s" class="footer-widget %2$s">',

		'after_widget' => '</aside>',

		'before_title' => '<h1 class="widget-title"><span>',

		'after_title' => '</span></h1>',

	) );
	
	
	
	register_sidebar( array(
	
		'name' => __( 'frontBanner', 'visual' ),
		
		'id' => 'sidebar-5',
		
		'before_widget' => '<aside id="%1$s" class = frontBanner-widget %2$s alert">',
		
		'after_widget' => '</aside>',
		
		'before_title' => '<h1 class="widget-title"><span>',
		
		'after_title' => '</span></h1>',
		
	) );

}



add_action( 'widgets_init', 'visual_widgets_init' );



/**

 * Enqueue scripts and styles

 *

 * @since Visual 0.1

 */

 

function visual_scripts() {



	wp_enqueue_style( 'style', get_stylesheet_uri() );



	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {

		wp_enqueue_script( 'comment-reply' );

	}



	if ( is_singular() && wp_attachment_is_image() ) {

		wp_enqueue_script( 'keyboard-image-navigation', get_template_directory_uri() . '/js/keyboard-image-navigation.js', array( 'jquery' ), '20130220' );

	}

	

	if ( !is_singular() && !is_404() && !is_author() ) {

		wp_enqueue_script( 'visual-masonry', get_template_directory_uri() . '/js/jquery.masonry.min.js', array( 'jquery' ), '20130220', true );

	}

	

	wp_enqueue_script( 'visual-scripts', get_template_directory_uri() . '/js/visual-scripts.js', array( 'jquery' ), '20130220', true );

	

	wp_enqueue_script( 'jquery.flexslider', get_template_directory_uri() . '/js/jquery.flexslider.js', array( 'jquery' ), '20130220', true );

	wp_enqueue_script( 'jquery.flexslider-init', get_template_directory_uri() . '/js/flexslider-init.js', array( 'jquery' ), '20130220', true );
	
	wp_enqueue_script( 'sidebar-scroll', get_template_directory_uri() . '/js/sidebar-scroll.js', array( 'jquery' ), '20130220', true );

	wp_enqueue_script( 'art-credit', get_template_directory_uri() . '/js/art-credit.js', array( 'jquery' ), '20130220', true );
}



add_action( 'wp_enqueue_scripts', 'visual_scripts' );



/**

 * Enqueue fonts

 *

 * @since Visual 0.1

 */



function visual_fonts() {

		$font_families = array();

		$font_families[] = 'Raleway:400,700';

		$protocol = is_ssl() ? 'https' : 'http';

		$query_args = array(

			'family' => implode( '|', $font_families ),

			'subset' => 'latin,latin-ext',

		);

		wp_enqueue_style( 'visual-fonts', add_query_arg( $query_args, "$protocol://fonts.googleapis.com/css" ), array(), null );

}

add_action( 'wp_enqueue_scripts', 'visual_fonts' );



/**

 * Adds a body class for masonry layouts

 *

 * @since Visual 0.1

 */

 

function visual_body_class( $classes ) {

	if ( !is_singular() && !is_404() && !is_author() )

		$classes[] = 'masonry';

	return $classes;

}



add_filter('body_class','visual_body_class');



/**

 * Loads options.php from "inc" directory

 *

 * @since Visual 0.3

 */

 

function visual_options_location() {

	return array('/inc/options.php');

}



add_filter ( 'options_framework_location', 'visual_options_location' );



add_filter('widget_text','execute_php',100);

function execute_php($html){

     if(strpos($html,"<"."?php")!==false){

          ob_start();

          eval("?".">".$html);

          $html=ob_get_contents();

          ob_end_clean();

     }

     return $html;

}



add_action( 'init', 'create_post_type' );

function create_post_type() {

	register_post_type( 'hassleshows',

		array(
			

			'labels' => array(

				'name' => __( 'Hassle Shows' ),

				'singular_name' => __( 'Hassle Show' )

			),

			'public' => true,

			'menu_position' => 6,

			'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt', 'comments', 'custom-fields', 'revisions', 'post-formats'  ),

			'has_archive' => true,

			'rewrite' => array('slug' => 'hassleshows'),

			'show_in_nav_menus' => false,
			
			'taxonomies' => array('category'),

		)

	);
	
	register_post_type( 'art',

		array(

			'labels' => array(

				'name' => __( 'Art' ),

				'singular_name' => __( 'Art' )

			),

			'public' => true,

			'menu_position' => 4,

			'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt', 'comments', 'custom-fields', 'revisions', 'post-formats'  ),

			'has_archive' => true,

			'rewrite' => array('slug' => 'art'),

			'show_in_nav_menus' => false,

			'taxonomies' => array('category'),

		)

	);
	
		register_post_type( 'film',

		array(

			'labels' => array(

				'name' => __( 'Film' ),

				'singular_name' => __( 'Film' )

			),

			'public' => true,

			'menu_position' => 5,

			'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt', 'comments', 'custom-fields', 'revisions', 'post-formats'  ),

			'has_archive' => true,

			'rewrite' => array('slug' => 'film'),

			'show_in_nav_menus' => false,
		
			'taxonomies' => array('category'),

		)

	);
	
	register_post_type( 'compass',

		array(

			'labels' => array(

				'name' => __( 'Compass' ),

				'singular_name' => __( 'Compass' )

			),

			'public' => true,

			'menu_position' => 6,

			'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt', 'comments', 'custom-fields', 'revisions', 'post-formats'  ),

			'has_archive' => true,

			'rewrite' => array('slug' => 'compass'),

			'show_in_nav_menus' => false,
		
			'taxonomies' => array('category'),

		)

	);

}


update_option('image_default_link_type' , '');

function shrimp_in_main_loop( $query ) {
 if ( is_home() && $query->is_main_query() ) {
 	$query->set( 'cat', '5' );
 } 	

 return $query;
 }
 
add_filter( 'pre_get_posts', 'shrimp_in_main_loop' );



