
db.dropDatabase();
db.courses_done.save (
    [
        {year: '2016', topic: 'Basics of HTML, CSS and Web designing'},
        {year: '2017', topic: 'Basics of Programming (Java SE)'},
        {year: '2017', topic: 'Basics of relational databases'},
        {year: '2017', topic: 'Software testing'},
        {year: '2017', topic: 'Basics of PHP -language'},
        {year: '2017', topic: 'Basics of Python -language'},
        {year: '2017', topic: 'Object-oriented programming with Java'},
        {year: '2017', topic: 'Dynamic web-applications with Javascript'},
        {year: '2017', topic: 'Introduction to mobile app design and development'},
        {year: '2017', topic: 'Web Content management systems'}

    ]
);

db.courses_planned.save(
    [
        {year: '2018', topic: 'Web App development with MEAN'},
        {year: '2018', topic: 'Web App development with PHP/SQL'},
        {year: '2018', topic: 'Native mobile application development(Android)'},
        {year: '2018', topic: 'Requirements analysis for software development'}

    ]
);