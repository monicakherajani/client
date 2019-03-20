import React, { Component } from 'react';
import Session from './Session';
import Axios from 'axios';
import Constants from './Constants';
import { Redirect, Link } from 'react-router-dom';

class CategoryList extends Component {
  session = Session.getInstance();
  currentid = null;
  state = {
    categories: [],
    courses: [],
    name: '',
    description: '',
    catclicked: null,
    isLoaded: false
  };

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };
  onDescChange = event => {
    this.setState({ description: event.target.value });
  };
  onChangeURL = event => {
    this.setState({ description: event.target.value });
  };

  onClickCat = catid => {
    console.log('clicked', catid);
    this.setState({ catclicked: catid });
    window.setTimeout(()=>{this.fetchCategories();},500);
  };

  onAddCategory = () => {
    let cat = {
      name: this.state.name,
      description: this.state.description,
      parent: this.currentid
    };
    console.log('adding cat', cat);
    Axios.post(Constants.BASE_URL + 'category/addcategory', cat).then(() => {
      this.fetchCategories();
    });
  };

  fetchCategories() {
    let id = this.props.match.params.id || null;
    console.log('id', id);
    let url = 'category/getallcategories?id=' + id;
    if (!id) {
      url = 'category/getallcategories';
    }

    Axios.get(Constants.BASE_URL + url).then(res => {
      let data = res.data || [];
      this.session.categories = data;
      console.log('res.data', '[' + data + ']');
      this.setState({ categories: data });
      this.currentid = id;
    });

    if (id) {
      Axios.get(
        Constants.BASE_URL +
          'coursecontent/getallcoursecontent?categoryid=' +
          id
      ).then(res => {
        console.log('gacc result', res.data);
        let data = res.data || [];
        this.setState({ courses: data ,
      
       });
      });
    // } else {
    //   this.setState({ courses: [] });
    }
  }

  // shouldComponentUpdate()
  // {
  //   // if (this.props.match.params.id !== this.currentid) {
  //     return true;
  //   // }
  // }

  // componentWillReceiveProps(nextProps, nextState)
  componentDidMount()
  // componentDidUpdate()
  {
    console.log('cdm');
   this.fetchCategories();
  }

  render() {
    console.log(this.props);
    if (this.state.catclicked) {
      let cc=this.state.catclicked;
      this.setState({catclicked:null});
      return <Redirect to={'/CategoryList/' + cc} />;
    }
    console.log('render', this.props.match.params.id, this.currentid);


    return (
      <>
        <h1> Course Categories</h1>
        <div className=' container' style={{ marginLeft: '200px' }}>
          <div className='row'>
            {this.state.categories.map(c => {
              return (
                <div className='col-4'>
                  <div className='course-card'>
                    {/* <i style={{marginLeft:'180px'}} className="fa fa-edit"></i> */}

                    <div
                      className='card-body'
                      style={{
                        height: '200px'
                      }}
                    >
                      <h5 className='card-title'>{c.name}</h5>
                      <p className='card-text'>{c.description}</p>
                      {/* <Link
                        to={'/CategoryList/' + c._id}
                        className='btn btn-success'
                      >
                        View Category
                      </Link> */}
                      <button className="btn btn-success" onClick={this.onClickCat.bind(this,c._id)}> View </button>
                      <Link
                        to={'/course/' + c._id + '/' + c.name}
                        className='btn btn-success'
                      >
                        Add Sub Course
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <h1>Courses</h1>
        {this.state.courses.map(c => {
          return (
            <>
              <div className='course-card'>
                <Link to ={'/CourseDetails/' + c._id + '/' + c.CourseName}> 
                  {c.CourseName}
                </Link>
              </div>
            </>
          );
        })}

        <div>
          <h2>Add New Subcategory</h2>
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
            <tr>
              <td>
                <span>URL</span>
              </td>
              <td>
                <input type='text' onChange={this.onChangeURL} />
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
