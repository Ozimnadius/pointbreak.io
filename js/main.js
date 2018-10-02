$(function () {

    let sections = $('section'),
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


    });
});