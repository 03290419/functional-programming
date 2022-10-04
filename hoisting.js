//1. end가 먼저 정의되어 코드가 다소 복잡하게 읽힌다.
app.post('/login', function (req, res) {
    db.select(
        'users',
        { where: { email: req.body.email } },
        function (err, user) {
            function end(user) {
                req.session.user = user;
                res.redirect('/');
            }
            if (user && user.password === req.body.password) return end(user);

            db.insert(
                'users',
                {
                    email: req.body.email,
                    password: req.body.password,
                },
                function (err, user) {
                    end(user);
                }
            );
        }
    );
});
// 2. 호이스팅 덕분에 end를 나중에 정의해도 잘 동작한다. 읽기 더 편하다.
app.post('/login', function (req, res) {
    //3.
    db.select(
        'users',
        { where: { email: req.body.email } },
        function (err, user) {
            if (user && user.password === req.body.password) return end(user);
            db.insert(
                'users',
                {
                    email: req.body.email,
                    password: req.body.password,
                },
                function (err, user) {
                    end(user);
                }
            );
            function end(user) {
                req.session.user = user;
                res.redirect('/');
            }
        }
    );
});
