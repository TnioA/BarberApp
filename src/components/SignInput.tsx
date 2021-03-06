import React, { Component } from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
  width: 100%;
  height: 60px;
  background-color: #83D6E3;
  flex-direction: row;
  border-radius: 30px;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
`;

const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #268596;
  margin-left: 10px;
`;

export default class SignInput extends Component<any, any> {
  render() {
    const { IconSvg } = this.props;
 
    return (
      <InputArea>
        <IconSvg with="24" height="24" fill="#268596" />
        <Input 
            placeholder={this.props.placeholder} 
            placeholderTextColor="#268596"
            value={this.props.value}
            onChangeText={this.props.onChangeText}
            secureTextEntry={this.props.password}
        />
      </InputArea>
    );
  }
}