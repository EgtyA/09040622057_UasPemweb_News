import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get("http://localhost:5000/items");
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items', error);
    }
  };

  return (
    <div className="container mt-4">          
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>ID Berita</th>
                        <th>Judul Berita</th>
                        <th>Nama kategori</th>
                        <th>Ringkasan</th>
                        <th>Keywords</th>                       
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id_berita}>
                            <td>{item.id_berita}</td>                          
                            <td>{item.judul_berita}</td>
                            <td>{item.nama_kategori}</td>
                            <td>{item.ringkasan}</td>                          
                            <td>{item.keywords}</td>                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ItemList;
