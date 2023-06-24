import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row_space: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  spaceAround: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  aliSelfCenter: {
    alignSelf: 'center',
  },
  aliSelfEnd: {
    alignSelf: 'flex-end',
  },
  justifyCenter: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: Colors.text,
  },
  subTitle: {
    color: Colors.subText,
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  textAlignLeft: {
    textAlign: 'right',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  verticalMargin: {
    marginVertical: 10,
  },
  verticalMarginM: {
    marginVertical: 16,
  },
  verticalMarginMax: {
    marginVertical: 20,
  },
  horizontalMargin: {
    marginHorizontal: 10,
  },
  horizontalMarginM: {
    marginHorizontal: 16,
  },
  horizontalMarginL: {
    marginHorizontal: 20,
  },
  verticalPadding: {
    paddingVertical: 10,
  },
  verticalPaddingM: {
    paddingVertical: 16,
  },
  verticalPaddingMax: {
    paddingVertical: 20,
  },
  paddingHorizontal: { paddingHorizontal: 10, },
  paddingHorizontalM: { paddingHorizontal: 16, },
  paddingHorizontalX: { paddingHorizontal: 20, },
});

export default Styles;
