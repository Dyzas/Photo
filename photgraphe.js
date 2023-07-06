$(document).ready(function() {
    var categories = ['Toutes', 'Mariage', 'Grossesse', 'Bébé', 'Famille', 'Baptême', 'Couple'];
    
    // Génération des boutons de filtre en fonction des catégories
    var filterButtons = '';
    for (var i = 0; i < categories.length; i++) {
      var category = categories[i];
      var filterClass = category.toLowerCase();
  
      filterButtons += '<button data-filter=".' + filterClass + '">' + category + '</button>';
    }
  
    // Ajout des boutons de filtre au DOM
    $('#filters').html(filterButtons);
  
    // Initialisez Isotope
    var $grid = $('#gallery').isotope({
      itemSelector: '.photo',
      layoutMode: 'fitRows'
    });
  
    // Filtrer les photos lorsqu'un bouton de filtre est cliqué
    $('#filters').on('click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
  });
  