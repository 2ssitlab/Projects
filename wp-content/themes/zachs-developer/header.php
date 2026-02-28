<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Fast, friendly & affordable computer repair in Tampa Bay. Expert IT services including virus removal, data recovery, network setup & 24/7 support. Call (813) 473-2334.">
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
      <a href="<?php echo esc_url(home_url('/')); ?>" class="site-logo" aria-label="Home">
        <img src="https://i0.wp.com/zachscomputerservices.com/wp-content/uploads/2025/06/cropped-Zach-Computer-Services-Transparent-512x512-2.webp?w=800&ssl=1" alt="Zach's Computer Services" class="site-logo-img">
      </a>

      <button class="menu-toggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>

      <div class="nav-wrapper">
        <nav class="nav-primary" role="navigation">
          <a href="<?php echo esc_url(home_url('/')); ?>" <?php if (is_front_page()) echo 'class="active"'; ?>>Home</a>
          <a href="<?php echo esc_url(home_url('/services/')); ?>" <?php if (is_page('services')) echo 'class="active"'; ?>>Services</a>
          <a href="<?php echo esc_url(home_url('/about/')); ?>" <?php if (is_page('about')) echo 'class="active"'; ?>>About</a>
          <a href="<?php echo esc_url(home_url('/faq/')); ?>" <?php if (is_page('faq')) echo 'class="active"'; ?>>FAQ</a>
          <a href="<?php echo esc_url(home_url('/contact/')); ?>" <?php if (is_page('contact')) echo 'class="active"'; ?>>Contact</a>
        </nav>

        <div class="header-actions">
          <a href="tel:+18134732334" class="header-phone">
            <i class="ph-bold ph-phone"></i>
            (813) 473-2334
          </a>
          <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">
            <i class="ph-bold ph-moon icon-moon"></i>
            <i class="ph-bold ph-sun icon-sun"></i>
          </button>
          <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn--primary btn--sm">Get a Quote</a>
        </div>
      </div>
    </div>
  </div>
</header>

<main id="main-content" role="main">
