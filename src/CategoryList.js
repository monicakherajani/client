import React, { Component } from 'react';
import Session from './Session';
import Axios from 'axios';
import Constants from './Constants';
import { Redirect, Link } from 'react-router-dom';
import CourseSidebar from './CourseSidebar';
import { green100 } from 'material-ui/styles/colors';

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
    window.setTimeout(() => {
      this.fetchCategories();
    }, 500);
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

  onDeleteCategory = catid => {
    if (window.confirm('Are you really sure to delete this category?')) {
      Axios.get(
        Constants.BASE_URL + 'category/deletecategory?id=' + catid
      ).then(() => {
        this.fetchCategories();
      });
    }
  };

  fetchCategories() {
    let id = this.props.match.params.id || null;
    console.log('id', id);
    let url = 'category/getallcategories?id=' + id;
    if (!id) {
      url = 'category/getallcategories';
    }

    // Axios.get(Constants.BASE_URL + url).then(res => {
    //   let data = res.data || [];
    //   this.session.categories = data;
    //   console.log('res.data', '[' + data + ']');
    //   this.setState({ categories: data });
    //   this.currentid = id;
    // });

    // if (id) {
    //   Axios.get(
    //     Constants.BASE_URL +
    //       'coursecontent/getallcoursecontent?categoryid=' +
    //       id
    //   ).then(res => {
    //     console.log('gacc result', res.data);
    //     let data = res.data || [];
    //     this.setState({ courses: data ,

    //    });
    //   });
    // } else {
    //   this.setState({ courses: [] });

    var promise1 = Axios.get(Constants.BASE_URL + url);
    var promise2 = Axios.get(
      Constants.BASE_URL + 'coursecontent/getallcoursecontent?categoryid=' + id
    );
    Promise.all([promise1, promise2]).then(values => {
      console.log('values',values);
      let categories = values[0].data || [];
      let courses = values[1].data || [];

      console.log('courses',courses)

      this.setState({ categories: categories, courses: courses });
    });
  }

  // shouldComponentUpdate()
  // {
  //   // if (this.props.match.params.id !== this.currentid) {
  //     return true;
  //   // }
  // }

  // componentWillReceiveProps(nextProps, nextState)
  componentDidMount() // componentDidUpdate()
  {
    console.log('cdm');
    this.fetchCategories();
  }

  render() {
    console.log(this.props);
    if (this.state.catclicked) {
      let cc = this.state.catclicked;
      this.setState({ catclicked: null });
      return <Redirect to={'/CategoryList/' + cc} push="true" />;
    }
    console.log('render', this.props.match.params.id, this.currentid);

    return (
      <>
      <CourseSidebar/>
        <h1 style={{ marginLeft:'650px' }}> Course Categories</h1>
        
        <div className=' container' style={{ marginLeft: '250px' }}>
          <div className='row'>
          
            {this.state.categories.map((c,i) => {
              return (
                
                <div className='col-4' key={i}>
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
                      <button
                        className='btn btn-success'
                        onClick={this.onClickCat.bind(this, c._id)}
                      >
                        {' '}
                        View{' '}
                      </button>
                      <Link
                        to={'/course/' + c._id + '/' + c.name}
                        className='btn btn-success'
                      >
                        Add Sub Course
                      </Link>
                      <button
                        className='btn btn-danger'
                        onClick={this.onDeleteCategory.bind(this, c._id)}
                      >
                        <i className='fas fa-trash' />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <h1 style={{ marginLeft:'250px' }}>Courses</h1>
        {this.state.courses.map((c,i) => {
          return (
            <React.Fragment key={i}>
              <div  style={{ marginLeft:'250px' }} className='course-card' >
                <Link to={'/CourseDetails/' + c._id + '/' + c.CourseName}>
                  {c.CourseName}
                </Link>
              </div>
            </React.Fragment>
          );
        })}

        <div  className='form-container' style={{ width: '60%' ,marginLeft:'250px' }}>
          <h2 style={{ marginLeft:'250px' }}>Add New Category</h2>
          <table className="table container">
          <tbody>
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
            </tbody>
            </table>
          
          <button className='btn btn-success' onClick={this.onAddCategory}>Add</button>
          
          
          
          
        </div>
      </>
    );
  }
}

export default CategoryList;
