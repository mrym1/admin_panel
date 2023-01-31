export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "date",
      headerName: "Date",
      width: 150,
    },
    {
      field: "contestname",
      headerName: "Contest Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.contestname}
          </div>
        );
      },
    },
    {
      field: "winner1",
      headerName: "Winner1",
      width: 150,
    },
    {
      field: "winner2",
      headerName: "Winner1",
      width: 150,
    },
    {
      field: "winner3",
      headerName: "Winner3",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      contestname: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      winner1: "UAE",
      winner2: "Dubai",
      winner3: "Dubai",
      date: "18 jun 2022",
    },
    {
      id: 2,
      contestname: "Jamie Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "deactive",
      winner1: "UAE",
      winner2: "Dubai",
      winner3: "Dubai",
      date: "18 jun 2022",
    },
    {
      id: 3,
      contestname: "Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "pending",
      winner1: "UAE",
      winner2: "Dubai",
      winner3: "Dubai",
      date: "18 jun 2022",
    },
    {
      id: 4,
      contestname: "Stark",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      winner1: "UAE",
      winner2: "Dubai",
      winner3: "Dubai",
      date: "18 jun 2022",
    },
    {
      id: 5,
      contestname: "Targaryen",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "deactive",
      winner1: "UAE",
      winner2: "Dubai",
      winner3: "Dubai",
      date: "18 jun 2022",
    },
    {
      id: 6,
      contestname: "Melisandre",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      winner1: "UAE",
      winner2: "Dubai",
      winner3: "Dubai",
      date: "18 jun 2022",
    },
    {
      id: 7,
      contestname: "Clifford",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "deactive",
      winner1: "UAE",
      winner2: "Dubai",
      winner3: "Dubai",
      date: "18 jun 2022",
    },
    {
      id: 8,
      contestname: "Frances",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "deactive",
      winner1: "UAE",
      winner2: "Dubai",
      winner3: "Dubai",
      date: "18 jun 2022",
    },
    {
      id: 9,
      contestname: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "pending",
      winner1: "UAE",
      winner2: "Dubai",
      winner3: "Dubai",
      date: "18 jun 2022",
    },
    {
      id: 10,
      contestname: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      winner1: "UAE",
      winner2: "Dubai",
      winner3: "Dubai",
      date: "18 jun 2022",
    },
  ];
  