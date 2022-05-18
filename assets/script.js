/**
 * jQuery obj for Home, Menu, Contact pages.
 * Appending them to the Main section based on the link clicked. 
 */


 const pages = {
    init() {
      pages.config = {
        active: 'home',
        $main: $('main'),
        $nav: $('#nav'),
        home: pages.genHome(),
        contact: pages.genContact(),
        menu: pages.genMenu()
      }
  
      pages.setup();
    },
  
    setup() {
      const config = pages.config;
      const $main = config.$main;
      $main.append(config.home);
        
        //links click events to nav
        config.$nav.on('click', (event) => {
            const id = event.target.id;
            if (id !== config.active && id !== 'nav') {
                //set active new page, remove old page
                $main.children('section:nth-child(2)').detach();
                config.active = id;
                $main.append(config[id]);	
              }
            });
          },

    genRow(len) {
        //returning a string that represents a row and it's length
        const row = ['<div class=\'hex-row\'>'];
        for (i = 0; i < len; i = i + 1) {
          row.push('<div class=\'hex hexagon\'><div class=\'inner\'></div></div>');
        }
    
        row.push('</div>');
        return row.join('');
      },

    genHome() {
        //return obj with the Home-Page-Content
        const $home = $('<section id=\'home-page\'></section>');
        const $grid = $('<div id=\'hex-grid\'></div>');

        //visual content
        const content = ['<img src=\'assets/sauce.png\' alt=\'sauce\'>', 
                     '<img src=\'assets/mulberry.png\' alt=\'mulberry\'>', 
                     '<img src=\'assets/lizz.png\' alt=\'lizz\'>', 
                     'Italian taste, away from Italy! ' +
                     'Made fresh everyday with authentic Italian ingredients. Rated as the best pizza in the island.' ,
                     '<img src=\'assets/gambino.png\' alt=\'gambino\'>', 
                     '<img src=\'assets/donnie.png\' alt=\'pizza\'>', 
                     '<img src=\'assets/anotherone.png\' alt=\'pizza\'>'];
        
        //creating rows of hexagons
        const $firstRow = $(pages.genRow(2));
        const $secondRow = $(pages.genRow(3));
        const $thirdRow = $(pages.genRow(2));

        //assign classes & ids
        $firstRow.add($thirdRow).addClass('odd');
        $secondRow.children().eq(1).attr('id', 'about');
        $grid
        .append($firstRow)
        .append($secondRow)
        .append($thirdRow);

        //fill hexagons with content from above
        $grid.find('.inner').html(function(index, oldHtml) {
            $(this).html(content[index]);
        });

        $home.append($grid);
        return $home;
    },

    genContact() {
        //contact page
        return $('<section id=\'contact-page\' class=\'square\'>' +
        '<h2>Contact</h2><p>Phone us: (+30) 698-222-2558</p>' +
        '<p>Email us: info@mikesplace.com</p>' +
        '<p>Find us: <a href=\'https://www.google.com/maps/d/viewer?msa=0&mid=19CNiNB1GXUfOHa-JiTYe3vaoYcQ&ll=37.445056047617996%2C25.329634235476963&z=17\'>Google Maps</a></p></section>');
    },

    genMenu() {
        //menu page
        return $('<section id=\'menu-page\' class=\'square\'>' +
             '<h2>Pizza Menu</h2><table><tbody>' +
             '<tr><td>Sauce Pizza</td><td>€7.99</td></tr>' +
             '<tr><td>Mulberry Street Pizza</td><td>€8.99</td></tr>' +
             '<tr><td>Thin Lizz Pizza</td><td>€9.99</td></tr>' +
             '<tr><td>Gambino Style Pizza</td><td>€10.99</td></tr>' +
             '<tr><td>The Donnie Pizza</td><td>€11.99</td></tr>' +
             '<tr><td>The Other One Pizza</td><td>€13.99</td></tr>' +
             '</tbody></table></section>');
    }
};

$(() => {
    pages.init();
});









