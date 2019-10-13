import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import _ from 'lodash';
import {employeesFetch} from '../actions/EmployeeActions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  async componentDidMount() {
    await this.props.employeesFetch();

    // this.createDataSource(this.props);
  }

  // componentWillReceiveProps(nextProps) {
  //   this.createDataSource(nextProps);
  // }

  // createDataSource({employees}) {
  // const ds = new ListView.DataSource({
  //   rowHasChanged: (r1, r2) => r1 !== r2,
  // });
  // this.dataSource = ds.cloneWithRows(employees);
  // }

  // renderRow(employee) {
  //   return <ListItem employee={employee} />;
  // }

  // renderItem(emp) {
  //   return (
  //     <CardSection>
  //       <Text>Employee Name</Text>
  //     </CardSection>
  //   );
  // }

  Item({title}) {
    return (
      <View>
        <Text>{title}</Text>
      </View>
    );
  }

  render() {
    console.log('employees---->', this.props.emps);
    return (
      <View style={{flex: 1}}>
        {this.props.emp ? (
          <FlatList
            data={this.props.emps}
            renderItem={({emp}) => <Item title={emp.id} />}
            keyExtractor={emp => emp.id}
          />
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = state => {
  // const employees = _.map(state.employees, (val, uid) => {
  //   return {...val, uid};
  // });
  // return {employees};

  const {emps} = state.employees;
  return {emps};
};

export default connect(
  mapStateToProps,
  {employeesFetch},
)(EmployeeList);
