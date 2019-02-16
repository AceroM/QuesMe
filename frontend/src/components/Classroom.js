import React, { Component } from 'react'
import QuestionForm from './QuestionForm';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import LikeButton from "./LikeButton";

export default class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      listOfQuestions: [{text: "Can I eat apples?", votes:0}]
    }; 
  }


  addQuestion = (question) => {
    let listOfQuestions = this.state.listOfQuestions;
    listOfQuestions.push(question);
    this.setState({
      listOfQuestions: listOfQuestions
    })
  }

  incrementVote = (index) => {
    console.log(index);
    let listOfQuestions = this.state.listOfQuestions;
    listOfQuestions[index].votes = listOfQuestions[index].votes + 1
    this.setState({
      listOfQuestions: listOfQuestions
    })
  }

  decrementVote = (index) => {
    console.log(index);
    let listOfQuestions = this.state.listOfQuestions;
    listOfQuestions[index].votes = listOfQuestions[index].votes - 1
    this.setState({
      listOfQuestions: listOfQuestions
    })
  }
  
  render() {
    const { username } = this.props;
    const rows = this.state.listOfQuestions;
    return (
      <div>
      <Paper className="Question-Paper">
      <Table className="Question-Table">
        <TableHead>
          <TableRow>
            <TableCell>Question</TableCell>
            <TableCell align="right">Votes</TableCell>
            <TableCell align="right">Vote</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
              {row.text}
              </TableCell>
              <TableCell align="right">{row.votes}</TableCell>
              <TableCell align="right"><Button size="small" color="primary" >
            <LikeButton link="https://image.flaticon.com/icons/png/128/126/126471.png" decrementVote = {this.decrementVote} incrementVote = {this.incrementVote} my_id = {index} my_index = {this.props.my_key} likes = {this.props.likes} style={{display: 'flex'}}/>
            <br />
          </Button></TableCell>

            </TableRow>
                      ))}
        </TableBody>
      </Table>
    </Paper>
        <QuestionForm
        addQuestion= {this.addQuestion}/>
      </div>
    )
  }
}

