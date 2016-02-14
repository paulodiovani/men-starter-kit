Tag = require('../../models/tag')

describe 'Tag', ->
  describe '#constructor', ->
    it 'creates a Tag instance', ->
      tag = new Tag()
      expect(tag).to.be.instanceof Tag

  describe '#name', ->
    it 'has a name', ->
      tag = new Tag(name: 'foo-bar')
      expect(tag.name).to.be.eql 'foo-bar'
