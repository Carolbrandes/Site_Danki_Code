$(function () {
        $('.main-menu a').click(function () {
                let href = $(this).attr('href');
                let offSetTop = $(href).offset().top();

                // o scrollTop é uma animação que faz descer sozinho
                // colocando o html e o body garantimos que vai funcionar em todos os navegadores
                $('html, body').animate({'scrollTop':offSetTop});

                return false;

        })
});