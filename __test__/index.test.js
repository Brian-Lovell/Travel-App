const app = require('../src/server/index.js')
const supertest = require('supertest')
const request = supertest(app)

it('Gets to the test endpoint', async done => {
    const res = await request.get('/test')

    expect(response.status).toBe(200)
    expect(response.body.message).toBe('pass!')

    done()
})