function infoWyszukiwarkaKRS() {
iziToast.show({
    theme: 'dark',
    icon: 'icon-person',
    title: 'Informacje',
    message: 'Wyszukiwarka KRS jest aplikacją na system Android umożliwiającą błyskawiczne wyszukanie informacji o dowolnej firmie wpisanej do Krajowego Rejestru Sądowego.<br> Korzysta z API Rejestr.io i napisana została w technologii Cordova.<br>Dostępna całkowicie za darmo w Sklepie Google.',
    position: 'topCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
	maxWidth: '100%',
	overlay: 'true',
    progressBarColor: 'rgb(0, 255, 184)',
    buttons: [
        ['<button>Zamknij</button>', function (instance, toast) {
            instance.hide({
                transitionOut: 'fadeOutUp',

            }, toast, 'buttonName');
        }]
    ],
    onOpening: function(instance, toast){
        console.info('callback abriu!');
    },
    onClosing: function(instance, toast, closedBy){
        console.info('closedBy: ' + closedBy); // tells if it was closed by 'drag' or 'button'
    }
});
};

function infoEtyka() {
iziToast.show({
    theme: 'dark',
    icon: 'icon-person',
    title: 'Informacje',
    message: 'Etyka Radcy Prawnego - Pytania to aplikacja umożliwiająca wylosowanie zestawu trzech pytań na kolokwium z Etyki Radcy Prawnego. <br>Pytania aktualizowane co roku. <br>Dostępna w Sklepie Google Play i napisana w technologii Cordova.',
    position: 'topCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
	maxWidth: '100%',
	overlay: 'true',
	image: 'img/etyka.jpg',
    progressBarColor: 'rgb(0, 255, 184)',
    buttons: [

        ['<button>Zamknij</button>', function (instance, toast) {
            instance.hide({
                transitionOut: 'fadeOutUp',

            }, toast, 'buttonName');
        }]
    ],
    onOpening: function(instance, toast){
        console.info('callback abriu!');
    },
    onClosing: function(instance, toast, closedBy){
        console.info('closedBy: ' + closedBy); // tells if it was closed by 'drag' or 'button'
    }
});
};

function infoPracy() {
iziToast.show({
    theme: 'dark',
    icon: 'icon-person',
    title: 'Informacje',
    message: 'Prawo pracy i ubezpieczeń społecznych - Pytania to aplikacja umożliwiająca wylosowanie zestawu pytań na kolokwium w I roku aplikacji radcowskiej.<br> Napisana w technologii Cordova i dostępna w Sklepie Google Play.',
    position: 'topCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter

	overlay: 'true',
	image: 'img/etyka.jpg',
    progressBarColor: 'rgb(0, 255, 184)',
    buttons: [

        ['<button>Zamknij</button>', function (instance, toast) {
            instance.hide({
                transitionOut: 'fadeOutUp',

            }, toast, 'buttonName');
        }]
    ],
    onOpening: function(instance, toast){

    },
    onClosing: function(instance, toast, closedBy){


    }
});
};

function infoMYT() {
iziToast.show({
    theme: 'dark',
    icon: 'icon-person',
    title: 'Informacje',
    message: 'MeetYourTech - blog traktujący o IT i technologii, a także Prawie w połączeniu z IT.',
    position: 'topCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter

	overlay: 'true',
	image: 'https://2.bp.blogspot.com/-LWTTmP_3v-o/XGLnEu_XWCI/AAAAAAAAS68/oQUu27eXCbEGxwTA5_2eZtKXlwfgJIuvwCK4BGAYYCw/s1600/Bez%2Btytu%25C5%2582u.png',
    progressBarColor: 'rgb(0, 255, 184)',
    buttons: [

        ['<button>Zamknij</button>', function (instance, toast) {
            instance.hide({
                transitionOut: 'fadeOutUp',

            }, toast, 'buttonName');
        }]
    ],
    onOpening: function(instance, toast){

    },
    onClosing: function(instance, toast, closedBy){


    }
});
};
