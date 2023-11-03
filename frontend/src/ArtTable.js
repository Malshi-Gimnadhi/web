import React, { useEffect, useState } from 'react';
import './ArtTable.css';
import { AppBar,Toolbar,Typography,Link , Button} from '@mui/material';
const ArtTable = () => {

 //const user = useSelector(selectUser);
 // const token = user.token;
  
  const [artList, setArtist] = useState([]);


  async function handleDelete(id){

  
    console.log(id)
    const response = await fetch(`http://localhost:3001/api/v1/art/${id}`,{
      method:'DELETE',
      headers: {
        //'x-access-token': token
      }
    })
    const data = await response.json();
    console.log(data)
    fetchData();
  }

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/art/all',
      {
        headers: {
         // 'x-access-token': token
        }
      }
      
      ); 
      const data = await response.json();
      console.log(data)
      setArtist(data); 
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

 
  useEffect(() => {
    fetchData();
  }, []);




  return (
    
    <div>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        backgroundColor: ' #4169E1'}}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="#800000" noWrap sx={{ flexGrow: 1 }}>
            Thalia Online Art Gallery
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Features
            </Link>
            
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
          </nav>
          <Button 
          onClick={()=>{
            window.location.href="/signup";
          }}
          href="#" variant="outlined" 
          sx={{ my: 1, mx: 1.5, color: 'Black', borderColor: 'Black' }}>
          Register
          </Button>
          
          <Button
          onClick={()=>{
            window.location.href="/signin";
          }}
          href="#" variant="outlined" 
          sx={{ my: 1, mx: 1.5, color: 'Black', borderColor: 'Black' }}>
            Login
          </Button>
          <Button
          onClick={()=>{
            window.location.href="/";

          }}
          color="error"
          >
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
      
      <div className="art-table">
        <table>
          <thead>
            <tr>
              <th>Art Name</th>
              <th>Artist Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {artList.map((art, index) => (
              <tr key={index}>
                <td>{art.name}</td>
                <td>{art.artistName}</td>
                <td>
                  <img src={"http://localhost:3001" + art.image} alt={art.artName} />
                </td>
                <td>{art.price}</td>
                <td>
                  <button
                    onClick={() => {
                      window.location.href = `/addart/${art._id}`
                     // { handleUpdate(art._id) };
                    }}
                  >
                    Update
                  </button>
                  <button onClick={() => { if (window.confirm("Are you sure?")) { handleDelete(art._id) } }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default ArtTable;
