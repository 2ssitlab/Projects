<?php
/**
 * Zach's Computer Services Theme Functions
 */

if (!defined('ABSPATH')) exit;

define('ZCS_VERSION', '2.0.0');
define('ZCS_DIR', get_template_directory());
define('ZCS_URI', get_template_directory_uri());

function zcs_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script']);
    add_theme_support('custom-logo', [
        'height'      => 60,
        'width'       => 250,
        'flex-height' => true,
        'flex-width'  => true,
    ]);
    add_theme_support('editor-styles');

    register_nav_menus([
        'primary'  => __('Primary Navigation', 'zachs-developer'),
        'footer'   => __('Footer Navigation', 'zachs-developer'),
    ]);

    add_image_size('hero-banner', 1920, 700, true);
    add_image_size('service-card', 600, 400, true);
}
add_action('after_setup_theme', 'zcs_setup');

function zcs_enqueue_assets() {
    // Google Fonts
    wp_enqueue_style('zcs-google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap', [], null);

    // Phosphor Icons
    wp_enqueue_style('phosphor-icons', 'https://unpkg.com/@phosphor-icons/web@2.0.3/src/regular/style.css', [], '2.0.3');
    wp_enqueue_style('phosphor-icons-bold', 'https://unpkg.com/@phosphor-icons/web@2.0.3/src/bold/style.css', [], '2.0.3');

    // Theme styles
    wp_enqueue_style('zcs-main', ZCS_URI . '/assets/css/main.css', [], ZCS_VERSION);
    wp_enqueue_style('zcs-style', get_stylesheet_uri(), ['zcs-main'], ZCS_VERSION);

    // Theme scripts
    wp_enqueue_script('zcs-main', ZCS_URI . '/assets/js/main.js', [], ZCS_VERSION, true);

    wp_localize_script('zcs-main', 'zcsAjax', [
        'ajaxurl' => admin_url('admin-ajax.php'),
        'nonce'   => wp_create_nonce('zcs_nonce'),
    ]);
}
add_action('wp_enqueue_scripts', 'zcs_enqueue_assets');

function zcs_contact_form_handler() {
    check_ajax_referer('zcs_nonce', 'nonce');

    $name     = sanitize_text_field($_POST['first_name'] ?? '') . ' ' . sanitize_text_field($_POST['last_name'] ?? '');
    $email    = sanitize_email($_POST['email'] ?? '');
    $phone    = sanitize_text_field($_POST['phone'] ?? '');
    $type     = sanitize_text_field($_POST['client_type'] ?? '');
    $inquiry  = sanitize_text_field($_POST['inquiry_type'] ?? '');
    $message  = sanitize_textarea_field($_POST['message'] ?? '');

    if (empty($email) || empty($message)) {
        wp_send_json_error(['message' => 'Please fill in all required fields.']);
    }

    $to      = get_option('admin_email');
    $subject = "New Contact Form Submission from $name";
    $body    = "Name: $name\nEmail: $email\nPhone: $phone\nType: $type\nInquiry: $inquiry\n\nMessage:\n$message";
    $headers = ['Content-Type: text/plain; charset=UTF-8', "Reply-To: $email"];

    $sent = wp_mail($to, $subject, $body, $headers);

    if ($sent) {
        wp_send_json_success(['message' => 'Thank you! We\'ll get back to you within 30 minutes during business hours.']);
    } else {
        wp_send_json_success(['message' => 'Thank you for your message! We\'ll be in touch shortly.']);
    }
}
add_action('wp_ajax_zcs_contact', 'zcs_contact_form_handler');
add_action('wp_ajax_nopriv_zcs_contact', 'zcs_contact_form_handler');

function zcs_widgets_init() {
    register_sidebar([
        'name'          => __('Footer Column 1', 'zachs-developer'),
        'id'            => 'footer-1',
        'before_widget' => '<div class="footer-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="footer-widget-title">',
        'after_title'   => '</h4>',
    ]);
    register_sidebar([
        'name'          => __('Footer Column 2', 'zachs-developer'),
        'id'            => 'footer-2',
        'before_widget' => '<div class="footer-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="footer-widget-title">',
        'after_title'   => '</h4>',
    ]);
}
add_action('widgets_init', 'zcs_widgets_init');

function zcs_custom_excerpt_length($length) {
    return 25;
}
add_filter('excerpt_length', 'zcs_custom_excerpt_length');

function zcs_body_classes($classes) {
    if (is_front_page()) {
        $classes[] = 'front-page';
    }
    return $classes;
}
add_filter('body_class', 'zcs_body_classes');

function zcs_add_rewrite_rules() {
    add_rewrite_rule('^services/?$', 'index.php?pagename=services', 'top');
    add_rewrite_rule('^about/?$', 'index.php?pagename=about', 'top');
    add_rewrite_rule('^faq/?$', 'index.php?pagename=faq', 'top');
    add_rewrite_rule('^contact/?$', 'index.php?pagename=contact', 'top');
}
add_action('init', 'zcs_add_rewrite_rules');

function zcs_activate_theme() {
    $pages = [
        'home'     => ['title' => 'Home',     'template' => ''],
        'services' => ['title' => 'Services', 'template' => 'page-templates/page-services.php'],
        'about'    => ['title' => 'About',    'template' => 'page-templates/page-about.php'],
        'faq'      => ['title' => 'FAQ',      'template' => 'page-templates/page-faq.php'],
        'contact'  => ['title' => 'Contact',  'template' => 'page-templates/page-contact.php'],
    ];

    foreach ($pages as $slug => $page) {
        $existing = get_page_by_path($slug);
        if (!$existing) {
            $page_id = wp_insert_post([
                'post_title'   => $page['title'],
                'post_name'    => $slug,
                'post_status'  => 'publish',
                'post_type'    => 'page',
            ]);
            if ($page['template'] && !is_wp_error($page_id)) {
                update_post_meta($page_id, '_wp_page_template', $page['template']);
            }
        }
    }

    $home = get_page_by_path('home');
    if ($home) {
        update_option('show_on_front', 'page');
        update_option('page_on_front', $home->ID);
    }

    if (!has_nav_menu('primary')) {
        $menu_id = wp_create_nav_menu('Primary Menu');
        if (!is_wp_error($menu_id)) {
            foreach ($pages as $slug => $page) {
                $p = get_page_by_path($slug);
                if ($p) {
                    wp_update_nav_menu_item($menu_id, 0, [
                        'menu-item-title'     => $page['title'],
                        'menu-item-object'    => 'page',
                        'menu-item-object-id' => $p->ID,
                        'menu-item-type'      => 'post_type',
                        'menu-item-status'    => 'publish',
                    ]);
                }
            }
            $locations = get_theme_mod('nav_menu_locations');
            $locations['primary'] = $menu_id;
            set_theme_mod('nav_menu_locations', $locations);
        }
    }

    flush_rewrite_rules();
}
add_action('after_switch_theme', 'zcs_activate_theme');
