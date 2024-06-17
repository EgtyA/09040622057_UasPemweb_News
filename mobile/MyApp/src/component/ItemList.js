import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import axios from 'axios';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://192.168.1.3:5000/items'); // Ganti dengan IP yang benar
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>
        <Text style={styles.label}>Judul Berita: </Text>
        {item.judul_berita}
      </Text>

      <Text style={styles.itemText}>
        <Text style={styles.label}>Kategori: </Text>
        {item.nama_kategori}
      </Text>

      <Text style={styles.itemText}>
        <Text style={styles.label}>Ringkasan: </Text>
        {item.ringkasan}
      </Text>

      <Text style={styles.itemText}>
        <Text style={styles.label}>Keywords: </Text>
        {item.keywords}
      </Text>

    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>News List UasWeb</Text>
        <Text style={styles.subtitle}>Berikut adalah daftar berita UasWeb:</Text> 
      </View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id_berita.toString()}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0', // Warna latar belakang yang lebih terang
  },
  header: {
    alignItems: 'flex-start', // Menyusun konten di awal secara horizontal
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', // Warna teks judul
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#666', // Warna teks sub judul
  },
  listContent: {
    width: '100%',
  },
  itemContainer: {
    padding: 15,
    backgroundColor: '#fff', // Warna latar belakang item    
    borderColor: '#ddd',
    borderRadius: 6,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1, // Efek bayangan untuk Android
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555', // Warna teks item
  },
  label: {
    fontWeight: 'bold',
    color: '#333', // Warna teks label
  },
});

export default ItemList;
