var MENU = {
    "student": [
        {
            "title": "Article",
            "link": "/article"
        },
        {
            "title": "Competencies",
            "link": "/competency"
        },
        {
            "title": "Subjects",
            "link": "/subjects"
        },
        {
            "title": "Tests",
            "link": "/tests"
        }
    ],
    "teacher": [
        {
            "title": "Subjects",
            "link": "/subjects"
        },
        {
            "title": "Tests",
            "link": "/tests"
        }
    ],
    "admin": [
        {
            "title": "Competency",
            "link": "/competency"
        },
        {
            "title": "Subjects",
            "link": "/subjects"
        }
    ]
};

var ACCESS_MAP = {

    "student": {
        "create": ['article']
    },
    "teacher": {
        "create": ['subjects', 'tests', 'subj-comp', 'test']
    },
    "admin": {
        "create": ["competency", "subjects", 'subj-comp']
    }
};

var SUBJECT = [{
    "id": 10,
    "name": "OOP"
}, {
    "id": "20",
    "name": "Math"
}
];

var COMPETENCY = [{
    "id": 10,
    "name": "Computer science",
    "description": "Descr"
}, {
    "id": "20",
    "name": "Programing Engineering",
    "description": "dsds"
}, {
    "id": "30",
    "name": "DB",
    "description": "dsds"
}
];

var SUBSCRIPTIONS = [
    {
        "email": "ancobs@gmail.com",
        "competencies": [
            {
                "id": 10,
                "name": "Computer science",
                "description": "Descr"
            },
            {
                "id": 30,
                "name": "DB",
                "description": "dsds"
            }
        ]
    }
];

ARTICLES = [
    {
        "targetCompetency": 10,
        "id": 10,
        "author": "test@dwdew.vfv",
        "title": "Title for CS",
        "text": "Hello it's test CS"
    }, {
        "targetCompetency": 30,
        "id": 20,
        "author": "test@dwdew.vfv",
        "title": "Title for DB",
        "text": "Hello it's test DB"
    }
];

TESTS = [
    {
        "targetSubject": 10,
        "id": 10,
        "title": "OOP basics",
        "maxQuestions": 10,
        "maxMark": 100,
        "questions": [
            {
                "id": 1,
                "questionText": "text",
                "options": [{
                    "id": 1,
                    "correct": true,
                    "text": "correct"
                }, {
                    "id": 2,
                    "correct": false,
                    "text": "dsdsds"
                }, {
                    "id": 3,
                    "correct": false,
                    "text": "dsdsds"
                }, {
                    "id": 3,
                    "correct": false,
                    "text": "dsdsdsds"
                }]
            }
        ]
    }
];
var USER_STUDENT = "student";
var USER_TEACHER = "teacher";
var USER_ADMIN = "admin";