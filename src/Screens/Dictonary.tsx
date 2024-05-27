import React, { useState } from 'react';
import { StyleSheet, View, TextInput, FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native-elements';

interface DictionaryItem {
  id: number;
  term: string;
  definition: string;
  image?: any; // Add optional image field
}

const Dictionary = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState<DictionaryItem[]>([]);

  const searchData = async (searchQuery: string) => {
    const filteredData: DictionaryItem[] = sampleData.filter(item =>
      item.term.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // console.log('Filtered Data:', filteredData); // Add this line for debugging
    setSearchResults(filteredData);
    
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Image
          source={require('../assets/search.png')}
          style={{ width: 20, height: 20 }} // Adjust width and height as needed
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
            {item.image && (
              <Image
                source={item.image}
                style={{ width: 240, height: 300, marginLeft:60 }} // Adjust size and margin as needed
              />
            )}
            <View>
              <Text style={styles.term}>{item.term}</Text>
              <Text style={{alignSelf:"center",color:"black"}}>{item.definition}</Text>
            </View>
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
    backgroundColor: 'white',
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
    color: 'black',
  },
  resultItem: {
    flexDirection: 'column', // Add this line for horizontal layout
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  term: {
    fontWeight: 'bold',
    alignSelf:"center",
    fontSize:20,
    color:"black"
  },
});

// Sample data for demonstration
const sampleData: DictionaryItem[] = [
  { id: 1, term: 'A', definition: '', image: require('../assets/az/A.jpg') },
  { id: 2, term: 'B', definition: '', image: require('../assets/az/B.jpg') },
  { id: 3, term: 'C', definition: '', image: require('../assets/az/C.jpg') },
  { id: 4, term: 'D', definition: '', image: require('../assets/az/D.jpg') },
  { id: 5, term: 'E', definition: '', image: require('../assets/az/E.jpg') },
  { id: 6, term: 'F', definition: '', image: require('../assets/az/F.jpg') },
  { id: 7, term: 'G', definition: '', image: require('../assets/az/G.jpg') },
  { id: 8, term: 'H', definition: '', image: require('../assets/az/H.jpg') },
  { id: 9, term: 'I', definition: '', image: require('../assets/az/I.jpg') },
  { id: 10, term: 'J', definition: '', image: require('../assets/az/J.jpg') },
  { id: 11, term: 'K', definition: '', image: require('../assets/az/K.jpg') },
  { id: 12, term: 'L', definition: '', image: require('../assets/az/L.jpg') },
  { id: 13, term: 'M', definition: '', image: require('../assets/az/M.jpg') },
  { id: 14, term: 'N', definition: '', image: require('../assets/az/N.jpg') },
  { id: 15, term: 'O', definition: '', image: require('../assets/az/O.jpg') },
  { id: 16, term: 'P', definition: '', image: require('../assets/az/P.jpg') },
  { id: 17, term: 'Q', definition: '', image: require('../assets/az/Q.jpg') },
  { id: 18, term: 'R', definition: '', image: require('../assets/az/R.jpg') },
  { id: 19, term: 'S', definition: '', image: require('../assets/az/S.jpg') },
  { id: 20, term: 'T', definition: '', image: require('../assets/az/T.jpg') },
  { id: 21, term: 'U', definition: '', image: require('../assets/az/U.jpg') },
  { id: 22, term: 'V', definition: '', image: require('../assets/az/V.jpg') },
  { id: 23, term: 'W', definition: '', image: require('../assets/az/W.jpg') },
  { id: 24, term: 'X', definition: '', image: require('../assets/az/X.jpg') },
  { id: 25, term: 'Y', definition: '', image: require('../assets/az/Y.jpg') },
  { id: 26, term: 'Z', definition: '', image: require('../assets/az/Z.jpg') },
  { id: 27, term: '1', definition: '', image: require('../assets/num/1.jpg') },
  { id: 28, term: '2', definition: '', image: require('../assets/num/2.jpg') },
  { id: 29, term: '3', definition: '', image: require('../assets/num/3.jpg') },
  { id: 30, term: '4', definition: '', image: require('../assets/num/4.jpg') },
  { id: 31, term: '5', definition: '', image: require('../assets/num/5.jpg') },
  { id: 32, term: '6', definition: '', image: require('../assets/num/6.jpg') },
  { id: 33, term: '7', definition: '', image: require('../assets/num/7.jpg') },
  { id: 34, term: '8', definition: '', image: require('../assets/num/8.jpg') },
  { id: 35, term: '9', definition: '', image: require('../assets/num/9.jpg') },
  { id: 36, term: '10', definition: '', image: require('../assets/num/10.jpg') },
  { id: 37, term: '20', definition: '', image: require('../assets/num/20.jpg') },
  { id: 36, term: '30', definition: '', image: require('../assets/num/30.jpg') },
  { id: 36, term: '40', definition: '', image: require('../assets/num/40.jpg') },

];


export default Dictionary;
