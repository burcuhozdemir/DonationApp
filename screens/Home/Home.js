import React from 'react';
import style from './style';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Search from '../../components/Search/Search';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import {useDispatch, useSelector} from 'react-redux';
import {updateFirstName} from '../../redux/reducers/User';
const Home = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={user.firstName + ' ' + user.lastName} type={1} />
      <Pressable onPress={() => dispatch(updateFirstName({firstName: 'Tomy'}))}>
        <Text>Press me to change first name</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;
