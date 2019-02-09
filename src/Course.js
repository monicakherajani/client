import React,{Component} from 'react';
class Course extends Component {
    state = {
CourseName:'',
Description:'',
Subtopics:''
    };
    onChangeCourseName = event => {
        this.setState({CourseName: event.target.value});
    };

    onChangeDescription = event => {
        this.setState({Description: event.target.value});
    };
    onChangeSubtopics = event => {
        this.setState({Subtopics: event.target.value});
    };

    render() {

    
        return(
            <div>
        <table>
          <tr>
            <td>CourseName</td>
            <td>
              <input onChange={this.onChangeCourseName} />
            </td>
          </tr>
          <tr>
            <td>Description</td>
            <td>
              <input onChange={this.onChangeDescription} />
            </td>
          </tr>
          <tr>
            <td>Subtopics</td>
            <td>
              <input type='Subtopics' onChange={this.onChangeSubtopics} />
            </td>
          </tr>
          <tr>
            <td colspan='2'>
              <button onClick>Create Course</button>{' '}
            </td>
          </tr>
        </table>
        </div>
        )
    }
    
}


export default Course;