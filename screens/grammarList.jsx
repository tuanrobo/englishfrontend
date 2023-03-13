import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';

import axios from 'axios';

import styles from '../components/style';
import {useEffect, useMemo, useState} from 'react';
import {Chip, List, SegmentedButtons} from 'react-native-paper';

export default function GrammarList({navigation}) {
  const [isLoading, setLoading] = useState();
  const [data, setData] = useState([]);
  const [bookmark, setBookmark] = useState('all');

  // const [value, setValue] = useState('');

  const [filterButtons, setFilterButtons] = useState([
    {label: 'All'},
    {label: 'Bookmark'},
  ]);

  const filteredList = useMemo(() => {
    if (bookmark === 'all') return data;
    return data.filter(item => bookmark === item.attributes.bookmark);
  }, [bookmark, data]);

  const onBookmarkHandle = bookmark => () => {
    setBookmark(bookmark);
    console.log(setBookmark(bookmark));
  };

  // const filterButton = ({data}) =>{
  //   <TouchableOpacity
  //   onPress={()=>{
  //     if (callback && disabled!) {
  //       callback(data);
  //     }
  //   }}
  //   >
  //     <Text>{data.label}</Text>
  //   </TouchableOpacity>
  // }

  const getGrammar = async () => {
    try {
      const response = await fetch('http://localhost:1337/api/grammars');
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setData(getGrammar);
  }, []);

  return (
    <SafeAreaView style={styles.wrapContainer}>
      <View style={{flex: 1, padding: 16}}>
        <View style={styles.container}>
          <Text style={styles.header}>English Grammar</Text>

          <SegmentedButtons
          // style={{backgroundColor:'red'}}
            value={bookmark}
            onValueChange={setBookmark}
            onPress={onBookmarkHandle}
            buttons={[
              {
                value: 'all',
                label: 'Grammar',
              },
              {
                value: true,
                label: 'Bookmark',
              },
            ]}
          />

          {isLoading ? (
            ActivityIndicator
          ) : (
            <View style={{flex: 1, paddingTop:8}}>
              {isLoading ? (
                <ActivityIndicator />
              ) : (
                <FlatList
                  style={styles.flatList}
                  data={filteredList}
                  keyExtractor={({id}) => id}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      style={styles.listItem}
                      onPress={() =>
                        navigation.navigate('Grammar details', {
                          id: item.id,
                          description: item.attributes.description,
                          bookmark: item.attributes.bookmark,
                        })
                      }>
                      <Text style={styles.listItemText}>
                        {item.attributes.title}
                      </Text>
                      {item.attributes.bookmark ? (
                        <Image
                          source={require('.././assets/icons/ic-bookmarked.png')}
                        />
                      ) : null}
                    </TouchableOpacity>
                  )}
                />
              )}
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
