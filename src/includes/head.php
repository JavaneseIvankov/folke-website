<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title><?= isset($pageTitle) ? $pageTitle : 'Folke.' ?></title>
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=DM+Sans:wght@400;500&family=Cormorant+Garamond:wght@400;500;600&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="/assets/css/layout.css">
   <?php if (isset($pageCss)): ?>
   <?php foreach((array)$pageCss as $css): ?>
   <link rel="stylesheet" href="/assets/css/<?= $css ?>">
   <?php endforeach; ?>
   <?php endif; ?>
   <?php if (isset($extraHead)): ?>
   <?= $extraHead ?>
   <?php endif; ?>
</head>
<body>
