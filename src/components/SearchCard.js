import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SearchCard = () => {
    return (
        <Card style={{ width: '100%', height: '200px' }}>
            <Card.Body>
                <Form style={{ display: "flex"}} action="/search" method="GET">
                    <Form.Control type="search" name="search" placeholder="Search whatever you like 🦄 (porn maybe?)"/>
                    <Button variant="dark" style = {{ height: "35px", marginLeft: "5px" }} type="submit">Search</Button>
                </Form>
                <Card.Text style = {{ marginLeft: 'auto', marginRight: 'auto', marginTop: '100px', textAlign: 'center'}}>
                    Probably a clone of torrentz.eu lol!
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default SearchCard;