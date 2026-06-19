import ptSir from '../../assets/images/ptSir.webp';
import ach1 from '../../assets/images/sports/achievements/1.webp';
import ach2 from '../../assets/images/sports/achievements/2.webp';
import ach3 from '../../assets/images/sports/achievements/3.webp';
import ach4 from '../../assets/images/sports/achievements/4.webp';
import ach5 from '../../assets/images/sports/achievements/5.webp';
import ach6 from '../../assets/images/sports/achievements/6.webp';

import gd1 from '../../assets/images/sports/ground/1.webp';
import gd2 from '../../assets/images/sports/ground/2.webp';
import gd3 from '../../assets/images/sports/ground/3.webp';
import gd4 from '../../assets/images/sports/ground/4.webp';
import gd5 from '../../assets/images/sports/ground/5.webp';
import gd6 from '../../assets/images/sports/ground/6.webp';
import gd7 from '../../assets/images/sports/ground/7.webp';
import gd8 from '../../assets/images/sports/ground/8.webp';
import gd9 from '../../assets/images/sports/ground/9.webp';
import gd10 from '../../assets/images/sports/ground/10.webp';
import gd11 from '../../assets/images/sports/ground/11.webp';

export const sportsData = {
    sportsAchievement: {
        tag: "Achievements",
        achieve_images: [{image: ach1},{image: ach2},{image: ach3},{image: ach4},{image: ach5},{image: ach6}]
    },
    sportsCourt: {
        tag: "Court",
        court_images: [{image: gd1},{image: gd2},{image: gd3},{image: gd4},{image: gd5},{image: gd6},{image: gd7},{image: gd8},{image: gd9},{image: gd10},{image: gd11}]
    },
    overview: {
        tag: "Overview",
        title: "Sports Department",
        content: [
        "Anybody can benefit from sports since they provide both physical and cerebral energy that can be used for action, creativity, and invention.",
        "The purpose of its organization is to use, maintain, or enhance physical ability and talents while offering spectators and participants amusement.",
        "Sports have a significant impact on all aspects of life and are an essential component of human existence."
        ]
    },

    directorMessage: {
        tag: "Achievements",
        title: "Physical Director",
        name: "Dr. R. Manickam",
        designation: "Physical Director",
        image: ptSir,
        content: [
        "Sports unite individuals of all ages, genders, and nationalities and play a significant role in every person's daily life.",
        "Our founder-chancellor has an amazing idea to transform SRMIST into India's Temple of Sports.",
        "The Directorate of Sports is making progress in realizing his objective.",
        "SRMIST has experienced unprecedented success in the past few years.",
        "Young athletes who have excelled in a variety of sports have taken home awards and trophies from local, national, and worldwide competitions.",
        "Our objective is for our teams to compete in more events, win medals, and bring honours to the university and the nation.",
        "I firmly think that playing sports fosters leadership, discipline, sacrifice, and collaboration."
        ]
    },

    programs: {
        tag: "Programs",
        title: "Sports Education & Training",
        description:
        "The Directorate of Sports, SRMIST provides a range of courses via the Department of Physical Education & Sports Sciences and the Department of Yoga, in addition to the usual sports programs."
    },

    outdoorFacilities: {
        tag: "Infrastructure",
        title: "Outdoor Sports Facilities",
        facilities: [
        { count: "4", name: "Volleyball Court" },
        { count: "1", name: "Basketball Court" },
        { count: "1", name: "Tennis Court" },
        { count: "1", name: "Badminton Court" },
        { count: "400m", name: "Track and Field" },
        { count: "1", name: "Football Field" },
        { count: "1", name: "Hockey Field" },
        { count: "1", name: "Cricket Field" },
        { count: "2", name: "Ball Badminton Court" },
        { count: "1", name: "Handball Court" },
        { count: "1", name: "Futsal Court" },
        { count: "1", name: "Kho Kho Field" },
        { count: "1", name: "Kabaddi Court" }
        ]
    },

    indoorGames: {
        description:
        "Indoor sports activity is vibrant and our students have access to a vast range of indoor sports like Table Tennis, Chess, Carrom and other fitness activities."
    },

    fitnessCentre: {
        content: [
        "For students to stay fit and healthy, all hostels are equipped with gym and fitness centre facilities.",
        "Facilities include treadmill, exercise bikes and more of the latest fitness equipment.",
        "The central gym for men at SRM is also equipped with body building equipment.",
        "All gyms and fitness centers are open both in the morning and evening hours."
        ]
    },

    yoga: {
        content: [
        "Hundreds of students and staff participate in International Day of Yoga celebrations every year.",
        "Large scale Yoga programs are held in the multipurpose indoor stadium, lawns, playgrounds and auditoriums.",
        "Renowned guests and Yoga specialists often visit our campus every year.",
        "Students and staff are encouraged to master the ancient Indian gift to the world’s wellbeing and health.",
        "There is also a student-run Yoga Club within SRMIST."
        ]
    },
    outdoorGames: {
        content: [
            "Students actively participate in games such as Cricket, Football, Volleyball, Basketball, Kabaddi, Kho-Kho, Athletics, and Badminton.",
            "The outdoor sports infrastructure supports both recreational activities and professional training, enabling students to achieve excellence in sports."
        ]
    },

    achievements: {
        tag: "Student Achievement",
        title: "Student Achievements",
        items: [
        {
            title: "Tamil Nadu Powerlifting Sports Welfare Championship",
            student:
            "Manoj R of 4th Year CCT (Intern), CAHS, SRMIST, TRC",
            description:
            "Won Gold Medal in the State Level Tamil Nadu Powerlifting Sports Welfare Championship under 74 Kg Category and also secured Gold and Silver Medals in Senior and Junior Categories in Trichy District Level Competitions held during 23rd & 24th November 2024."
        }
        ]
    },

    events: {
        tag: "Events",
        title: "State Level Chess Tournament",
        image: "/images/sports/chess.jpg",
        description:
        "SRM Institute of Science and Technology, Tiruchirappalli and Rockfort Trichy District Chess Academy jointly organised State Level Chess Tournament on 18.08.2024.",
        highlights: [
        "450 students participated",
        "15 districts represented",
        "Prizes distributed by Dr. N. Sambandam, Executive Director",
        "Event inaugurated by Dr. K. Anbalagan, Dean (Student Affairs)"
        ]
    }
};