/*ONE PAGE SCROLL*/
$(function () {

    /* let sections = $('section'),
         mainContent = $('.main'),
         inScroll = false,
         screen = 0;


     function scrollToSection(sectionIndex) {
         let position = '0vh';

         position = (sectionIndex * -100) + 'vh';

         sections.removeClass('active');
         sections.eq(sectionIndex).addClass('active');

         mainContent.css({
             'transform': 'translate3d(0,' + position + ', 0)'
         });

         setTimeout(function () {
             inScroll = false;


         }, 500);
     }

     $(document).on('wheel', function (e) {
         e.preventDefault();

         let deltaY = e.originalEvent.deltaY,
             activeSection = sections.filter('.active'),
             nextSection = $(sections[sections.index(activeSection)+1]),
             prevSection = $(sections[sections.index(activeSection)-1]);

         if (inScroll) return;

         inScroll = true;

         if (deltaY > 0) {
             if (nextSection.length) {
                 scrollToSection(sections.index(nextSection));
             } else {
                 inScroll = false;
             }
         } else {
             if (prevSection.length) {
                 scrollToSection(sections.index(prevSection));
             } else {
                 inScroll = false;
             }
         }
     });

     $(document).on('keydown', function (e) {

         let activeSection = sections.filter('.active'),
             nextSection = $(sections[sections.index(activeSection)+1]),
             prevSection = $(sections[sections.index(activeSection)-1]);

         if ($(e.target).is('textarea')) return;

         if (!(e.keyCode ===38 || e.keyCode ===40)) return;

         if (inScroll) return;

         inScroll = true;

         switch (e.keyCode) {
             case 38: //up
                 if (prevSection.length) {
                     screen = sections.index(prevSection);
                 }else {
                     inScroll = false;
                 }
                 break;
             case 40: //down
                 if (nextSection.length) {
                     screen = sections.index(nextSection);
                 }else {
                     inScroll = false;
                 }
                 break;
         }

         scrollToSection(screen);


     });*/
});
/*END ONE PAGE SCROLL*/

$(function () {

    /*DROPDOWN*/
    const drop = $('.res__drop'),
        drop__content = drop.find('.res__drop-content');

    $('body').on('click', '.res__drop-open', function (e) {
        e.preventDefault();

        let button = $(this),
            content = button.find('.res__item-content').html();

        drop__content.html(content);
        drop.addClass('active');
    });

    $('.res__close').on('click', function (e) {
        e.preventDefault();
        drop.removeClass('active');
    });

    const drop2 = $('.about__drop'),
        drop2__content = drop2.find('.about__drop-content');

    $('body').on('click', '.about__drop-open', function (e) {
        e.preventDefault();

        let button = $(this),
            content = button.find('.about__item-content').html();

        drop2__content.html(content);
        drop2.addClass('active');
    });

    $('.about__close').on('click', function (e) {
        e.preventDefault();
        drop2.removeClass('active');
    });
    /*END DROPDOWN*/

    /*CALLORDER*/
    const callorder = $('.callorder');

    $('.jsCallorderOpen').on('click', function (e) {
        e.preventDefault();
        callorder.addClass('active');
    });
    $('.jsCallorderClose').on('click', function (e) {
        e.preventDefault();
        callorder.removeClass('active');
    });

    $('.callorder__form').on('submit', function (e) {
        e.preventDefault();
        let form = $(this),
            content = form.find('.callorder__wrapper'),
            data = form.serialize();

        $.ajax({
            dataType: "json",
            type: "POST",
            url: 'ajax.php',
            data: data,
            success: function (result) {

                if (result.status) {
                    content.html(result.html);
                } else {
                    alert('Что-то пошло не так, попробуйте еще раз!!!');
                }
            },
            error: function (result) {
                alert('Что-то пошло не так, попробуйте еще раз!!!');
            }
        });
    });
    /*END CALLORDER*/

    /*MMENU*/
    let mmenu = $('.mmenu'),
        mmenuClose = $('.mmenu__close'),
        mmenuButton = $('.mmenu-button');

    mmenuButton.on('click', function (e) {
        e.preventDefault();
        mmenu.addClass('active');
    });
    mmenuClose.on('click', function (e) {
        e.preventDefault();
        mmenu.removeClass('active');
    });

    $('.mmenu__link').on('click', function (e) {
        e.preventDefault();
        let link = $(this),
            id = link.attr('href'),
            section = $(id),
            scrollTop = section.offset().top - 50;

        mmenu.removeClass('active');
        $('body,html').animate({
            scrollTop: scrollTop
        }, 700);
    });
    /*END MMENU*/

    /*COMMON*/
    $('body').on('click', function (e) {

        if ($(e.target).closest('.res__drop').length == 0 && !e.target.classList.contains('res__drop-open')) {
            drop.removeClass('active');
        }
        if (e.target.classList.contains('callorder__fon')) {
            callorder.removeClass('active');
        }
    });

    $('input[type=tel]').mask('+7 (999) 999-99-99');

    $('.accept__check').on('change', function (e) {
        let checked = $(this).prop('checked'),
            form = $(this).closest('form'),
            submit = form.find('.submit');

        if (checked) {
            submit.removeClass('disabled');
        } else {
            submit.addClass('disabled')
        }

    });
    /*END COMMON*/


});