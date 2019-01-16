'use strict';

const Author = require('../model').Author;

module.exports = {
  toModel(authorDto) {
    return {
        id: authorDto.id,
        firstName: authorDto.firstName,
        lastName: authorDto.lastName,
      }
  },

  toDto(author) {
    return {
        id: author.id,
        firstName: author.firstName,
        lastName: author.lastName,
      }
  }
};
