const dummyText = [

    'Jelly beans macaroon sweet roll. Pudding tiramisu toffee sweet roll sweet biscuit gingerbread jelly-o. Cotton candy danish cupcake lemon drops powder icing chupa chups tart. Gummi bears bear claw chocolate cake jelly cake. Gummies donut danish icing. Halvah muffin topping jelly beans dragée chupa chups lemon drops caramels candy canes. Macaroon dessert bear claw chocolate gummies cookie bonbon.',
    'Lollipop caramels tiramisu. Cake halvah jujubes oat cake brownie cake biscuit toffee. Liquorice gummies tart carrot cake halvah candy canes marzipan croissant. Apple pie candy oat cake candy canes candy canes pastry powder marzipan. Biscuit jelly biscuit topping oat cake toffee. Bonbon cake biscuit tart sweet danish cake. Tiramisu marzipan jelly beans bear claw pudding sweet toffee. Pudding sweet roll pudding liquorice candy canes pastry.',
    'Jujubes cake lollipop croissant oat cake toffee sugar plum. Chupa chups jujubes chocolate tootsie roll jelly candy canes cotton candy cake biscuit. Muffin sesame snaps marshmallow tootsie roll candy gummies chocolate cake donut chupa chups. Gingerbread marshmallow halvah. Toffee pie chocolate bar macaroon. Liquorice fruitcake wafer wafer toffee soufflé. Bear claw powder lemon drops. Tootsie roll toffee cake. Bonbon tiramisu soufflé lollipop brownie. Soufflé gummies gummies jelly beans cupcake.',
    'Brownie cheesecake icing apple pie cake powder liquorice. Tiramisu gingerbread chocolate bar wafer cookie. Chocolate jelly sesame snaps bear claw sweet roll chocolate icing gummi bears chocolate. Toffee gingerbread jelly chocolate dessert muffin. Cookie pastry topping donut cupcake halvah. Candy powder fruitcake. Lemon drops caramels tart lollipop jujubes gummies.',
    'Halvah gummi bears brownie macaroon. Dragée chocolate cake lemon drops soufflé. Lemon drops gummi bears topping soufflé jelly-o chupa chups chocolate sugar plum. Chocolate jelly beans sweet roll. Marshmallow pastry dessert toffee chocolate bar pie cake. Bear claw ice cream bonbon lollipop cake chocolate cake powder. Sesame snaps carrot cake lemon drops cookie powder jelly-o sesame snaps pie danish. Brownie muffin pastry tiramisu gingerbread jujubes jujubes sesame snaps. Sweet roll marshmallow donut chocolate bar croissant.',
    'Tootsie roll dessert cookie brownie fruitcake macaroon. Jujubes candy canes jelly-o tart dragée. Lollipop jelly sweet liquorice wafer cupcake bonbon. Jujubes powder danish cheesecake. Caramels chocolate cake muffin dessert. Lemon drops jelly marzipan cheesecake.',
    'Caramels cookie topping bonbon gummi bears sugar plum ice cream tiramisu. Sugar plum carrot cake marzipan cupcake chupa chups. Lemon drops gummi bears cake. Sweet roll jelly beans brownie dessert lemon drops. Sugar plum macaroon chocolate bar muffin gummies cheesecake cupcake lollipop cotton candy. Cotton candy soufflé sugar plum bonbon brownie. Tart sugar plum chocolate cake muffin jelly-o pudding lemon drops croissant donut. Macaroon tart liquorice chocolate. Jelly beans gummi bears candy canes soufflé sesame snaps chocolate cake.',
    'Sugar plum marshmallow icing pie danish dragée cupcake caramels. Danish sesame snaps gummies. Cake gingerbread soufflé. Chocolate bar marzipan cotton candy. Cotton candy dessert chupa chups pastry topping powder. Gingerbread bonbon soufflé pastry liquorice fruitcake marshmallow donut sugar plum. Macaroon brownie carrot cake carrot cake.',
    'Cake marzipan powder croissant muffin toffee. Marzipan ice cream sweet marshmallow cotton candy. Chocolate liquorice pie powder liquorice dessert oat cake croissant. Lollipop jelly beans cookie cake jujubes topping. Tart gummi bears lemon drops cupcake lollipop dragée. Ice cream bear claw donut sweet pudding liquorice jelly beans. Chupa chups brownie macaroon candy marshmallow apple pie marzipan. Icing chocolate ice cream topping candy canes cookie biscuit. Dessert jelly beans marshmallow cookie pie cake.',
    'Chocolate sweet gummi bears pastry soufflé cookie tootsie roll donut chocolate bar. Pastry powder ice cream sweet jelly-o lemon drops bonbon brownie. Croissant liquorice gummi bears. Cookie lemon drops lollipop bear claw marshmallow cheesecake wafer liquorice. Croissant danish tootsie roll cupcake caramels. Candy marzipan macaroon. Bonbon macaroon wafer pie topping dessert.',




];
const form = document.querySelector('#form');
const number = document.querySelector('.number');
const reaselt = document.querySelector('#sho');



form.addEventListener('submit', function (e) {
    e.preventDefault();


    const value = parseInt(number.value);

    const Rendom = Math.floor(Math.random() * dummyText.length);
    if (isNaN(value) || value > 10 || value < 0) {
        reaselt.innerHTML = dummyText[Rendom];
    } else {
        const sliceArray = dummyText.slice(0, value);
        const FinalArray = sliceArray.map(function (singaldummy) {
            return singaldummy;

        }).join('');

        reaselt.innerHTML = FinalArray;
    }






});