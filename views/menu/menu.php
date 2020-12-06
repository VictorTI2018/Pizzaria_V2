<div class="topnav">
  <?php foreach ($menus as $key => $value) : ?>
    <a href="<?= $value['Url']; ?>"><?= $value['Title']; ?></a>
  <?php endforeach; ?>

</div>