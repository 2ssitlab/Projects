<?php
/**
 * Default page template
 */
get_header(); ?>

<section class="page-hero">
  <div class="container">
    <h1><?php the_title(); ?></h1>
  </div>
</section>

<section class="section">
  <div class="container container--narrow">
    <?php
    while (have_posts()) : the_post();
      the_content();
    endwhile;
    ?>
  </div>
</section>

<?php get_footer();
