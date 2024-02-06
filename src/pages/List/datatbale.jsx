import "./list.css";

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "Username",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.Username}
        </div>
      );
    },
  },
  {
    field: "Email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "date",
    headerName: "Date On",
    width: 200,
  },
  
  
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    date :"11/02/09",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    date :"11/02/09",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "active",
   
  },
  {
    id: 3,
    username: "Lannister",
    date :"11/02/09",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "inactive",

  },
  {
    id: 4,
    username: "Stark",
    date :"11/02/09",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
  },
  {
    id: 5,
    username: "Targaryen",
    date :"11/02/09",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "inactive",
  },
  {
    id: 6,
    username: "Melisandre",
    date :"11/02/09",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
  },
  {
    id: 7,
    username: "Clifford",
    date :"11/02/09",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "active",
  },
  {
    id: 8,
    username: "Frances",
    date :"11/02/09",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
  },
  {
    id: 9,
    username: "Roxie",
    date :"11/02/09",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "inactive",
    
  },
  {
    id: 10,
    username: "Roxie",
    date :"11/02/09",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",

  },
];
