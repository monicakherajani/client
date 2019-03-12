import React, { Component } from 'react';
import Session from './Session';
import Axios from 'axios';
import Constants from './Constants';
import { Redirect } from 'react-router-dom';

class CategoryList extends Component {
  session = Session.getInstance();
  state = {
    categories: [],
    name: '',
    description: '',
    catclicked: null
  };

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };
  onDescChange = event => {
    this.setState({ description: event.target.value });
  };

  onClickCat = catid => {
    console.log('clicked', catid);
    this.setState({ catclicked: catid });
  };

  onAddCategory = () => {
    let cat = { name: this.state.name, description: this.state.description };
    console.log('adding cat', cat);
    Axios.post(Constants.BASE_URL + 'category/addcategory', cat).then(() => {
      this.fetchCategories();
    });
  };

  fetchCategories() {
    Axios.get(Constants.BASE_URL + 'category/getallcategories').then(res => {
      let data = res.data || [];
      this.session.categories = data;
      console.log('res.data', '[' + data + ']');
      this.setState({ categories: data });
    });
  }
  render() {
    console.log(this.props);
    if (this.state.catclicked) {
      let cc=this.state.catclicked;
      this.setState({catclicked:null});
      return <Redirect to={'/CategoryList/' + cc} />;
    }
    if (!this.session.categories) {
      this.fetchCategories();
    }

    return (
      <>
        <h1>Courses</h1>
        <div className=' container' style={{ marginLeft: '200px' }}>
          <div className='row'>
            {this.state.categories.map(c => {
              return (
                <div className='col-4'>
                  <div className='course-card'>
                    <div
                      className='card-body'
                      style={{
                        height: '200px'
                      }}
                    >
                      <h5 className='card-title'>{c.name}</h5>
                      <p className='card-text'>{c.description}</p>
                      <button
                        className='btn btn-success'
                        onClick={this.onClickCat.bind(this, c._id)}
                      >
                        View Course
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <table>
            <tr>
              <td>
                <span>Name of Category</span>
              </td>
              <td>
                <input type='text' onChange={this.onNameChange} />
              </td>
            </tr>
            <tr>
              <td>
                <span>Description</span>
              </td>
              <td>
                <input type='text' onChange={this.onDescChange} />
              </td>
            </tr>
          </table>
          <button onClick={this.onAddCategory}>Add</button>
        </div>
      </>
    );
  }
}

export default CategoryList;
