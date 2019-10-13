import React, {Component} from 'react';
import {Picker} from 'react-native';
import {Card, CardSection, Input, Button} from './common';
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate} from '../actions';

class EmployeeCreate extends Component {
  onButtonPress() {
    const {name, shift, phone} = this.props;

    this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={text =>
              this.props.employeeUpdate({prop: 'name', value: text})
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="+9233333333"
            value={this.props.phone}
            onChangeText={value =>
              this.props.employeeUpdate({prop: 'phone', value})
            }
          />
        </CardSection>

        <CardSection>
          <Picker
            style={{flex: 1}}
            selectedValue={this.props.shift}
            onValueChange={value =>
              this.props.employeeUpdate({prop: 'shift', value})
            }>
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const {name, phone, shift} = state.employeeForm;
  return {name, phone, shift};
};

export default connect(
  mapStateToProps,
  {employeeUpdate, employeeCreate},
)(EmployeeCreate);
