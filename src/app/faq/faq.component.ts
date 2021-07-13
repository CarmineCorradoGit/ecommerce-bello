import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  name: string;
  email: string;
  msg: string;

  currentFilter: number = 0;

  faqs = [
    {
      question: 'question 1',
      answer: 'answer 1',
      category: 0,
      id: '1'
    },
    {
      question: 'question 2',
      answer: 'answer 2',
      category: 0,
      id: '2'
    },
    {
      question: 'question 3',
      answer: 'answer 3',
      category: 0,
      id: '3'
    },
    {
      question: 'question 4',
      answer: 'answer 4',
      category: 1,
      id: '4'
    },
    {
      question: 'question 5',
      answer: 'answer 5',
      category: 2,
      id: '5'
    },
    {
      question: 'question 6',
      answer: 'answer 6',
      category: 1,
       id: '6'
    },
    {
      question: 'question 7',
      answer: 'answer 7',
      category: 0,
      id: '7'
    },
    {
      question: 'question 8',
      answer: 'answer 8',
      category: 1,
      id: '8'
    },
    {
      question: 'question 9',
      answer: 'answer 9',
      category: 2,
      id: '9'
    },
    {
      question: 'question 10',
      answer: 'answer 10',
      category: 0,
      id: '10'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  filterFaq(n: number) {
    this.currentFilter = n
  }

  submitForm() {
    const allInfo = `Message from: ${this.name} - E-Mail address: ${this.email}.\n\n${this.msg}`;
    alert(allInfo); 
  }

}
