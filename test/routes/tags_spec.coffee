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
    it 'returns all tags', ->
      request(app)
        .get('/tags')
        .expect 'Content-Type', /html/
        .expect new RegExp(@tag1.name)
        .expect new RegExp(@tag2.name)
