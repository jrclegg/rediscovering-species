  $(function () {
            $('#nav a').on('click', function (e) {
                e.preventDefault();
                var page = $(this).attr('href');
                $('#content').load(page);
            });
        });