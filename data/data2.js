
import img1 from '../public/image2.png'
import img3 from '../public/image3.png'

const sampleData = [
    {
        photo: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
        name: "Lily Oliver",
        title:"@lillyoliver12",
      text:
        "Kindness costs nothing,but its value is immeasurable. Spread love and positivity wherever you go.",
        ig_count:"1.6",
        repost:'95',
        share:'23',
        date:'Yesterday,11:20 PM',
        category:'Thought',
        img:"https://images.pexels.com/photos/804270/pexels-photo-804270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        photo: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
        name: "John Martin",
        title:"@martingerriclub",
      text:
        "It is critical to emphasize the holistic character of wellbeing,which includes the physical,mental and emotional aspects of health. Your body is a marvelous machine that needs regular maintainance and care to work properly. Begin by putting nutrition first:nourish your body with full, nutrient-dense foods that provide critical vitamins,minerals,and anitoxidants. To promote general health,eat a balanced diet...",
        ig_count:"1.2",
        repost:'75',
        share:'54',
        date:'Today,07:36 AM',
        category:'Thought'
    },

    {
        photo: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "Lucas Ryan",
        title:"@imlucasryan",
      text:
        "Embrace change, for it is the only constant in life.Adaptability is the key to growth and resilience.So be...",
        ig_count:"2.2",
        repost:'45',
        share:'23',
        date:'Today,08:46 AM',
        category:'Blog',
        img:"https://images.pexels.com/photos/804270/pexels-photo-804270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "Cally Yuri",
        title:"@sing.with.cally",
      text:
        "Believe in yourself,even when others doubts you.Your inner strength is your greatest asset.",
        ig_count:"1.9",
        repost:'85',
        share:'33',
        date:'Today,03:54 PM',
        category:'Podcast',
        img:"data:image/png;base64,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"
    },

    {
        photo: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "Mona Roy",
        title:"@royalqueen.mona",
      text:
        "Be the reason someone smiles today.Kindness has a ripple effect that no bounds.Don't you agree o...",
        ig_count:"2",
        repost:'69',
        share:'40',
        date:'Today,,03:27 PM',
        category:'Blog',
        img:"https://images.pexels.com/photos/804270/pexels-photo-804270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },



    {
        photo: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "Mona James",
        title:"@miss01.mona",
      text:
        "Dear future leader of the world,you are capable of more than you know.Believe in your potential and watch...",
        ig_count:"2",
        repost:'70',
        share:'40',
        date:'2 days ago',
        category:'Podcast',
        img:"data:image/png;base64,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"
    },
   

];


export default sampleData;











   
    