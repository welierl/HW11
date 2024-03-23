const app = require("../app");
const request = require('supertest');

describe('Todo Unit Test', () => {
    test('Add Todo Successfully', (done) => {
        const newTodo = {
            title: "Todo 4"
        }

        request(app)
            .post('/api/v1/todo/add')
            .send(newTodo)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.body.message).toBe('Todo Created!')
                done()
            })
            .catch(done)
    })

    test('Get All Todo List', (done) => {
        request(app)
            .get('/api/v1/todo')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.data.title).toBe("Todo 1")
                done()
            })
            .catch(done)
    }) 

    
})