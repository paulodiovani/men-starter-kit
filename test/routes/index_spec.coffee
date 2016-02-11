describe 'index route', ->
  it 'is ok', ->
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
