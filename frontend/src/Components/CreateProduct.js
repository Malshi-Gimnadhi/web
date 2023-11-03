import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./ArtForm.css";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {selectUser} from '../slices/userSlice';

function CreateProduct() {
  const { id } = useParams();
  const user = useSelector(selectUser);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [artist, setArtist] = useState("");
  const [price, setPrice] = useState("");
  
  useEffect(() => {
      async function getCompany(id) {
          await axios.get("http://localhost:3001/api/v1/art/" + id, {
              headers: {
                  "x-access-token": user.token
              },
          }).then((response) => {
              console.log(response);
              setName(response.data.name);
              
              setImage(response.data.image);

              setDescription(response.data.description);

              setArtist(response.data.artistName);
              setPrice(response.data.price);

             


          
          }).catch((error) => {
              console.log(error);
          });
      }
      
      if (id)         {
          // getCompany(id)
        }

  }, [])


  const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("name", name);
      formData.append("image", image);
      formData.append("description", description);
      formData.append("artistName", artist);
      formData.append("price", price);
     

     

      if (id) {
          await axios.put("http://localhost:3001/api/v1/art/" + id, formData, {
              headers: {
                  "Content-Type": "multipart/form-data",
                  "x-access-token": user.token
              },
          }).then((response) => {
              console.log(response);
              window.location.href = "/myarts";
          }).catch((error) => {
              console.log(error);
          });
          return;
      }


      await axios.post("http://localhost:3001/api/v1/art", formData, {
          headers: {
              "Content-Type": "multipart/form-data",
              // "x-access-token": user.token
          },
      }).then((response) => {
          console.log(response);
          window.location.href = "/myarts";
      }).catch((error) => {
          console.log(error);
      });


  }


  return (
    
    
    <div className="art-form-container">
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          name="artistName"
          placeholder="Artist Name"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <input
          type="file"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateProduct;
