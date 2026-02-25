<?php
/**
 * 404 Not Found template
 */
get_header(); ?>

<section class="page-hero">
  <div class="container">
    <h1>Page Not Found</h1>
    <p>The page you're looking for doesn't exist or has been moved.</p>
  </div>
</section>

<section class="section">
  <div class="container text-center">
    <p style="font-size: var(--text-lg); margin-bottom: var(--space-8);">Let's get you back on track.</p>
    <div class="cta-buttons" style="justify-content: center;">
      <a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn--primary btn--lg">Go to Homepage</a>
      <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn--outline btn--lg">Contact Us</a>
    </div>
  </div>
</section>

<?php get_footer();
