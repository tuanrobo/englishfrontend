import {Text, View, ScrollView, SafeAreaView} from 'react-native';
import {useEffect, useState} from 'react';
import {MarkdownView} from 'react-native-markdown-view';

import styles from '../components/style';

export default function GrammarDetails({route}) {
  const {description} = route.params;
  const [isLoading, setLoading] = useState();
  const [bookmark, setBookmark] = useState();


  return (
    <SafeAreaView style={styles.wrapContainer}>
      <ScrollView>  
        {isLoading ? (
          ActivityIndicator
        ) : (
          <View style={styles.article}>
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <>                
                <MarkdownView>{description}</MarkdownView>
              </>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
