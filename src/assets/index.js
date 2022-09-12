import Avatar2 from "./avatar2.jpg";
import Avatar3 from "./avatar3.jpg";
import Avatar4 from "./avatar4.jpg";
import Avatar5 from "./avatar5.jpg";
import Avatar6 from "./avatar6.jpg";
import Avatar7 from "./avatar7.jpg";
import Avatar8 from "./retrato.jpg";
import Avatar9 from "./retrato2.jpg";
import Avatar10 from "./retrato3.jpg";
import Post1 from "./post1.jpg";
import Post2 from "./post2.jpg";


const Photos = [Avatar2, Avatar3, Avatar4, Avatar5, Avatar6, Avatar7, Avatar8, Avatar9, Avatar10];

const Avatars = [
    { avatar: Avatar2, name: "Harriet Adkins", category: "Company" },
    { avatar: Avatar3, name: "Sofia Herrera", category: "Company" },
    { avatar: Avatar4, name: "Pedro Molinas", category: "Company" },
    { avatar: Avatar5, name: "Roberto Bogado", category: "Company" },
    { avatar: Avatar6, name: "Lucia Fernandez", category: "Company" },
    { avatar: Avatar7, name: "Agustina Vicente", category: "Beauty Store" }
]

const SuggestedData = [
    { avatar: Avatar2, name: "Harriet Adkins", friends: "6" },
    { avatar: Avatar3, name: "Sofia Herrera", friends: "10" },
    { avatar: Avatar4, name: "Pedro Molinas", friends: "23" },
    { avatar: Avatar5, name: "Roberto Bogado", friends: "15" },
    { avatar: Avatar6, name: "Lucia Fernandez", friends: "8" },
    { avatar: Avatar7, name: "Agustina Vicente", friends: "24" }
]

const FeedData = [
    {
        avatar: Avatar3,
        user: "@Sofia89",
        name: "Sofia Herrera",
        feed: "I love cookie chupa chups sweet tart apple pie ⭐ chocolate bar.",
        hashtags: ["#design", "#developer"]
    },
    {
        avatar: Avatar5,
        user: "@Rober254",
        name: "Roberto Bogado",
        feed: "Halva i love powder jelly i love cheesecake candy. 😍",
        hashtags: ["#reactjs", "#code", "#junior"]
    },
    {
        avatar: Avatar7,
        user: "@AgusVicent34",
        name: "Agustina Vicente",
        feed: "I love designing and programming using react js, my projects are in my portfolio.",
        hashtags: ["#sketch", "#uiux", "#figma"]
    },
]

const Posts = [
    {
        avatar: Avatar2,
        name: "Belen Gutierrez",
        text: "Wonderful Machine A well-written bioi allows viewers to get to know a photographer beyond the work. This can make the difference when presenting to clients who are looking for the perfect fit.",
        date: "12 Dec 2015 at 1:16 AM",
        image: Post1,
        likes: "1.2K",
        ammountComments: "1.2K",
        share: "1.2K",
        comments: [
            {
                avatar: Avatar4,
                name: "Jackey Potter",
                comment: "Beautiful landscape photography, today you added a follower. ✨",
                likes: 34
            },
            {
                avatar: Avatar7,
                name: "Kitty Allanson",
                comment: "Nice colors, great talent for taking pictures, keep it up. 💞",
                likes: 61
            },
        ]
    },
    {
        avatar: Avatar4,
        name: "Lucas Menoti",
        text: "Wonderful Machine A well-written bioi allows viewers to get to know a photographer beyond the work. This can make the difference when presenting to clients who are looking for the perfect fit.",
        date: "12 Dec 2015 at 1:16 AM",
        likes: "1.2K",
        image: Post2,
        ammountComments: "1.2K",
        share: "1.2K",
        comments: [
            {
                avatar: Avatar6,
                name: "Kitty Allanson",
                comment: "Beautiful landscape photography, today you added a follower. ✨",
                likes: 34
            }
        ]
    },
    {
        avatar: Avatar5,
        name: "Charles Watson",
        text: "Wonderful Machine A well-written bioi allows viewers to get to know a photographer beyond the work. This can make the difference when presenting to clients who are looking for the perfect fit.",
        date: "12 Dec 2015 at 1:16 AM",
        likes: "1.2K",
        image: "",
        ammountComments: "1.2K",
        share: "1.2K",
        comments: [
            {
                avatar: Avatar6,
                name: "Kitty Allanson",
                comment: "Beautiful landscape photography, today you added a follower. ✨",
                likes: 34
            }
        ]
    }
]

const PollData = {
    text: "Who is the best actor in Marvel Cinematic Universe?",
    options: [
        {
            option: "RDJ",
            percent: 82,
            avatars: [Avatar2, Avatar3, Avatar4, Avatar5, Avatar6]
        },
        {
            option: "Chris Hemswort",
            percent: 67,
            avatars: [Avatar7, Avatar8, Avatar9]
        }
    ]
}

export {
    Avatars,
    FeedData,
    Posts,
    Photos,
    SuggestedData,
    PollData
}