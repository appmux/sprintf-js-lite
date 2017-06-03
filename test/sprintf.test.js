/* global describe, it */

'use strict'

const assert = require('assert')
const sprintf = require('../lib/sprintf.js').default

describe('sprintf-lite', function () {
    it('should perform basic anonymous keys replacement', function () {
        assert.equal('Two + 3 = Five', sprintf('%s + %d = %s', 'Two', 3, 'Five'))
        assert.equal('/my/awesome/api/endpoint/number/1', sprintf('/my/%s/api/%s/number/%d', 'awesome', 'endpoint', 1))
    })

    it('should perform basic named keys replacement', function () {
        assert.equal('Dear John Doe, ...', sprintf('Dear {firstName} {lastName}, ...', {firstName: 'John', lastName: 'Doe'}))
        assert.equal('/users/654321/orders/987654321', sprintf('/users/{userId}/orders/{orderId}', {userId: 654321, orderId: 987654321}))
        assert.equal('/users/654321/orders/987654321', sprintf('/users/:userId/orders/:orderId', {userId: 654321, orderId: 987654321}))
    })

    it('should perform argument swapping and reuse', function () {
        assert.equal(
            'That place was full of gals and only a few dudes, few dudes had a ball at that place.',
            sprintf('That {location} was full of gals and only a {number} dudes, {number} dudes had a ball at that {location}.', {location: 'place', number: 'few'})
        )
    })
})
