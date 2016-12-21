var express = require("express");

var router = express.Router();

var eventData = [ {
    name: 'Event 1',
    description: 'The first event',
    date: '2016.01.01',
    time: '1:00 PM',
    duration: '1 Hour',
    location : {
        streetAddr: '101 main street',
        city: 'Los Angeles', 
        state: 'CA',
        zip: '87885',
        lon: 0,
        lat: 0
        },
    capacity: 100
    },
    {
    name: 'Event 2',
    description: 'The second event',
    date: '2016.02.02',
    time: '2:00 PM',
    duration: '2 Hour',
    location : {
        streetAddr: '202 main street',
        city: 'Los Angeles', 
        state: 'CA',
        zip: '87885',
        lon: 0,
        lat: 0
        },
    capacity: 200
    },
    {
        name: 'Event 3',
        description: 'The Third event',
        date: '2016.03.03',
        time: '1:00 PM',
        duration: '1 Hour',
        location : {
            streetAddr: '303 main street',
            city: 'Los Angeles', 
            state: 'CA',
            zip: '87885',
            lon: 0,
            lat: 0
            },
        capacity: 300
    },
    {
        name: 'Event 4',
        description: 'The fourth event',
        date: '2016.04.04',
        time: '1:00 PM',
        duration: '1 Hour',
        location : {
            streetAddr: '401 main street',
            city: 'Los Angeles', 
            state: 'CA',
            zip: '87885',
            lon: 0,
            lat: 0
            },
        capacity: 400
    }
    ];
    
router.route('/')
    .get(function(req, res){
        res.render('events' , { 
        list: ['first event', '2nd event', '3rd event'],
        nav: [ { Link: 'Services', Text: 'Services'}, 
                { Link: 'Portfolio', Text: 'Portfolio'},
                { Link: 'About', Text: 'About'},
                { Link: 'Team', Text: 'Team'},
                { Link: 'Contact', Text: 'Contact'},
                {Link: 'Events', Text: 'Events'}
            ],
        events : eventData
    });
});

router.route('/:id')
    .get(function(req, res){
        var id = req.params.id;
        
        res.render('events', {
           list: ['first event', '2nd event', '3rd event'],
        nav: [ { Link: 'Services', Text: 'Services'}, 
                { Link: 'Portfolio', Text: 'Portfolio'},
                { Link: 'About', Text: 'About'},
                { Link: 'Team', Text: 'Team'},
                { Link: 'Contact', Text: 'Contact'},
                {Link: 'Events', Text: 'Events'}
            ],
        events : eventData[id]
        });
    });

module.exports = router;