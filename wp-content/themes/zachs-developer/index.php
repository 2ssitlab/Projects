<?php
/**
 * Main template file
 */
get_header(); ?>

<section class="page-hero">
  <div class="container">
    <h1><?php is_home() ? esc_html_e('Latest Updates', 'zachs-developer') : the_title(); ?></h1>
  </div>
</section>

<section class="section">
  <div class="container container--narrow">
    <?php
    if (have_posts()) :
      while (have_posts()) : the_post(); ?>
        <article style="margin-bottom: var(--space-8); padding-bottom: var(--space-8); border-bottom: 1px solid var(--color-gray-200);">
          <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
          <p class="text-muted" style="font-size: var(--text-sm);"><?php echo get_the_date(); ?></p>
          <?php the_excerpt(); ?>
          <a href="<?php the_permalink(); ?>" class="btn btn--ghost">Read More </a>
        </article>
      <?php endwhile;
    else : ?>
      <p>No content found.</p>
    <?php endif; ?>
  </div>
</section>

<?php get_footer();
