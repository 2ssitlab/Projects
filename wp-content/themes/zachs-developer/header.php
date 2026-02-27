<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script>
    (function(){var t=localStorage.getItem('zcs-theme');if(t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.setAttribute('data-theme','dark')}})();
  </script>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header" role="banner">
  <div class="container">
    <div class="header-inner">
      <a href="<?php echo esc_url(home_url('/')); ?>" class="site-logo" aria-label="Zach's Computer Services - Home">
        <img src="<?php echo esc_url(ZCS_URI . '/assets/images/logo.webp'); ?>" alt="Zach's Computer Services logo" class="logo-img" width="48" height="48">
      </a>

      <!-- Desktop nav (inline in header) -->
      <nav class="nav-desktop" role="navigation">
        <a href="<?php echo esc_url(home_url('/')); ?>" <?php if (is_front_page()) echo 'class="active"'; ?>>Home</a>
        <a href="<?php echo esc_url(home_url('/services/')); ?>" <?php if (is_page('services')) echo 'class="active"'; ?>>Services</a>
        <a href="<?php echo esc_url(home_url('/about/')); ?>" <?php if (is_page('about')) echo 'class="active"'; ?>>About</a>
        <a href="<?php echo esc_url(home_url('/faq/')); ?>" <?php if (is_page('faq')) echo 'class="active"'; ?>>FAQ</a>
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" <?php if (is_page('contact')) echo 'class="active"'; ?>>Contact</a>
      </nav>

      <div class="header-right">
        <a href="tel:+18134732334" class="header-phone">
          <i class="ph-bold ph-phone"></i>
          (813) 473-2334
        </a>
        <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">
          <i class="ph-bold ph-moon icon-moon"></i>
          <i class="ph-bold ph-sun icon-sun"></i>
        </button>
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn--primary btn--sm">Get a Quote</a>
        <button class="menu-toggle" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </div>
</header>

<!-- Mobile nav (outside header to avoid stacking context issues) -->
<div class="mobile-nav" id="mobile-nav" style="display:none">
  <nav class="mobile-nav-links">
    <a href="<?php echo esc_url(home_url('/')); ?>" <?php if (is_front_page()) echo 'class="active"'; ?>>Home</a>
    <a href="<?php echo esc_url(home_url('/services/')); ?>" <?php if (is_page('services')) echo 'class="active"'; ?>>Services</a>
    <a href="<?php echo esc_url(home_url('/about/')); ?>" <?php if (is_page('about')) echo 'class="active"'; ?>>About</a>
    <a href="<?php echo esc_url(home_url('/faq/')); ?>" <?php if (is_page('faq')) echo 'class="active"'; ?>>FAQ</a>
    <a href="<?php echo esc_url(home_url('/contact/')); ?>" <?php if (is_page('contact')) echo 'class="active"'; ?>>Contact</a>
  </nav>
  <div class="mobile-nav-actions">
    <a href="tel:+18134732334" class="mobile-nav-phone">
      <i class="ph-bold ph-phone"></i> (813) 473-2334
    </a>
    <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn--primary" style="width:100%;justify-content:center;">Get a Quote</a>
  </div>
</div>

<main id="main-content" role="main">
