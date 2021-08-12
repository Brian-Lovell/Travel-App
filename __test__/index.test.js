import 'regenerator-runtime/runtime'
const app = require('../src/server/index.js')
const request = require('supertest')


test('Gets to the test endpoint', () => {
    return request(app)
        .get('/test')
        .then(res => {
            expect(res.statusCode).toBe(200)
        })
})