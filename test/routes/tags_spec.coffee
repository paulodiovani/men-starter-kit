Promise = require('bluebird')
Tag     = require('../../models/tag')

describe 'tags route', ->
  before 'clear colletion', (done) ->
    Tag.remove {}
      .then -> done()
      .catch done

  before 'creates some tags', (done) ->
    @tag1 = new Tag(name: 'men')
    @tag2 = new Tag(name: 'starter-kit')

    Promise.all([
      @tag1.save()
      @tag2.save()
    ])
      .then -> done()
      .catch done

  describe 'GET /tags', ->
    it 'list all tags', ->
      request(app)
        .get('/tags')
        .expect 'Content-Type', /html/
        .expect new RegExp(@tag1.name)
        .expect new RegExp(@tag2.name)

  describe 'GET /tags/:id', ->
    it 'show a tag by its id', ->
      request(app)
        .get('/tags/' + @tag2._id)
        .expect 'Content-Type', /html/
        .expect new RegExp(@tag2._id)
        .expect new RegExp(@tag2.name)

    it 'returns 404 error when tag not found', ->
      request(app)
        .get('/tags/56bfdb7bdfcee7c97c1f39bc')
        .expect 'Content-Type', /html/
        .expect(404)

    it 'returns 500 for invalid requests', ->
      request(app)
        .get('/tags/999')
        .expect 'Content-Type', /html/
        .expect(500)
