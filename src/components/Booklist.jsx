import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function Booklist() {
  const books = [
    {
      img:require("../images/book.jpg"),
      title: "React",
      author: "Ritik Patel",
      genre: 1,
    },
    {
      img:require("../images/book.jpg"),
      title: "javascript",
      author: "Ankit Patel",
      genre: 1,
    },
    {
      img:require("../images/book.jpg"),
      title: "Java",
      author: "Harry Shah",
      genre: 2,
    },
    {
      img:require("../images/book.jpg"),
      title: "PHP",
      author: "Anjali Parmar",
      genre: 3,
    },
    {
      img:require("../images/book.jpg"),
      title: "HTML",
      author: "Atul Prakashan",
      genre: 2,
    },
    {
      img:require("../images/book.jpg"),
      title: "HTML",
      author: "Atul Prakashan",
      genre: 2,
    }

  ]
  return (
  
    <Container>
                <h2 style={{textAlign:'center' , margin:"20px 10px"}}>Book Publication List</h2>
    <Row>
    {
      books?.map((elem)=>{
        return(
          <>
          <Col xs={12} md={4} style={{marginBottom:"20px"}}>
                <Card style={{ width: '18rem' }} >
              <Card.Img variant="top" src={elem.img} />
              <Card.Body style={{textAlign:"center"}}>
                <Card.Title>{elem.title}</Card.Title>
                <Card.Text >
                  {elem.author}
                  <br />
                  {elem.genre}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          </>
        )
      })
    }
    </Row>
    </Container>
    
    
    
  )
}

