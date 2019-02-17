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
import BubbleChart from '@weknow/react-bubble-chart-d3';


export default class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      listOfQuestions: [
        { label: 'What is a linked list?', value: 34 },
        { label: 'Why should we use a stack again?', value: 1 },
        { label: 'How any bits are in a int again?', value: 1 },
        { label: 'How to calculate derivative?', value: 23 },
        { label: 'Can you go over question 1?', value: 25 },
        { label: 'What is the runetime for #2?', value: 26 },
        { label: 'Why didnt we use a deque? ', value: 26 }]
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
    let listOfQuestions = this.state.listOfQuestions;
    listOfQuestions[index].value = listOfQuestions[index].value + 1
    this.setState({
      listOfQuestions: listOfQuestions
    })
  }


  bubbleClick = (label) =>{
    let listOfQuestions = this.state.listOfQuestions;
    for (var i = 0; i < listOfQuestions.length ; i++){
        if (listOfQuestions[i].label == label){
            listOfQuestions[i].value = listOfQuestions[i].value + 1
            this.setState({
            listOfQuestions: listOfQuestions
            })  
        }

    }
  }

  decrementVote = (index) => {
    let listOfQuestions = this.state.listOfQuestions;
    listOfQuestions[index].value = listOfQuestions[index].value - 1
    this.setState({
      listOfQuestions: listOfQuestions
    })
  }
  
  render() {
    const { username } = this.props;
    const rows = this.state.listOfQuestions;
    return (
      <div>
          <div className="WordCloud">
        <h1 className="WordCloud">Questions</h1>
        <br />
        <BubbleChart
          width={800}
          height={800}
          fontFamily="Arial"
          bubbleClickFun={this.bubbleClick}
          data={this.state.listOfQuestions}
        />
      </div>
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
              {row.label}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
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

