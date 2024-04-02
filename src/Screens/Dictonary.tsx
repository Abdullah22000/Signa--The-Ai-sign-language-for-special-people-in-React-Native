import React, { useState } from 'react';
import { StyleSheet, View, TextInput, FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native-elements';

interface DictionaryItem {
  id: number;
  term: string;
  definition: string;
}

const Dictionary = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState<DictionaryItem[]>([]);

  const searchData = async (searchQuery: string) => {
    // Perform your search operation here
    // For demonstration, let's filter a sample data array
    const filteredData: DictionaryItem[] = sampleData.filter(item =>
      item.term.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarContainer}>
      <Image
      source={require('../assets/search.png')}
      style={{ width: 20, height: 20, }} // Adjust width and height as needed
    />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          onChangeText={(text) => {
            setSearchText(text);
            searchData(text);
          }}
          value={searchText}
        />
      </View>
      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <View style={styles.resultItem}>
            <Text>{item.term}</Text>
            <Text>{item.definition}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color:"black"
  },
  resultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

// Sample data for demonstration
const sampleData: DictionaryItem[] = [
  { id: 1, term: 'Apple', definition: 'A fruit that grows on trees.' },
  { id: 2, term: 'Banana', definition: 'A yellow fruit with a peel.' },
  { id: 3, term: 'Orange', definition: 'A citrus fruit.' },
  { id: 4, term: 'Pineapple', definition: 'A tropical fruit with a spiky shell.' },
];

export default Dictionary;
